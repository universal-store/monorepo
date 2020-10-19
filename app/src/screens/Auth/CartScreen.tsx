/** @format */

import React, { useCallback } from 'react';
import { theme } from '&theme';

// Libraries
import { MaterialIndicator } from 'react-native-indicators';

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
  FullScreenCenter,
  LoadingOverlay,
} from '&components';

// React Navigation
import { useFocusEffect } from '@react-navigation/native';

// GraphQL
import { useGetUserCartItemsQuery } from '&graphql';

export const CartScreen = () => {
  const { data, refetch, loading } = useGetUserCartItemsQuery();
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
