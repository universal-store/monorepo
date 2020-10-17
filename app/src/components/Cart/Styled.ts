/** @format */

import styled from 'styled-components/native';

// Components
import { RowView } from '../Views';
import { HeaderLargeText, HeaderSmallText, TextLarge2, TextSmall, TextSmall2 } from '../Text';

export const CartHeaderTextContainer = styled.View`
  display: flex;
  margin-top: 16px;
  padding-bottom: 8px;
  align-items: center;
  justify-content: center;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.gray[5]};
`;

export const CartHeaderTextBold = styled(HeaderLargeText)``;

export const CartHeaderTextRegular = styled(CartHeaderTextBold)`
  font-family: NunitoSans-Regular;
`;

export const CartPriceContainer = styled(RowView)`
  width: 100%;
  height: 37px;
  padding: 8px 24px;
  align-items: center;
  justify-content: center;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.gray[5]};
`;

export const CartSubtotalText = styled(HeaderSmallText)``;

export const CartSubtotalPrice = styled(HeaderSmallText)`
  color: ${({ theme }) => theme.colors.purple[2]};
`;

export const CartItemCellContainer = styled.TouchableOpacity`
  width: 100%;
  height: 80px;
  display: flex;
  padding: 16px 24px;
  align-items: center;
  flex-direction: row;
`;

export const CartItemCellContainerSmall = styled(RowView)`
  align-items: center;
`;

export const CartItemImageContainer = styled.View`
  width: 48px;
  height: 48px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.gray[5]};
`;

export const CartItemImage = styled.Image`
  width: 48px;
  height: 48px;
  border-radius: 4px;
`;

export const CartItemCellTextContainer = styled.View`
  flex: 1;
  margin: 0 16px;
`;

export const CartItemCellTextRowContainer = styled(RowView)``;

export const CartItemNameText = styled(TextLarge2)`
  margin-right: 52px;
  margin-bottom: auto;
`;

export const CartItemQuantityText = styled(TextSmall)`
  margin-left: auto;
  margin-bottom: auto;
`;

export const CartItemQuantityNumberText = styled(CartItemQuantityText)`
  font-family: NunitoSans-Bold;
`;

export const CartItemPriceText = styled(HeaderSmallText)`
  margin-top: auto;
  color: ${({ theme }) => theme.colors.purple[1]};
`;

export const CartItemAddFavoriteButton = styled.TouchableOpacity`
  margin-top: auto;
  margin-left: auto;
`;

export const CartItemAddFavorite = styled(TextSmall2)`
  color: ${({ theme }) => theme.colors.purple[1]};
`;
