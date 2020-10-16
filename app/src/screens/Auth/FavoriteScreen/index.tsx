/** @format */

import React from 'react';
import { Text } from 'react-native';

// Components
import {
  FavoritesFindFilterContainer,
  FavoritesFindFilterContainerHalf,
  FavoritesFindFilterContainerHalfRight,
  FavoritesFindFilterContainerHalfRow,
  FavoritesHeaderTextContainer,
  FavoriteItemHeartContainer,
  FavoriteItemHeartContainerHalf,
  FavoritesItemHeartContainerHalfRight,
  FavoritesItemHeartContainerHalfRow,
  FavoritesMainContainer,
  HeaderLargeText,
  ItemImageContainer,
  TextLarge2,
  TextMedium2,
} from '&components';

// Iconography
import { FindIcon, HeartIconOn } from '&icons';

export const FavoriteScreen = () => (
  <FavoritesMainContainer>
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

      <FavoritesFindFilterContainerHalfRight>
        <TextMedium2>Filter</TextMedium2>
      </FavoritesFindFilterContainerHalfRight>
    </FavoritesFindFilterContainer>

    <FavoriteItemHeartContainer>
      <FavoriteItemHeartContainerHalf>
        <FavoritesItemHeartContainerHalfRow>
          <ItemImageContainer />
          <TextMedium2> Hand Sanitizer</TextMedium2>
        </FavoritesItemHeartContainerHalfRow>
      </FavoriteItemHeartContainerHalf>

      <FavoritesItemHeartContainerHalfRight>
        <HeartIconOn />
      </FavoritesItemHeartContainerHalfRight>
    </FavoriteItemHeartContainer>
  </FavoritesMainContainer>
);
