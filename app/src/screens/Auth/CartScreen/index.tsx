/** @format */

import React, { useCallback, useContext } from 'react';

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

// React Navigation
import { useFocusEffect } from '@react-navigation/native';

// User Store
import { AuthContext } from '&stores';

// GraphQL
import { useGetUserCartItemsQuery } from '&graphql';

export const CartScreen = () => {
  const authContext = useContext(AuthContext);
  const sessionId = authContext?.token!;

  const { data, refetch } = useGetUserCartItemsQuery({ variables: { sessionId } });
  const cartData = data?.UserCartItem;

  let cartTotal = 0;
  if (cartData) {
    cartData.forEach(cartItem => (cartTotal += parseFloat(cartItem.StoreItem.price.substring(1))));
  }

  useFocusEffect(
    useCallback(() => {
      void refetch();
    }, [])
  );

  return (
    <FullScreenWhite>
      <CartHeaderTextContainer>
        <CartHeaderTextBold>
          Shopping <CartHeaderTextRegular>Cart</CartHeaderTextRegular>
        </CartHeaderTextBold>
      </CartHeaderTextContainer>

      <CartPriceContainer>
        <CartSubtotalText>Subtotal: </CartSubtotalText>
        <CartSubtotalPrice>${cartTotal.toFixed(2)}</CartSubtotalPrice>
      </CartPriceContainer>

      {cartData &&
        cartData.map(cartItem => (
          <CartItemCell key={cartItem.id} cartItem={cartItem.StoreItem} sessionId={sessionId} />
        ))}
    </FullScreenWhite>
  );
};
