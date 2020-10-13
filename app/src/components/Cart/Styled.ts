/** @format */

import styled from 'styled-components/native';

// Components
import { RowView, screenWidth } from '../Views';
import { HeaderLargeText, HeaderSmallText } from '../Text';

export const CartTitleText = styled(HeaderLargeText)`
  margin-top: 16px;
  text-align: center;
`;

export const Separator = styled.View`
  display: flex;
  width: {screenWidth}px;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.gray[5]};
  margin-top: 8px;
`;

export const CartPriceRow = styled(RowView)`
  width: 100%;
  height: 20px;
  padding: 0 32px;
  align-items: center;
  justify-content: center;
`;

export const CartSubtotalText = styled(HeaderSmallText)`
  margin-top: 8px;
`;

export const CartSubtotalPrice = styled(HeaderSmallText)`
  margin-top: 8px;
  color: ${({ theme }) => theme.colors.purple[2]};
`;
