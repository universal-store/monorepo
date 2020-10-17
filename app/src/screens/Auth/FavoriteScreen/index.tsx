/** @format */

import React, { useCallback, useContext } from 'react';
import { Text } from 'react-native';

// Components
import {
  FavoritesFilterText,
  FavoritesFindFilterContainer,
  FavoritesFindIconContainer,
  FavoritesFindInput,
  FavoritesHeaderTextBold,
  FavoritesHeaderTextContainer,
  FavoritesHeaderTextRegular,
  FavoriteItemCell,
  FullScreenWhite,
  FavoritesFilterButton,
} from '&components';

// Iconography
import { FindIcon } from '&icons';

// React Navigation
import { useFocusEffect } from '@react-navigation/native';

// User Store
import { AuthContext } from '&stores';

// GraphQL
import { useGetUserFavoriteItemsQuery } from '&graphql';

export const FavoriteScreen = () => {
  const authContext = useContext(AuthContext);
  const sessionId = authContext?.token!;

  const { data, refetch } = useGetUserFavoriteItemsQuery({ variables: { sessionId } });
  const favData = data?.UserFavoriteItem;

  useFocusEffect(
    useCallback(() => {
      void refetch();
    }, [])
  );

  return (
    <FullScreenWhite>
      <FavoritesHeaderTextContainer>
        <FavoritesHeaderTextBold>
          Saved <FavoritesHeaderTextRegular>Items</FavoritesHeaderTextRegular>
        </FavoritesHeaderTextBold>
      </FavoritesHeaderTextContainer>

      <FavoritesFindFilterContainer>
        <FavoritesFindIconContainer>
          <FindIcon />
        </FavoritesFindIconContainer>
        <FavoritesFindInput placeholder="Find an item" />

        <FavoritesFilterButton onPress={() => console.log('Filter Pressed')}>
          <FavoritesFilterText>Filter</FavoritesFilterText>
        </FavoritesFilterButton>
      </FavoritesFindFilterContainer>

      {favData &&
        favData.map(favItem => <FavoriteItemCell key={favItem.id} favItem={favItem.StoreItem} sessionId={sessionId} />)}
    </FullScreenWhite>
  );
};
