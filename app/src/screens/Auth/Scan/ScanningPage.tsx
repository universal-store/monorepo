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
  CameraView,
  FullScreen,
  ScannerHeaderButton,
  ScannerHeaderRow,
  ScannerHeaderText,
  ScannerOverlay,
  TestButton,
  TestButtonText,
} from '&components';

// Interfaces
import { StoreItem } from '&graphql';

// Mock Data
// TODO: Replace with database data
import { mockBarcodeData, nullItem } from '&data';
import { BackArrowIcon, FlashIconOff, FlashIconOn } from '&icons';

type ScanningPageProps = StackScreenProps<AuthStackParams, 'ScanPage'>;

export const ScanningPage = ({ navigation }: ScanningPageProps) => {
  let cameraRef: Camera | null;
  const isFocused = useIsFocused();

  const [flash, setFlash] = useState<boolean>(false);
  const [itemData, setItemData] = useState<StoreItem>(nullItem);
  const [scanned, setScanned] = useState<boolean>(false);
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
    if (cameraRef) cameraRef.pausePreview();

    console.log('Scanned Barcode:', data);

    // TODO: Add backend query
    setItemData(mockBarcodeData[Math.floor(Math.random() * mockBarcodeData.length)]);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (!hasPermission) {
    return <Text>No access to camera</Text>;
  }
  return (
    <FullScreen>
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
            <ScannerOverlay
              scanned={scanned}
              itemData={itemData}
              onPress={() => navigation.navigate('ItemDetail', { itemData })}
            />
          </CameraView>
        </>
      )}

      {!scanned && (
        <TestButton
          onPress={() => {
            setFlash(false);
            navigation.navigate('ItemDetail', { itemData });
          }}
        >
          <TestButtonText>Go To ItemDetail (Testing Only)</TestButtonText>
        </TestButton>
      )}
    </FullScreen>
  );
};
