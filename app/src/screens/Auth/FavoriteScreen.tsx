/** @format */

import React, { useEffect, useState } from 'react';

// Components
import { FlatList } from 'react-native';

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
  LoadingOverlay,
} from '&components';

// Iconography
import { FindIcon } from '&icons';

// GraphQL
import { useGetUserFavoriteItemsQuery, UserFavoriteItemInfoFragment } from '&graphql';

// Utils
import { useDebounce } from '&utils';

export const FavoriteScreen = () => {
  const { data, loading } = useGetUserFavoriteItemsQuery();
  const favData = data?.UserFavoriteItem;

  const [itemQuery, setItemQuery] = useState<string>('');
  const [filteredItems, setFilteredItems] = useState<UserFavoriteItemInfoFragment[]>([]);

  // Causes a delay before updating item filter
  const debouncedItemQuery = useDebounce(itemQuery, 500);

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

      {loading && <LoadingOverlay />}

      <FlatList
        data={filteredItems}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={() => {
          if (!filteredItems.length) return <></>;
          return <CellItemSeparator />;
        }}
        ItemSeparatorComponent={() => <CellItemSeparator />}
        renderItem={({ item }) => <FavoriteItemCell favItem={item.StoreItem} />}
      />
    </FullScreenWhite>
  );
};
