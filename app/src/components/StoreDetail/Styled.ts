/** @format */

import styled from 'styled-components/native';

// Typography
import { HeaderMediumText, HeaderSmallText, TextMedium, TextSmall, TextSmall2 } from './../Text';

// Constants
import { isiPhoneX, screenWidth, RowView } from './../Views';

// Select Store Button
export const SelectStoreButtonContainer = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  z-index: 100;
  padding: 16px 32px ${isiPhoneX ? 106 : 76}px;
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
  justify-content: center;
  width: ${screenWidth - 64}px;
  border: 2px solid ${({ theme }) => theme.colors.purple[1]};
  background-color: ${({ theme, selected }) => (selected ? theme.colors.purple[1] : theme.colors.white[1])};
`;

export const SelectStoreButtonText = styled(HeaderMediumText)<SelectStoreButtonProps>`
  color: ${({ theme, selected }) => (selected ? theme.colors.white[1] : theme.colors.purple[1])};
`;

export const StoreDetailHeaderRow = styled(RowView)`
  width: 100%;
  margin-bottom: 4px;
  margin-top: 24px;
`;

export const StoreDetailImageContainer = styled.View`
  width: 32px;
  height: 32px;
  margin-right: 12px;
`;

export const StoreDetailStoreNameText = styled(TextMedium)``;

export const StoreDetailStoreCategoryText = styled(TextSmall)`
  color: ${({ theme }) => theme.colors.gray[3]};
  margin-bottom: 4px;
`;

export const StoreDetailStoreAddressText = styled(TextSmall2)`
  margin-bottom: 13px;
  font-size: 13px;
`;

export const StoreDetailStoreDescriptionText = styled(TextSmall)`
  margin-bottom: 17px;
`;

export const StoreDetailPopularItemHeaderText = styled(HeaderSmallText)`
  margin-bottom: 12px;
`;

export const StoreDetailPopularItemContainer = styled(RowView)`
  width: 100%;
  margin-bottom: 12px;
`;

export const StoreDetailPopularItemNameText = styled(TextSmall)`
  margin-bottom: 12px;
`;

export const StoreDetailPopularItemPriceText = styled(HeaderSmallText)`
  margin-left: auto;
  color: ${({ theme }) => theme.colors.purple[1]};
`;
