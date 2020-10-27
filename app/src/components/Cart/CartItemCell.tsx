/** @format */

import React, { useEffect, useState } from 'react';

// Libraries
import Swipeable from 'react-native-gesture-handler/Swipeable';

// Components
import {
  CartItemCellContainer,
  CartItemCellContainerSmall,
  CartItemCellTextContainer,
  CartItemNameText,
  CartItemImageContainer,
  CartItemPriceText,
  CartItemImage,
} from './Styled';

import { AnimatedSwipeFavoriteContainer, AnimatedSwipeRemoveContainer, AnimatedSwipeText } from '../SwipeGesture';

// Navigation
import { useNavigation } from '@react-navigation/native';

// GraphQL
import {
  StoreItemInfoFragment,
  GetUserCartItemsDocument,
  CheckItemInFavoritesDocument,
  GetUserFavoriteItemsDocument,
  useGetUserQuery,
  useCheckItemInFavoritesQuery,
  useRemoveUserCartItemMutation,
  useAddUserFavoriteItemMutation,
  useRemoveUserFavoriteItemMutation,
} from '&graphql';

// Props
interface CartItemCellProps {
  cartItem: StoreItemInfoFragment;
}

export const CartItemCell = ({ cartItem }: CartItemCellProps) => {
  const { StoreItemPic, shortName, longName, price, barcodeId } = cartItem;

  // Navigation
  const navigation = useNavigation();

  // Mutations
  const [addToFavoritesMutation] = useAddUserFavoriteItemMutation();
  const [removeFromFavoritesMutation] = useRemoveUserFavoriteItemMutation();

  const [removeFromCartMutation] = useRemoveUserCartItemMutation();

  // Get User Data
  const { data } = useGetUserQuery();
  const userId = data?.User[0].id!;

  // Check if in favorites
  const [favorite, setFavorite] = useState<boolean>(true);
  const { data: userFavorites } = useCheckItemInFavoritesQuery({ variables: { barcodeId } });

  // Swipeable Actions
  const renderLeftActions = () => (
    <AnimatedSwipeFavoriteContainer
      onPress={() => {
        if (favorite) {
          void removeFromFavoritesMutation({
            variables: { userId, itemBarcodeId: barcodeId },
            refetchQueries: [
              { query: GetUserFavoriteItemsDocument },
              { query: CheckItemInFavoritesDocument, variables: { barcodeId } },
            ],
          });
        } else {
          void addToFavoritesMutation({
            variables: { userId, itemBarcodeId: barcodeId },
            refetchQueries: [
              { query: GetUserFavoriteItemsDocument },
              { query: CheckItemInFavoritesDocument, variables: { barcodeId } },
            ],
          });
        }
      }}
    >
      <AnimatedSwipeText>{favorite ? 'Unfavorite' : 'Favorite'}</AnimatedSwipeText>
    </AnimatedSwipeFavoriteContainer>
  );

  const renderRightActions = () => (
    <AnimatedSwipeRemoveContainer
      onPress={() =>
        void removeFromCartMutation({
          variables: { userId, itemBarcodeId: barcodeId },
          refetchQueries: [{ query: GetUserCartItemsDocument }],
        })
      }
    >
      <AnimatedSwipeText>Remove</AnimatedSwipeText>
    </AnimatedSwipeRemoveContainer>
  );

  useEffect(() => {
    if (userFavorites) {
      setFavorite(userFavorites.StoreItem_by_pk?.UserFavoriteItems.length !== 0);
    }
  }, [favorite, userFavorites]);

  return (
    <Swipeable friction={2} renderLeftActions={renderLeftActions} renderRightActions={renderRightActions}>
      <CartItemCellContainer onPress={() => navigation.navigate('ItemDetail', { barcodeId, scanned: true })}>
        <CartItemCellContainerSmall>
          {StoreItemPic && (
            <CartItemImageContainer>
              <CartItemImage
                source={{
                  uri: StoreItemPic.size64,
                }}
              />
            </CartItemImageContainer>
          )}

          <CartItemCellTextContainer>
            <CartItemNameText numberOfLines={1}>{shortName ? shortName : longName}</CartItemNameText>
            <CartItemPriceText>{price}</CartItemPriceText>
          </CartItemCellTextContainer>
        </CartItemCellContainerSmall>
      </CartItemCellContainer>
    </Swipeable>
  );
};
