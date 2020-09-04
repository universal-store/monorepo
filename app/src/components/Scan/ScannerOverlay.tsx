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

// Components
import { ItemPreview } from './ItemPreview';

//MockData
import { MockItem } from '&data';

interface ScannerOverlayProps {
  scanned: boolean;
  scannedItem: MockItem;
}

export const ScannerOverlay = ({ scanned, scannedItem }: ScannerOverlayProps) => (
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

    <ItemPreview shown={scanned} shortName={scannedItem.shortName} price={scannedItem.price} />
  </ScannerOverlayContainer>
);
