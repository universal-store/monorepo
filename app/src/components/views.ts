/** @format */

import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const screenHeight = `${Dimensions.get('window').height}px`;
const screenWidth = `${Dimensions.get('window').width}px`;

export const FullScreen = styled(SafeAreaView)`
  flex: 1;
  width: ${screenWidth};
  height: ${screenHeight};
`;

export const FullScreenCenter = styled(FullScreen)`
  align-items: center;
  justify-content: center;
`;
