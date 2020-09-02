/** @format */

import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

// Components
import { Camera } from 'expo-camera';
import { SafeAreaView } from 'react-native-safe-area-context';

const screenWidth = `${Dimensions.get('window').width}px`;
const screenHeight = `${Dimensions.get('window').height}px`;

export const FullScreen = styled(SafeAreaView)`
  flex: 1;
  width: ${screenWidth};
  height: ${screenHeight};
`;

export const FullScreenCenter = styled(FullScreen)`
  align-items: center;
  justify-content: center;
`;

export const CameraView = styled(Camera)`
  flex: 1;
`;
