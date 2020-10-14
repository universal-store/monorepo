/** @format */

import React, { useEffect, useState } from 'react';
import { Linking } from 'react-native';

// Libraries
import { Camera } from 'expo-camera';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { BarCodeScanningResult } from 'expo-camera/build/Camera.types';

// TODO: Remove (testing only)
import DeviceInfo from 'react-native-device-info';

// Components
import {
  CameraSettingsButton,
  CameraSettingsText,
  CameraView,
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
import { BackArrowIcon, FlashIconOff, FlashIconOn } from '&icons';

// Navigation
import { ScanningStackParams } from '&navigation';
import { useIsFocused } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';

type ScanningScreenProps = StackScreenProps<ScanningStackParams, 'ScanningScreen'>;

export const ScanningScreen = ({ navigation }: ScanningScreenProps) => {
  let cameraRef: Camera | null = null;
  const isFocused = useIsFocused();

  // TODO: remove in production
  const [isSim, setIsSim] = useState<boolean>(false);

  // Camera State
  const [flash, setFlash] = useState<boolean>(false);
  const [scanned, setScanned] = useState<boolean>(false);
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);

  const [barcodeId, setBarcodeId] = useState<string>('-1');

  useEffect(() => {
    void (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');

      // TODO: Remove from production
      void DeviceInfo.isEmulator().then(res => setIsSim(res));
    })();
  }, []);

  const resetScanner = () => {
    if (scanned && cameraRef) {
      setScanned(false);
      cameraRef.resumePreview();
    }
  };

  const handleBarCodeScanned = ({ data }: BarCodeScanningResult) => {
    if (!scanned && cameraRef) {
      setFlash(false);
      setScanned(true);
      cameraRef.pausePreview();

      setBarcodeId(data);
    }
  };

  if (hasPermission === null) {
    return <FullscreenBlack />;
  }

  if (!hasPermission) {
    return (
      <NoCameraScreen>
        <ScannerHeaderRow>
          <ScannerHeaderButton onPress={() => console.log('go back')}>
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
            <ScannerHeaderButton onPress={() => console.log('go back')}>
              <BackArrowIcon />
            </ScannerHeaderButton>

            <ScannerHeaderText>Scan Barcode</ScannerHeaderText>

            <ScannerHeaderButton
              onPress={() => {
                if (!scanned) setFlash(!flash);
              }}
            >
              {flash ? <FlashIconOn /> : <FlashIconOff />}
            </ScannerHeaderButton>
          </ScannerHeaderRow>

          <CameraView
            ref={ref => (cameraRef = ref)}
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
            <ScannerOverlay scanned={scanned} />
          </CameraView>
        </>
      )}

      <ItemPreview
        shown={scanned}
        barcodeId={barcodeId}
        onPress={() => {
          resetScanner();
          navigation.navigate('ItemDetail', { barcodeId });
        }}
      />

      {isSim && !scanned && (
        <TestButtons>
          {/* <TestButton onPress={() => navigation.navigate('ItemDetail', { barcodeId })}> */}
          <TestButton onPress={() => navigation.navigate('UserProfile')}>
            <TestButtonText>Go To ItemDetail (Emulator Only)</TestButtonText>
          </TestButton>
        </TestButtons>
      )}
    </FullscreenBlack>
  );
};
