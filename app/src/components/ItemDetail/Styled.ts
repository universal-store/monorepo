/** @format */

import styled from 'styled-components/native';

// Components
import {
  FuturaBoldButtonText,
  FuturaBoldLarge,
  FuturaBoldMedium,
  isiPhoneX,
  OpenSansRegularLarge,
  OpenSansRegularMedium,
  RowView,
  screenWidth,
} from '&components';

export const ItemDetailContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.purple[3]};
`;

export const ItemDetailHeaderRow = styled(RowView)`
  width: 100%;
  height: 40px;
  padding: 0 32px;
  align-items: center;
  justify-content: space-between;
  margin-top: ${isiPhoneX ? 66 : 36}px;
`;

export const ItemDetailHeaderButton = styled.TouchableOpacity`
  width: 48px;
  height: 48px;
  display: flex;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.white[60]};
`;

export const ItemDetailImageContainer = styled.View`
  width: 256px;
  height: 256px;
  margin: 0 auto;
`;

export const ItemDetailImage = styled.Image`
  width: 256px;
  height: 256px;
`;

export const ItemDetailModalContainer = styled.View`
  flex: 1;
  width: 100%;
  elevation: 4;
  display: flex;
  margin-top: 40px;
  shadow-radius: 2px;
  shadow-opacity: 0.25;
  shadow-offset: 0px -0.5px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 24px 32px ${isiPhoneX ? 54 : 24}px;
  shadow-color: ${({ theme }) => theme.colors.gray[1]};
  background-color: ${({ theme }) => theme.colors.white[1]};
`;

export const ItemSubDetailRow = styled(RowView)`
  margin-top: 8px;
  align-items: center;
  justify-content: space-between;
`;

// Note: 32 horizontal padding each side + 48 (24 button and 24 margin)
export const ItemNameText = styled(FuturaBoldLarge)`
  width: ${screenWidth - 112}px;
`;

export const ItemDetailFavoriteButton = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
  display: flex;
  margin-left: 24px;
  align-items: center;
  justify-content: center;
`;

export const ItemSizeText = styled(OpenSansRegularLarge)`
  margin-top: auto;
  color: ${({ theme }) => theme.colors.gray[2]};
`;

export const ItemAdditionalInfoScroll = styled.ScrollView`
  flex: 1;
  margin-bottom: 24px;
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

export const AddCartButtonContainer = styled.TouchableOpacity<AddCartButtonProps>`
  height: 48px;
  display: flex;
  margin-top: auto;
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
