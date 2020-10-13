/** @format */

import React from 'react';
import { Text } from 'react-native';

// Components
import {
  FavoritesFindFilterContainer,
  FavoritesFindFilterContainerHalf,
  FavoritesFindFilterContainerHalfRow,
  FavoritesHeaderTextContainer,
  FullScreenWhite,
  HeaderLargeText,
  TextLarge2,
  TextMedium2,
} from '&components';

// Iconography
import { FindIcon } from '&icons';

export const FavoriteScreen = () => (
  <FullScreenWhite>
    <FavoritesHeaderTextContainer>
      <HeaderLargeText>Saved</HeaderLargeText>
      <TextLarge2> Items</TextLarge2>
    </FavoritesHeaderTextContainer>

    <FavoritesFindFilterContainer>
      <FavoritesFindFilterContainerHalf>
        <FavoritesFindFilterContainerHalfRow>
          <FindIcon />
          <TextMedium2> Find</TextMedium2>
        </FavoritesFindFilterContainerHalfRow>
      </FavoritesFindFilterContainerHalf>

      <FavoritesFindFilterContainerHalf>
        <TextMedium2>Filter</TextMedium2>
      </FavoritesFindFilterContainerHalf>
    </FavoritesFindFilterContainer>
  </FullScreenWhite>
);
