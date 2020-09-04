/** @format */

import styled from 'styled-components/native';
import { FuturaBoldLarge, FuturaBoldMedium, OpenSansRegularMedium, OpenSansSemiBoldSmall } from '&components';

export const ItemDetailContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.purple[3]};
`;

export const ItemDetailModalContainer = styled.View`
  width: 100%;
  display: flex;
  margin-top: auto;
  padding: 28px 32px 24px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: ${({ theme }) => theme.colors.white[1]};
`;

export const ItemSize = styled(OpenSansSemiBoldSmall)`
  margin-top: 4px;
`;

export const ItemPrice = styled(FuturaBoldLarge)`
  margin-left: auto;
`;

export const ProductDetailsHeader = styled(FuturaBoldMedium)`
  margin-top: 24px;
`;

export const ProductDetailsText = styled(OpenSansRegularMedium)`
  margin-top: 8px;
`;
