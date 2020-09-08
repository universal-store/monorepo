/** @format */

import React, { useEffect, useState } from 'react';
import { Linking } from 'react-native';

// Navigation
import { AuthStackParams } from '&navigation';
import { useIsFocused } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';

// Libraries
import { Camera } from 'expo-camera';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { BarCodeScanningResult } from 'expo-camera/build/Camera.types';

// TODO: Remove (testing only)
import DeviceInfo from 'react-native-device-info';

// Components
import {
  BlackFullscreen,
  CameraSettingsButton,
  CameraSettingsText,
  CameraView,
  ItemPreview,
  NoCameraScreen,
  NoCameraText,
  ScannerHeaderButton,
  ScannerHeaderRow,
  ScannerHeaderText,
  ScannerOverlay,
  TestButton,
  TestButtonText,
} from '&components';

import { BackArrowIcon, FlashIconOff, FlashIconOn } from '&icons';

// Mock Data
// TODO: Replace with database data
import { nullItem } from '&data';

type ScanningPageProps = StackScreenProps<AuthStackParams, 'ScanPage'>;

export const ScanningPage = ({ navigation }: ScanningPageProps) => {
  let cameraRef: Camera | null = null;
  const isFocused = useIsFocused();

  // TODO: remove in production
  const [isSim, setIsSim] = useState<boolean>(false);

  // Camera State
  const [flash, setFlash] = useState<boolean>(false);
  const [scanned, setScanned] = useState<boolean>(false);
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);

  const [barcodeId, setBarcodeId] = useState<string>(nullItem.id);

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
      console.log(data);

      setBarcodeId(data);
    }
  };

  if (hasPermission === null) {
    return <BlackFullscreen />;
  }

  if (!hasPermission) {
    return (
      <NoCameraScreen>
        <ScannerHeaderRow>
          <ScannerHeaderButton>
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
    <BlackFullscreen>
      {isFocused && (
        <>
          <ScannerHeaderRow>
            <ScannerHeaderButton onPress={resetScanner}>
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
        <TestButton onPress={() => navigation.navigate('ItemDetail', { barcodeId })}>
          <TestButtonText>Go To ItemDetail (Emulator Only)</TestButtonText>
        </TestButton>
      )}
    </BlackFullscreen>
  );
};
