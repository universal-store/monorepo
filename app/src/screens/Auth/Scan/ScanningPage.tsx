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
import { BlackFullscreen, CameraView, ItemPreview, ScannerOverlay, TestButton, TestButtonText } from '&components';

type ScanningPageProps = StackScreenProps<AuthStackParams, 'ScanPage'>;

export const ScanningPage = ({ navigation }: ScanningPageProps) => {
  let cameraRef: Camera | null = null;
  const isFocused = useIsFocused();

  const [scanned, setScanned] = useState(false);
  const [barcodeId, setBarcodeId] = useState<string>('-1');
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);

  useEffect(() => {
    void (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ data }: BarCodeScanningResult) => {
    setBarcodeId(data);
    setScanned(true);
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
        <CameraView
          ref={ref => (cameraRef = ref)}
          type={Camera.Constants.Type.back}
          onBarCodeScanned={barCodeEvent => {
            if (!scanned && cameraRef) {
              cameraRef.pausePreview();
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
      )}

      <ItemPreview
        shown={scanned}
        barcodeId={barcodeId}
        onPress={() => navigation.navigate('ItemDetail', { barcodeId })}
      />

      {scanned ? (
        <TestButton
          onPress={() => {
            if (cameraRef) {
              setScanned(false);
              cameraRef.resumePreview();
            }
          }}
        >
          <TestButtonText>Reset (Testing Only)</TestButtonText>
        </TestButton>
      ) : (
        <TestButton onPress={() => navigation.navigate('ItemDetail', { barcodeId })}>
          <TestButtonText>Go To ItemDetail (Testing Only)</TestButtonText>
        </TestButton>
      )}
    </BlackFullscreen>
  );
};
