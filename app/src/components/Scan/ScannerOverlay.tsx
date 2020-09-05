/** @format */

import React from 'react';

// Iconography
import { BarcodeBottomLeftIcon, BarcodeBottomRightIcon, BarcodeTopLeftIcon, BarcodeTopRightIcon } from '&icons';

// Styled Components
import {
  BottomLayer,
  BottomLeftBarcode,
  BottomRightBarcode,
  CenterLayer,
  Cutout,
  ScannedText,
  ScannerOverlayContainer,
  SideLayer,
  TopLayer,
  TopLeftBarcode,
  TopRightBarcode,
} from './Styled';

interface ScannerOverlayProps {
  scanned: boolean;
}

export const ScannerOverlay = ({ scanned }: ScannerOverlayProps) => {
  return (
    <ScannerOverlayContainer>
      <TopLayer />
      <CenterLayer>
        <SideLayer />
        <Cutout scanned={scanned}>
          <TopLeftBarcode>
            <BarcodeTopLeftIcon />
          </TopLeftBarcode>
          <TopRightBarcode>
            <BarcodeTopRightIcon />
          </TopRightBarcode>
          <BottomLeftBarcode>
            <BarcodeBottomLeftIcon />
          </BottomLeftBarcode>
          <BottomRightBarcode>
            <BarcodeBottomRightIcon />
          </BottomRightBarcode>
        </Cutout>
        <SideLayer />
      </CenterLayer>
      <BottomLayer>{!scanned && <ScannedText>Scanning for Barcode...</ScannedText>}</BottomLayer>
    </ScannerOverlayContainer>
  );
};
