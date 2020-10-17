/** @format */

import React, { useCallback, useContext, useEffect, useState } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';

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
import { useGetUserFavoriteItemsQuery, UserFavoriteItemInfoFragment } from '&graphql';

// Utils
import { useDebounce } from '&utils';

export const FavoriteScreen = () => {
  const authContext = useContext(AuthContext);
  const sessionId = authContext?.token!;

  const { data, refetch, loading } = useGetUserFavoriteItemsQuery({ variables: { sessionId } });
  const favData = data?.UserFavoriteItem;

  const [itemQuery, setItemQuery] = useState<string>('');
  const [filteredItems, setFilteredItems] = useState<UserFavoriteItemInfoFragment[]>([]);

  // Causes a delay before updating item filter
  const debouncedItemQuery = useDebounce(itemQuery, 500);

  useFocusEffect(
    useCallback(() => {
      void refetch();
    }, [])
  );

  useEffect(() => {
    if (favData) {
      setFilteredItems(favData);
    }
  }, [favData]);

  useEffect(() => {
    if (!favData) return;

    if (debouncedItemQuery === '') {
      setFilteredItems(favData);
    } else {
      setFilteredItems(
        favData.filter(favItem => favItem.StoreItem.longName.toLowerCase().includes(debouncedItemQuery.toLowerCase()))
      );
    }
  }, [debouncedItemQuery]);

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
        <FavoritesFindInput value={itemQuery} placeholder="Find an item" onChangeText={setItemQuery} />

        <FavoritesFilterButton onPress={() => console.log('Filter Pressed')}>
          <FavoritesFilterText>Filter</FavoritesFilterText>
        </FavoritesFilterButton>
      </FavoritesFindFilterContainer>

      {loading && (
        <FullScreenCenter>
          <ActivityIndicator />
        </FullScreenCenter>
      )}

      <FlatList
        data={filteredItems}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={() => {
          if (!filteredItems.length) return <></>;
          return <CellItemSeparator />;
        }}
        ItemSeparatorComponent={() => <CellItemSeparator />}
        renderItem={({ item }) => <FavoriteItemCell favItem={item.StoreItem} sessionId={sessionId} />}
      />
    </FullScreenWhite>
  );
};
