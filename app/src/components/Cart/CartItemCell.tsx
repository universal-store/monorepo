/** @format */

import React from 'react';

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
} from './Styled';

export const CartItemCell = () => {
  return (
    <CartItemCellContainer>
      <CartItemCellContainerSmall>
        <CartItemImageContainer />
        <CartItemCellTextContainer>
          <CartItemCellTextRowContainer>
            <CartItemNameText numberOfLines={1}>Hand Sanitizer</CartItemNameText>
            <CartItemQuantityText>
              Qty <CartItemQuantityNumberText>1</CartItemQuantityNumberText>
            </CartItemQuantityText>
          </CartItemCellTextRowContainer>

          <CartItemCellTextRowContainer>
            <CartItemPriceText>$2.99</CartItemPriceText>
            <CartItemAddFavorite>Add to Favorites</CartItemAddFavorite>
          </CartItemCellTextRowContainer>
        </CartItemCellTextContainer>
      </CartItemCellContainerSmall>
    </CartItemCellContainer>
  );
};
