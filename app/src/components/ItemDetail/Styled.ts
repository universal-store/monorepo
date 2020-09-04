/** @format */

import styled from 'styled-components/native';

// Constants
import { screenWidth } from '&components';

// Typography
import {
  FuturaBoldButtonText,
  FuturaBoldLarge,
  FuturaBoldMedium,
  OpenSansRegularMedium,
  OpenSansSemiBoldSmall,
} from '&components';

export const ItemDetailContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.purple[3]};
`;

export const ItemDetailModalContainer = styled.View`
  width: 100%;
  height: 350px;
  display: flex;
  margin-top: auto;
  padding: 28px 32px 24px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: ${({ theme }) => theme.colors.white[1]};
`;

export const ItemSizeText = styled(OpenSansSemiBoldSmall)`
  margin-top: 4px;
`;

export const ItemPriceText = styled(FuturaBoldLarge)`
  margin-left: auto;
`;

export const ProductDetailsHeaderText = styled(FuturaBoldMedium)`
  margin-top: 24px;
`;

export const ProductDetailsText = styled(OpenSansRegularMedium)`
  margin-top: 8px;
`;

interface AddCartButtonProps {
  added: boolean;
}

export const AddCartButton = styled.TouchableOpacity<AddCartButtonProps>`
  width: 100%;
  height: 48px;
  display: flex;
  margin-top: auto;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  border: 2px solid ${({ theme }) => theme.colors.purple[1]};
  background-color: ${({ theme, added }) => (added ? theme.colors.purple[1] : theme.colors.white[1])};
`;

export const AddCartButtonText = styled(FuturaBoldButtonText)<AddCartButtonProps>`
  color: ${({ theme, added }) => (added ? theme.colors.white[1] : theme.colors.purple[1])};
`;
