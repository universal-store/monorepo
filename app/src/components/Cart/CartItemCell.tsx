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
  sessionId: string;
  cartItem: StoreItemInfoFragment;
}

export const CartItemCell = ({ cartItem, sessionId }: CartItemCellProps) => {
  const { StoreItemPic, longName, price, quantity, barcodeId } = cartItem;

  // Mutations
  const [addToFavoritesMutation] = useAddUserFavoriteItemMutation();

  // Get User Data
  const { data: userData } = useGetUserQuery({ variables: { sessionId } });
  const userId = userData?.User[0].id;

  // Check if in favorites
  const { data: userFavorites } = useCheckItemInFavoritesQuery({ variables: { barcodeId, sessionId } });
  const [favorite, setFavorite] = useState<boolean>(false);

  useEffect(() => {
    if (userFavorites) {
      setFavorite(userFavorites.StoreItem_by_pk?.UserFavoriteItems.length !== 0);
    }
  }, [favorite, userFavorites]);

  return (
    <CartItemCellContainer>
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
                    refetchQueries: () => [
                      { query: CheckItemInFavoritesDocument, variables: { barcodeId, sessionId } },
                    ],
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
