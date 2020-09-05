/** @format */

import React from 'react';

// Iconography
import {
  BackArrowIcon,
  BarcodeBottomLeftIcon,
  BarcodeBottomRightIcon,
  BarcodeTopLeftIcon,
  BarcodeTopRightIcon,
  FlashIcon,
} from '&icons';

// Styled Components
import {
  BottomLayer,
  BottomLeftBarcode,
  BottomRightBarcode,
  CenterLayer,
  Cutout,
  ScannedText,
  ScannerHeaderText,
  ScannerHeaderRow,
  ScannerOverlayContainer,
  SideLayer,
  TopLayer,
  TopLeftBarcode,
  TopRightBarcode,
  ScannerHeaderButton,
} from './Styled';

// Components
import { ItemPreview } from './ItemPreview';

// Interfaces
import { StoreItem } from '&graphql';

interface ScannerOverlayProps {
  scanned: boolean;
  itemData: StoreItem;
  onPress: () => void;
}

export const ScannerOverlay = ({ scanned, itemData, onPress }: ScannerOverlayProps) => {
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

      <ItemPreview shown={scanned} itemData={itemData} onPress={onPress} />
    </ScannerOverlayContainer>
  );
};
