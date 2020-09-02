/** @format */

import React, { useEffect, useState } from 'react';
import { Alert, Button, Text } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

// Dependencies
import { Camera } from 'expo-camera';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { BarCodeScanningResult } from 'expo-camera/build/Camera.types';

// Components
import { CameraView, FullScreen, ItemPreview, ScannerOverlay } from '&components';

export const ScanningPage = () => {
  let cameraRef: Camera | null;
  const isFocused = useIsFocused();

  const [scanned, setScanned] = useState(false);
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);

  useEffect(() => {
    void (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }: BarCodeScanningResult) => {
    setScanned(true);
    Alert.alert(`Bar code with type ${type} and code ${data} has been scanned!`);
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
        <CameraView
          ref={ref => (cameraRef = ref)}
          type={Camera.Constants.Type.back}
          onBarCodeScanned={barCodeEvent => {
            if (!scanned && cameraRef) {
              handleBarCodeScanned(barCodeEvent);
              cameraRef.pausePreview();
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

      {scanned && (
        <Button
          title={'Tap to Reset'}
          onPress={() => {
            setScanned(false);
            if (cameraRef) cameraRef.resumePreview();
          }}
        />
      )}
    </FullScreen>
  );
};
