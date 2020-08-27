/** @format */

import React from 'react';

import styled from 'styled-components/native';
import {
  BarcodeBottomLeftIcon,
  BarcodeBottomRightIcon,
  BarcodeTopLeftIcon,
  BarcodeTopRightIcon,
} from '../icons/BarcodeIcon';

const ScannerOverlayContainer = styled.View`
  flex: 1;
`;

const TopLayer = styled.View`
  width: 100%;
  height: 100px;
  background-color: ${({ theme }) => theme.colors.transparent};
`;
const CenterLayer = styled.View`
  flex-direction: row;
  width: 100%;
  height: 400px;
`;

const SideLayer = styled.View`
  width: 32px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.transparent};
`;

const Cutout = styled.View`
  flex: 1;
`;

const TopLeftBarcode = styled.View`
  position: absolute;
  top: 0;
  left: 0;
`;

const TopRightBarcode = styled.View`
  position: absolute;
  top: 0;
  right: 0;
`;

const BottomLeftBarcode = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
`;

const BottomRightBarcode = styled.View`
  position: absolute;
  bottom: 0;
  right: 0;
`;

const BottomLayer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.transparent};
`;

export const ScannerOverlay = () => (
  <ScannerOverlayContainer>
    <TopLayer />
    <CenterLayer>
      <SideLayer />
      <Cutout>
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
    <BottomLayer />
  </ScannerOverlayContainer>
);
