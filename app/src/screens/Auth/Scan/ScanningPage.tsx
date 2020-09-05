/** @format */

import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';

// Navigation
import { AuthStackParams } from '&navigation';
import { useIsFocused } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';

// Libraries
import { Camera } from 'expo-camera';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { BarCodeScanningResult } from 'expo-camera/build/Camera.types';

// Components
import {
  BlackFullscreen,
  CameraView,
  ItemPreview,
  ScannerHeaderButton,
  ScannerHeaderRow,
  ScannerHeaderText,
  ScannerOverlay,
  TestButton,
  TestButtonText,
} from '&components';

// Mock Data
// TODO: Replace with database data
import { nullItem } from '&data';
import { BackArrowIcon, FlashIconOff, FlashIconOn } from '&icons';

type ScanningPageProps = StackScreenProps<AuthStackParams, 'ScanPage'>;

export const ScanningPage = ({ navigation }: ScanningPageProps) => {
  let cameraRef: Camera | null = null;
  const isFocused = useIsFocused();

  const [flash, setFlash] = useState<boolean>(false);
  const [scanned, setScanned] = useState<boolean>(false);
  const [barcodeId, setBarcodeId] = useState<string>(nullItem.id);
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);

  useEffect(() => {
    void (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ data }: BarCodeScanningResult) => {
    setFlash(false);
    setScanned(true);
    setBarcodeId(data);
    if (cameraRef) cameraRef.pausePreview();
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (!hasPermission) {
    return <Text>No access to camera</Text>;
  }
  return (
    <BlackFullscreen>
      {isFocused && (
        <>
          <ScannerHeaderRow>
            <ScannerHeaderButton
              onPress={() => {
                if (scanned && cameraRef) {
                  setScanned(false);
                  cameraRef.resumePreview();
                }
              }}
            >
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
            onBarCodeScanned={barCodeEvent => {
              if (!scanned && cameraRef) {
                handleBarCodeScanned(barCodeEvent);
              }
            }}
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
          setScanned(false);
          if (cameraRef) cameraRef.resumePreview();
          navigation.navigate('ItemDetail', { barcodeId });
        }}
      />
    </BlackFullscreen>
  );
};

// {scanned ? (
//   <TestButton
//     onPress={() => {
//       if (cameraRef) {
//         setScanned(false);
//         cameraRef.resumePreview();
//       }
//     }}
//   >
//     <TestButtonText>Reset (Testing Only)</TestButtonText>
//   </TestButton>
// ) : (
//   <TestButton onPress={() => navigation.navigate('ItemDetail', { barcodeId })}>
//     <TestButtonText>Go To ItemDetail (Testing Only)</TestButtonText>
//   </TestButton>
// )}
