/** @format */

import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

// Components
import { Camera } from 'expo-camera';
import { SafeAreaView } from 'react-native-safe-area-context';

export const screenWidth = Dimensions.get('window').width;
export const screenHeight = Dimensions.get('window').height;

export const FullScreen = styled(SafeAreaView)`
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
