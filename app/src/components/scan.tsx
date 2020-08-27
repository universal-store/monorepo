/** @format */

import React from 'react';
import styled from 'styled-components/native';

const TopLayer = styled.View`
  flex: 2;
  background-color: blue;
`;
const CenterLayer = styled.View`
  flex: 6;
  flex-direction: row;
  background-color: red;
`;
const LeftLayer = styled.View`
  flex: 4;
  background-color: green;
`;
const Focused = styled.View`
  flex: 20;
  background-color: yellow;
`;
const RightLayer = styled.View`
  flex: 4;
  background-color: purple;
`;

const BottomLayer = styled.View`
  flex: 2;
  background-color: aquamarine;
`;

export const ScannerOverlay = () => (
  <>
    <TopLayer />
    <CenterLayer>
      <LeftLayer />
      <Focused />
      <RightLayer />
    </CenterLayer>
    <BottomLayer />
  </>
);
