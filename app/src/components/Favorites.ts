/** @format */

import styled from 'styled-components/native';
import { FullScreenWhite, RowView } from './Views';

export const FavoritesMainContainer = styled(FullScreenWhite)`
  flex: 1;
  width: 100%;
  display: flex;
`;

export const FavoritesHeaderTextContainer = styled(RowView)`
  border-bottom-color: ${({ theme }) => theme.colors.gray[4]};
  border-bottom-width: 1px;
  justify-content: center;
  display: flex;
  padding: 10px;
`;

export const FavoritesFindFilterContainer = styled(RowView)`
  align-items: center;
  border-bottom-color: ${({ theme }) => theme.colors.gray[4]};
  border-bottom-width: 1px;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  width: 100%;
`;

export const FavoritesFindFilterContainerHalf = styled.View`
  padding: 5px;
  width: 50%;
`;

export const FavoritesFindFilterContainerHalfRight = styled(RowView)`
  align-items: center;
  flex-direction: row-reverse;
`;

export const FavoritesFindFilterContainerHalfRow = styled(RowView)`
  align-items: center;
`;

export const FavoritesFindIconContainer = styled.View`
  width: 16px;
  height: 16px;
`;

export const FavoriteItemHeartContainer = styled(RowView)`
  align-items: center;
  border-bottom-color: ${({ theme }) => theme.colors.gray[4]};
  border-bottom-width: 1px;
  justify-content: space-between;
  padding: 10px;
  width: 100%;
`;

export const FavoriteItemHeartContainerHalf = styled.View`
  width: 50%;
`;

export const FavoritesItemHeartContainerHalfRight = styled(RowView)`
  align-items: center;
  flex-direction: row-reverse;
`;

export const FavoritesItemHeartContainerHalfRow = styled(RowView)`
  align-items: center;
`;

export const ItemImageContainer = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.gray[5]};
`;
