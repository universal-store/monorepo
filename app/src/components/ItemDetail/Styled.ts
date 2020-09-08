/** @format */

import styled from 'styled-components/native';

// Components
import { FullScreen, isiPhoneX, RowView, screenWidth } from '../Views';

import {
  FuturaBoldLarge,
  FuturaBoldMedium,
  FuturaBoldSmall,
  OpenSansRegularLarge,
  OpenSansRegularSmall,
} from '../Text';

export const ItemDetailContainer = styled(FullScreen)`
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
  width: 40px;
  height: 40px;
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

export const ItemDetailModalHeader = styled.View`
  height: 36px;
  elevation: 4;
  display: flex;
  shadow-radius: 2px;
  align-items: center;
  shadow-opacity: 0.15;
  justify-content: center;
  shadow-offset: 0px -3.5px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  shadow-color: ${({ theme }) => theme.colors.gray[1]};
  background-color: ${({ theme }) => theme.colors.white[1]};
`;

export const ItemDetailModalHeaderTab = styled.View`
  width: 48px;
  height: 6px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.gray[3]};
`;

export const ItemDetailModalContainer = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 0 32px ${isiPhoneX ? 54 : 24}px;
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

export const ProductDetailsHeaderText = styled(FuturaBoldMedium)`
  margin-top: 16px;
`;

export const ProductDetailsScroll = styled.ScrollView`
  flex: 1;
  height: auto;
`;

export const ProductDetailsText = styled(OpenSansRegularSmall)`
  margin-top: 8px;
`;

export const AddCartButtonContainer = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  z-index: 100;
  padding: 16px 32px ${isiPhoneX ? 54 : 24}px;
  background-color: ${({ theme }) => theme.colors.white[1]};
`;

interface AddCartButtonProps {
  added: boolean;
}

export const AddCartButton = styled.TouchableOpacity<AddCartButtonProps>`
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

export const AddCartButtonText = styled(FuturaBoldSmall)<AddCartButtonProps>`
  color: ${({ theme, added }) => (added ? theme.colors.white[1] : theme.colors.purple[1])};
`;
