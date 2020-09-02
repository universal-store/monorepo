/** @format */

import styled from 'styled-components/native';

// Typography
import { OpenSansSemiBoldSmall, screenWidth } from '&components';

// Scanner Overlay

export const ScannerOverlayContainer = styled.View`
  flex: 1;
`;

export const TopLayer = styled.View`
  width: 100%;
  height: 100px;
  background-color: ${({ theme }) => theme.colors.transparent.black};
`;

export const CenterLayer = styled.View`
  flex-direction: row;
  width: 100%;
  height: 400px;
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

export const ScannedText = styled(OpenSansSemiBoldSmall)`
  margin-top: 24px;
  text-align: center;
  color: ${({ theme }) => theme.colors.white[1]};
`;

// Item Preview

export const ItemPreviewContainer = styled.TouchableOpacity`
  position: absolute;
  left: 24px;
  height: 64px;
  bottom: 32px;
  padding: 8px 16px;
  border-radius: 8px;
  width: ${screenWidth - 48}px;
  background-color: ${({ theme }) => theme.colors.white[1]};
`;

// TODO: Replace background color when we add images
export const ItemPreviewImageContainer = styled.View`
  width: 48px;
  height: 48px;
  border-radius: 4px;
  background-color: red;
`;
