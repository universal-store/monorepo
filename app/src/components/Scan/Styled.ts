/** @format */

import styled from 'styled-components/native';
import { Animated } from 'react-native';

// Typography
import { OpenSansRegularLarge, OpenSansSemiBoldMedium, screenWidth } from '&components';

// Scanner Overlay ----------------------------------------------------------

export const ScannerOverlayContainer = styled.View`
  flex: 1;
`;

export const TopLayer = styled.View`
  width: 100%;
  height: 100px;
  background-color: ${({ theme }) => theme.colors.transparent.black};
`;

export const CenterLayer = styled.View`
  width: 100%;
  height: 400px;
  flex-direction: row;
`;

export const SideLayer = styled.View`
  width: 32px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.transparent.black};
`;

interface CutoutProps {
  scanned: boolean;
}

export const Cutout = styled.View<CutoutProps>`
  flex: 1;
  border-radius: 20px;
  background-color: ${({ theme, scanned }) => (scanned ? theme.colors.transparent.green : 'transparent')};
`;

export const TopLeftBarcode = styled.View`
  position: absolute;
  top: 0;
  left: 0;
`;

export const TopRightBarcode = styled.View`
  position: absolute;
  top: 0;
  right: 0;
`;

export const BottomLeftBarcode = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
`;

export const BottomRightBarcode = styled.View`
  position: absolute;
  bottom: 0;
  right: 0;
`;

export const BottomLayer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.transparent.black};
`;

export const ScannedText = styled(OpenSansSemiBoldMedium)`
  margin-top: 24px;
  text-align: center;
  color: ${({ theme }) => theme.colors.white[1]};
`;

// Item Preview ----------------------------------------------------------

const ItemPreviewContainer = styled.TouchableOpacity`
  position: absolute;
  left: 24px;
  right: 24px;
  height: 64px;
  bottom: 32px;
  display: flex;
  padding: 8px 16px;
  shadow-radius: 4px;
  border-radius: 8px;
  flex-direction: row;
  shadow-opacity: 0.25;
  shadow-offset: 0px 4px;
  width: ${screenWidth - 48}px;
  shadow-color: ${({ theme }) => theme.colors.gray[1]};
  background-color: ${({ theme }) => theme.colors.white[1]};
`;

export const AnimatedItemPreviewContainer = Animated.createAnimatedComponent(ItemPreviewContainer);

// TODO: Replace background color when we add images
export const ItemPreviewImageContainer = styled.View`
  width: 48px;
  height: 48px;
  border-radius: 4px;
  background-color: red;
`;

export const ItemPreviewTextContainer = styled.View`
  flex: 1;
  margin-top: 2px;
  margin-left: 8px;
`;

export const ItemPreviewPriceText = styled(OpenSansRegularLarge)`
  margin-top: auto;
`;
