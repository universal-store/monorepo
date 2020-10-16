/** @format */

import styled from 'styled-components/native';

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
  display: flex;
  padding: 8px 24px;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.gray[5]};
`;

export const FavoritesFindFilterContainerHalfRow = styled(RowView)`
  align-items: center;
`;

export const FavoritesFindIconContainer = styled.View`
  width: 16px;
  height: 16px;
`;

export const FavoritesFindText = styled(TextSmall)`
  margin-left: 8px;
`;

export const FavoritesFilterText = styled(TextSmall)`
  margin-left: auto;
`;

export const FavoriteItemCellContainer = styled(RowView)`
  width: 100%;
  height: 80px;
  padding: 16px 24px;
  align-items: center;
  border-bottom-width: 1px;
  justify-content: space-between;
  border-bottom-color: ${({ theme }) => theme.colors.gray[5]};
`;

export const FavoritesItemCellContainerSmall = styled(RowView)`
  align-items: center;
`;

export const FavoritesItemCellText = styled.View`
  margin: 0 16px;
`;

export const FavoritesItemNameText = styled(TextLarge2)``;

export const FavoritesItemPriceText = styled(HeaderSmallText)`
  color: ${({ theme }) => theme.colors.purple[1]};
`;

export const FavoriteItemImageContainer = styled.View`
  width: 48px;
  height: 48px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.gray[5]};
`;

export const FavoritesItemHeartContainer = styled.View`
  width: 24px;
  height: 24px;
`;
