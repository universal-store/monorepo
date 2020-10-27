/** @format */

import { Dimensions, Platform } from 'react-native';
import styled from 'styled-components/native';

// Components
import { Camera } from 'expo-camera';

import { HeaderSmallText } from './Text';

export const screenWidth = Dimensions.get('window').width;
export const screenHeight = Dimensions.get('window').height;

export const isLargeScreen = screenHeight > 731;
export const isiPhoneX = Platform.OS === 'ios' && screenHeight > 812;

export const FullScreen = styled.View`
  flex: 1;
  width: ${screenWidth}px;
  height: ${screenHeight}px;
`;

export const FullScreenWhite = styled(FullScreen)`
  padding-top: ${isiPhoneX ? 30 : 0}px;
  background-color: ${({ theme }) => theme.colors.white[1]};
`;

export const FullScreenCenter = styled(FullScreenWhite)`
  align-items: center;
  justify-content: center;
`;

export const FullScreenLightPurple = styled(FullScreen)`
  padding-top: ${isiPhoneX ? 30 : 0}px;
  background-color: ${({ theme }) => theme.colors.purple[3]};
`;

export const FullscreenBlack = styled(FullScreen)`
  background-color: ${({ theme }) => theme.colors.gray[1]};
`;

export const CameraView = styled(Camera)`
  flex: 1;
`;

export const RowView = styled.View`
  display: flex;
  flex-direction: row;
`;

export const KeyboardDismiss = styled.TouchableWithoutFeedback`
  flex: 1;
`;

export const CellItemSeparator = styled.View`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.gray[5]};
`;

// TODO: Remove in production
export const TestButtons = styled.View`
  margin-top: auto;
`;

export const TestButton = styled.TouchableOpacity`
  display: flex;
  height: 48px;
  margin-top: 8px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.purple[1]};
`;

export const TestButtonText = styled(HeaderSmallText)`
  color: ${({ theme }) => theme.colors.white[1]};
`;

// Constants
export const largeModalHeight = screenHeight - (isiPhoneX ? 92 : 62);
export const smallModalHeight = screenHeight - (isiPhoneX ? 402 : 372);
