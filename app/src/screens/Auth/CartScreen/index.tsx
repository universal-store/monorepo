/** @format */

import React from 'react';

// Components
import {
  FullScreenWhite,
  Separator,
  CartTitleText,
  CartPriceRow,
  CartSubtotalText,
  CartSubtotalPrice,
} from '&components';

// TODO: The price will have to be made dynamic with the total
export const CartScreen = () => (
  <FullScreenWhite>
    <CartTitleText> Shopping Cart </CartTitleText>
    <Separator />
    <CartPriceRow>
      <CartSubtotalText> Subtotal:</CartSubtotalText>
      <CartSubtotalPrice> $8.97 </CartSubtotalPrice>
    </CartPriceRow>
    <Separator />
  </FullScreenWhite>
);
