/** @format */

import React, { useEffect, useRef, useState } from 'react';
import { Linking } from 'react-native';

// Libraries
import { Camera } from 'expo-camera';
import { BarCodeScanner } from 'expo-barcode-scanner';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import { BarCodeScanningResult } from 'expo-camera/build/Camera.types';

// TODO: Remove (testing only)
import DeviceInfo from 'react-native-device-info';

// Components
import {
  BadgeContainer,
  BadgeText,
  CameraSettingsButton,
  CameraSettingsText,
  CameraView,
  CartIconContainer,
  FullscreenBlack,
  ItemPreview,
  NoCameraScreen,
  NoCameraText,
  ScannerHeaderButton,
  ScannerHeaderRow,
  ScannerHeaderText,
  ScannerOverlay,
  TestButton,
  TestButtons,
  TestButtonText,
} from '&components';

// Iconography
import { BackArrowIcon, CartIconWhite } from '&icons';

// Navigation
import { AuthStackParams } from '&navigation';
import { useIsFocused } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';

// GraphQL
import { useGetUserCartItemsQuery } from '&graphql';

// Utils
import { hapticOptions } from '&utils';

type ScanningScreenProps = StackScreenProps<AuthStackParams, 'ScanningScreen'>;

export const ScanningScreen = ({ navigation }: ScanningScreenProps) => {
  const cameraRef = useRef<Camera>(null);
  const isFocused = useIsFocused();

  // TODO: remove in production
  const [isSim, setIsSim] = useState<boolean>(false);

  // Camera State
  const [flash, setFlash] = useState<boolean>(false);
  const [scanned, setScanned] = useState<boolean>(false);
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);

  const [barcodeId, setBarcodeId] = useState<string>('-1');

  const { data: userCartItems } = useGetUserCartItemsQuery();

  useEffect(() => {
    void (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');

      // TODO: Remove from production
      void DeviceInfo.isEmulator().then(res => setIsSim(res));
    })();
  }, []);

  const resetScanner = () => {
    if (scanned && cameraRef.current) {
      setScanned(false);
      cameraRef.current.resumePreview();
      setBarcodeId('-1');
    }
  };

  const handleBarCodeScanned = ({ data }: BarCodeScanningResult) => {
    if (!scanned && cameraRef.current) {
      setFlash(false);
      setScanned(true);
      cameraRef.current.pausePreview();

      setBarcodeId(data);
      ReactNativeHapticFeedback.trigger('impactMedium', hapticOptions);
    }
  };

  if (hasPermission === null) {
    return <FullscreenBlack />;
  }

  if (!hasPermission) {
    return (
      <NoCameraScreen>
        <ScannerHeaderRow>
          <ScannerHeaderButton
            onPress={() => {
              ReactNativeHapticFeedback.trigger('impactMedium', hapticOptions);
              navigation.goBack();
            }}
          >
            <BackArrowIcon />
          </ScannerHeaderButton>
        </ScannerHeaderRow>

        <NoCameraText>Make sure to grant Universal Store permissions to use your camera!</NoCameraText>

        <CameraSettingsButton onPress={() => Linking.openSettings()}>
          <CameraSettingsText>Go to Settings</CameraSettingsText>
        </CameraSettingsButton>
      </NoCameraScreen>
    );
  }

  return (
    <FullscreenBlack>
      {isFocused && (
        <>
          <ScannerHeaderRow>
            <ScannerHeaderButton
              onPress={() => {
                ReactNativeHapticFeedback.trigger('impactMedium', hapticOptions);
                navigation.goBack();
              }}
            >
              <BackArrowIcon />
            </ScannerHeaderButton>

            <ScannerHeaderText>Scan Barcode</ScannerHeaderText>

            <ScannerHeaderButton
              onPress={() => {
                ReactNativeHapticFeedback.trigger('impactMedium', hapticOptions);
                navigation.navigate('TabNavigation', { screen: 'CartScreen' });
              }}
            >
              <CartIconContainer>
                <CartIconWhite />
                {userCartItems && userCartItems.UserCartItem.length > 0 && (
                  <BadgeContainer>
                    <BadgeText>{userCartItems.UserCartItem.length}</BadgeText>
                  </BadgeContainer>
                )}
              </CartIconContainer>
            </ScannerHeaderButton>
          </ScannerHeaderRow>

          <CameraView
            ref={cameraRef}
            type={Camera.Constants.Type.back}
            flashMode={flash ? 'torch' : 'off'}
            onBarCodeScanned={handleBarCodeScanned}
            barCodeScannerSettings={{
              barCodeTypes: [
                BarCodeScanner.Constants.BarCodeType.ean8,
                BarCodeScanner.Constants.BarCodeType.ean13,
                BarCodeScanner.Constants.BarCodeType.upc_e,
              ],
            }}
          >
            <ScannerOverlay
              flash={flash}
              scanned={scanned}
              toggleFlash={() => {
                ReactNativeHapticFeedback.trigger('impactMedium', hapticOptions);
                setFlash(!flash);
              }}
            />
          </CameraView>
        </>
      )}

      <ItemPreview
        shown={scanned}
        barcodeId={barcodeId}
        badScan={resetScanner}
        onPress={() => {
          resetScanner();
          ReactNativeHapticFeedback.trigger('selection', hapticOptions);
          navigation.navigate('ItemDetail', { barcodeId, scanned: true });
        }}
        toggleScanned={() => {
          resetScanner();
          ReactNativeHapticFeedback.trigger('selection', hapticOptions);
        }}
      />

      {isSim && !scanned && (
        <TestButtons>
          <TestButton onPress={() => setScanned(true)}>
            <TestButtonText>Mock Scan (Emulator Only)</TestButtonText>
          </TestButton>
        </TestButtons>
      )}
    </FullscreenBlack>
  );
};
