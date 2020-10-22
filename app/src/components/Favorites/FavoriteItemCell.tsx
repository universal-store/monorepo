/** @format */

import React from 'react';

// Libraries
import Swipeable from 'react-native-gesture-handler/Swipeable';

// Components
import {
  FavoriteItemCellContainer,
  FavoritesItemCellContainerSmall,
  FavoritesItemCellTextContainer,
  FavoritesItemNameText,
  FavoritesItemPriceText,
  FavoriteItemImageContainer,
  FavoriteItemImage,
} from './Styled';

import { AnimatedSwipeRemoveContainer, AnimatedSwipeText } from '../SwipeGesture';

// Navigation
import { useNavigation } from '@react-navigation/native';

// GraphQL
import {
  useGetUserQuery,
  StoreItemInfoFragment,
  GetUserFavoriteItemsDocument,
  useRemoveUserFavoriteItemMutation,
} from '&graphql';

// Props
interface FavoriteItemCellProps {
  favItem: StoreItemInfoFragment;
}
export const FavoriteItemCell = ({ favItem }: FavoriteItemCellProps) => {
  const { StoreItemPic, longName, price, barcodeId, shortName } = favItem;

  // Navigation
  const navigation = useNavigation();

  // Mutations
  const [removeFromFavoritesMutation] = useRemoveUserFavoriteItemMutation();

  // Get User Data
  const { data } = useGetUserQuery();
  const userId = data?.User[0].id!;

  const renderRightActions = () => (
    <AnimatedSwipeRemoveContainer
      onPress={() =>
        void removeFromFavoritesMutation({
          variables: { userId, itemBarcodeId: barcodeId },
          refetchQueries: [{ query: GetUserFavoriteItemsDocument }],
        })
      }
    >
      <AnimatedSwipeText>Remove</AnimatedSwipeText>
    </AnimatedSwipeRemoveContainer>
  );

  return (
    <Swipeable friction={2} renderRightActions={renderRightActions}>
      <FavoriteItemCellContainer onPress={() => navigation.navigate('ItemDetail', { barcodeId })}>
        <FavoritesItemCellContainerSmall>
          {StoreItemPic && (
            <FavoriteItemImageContainer>
              <FavoriteItemImage
                source={{
                  uri: StoreItemPic.size64,
                }}
              />
            </FavoriteItemImageContainer>
          )}

          <FavoritesItemCellTextContainer>
            <FavoritesItemNameText numberOfLines={1}>{shortName ? shortName : longName}</FavoritesItemNameText>
            <FavoritesItemPriceText>{price}</FavoritesItemPriceText>
          </FavoritesItemCellTextContainer>
        </FavoritesItemCellContainerSmall>
      </FavoriteItemCellContainer>
    </Swipeable>
  );
};
