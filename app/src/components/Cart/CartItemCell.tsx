/** @format */

import React, { useEffect, useState } from 'react';

// Components
import {
  CartItemCellContainer,
  CartItemCellContainerSmall,
  CartItemCellTextContainer,
  CartItemNameText,
  CartItemQuantityText,
  CartItemImageContainer,
  CartItemQuantityNumberText,
  CartItemPriceText,
  CartItemAddFavorite,
  CartItemCellTextRowContainer,
  CartItemImage,
  CartItemAddFavoriteButton,
} from './Styled';

// Navigation
import { useNavigation } from '@react-navigation/native';

// GraphQL
import {
  CheckItemInFavoritesDocument,
  StoreItemInfoFragment,
  useGetUserQuery,
  useCheckItemInFavoritesQuery,
  useAddUserFavoriteItemMutation,
} from '&graphql';

// Props
interface CartItemCellProps {
  cartItem: StoreItemInfoFragment;
}

export const CartItemCell = ({ cartItem }: CartItemCellProps) => {
  const { StoreItemPic, longName, price, quantity, barcodeId } = cartItem;

  // Navigation
  const navigation = useNavigation();

  // Mutations
  const [addToFavoritesMutation] = useAddUserFavoriteItemMutation();

  // Get User Data
  const { data } = useGetUserQuery();
  const userId = data?.User[0].id!;

  // Check if in favorites
  const [favorite, setFavorite] = useState<boolean>(true);
  const { data: userFavorites } = useCheckItemInFavoritesQuery({ variables: { barcodeId } });

  useEffect(() => {
    if (userFavorites) {
      setFavorite(userFavorites.StoreItem_by_pk?.UserFavoriteItems.length !== 0);
    }
  }, [favorite, userFavorites]);

  return (
    <CartItemCellContainer onPress={() => navigation.navigate('ItemDetail', { barcodeId })}>
      <CartItemCellContainerSmall>
        <CartItemImageContainer>
          {StoreItemPic && (
            <CartItemImage
              source={{
                uri: StoreItemPic.size64,
              }}
            />
          )}
        </CartItemImageContainer>
        <CartItemCellTextContainer>
          <CartItemCellTextRowContainer>
            <CartItemNameText numberOfLines={1}>{longName}</CartItemNameText>
            <CartItemQuantityText>
              Qty <CartItemQuantityNumberText>{quantity}</CartItemQuantityNumberText>
            </CartItemQuantityText>
          </CartItemCellTextRowContainer>

          <CartItemCellTextRowContainer>
            <CartItemPriceText>{price}</CartItemPriceText>
            {!favorite && (
              <CartItemAddFavoriteButton
                onPress={() =>
                  void addToFavoritesMutation({
                    variables: { userId, itemBarcodeId: barcodeId },
                    refetchQueries: () => [{ query: CheckItemInFavoritesDocument, variables: { barcodeId } }],
                  }).then(() => setFavorite(true))
                }
              >
                <CartItemAddFavorite>Add to Favorites</CartItemAddFavorite>
              </CartItemAddFavoriteButton>
            )}
          </CartItemCellTextRowContainer>
        </CartItemCellTextContainer>
      </CartItemCellContainerSmall>
    </CartItemCellContainer>
  );
};
