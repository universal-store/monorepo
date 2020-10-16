/** @format */

import React from 'react';

// Components
import {
  FullScreenWhite,
  CartPriceContainer,
  CartSubtotalText,
  CartSubtotalPrice,
  CartHeaderTextRegular,
  CartHeaderTextBold,
  CartHeaderTextContainer,
  CartItemCell,
} from '&components';

export const CartScreen = () => (
  <FullScreenWhite>
    <CartHeaderTextContainer>
      <CartHeaderTextBold>
        Shopping <CartHeaderTextRegular>Cart</CartHeaderTextRegular>
      </CartHeaderTextBold>
    </CartHeaderTextContainer>

    <CartPriceContainer>
      <CartSubtotalText>Subtotal: </CartSubtotalText>
      <CartSubtotalPrice>$8.97</CartSubtotalPrice>
    </CartPriceContainer>

    <CartItemCell />
    <CartItemCell />
    <CartItemCell />
  </FullScreenWhite>
);
