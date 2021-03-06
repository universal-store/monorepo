/** @format */

import styled from 'styled-components/native';
import { Pressable } from 'react-native';

// Components
import { RowView } from '../Views';
import { HeaderLargeText, HeaderSmallText, TextLarge2, TextSmall } from '../Text';

export const FavoritesHeaderTextContainer = styled.View`
  display: flex;
  margin-top: 16px;
  padding-bottom: 8px;
  align-items: center;
  justify-content: center;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.gray[5]};
`;

export const FavoritesHeaderTextBold = styled(HeaderLargeText)``;

export const FavoritesHeaderTextRegular = styled(FavoritesHeaderTextBold)`
  font-family: NunitoSans-Regular;
`;

export const FavoritesFindFilterContainer = styled(RowView)`
  width: 100%;
  height: 37px;
  padding: 8px 24px;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.gray[5]};
`;

export const FavoritesFindIconContainer = styled.View`
  width: 16px;
  height: 16px;
`;

export const FavoritesFindInput = styled.TextInput.attrs(({ theme }) => ({
  selectionColor: theme.colors.gray[3],
  placeholderTextColor: theme.colors.gray[4],
}))`
  flex: 1;
  font-size: 16px;
  margin-left: 8px;
  font-family: NunitoSans-Regular;
  color: ${({ theme }) => theme.colors.gray[1]};
`;

export const FavoritesFilterButton = styled.TouchableOpacity`
  margin-left: auto;
`;

export const FavoritesFilterText = styled(TextSmall)`
  margin-left: 24px;
`;

export const FavoriteItemCellContainer = styled(Pressable)`
  flex: 1;
  width: 100%;
  height: 80px;
  display: flex;
  padding: 16px 24px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.white[1]};
`;

export const FavoritesItemCellContainerSmall = styled(RowView)`
  flex: 1;
  align-items: center;
`;

export const FavoritesItemCellTextContainer = styled.View`
  margin-right: 16px;
`;

export const FavoritesItemNameText = styled(TextLarge2)``;

export const FavoritesItemPriceText = styled(HeaderSmallText)`
  color: ${({ theme }) => theme.colors.purple[1]};
`;

export const FavoriteItemImageContainer = styled.View`
  width: 48px;
  height: 48px;
  border-radius: 4px;
  margin-right: 16px;
`;

export const FavoriteItemImage = styled.Image`
  width: 48px;
  height: 48px;
  border-radius: 4px;
`;

export const NoFavoritesText = styled(FavoritesHeaderTextRegular)`
  padding: 0 40px;
  text-align: center;
  color: ${({ theme }) => theme.colors.gray[4]};
`;
