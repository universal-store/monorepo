/** @format */

import styled from 'styled-components/native';
import { RowView, TextSmall2 } from '&components';

export const OrderCellContainer = styled.TouchableOpacity`
  width: 100%;
  height: 80px;
  display: flex;
  padding: 12px 24px;
  flex-direction: row;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.gray[5]};
  background-color: ${({ theme }) => theme.colors.white[1]};
`;

export const OrderCellImage = styled.Image`
  width: 32px;
  height: 32px;
  border-radius: 4px;
  margin: auto 16px auto 0;
`;

export const OrderCellInnerContainer = styled.View`
  flex: 1;
  display: flex;
`;

export const OrderCellHeaderRow = styled(RowView)`
  align-items: center;
  margin-bottom: 12px;
  justify-content: space-between;
`;

export const OrderCellItemsText = styled(TextSmall2)`
  color: ${({ theme }) => theme.colors.gray[3]};
`;

export const OrderCellPurchaseNumText = styled(OrderCellItemsText)`
  flex: 1;
`;

export const OrderCellTitleText = styled(OrderCellItemsText)`
  flex: 1;
  margin-right: 16px;
  font-family: NunitoSans-Bold;
  color: ${({ theme }) => theme.colors.gray[1]};
`;

export const OrderCellPriceText = styled(OrderCellItemsText)`
  margin-left: 16px;
  font-family: NunitoSans-Bold;
  color: ${({ theme }) => theme.colors.purple[1]};
`;
