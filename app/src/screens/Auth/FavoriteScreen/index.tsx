/** @format */

import React, { useCallback, useContext } from 'react';
import { ActivityIndicator, FlatList, Text } from 'react-native';

// Components
import {
  CellItemSeparator,
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
  FullScreenCenter,
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

  const { data, refetch, loading } = useGetUserFavoriteItemsQuery({ variables: { sessionId } });
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

      {loading && (
        <FullScreenCenter>
          <ActivityIndicator />
        </FullScreenCenter>
      )}

      {favData && (
        <FlatList
          data={favData}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={() => <CellItemSeparator />}
          ItemSeparatorComponent={() => <CellItemSeparator />}
          renderItem={({ item }) => <FavoriteItemCell favItem={item.StoreItem} sessionId={sessionId} />}
        />
      )}
    </FullScreenWhite>
  );
};
