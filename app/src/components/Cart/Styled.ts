/** @format */

import styled from 'styled-components/native';

// Components
import { RowView } from '../Views';
import { HeaderLargeText, HeaderSmallText } from '../Text';

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
  display: flex;
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
