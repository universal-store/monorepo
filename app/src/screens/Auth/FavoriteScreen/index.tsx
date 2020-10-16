/** @format */

import React from 'react';
import { Text } from 'react-native';

// Components
import {
  FavoritesFilterText,
  FavoritesFindFilterContainer,
  FavoritesFindFilterContainerHalfRow,
  FavoritesFindIconContainer,
  FavoritesFindText,
  FavoritesHeaderTextBold,
  FavoritesHeaderTextContainer,
  FavoritesHeaderTextRegular,
  FavoriteItemCell,
  FullScreenWhite,
} from '&components';

// Iconography
import { FindIcon } from '&icons';

export const FavoriteScreen = () => (
  <FullScreenWhite>
    <FavoritesHeaderTextContainer>
      <FavoritesHeaderTextBold>
        Saved <FavoritesHeaderTextRegular>Items</FavoritesHeaderTextRegular>
      </FavoritesHeaderTextBold>
    </FavoritesHeaderTextContainer>

    <FavoritesFindFilterContainer>
      <FavoritesFindFilterContainerHalfRow>
        <FavoritesFindIconContainer>
          <FindIcon />
        </FavoritesFindIconContainer>
        <FavoritesFindText>Find</FavoritesFindText>
      </FavoritesFindFilterContainerHalfRow>

      <FavoritesFilterText>Filter</FavoritesFilterText>
    </FavoritesFindFilterContainer>

    <FavoriteItemCell />
    <FavoriteItemCell />
    <FavoriteItemCell />
  </FullScreenWhite>
);
