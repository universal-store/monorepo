/** @format */

import React from 'react';
import { Dimensions, View, Text } from 'react-native';
import styled from 'styled-components/native';

const screenHeight = `${Dimensions.get('window').height}px`;
const screenWidth = `${Dimensions.get('window').width}px`;

export const FullScreen = styled.View`
  flex: 1;
  height: ${screenHeight};
  width: ${screenWidth};
`;

export const FullScreenCenter = styled(FullScreen)`
  justify-content: center;
  align-items: center;
`;
