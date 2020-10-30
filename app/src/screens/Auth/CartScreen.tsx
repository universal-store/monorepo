/** @format */

import React, { useEffect } from 'react';

// Components
import { FlatList } from 'react-native';

import {
  FullScreenWhite,
  CartPriceContainer,
  CartSubtotalText,
  CartSubtotalPrice,
  CartHeaderTextRegular,
  CartHeaderTextBold,
  CartHeaderTextContainer,
  CartItemCell,
  CellItemSeparator,
  LoadingOverlay,
} from '&components';

// GraphQL
import { useGetUserCartItemsQuery } from '&graphql';

export const CartScreen = () => {
  const { data, loading, startPolling, stopPolling } = useGetUserCartItemsQuery();
  const cartData = data?.UserCartItem;

  let cartTotal = 0;
  if (cartData) {
    cartData.forEach(cartItem => (cartTotal += parseFloat(cartItem.StoreItem.price.substring(1))));
  }

  useEffect(() => {
    startPolling(500);
    return () => stopPolling();
  });

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

      {loading && <LoadingOverlay />}

      {cartData && (
        <FlatList
          data={cartData}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={() => {
            if (!cartData.length) return <></>;
            return <CellItemSeparator />;
          }}
          ItemSeparatorComponent={() => <CellItemSeparator />}
          renderItem={({ item }) => <CartItemCell key={item.id} cartItem={item.StoreItem} />}
        />
      )}
    </FullScreenWhite>
  );
};
