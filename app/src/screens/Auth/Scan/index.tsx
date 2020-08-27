/** @format */

import React, { useEffect, useState } from 'react';
import { Alert, Button, Text } from 'react-native';

// Dependencies
import { BarCodeEvent, BarCodeScanner } from 'expo-barcode-scanner';

// Components
import { FullScreen, ScannerOverlay } from '&components';

// Styling
import styled from 'styled-components/native';

const CameraScreen = styled(BarCodeScanner)`
  flex: 1;
`;

export const ScanPage = () => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    void (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }: BarCodeEvent) => {
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
      <CameraScreen
        type={BarCodeScanner.Constants.Type.back}
        barCodeTypes={[BarCodeScanner.Constants.BarCodeType.ean13]}
        onBarCodeScanned={barCodeEvent => {
          if (!scanned) handleBarCodeScanned(barCodeEvent);
        }}
      >
        <ScannerOverlay scanned={scanned} />
      </CameraScreen>
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
    </FullScreen>
  );
};
