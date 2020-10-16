/** @format */

import React from 'react';

// Components
import {
  FavoriteItemCellContainer,
  FavoritesItemCellContainerSmall,
  FavoritesItemCellTextContainer,
  FavoritesItemHeartContainer,
  FavoritesItemNameText,
  FavoritesItemPriceText,
  FavoriteItemImageContainer,
} from './Styled';

// Iconography
import { HeartIconOn } from '&icons';

export const FavoriteItemCell = () => {
  return (
    <FavoriteItemCellContainer>
      <FavoritesItemCellContainerSmall>
        <FavoriteItemImageContainer />

        <FavoritesItemCellTextContainer>
          <FavoritesItemNameText numberOfLines={1}>Hand Sanitizer</FavoritesItemNameText>
          <FavoritesItemPriceText>$2.99</FavoritesItemPriceText>
        </FavoritesItemCellTextContainer>
      </FavoritesItemCellContainerSmall>

      <FavoritesItemHeartContainer>
        <HeartIconOn />
      </FavoritesItemHeartContainer>
    </FavoriteItemCellContainer>
  );
};
