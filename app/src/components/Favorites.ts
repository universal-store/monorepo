/** @format */

import styled from 'styled-components/native';
import { RowView } from './Views';

export const FavoritesHeaderTextContainer = styled(RowView)`
  border-bottom-color: ${({ theme }) => theme.colors.gray[4]};
  border-bottom-width: 1px;
  justify-content: center;
  display: flex;
`;

export const FavoritesFindFilterContainer = styled(RowView)`
  align-items: center;
  border-bottom-color: ${({ theme }) => theme.colors.gray[4]};
  border-bottom-width: 1px;
  display: flex;
`;

export const FavoritesFindFilterContainerHalf = styled.View`
  width: 50%;
`;

export const FavoritesFindFilterContainerHalfRow = styled(RowView)`
  align-items: center;
`;

export const FavoritesFindIconContainer = styled.View`
  width: 16px;
  height: 16px;
`;
