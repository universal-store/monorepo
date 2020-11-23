/** @format */

import React, { useEffect, useState } from 'react';

// Libraries
import Swipeable from 'react-native-gesture-handler/Swipeable';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

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
  CheckItemInFavoritesDocument,
  useGetUserQuery,
  useCheckItemInFavoritesQuery,
  useRemoveUserCartItemMutation,
  useAddUserFavoriteItemMutation,
  useRemoveUserFavoriteItemMutation,
  PopularItemInfoFragment,
  GetUserFavoriteItemsDocument,
  GetUserCartItemsDocument,
} from '&graphql';

// Utils
import { hapticOptions } from '&utils';

// Props
interface CartItemCellProps {
  inCheckout: boolean;
  cartItem: StoreItemInfoFragment | PopularItemInfoFragment;
}

export const CartItemCell = ({ cartItem, inCheckout }: CartItemCellProps) => {
  const { StoreItemPic, shortName, longName, price, barcodeId, id: itemId } = cartItem;

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
  const { data: userFavorites } = useCheckItemInFavoritesQuery({ variables: { itemId } });

  // Swipeable Actions
  const renderLeftActions = () => (
    <AnimatedSwipeFavoriteContainer
      onPress={() => {
        if (favorite) {
          void removeFromFavoritesMutation({
            variables: { userId, itemId },
            refetchQueries: [
              { query: GetUserFavoriteItemsDocument },
              { query: CheckItemInFavoritesDocument, variables: { itemId } },
            ],
          });
        } else {
          void addToFavoritesMutation({
            variables: { userId, itemId },
            refetchQueries: [
              { query: GetUserFavoriteItemsDocument },
              { query: CheckItemInFavoritesDocument, variables: { itemId } },
            ],
          });
        }

        ReactNativeHapticFeedback.trigger('impactMedium', hapticOptions);
      }}
    >
      <AnimatedSwipeText>{favorite ? 'Unfavorite' : 'Favorite'}</AnimatedSwipeText>
    </AnimatedSwipeFavoriteContainer>
  );

  const renderRightActions = () => (
    <AnimatedSwipeRemoveContainer
      onPress={() => {
        void removeFromCartMutation({
          variables: { userId, itemId },
          refetchQueries: [{ query: GetUserCartItemsDocument }],
        });

        ReactNativeHapticFeedback.trigger('impactMedium', hapticOptions);
      }}
    >
      <AnimatedSwipeText>Remove</AnimatedSwipeText>
    </AnimatedSwipeRemoveContainer>
  );

  useEffect(() => {
    if (userFavorites) {
      setFavorite(userFavorites.UserFavoriteItem.length !== 0);
    }
  }, [favorite, userFavorites]);

  if (inCheckout) {
    return (
      <CartItemCellContainer
        onPress={() => {
          ReactNativeHapticFeedback.trigger('selection', hapticOptions);
          navigation.navigate('ItemDetail', { barcodeId, scanned: true });
        }}
      >
        <CartItemCellContainerSmall>
          {StoreItemPic && (
            <CartItemImageContainer>
              <CartItemImage
                resizeMode="contain"
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
    );
  }

  return (
    <Swipeable friction={2} renderLeftActions={renderLeftActions} renderRightActions={renderRightActions}>
      <CartItemCellContainer
        onPress={() => {
          ReactNativeHapticFeedback.trigger('selection', hapticOptions);
          navigation.navigate('ItemDetail', { barcodeId, scanned: true });
        }}
      >
        <CartItemCellContainerSmall>
          {StoreItemPic && (
            <CartItemImageContainer>
              <CartItemImage
                resizeMode="contain"
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
