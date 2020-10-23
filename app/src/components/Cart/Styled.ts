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
  flex: 1;
  width: 100%;
  height: 80px;
  display: flex;
  padding: 16px 24px;
  align-items: center;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.white[1]};
`;

export const CartItemCellContainerSmall = styled(RowView)`
  flex: 1;
  align-items: center;
`;

export const CartItemImageContainer = styled.View`
  width: 48px;
  height: 48px;
  border-radius: 4px;
  margin-right: 16px;
`;

export const CartItemImage = styled.Image`
  width: 48px;
  height: 48px;
  border-radius: 4px;
`;

export const CartItemCellTextContainer = styled.View`
  flex: 1;
`;

export const CartItemNameText = styled(TextLarge2)`
  margin-bottom: auto;
`;

export const CartItemPriceText = styled(HeaderSmallText)`
  margin-top: auto;
  color: ${({ theme }) => theme.colors.purple[1]};
`;
