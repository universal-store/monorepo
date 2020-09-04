/** @format */

import React, { useEffect, useState } from 'react';
import { Button, Text } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

// Dependencies
import { Camera } from 'expo-camera';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { BarCodeScanningResult } from 'expo-camera/build/Camera.types';

// Components
import { CameraView, FullScreen, ScannerOverlay } from '&components';

// Icons
import { BackArrowIcon } from '&icons';

const BARCODE_DATA_API_URL =
  'http://www.searchupc.com/handlers/upcsearch.ashx?request_type=3&access_token=09C70CF1-E284-44E3-A0B9-A6129573115C&upc=';

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

  const handleBarCodeScanned = ({ data }: BarCodeScanningResult) => {
    setScanned(true);

    fetch(BARCODE_DATA_API_URL + data)
      .then(response => response.json())
      .then(data => {
        if (data) console.log(`${data['0'].productname} with price $${data['0'].price} has been scanned!`);
      })
      .catch(error => console.log(error));
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
