/** @format */

import styled from 'styled-components/native';

// Typography
import { HeaderMediumText, HeaderSmallText, TextLarge, TextMedium2, TextSmall } from './../Text';

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
  width: 32px;
  height: 32px;
`;

export const StoreDetailStoreNameText = styled(TextLarge)``;

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

export const StoreDetailPopularItemHeaderText = styled(HeaderSmallText)`
  margin-bottom: 12px;
  font-family: NunitoSans-Bold;
`;

export const StoreDetailPopularItemContainer = styled(RowView)`
  height: 32px;
  align-items: center;
  margin-bottom: 12px;
`;

export const StoreDetailPopularItemNameText = styled(TextSmall)``;

export const StoreDetailPopularItemPriceText = styled(HeaderSmallText)`
  margin-left: auto;
  color: ${({ theme }) => theme.colors.purple[1]};
`;
