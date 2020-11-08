/** @format */

import styled from 'styled-components/native';

// Typography
import { HeaderMediumText, HeaderSmallText, TextLarge, TextMedium2, TextSmall } from '../Text';

// Constants
import { screenWidth, RowView } from '../Views';

export const StoreDetailContainer = styled.View`
  padding: 0 32px;
`;

export const StoreDetailHeaderRow = styled(RowView)`
  width: 100%;
  margin-bottom: 4px;
  align-items: center;
`;

export const StoreDetailImageContainer = styled.View`
  width: 32px;
  height: 32px;
  display: flex;
  margin-right: 12px;
  align-items: center;
  justify-content: center;
`;

export const StoreDetailImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 8px;
`;

export const StoreDetailStoreNameText = styled(TextLarge)`
  flex: 1;
`;

export const StoreDetailStoreCategoryText = styled(TextMedium2)`
  margin-bottom: 4px;
  color: ${({ theme }) => theme.colors.gray[3]};
`;

export const StoreDetailStoreAddressText = styled(TextSmall)`
  margin-bottom: 12px;
`;

export const StoreDetailStoreDescriptionText = styled(TextMedium2)`
  margin-bottom: 16px;
`;

// Popular Item Cell
export const StoreDetailPopularItemHeaderText = styled(HeaderSmallText)`
  margin-bottom: 12px;
  font-family: NunitoSans-Bold;
`;

export const StoreDetailPopularItemContainer = styled.TouchableOpacity`
  height: 40px;
  display: flex;
  padding: 0 32px;
  align-items: center;
  flex-direction: row;
  margin-bottom: 12px;
`;

export const StoreDetailPopularItemNameText = styled(TextSmall)`
  flex: 1;
  margin-right: 16px;
  font-family: NunitoSans-Bold;
`;

export const StoreDetailPopularItemPriceText = styled(HeaderSmallText)`
  margin-left: auto;
  color: ${({ theme }) => theme.colors.purple[1]};
`;

// Select Store Button
export const SelectStoreButtonContainer = styled.View`
  position: absolute;
  bottom: 0;
  left: 32px;
  width: 100%;
  z-index: 100;
  padding-bottom: 24px;
  background-color: ${({ theme }) => theme.colors.white[1]};
`;

interface SelectStoreButtonProps {
  selected: boolean;
}

export const SelectStoreButton = styled.TouchableOpacity<SelectStoreButtonProps>`
  height: 48px;
  display: flex;
  margin-top: auto;
  border-radius: 8px;
  align-items: center;
  shadow-opacity: 0.23;
  shadow-radius: 2.62px;
  shadow-offset: 0px 2px;
  justify-content: center;
  width: ${screenWidth - 64}px;
  shadow-color: ${({ theme }) => theme.colors.gray[1]};
  border: 2px solid ${({ theme }) => theme.colors.purple[1]};
  background-color: ${({ theme, selected }) => (selected ? theme.colors.purple[1] : theme.colors.white[1])};
`;

export const SelectStoreButtonText = styled(HeaderMediumText)<SelectStoreButtonProps>`
  color: ${({ theme, selected }) => (selected ? theme.colors.white[1] : theme.colors.purple[1])};
`;

// Camera Icon

export const CameraIconContainer = styled.TouchableOpacity`
  position: absolute;
  width: 64px;
  bottom: 88px;
  height: 64px;
  z-index: 999;
  display: flex;
  margin: 0 auto;
  border-radius: 64px;
  align-items: center;
  shadow-opacity: 0.23;
  shadow-radius: 2.62px;
  shadow-offset: 0px 2px;
  justify-content: center;
  left: ${screenWidth / 2 - 32}px;
  shadow-color: ${({ theme }) => theme.colors.gray[1]};
  background-color: ${({ theme }) => theme.colors.purple[1]};
`;
