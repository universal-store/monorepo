/** @format */

import React from 'react';

// Iconography
import {
  BarcodeBottomLeftIcon,
  BarcodeBottomRightIcon,
  BarcodeTopLeftIcon,
  BarcodeTopRightIcon,
  FlashIconOff,
  FlashIconOn,
} from '&icons';

// Styled Components
import {
  BottomLayer,
  BottomLeftBarcode,
  BottomRightBarcode,
  CenterLayer,
  Cutout,
  FlashIconContainer,
  ScannedText,
  ScannerOverlayContainer,
  SideLayer,
  TopLayer,
  TopLeftBarcode,
  TopRightBarcode,
} from './Styled';

interface ScannerOverlayProps {
  flash: boolean;
  scanned: boolean;
  toggleFlash: () => void;
}

export const ScannerOverlay = ({ flash, scanned, toggleFlash }: ScannerOverlayProps) => {
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
      <BottomLayer>
        {!scanned && (
          <>
            <ScannedText>Scanning for Barcode...</ScannedText>
            <FlashIconContainer onPress={toggleFlash}>{flash ? <FlashIconOn /> : <FlashIconOff />}</FlashIconContainer>
          </>
        )}
      </BottomLayer>
    </ScannerOverlayContainer>
  );
};
