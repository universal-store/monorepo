/** @format */

import React from 'react';
import { theme } from '&theme';
import styled from 'styled-components/native';

// Libraries
import { MaterialIndicator } from 'react-native-indicators';

// Constants
import { screenHeight, screenWidth } from './Views';

// Styled Components
const LoadingOverlayContainer = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  flex: 1;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${screenWidth}px;
  height: ${screenHeight}px;
`;

export const LoadingOverlay = () => (
  <LoadingOverlayContainer>
    <MaterialIndicator color={theme.colors.purple[1]} />
  </LoadingOverlayContainer>
);
