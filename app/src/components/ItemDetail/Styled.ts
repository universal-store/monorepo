/** @format */

import styled from 'styled-components/native';

// Typography
import {
  FuturaBoldButtonText,
  FuturaBoldLarge,
  FuturaBoldMedium,
  OpenSansRegularLarge,
  OpenSansRegularMedium,
  RowView,
  screenHeight,
  screenWidth,
} from '&components';

export const ItemDetailContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.purple[3]};
`;

export const ItemDetailModalContainer = styled.View`
  width: 100%;
  elevation: 4;
  display: flex;
  margin-top: auto;
  shadow-radius: 2px;
  shadow-opacity: 0.25;
  padding: 28px 32px 24px;
  shadow-offset: 0px -0.5px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  height: ${screenHeight - 144}px;
  shadow-color: ${({ theme }) => theme.colors.gray[1]};
  background-color: ${({ theme }) => theme.colors.white[1]};
`;

export const ItemSubDetailRow = styled(RowView)`
  margin-top: 8px;
`;

export const ItemSizeText = styled(OpenSansRegularLarge)`
  margin-top: auto;
  color: ${({ theme }) => theme.colors.gray[2]};
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

export const AddCartButtonContainer = styled.View`
  position: absolute;
  bottom: 0;
  z-index: 999;
  padding: 32px 32px 24px;
  background-color: ${({ theme }) => theme.colors.white[1]};
`;

interface AddCartButtonProps {
  added: boolean;
}

export const AddCartButtonStyle = styled.TouchableOpacity<AddCartButtonProps>`
  height: 48px;
  display: flex;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  width: ${screenWidth - 64}px;
  border: 2px solid ${({ theme }) => theme.colors.purple[1]};
  background-color: ${({ theme, added }) => (added ? theme.colors.purple[1] : theme.colors.white[1])};
`;

export const AddCartButtonText = styled(FuturaBoldButtonText)<AddCartButtonProps>`
  color: ${({ theme, added }) => (added ? theme.colors.white[1] : theme.colors.purple[1])};
`;
