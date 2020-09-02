/** @format */

import React from 'react';
import { BarcodeBottomLeftIcon, BarcodeBottomRightIcon, BarcodeTopLeftIcon, BarcodeTopRightIcon } from '&icons';

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

// Styles

interface ScannerOverlayProps {
  scanned: boolean;
}

export const ScannerOverlay = ({ scanned }: ScannerOverlayProps) => (
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
