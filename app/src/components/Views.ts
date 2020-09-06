/** @format */

import { Dimensions, Platform } from 'react-native';
import styled from 'styled-components/native';

// Components
import { Camera } from 'expo-camera';

export const screenWidth = Dimensions.get('window').width;
export const screenHeight = Dimensions.get('window').height;

export const isLargeScreen = screenHeight > 731;
export const isiPhoneX = Platform.OS === 'ios' && screenHeight > 812;

export const FullScreen = styled.View`
  flex: 1;
  width: ${screenWidth}px;
  height: ${screenHeight}px;
`;

export const FullScreenCenter = styled(FullScreen)`
  align-items: center;
  justify-content: center;
`;

export const CameraView = styled(Camera)`
  flex: 1;
`;

export const RowView = styled.View`
  display: flex;
  flex-direction: row;
`;
