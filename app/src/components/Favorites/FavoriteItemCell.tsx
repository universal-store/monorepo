/** @format */

import React from 'react';

// Components
import {
  FavoriteItemCellContainer,
  FavoritesItemCellContainerSmall,
  FavoritesItemCellText,
  FavoritesItemHeartContainer,
  FavoritesItemNameText,
  FavoritesItemPriceText,
  FavoriteItemImageContainer,
} from '&components';

// Iconography
import { HeartIconOn } from '&icons';

export const FavoriteItemCell = () => {
  return (
    <FavoriteItemCellContainer>
      <FavoritesItemCellContainerSmall>
        <FavoriteItemImageContainer />
        <FavoritesItemCellText>
          <FavoritesItemNameText numberOfLines={1}>Hand Sanitizer</FavoritesItemNameText>
          <FavoritesItemPriceText>$2.99</FavoritesItemPriceText>
        </FavoritesItemCellText>
      </FavoritesItemCellContainerSmall>

      <FavoritesItemHeartContainer>
        <HeartIconOn />
      </FavoritesItemHeartContainer>
    </FavoriteItemCellContainer>
  );
};
