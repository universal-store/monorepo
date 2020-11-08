/** @format */

import React from 'react';

// Libraries
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

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
  CheckoutButton,
  EmptyCartItemsState,
  LoadingOverlay,
} from '&components';

// Navigation
import { AuthStackParams } from '&navigation';
import { StackScreenProps } from '@react-navigation/stack';

// GraphQL
import { useGetUserCartItemsQuery } from '&graphql';

// Utils
import { hapticOptions } from '&utils';

type CartScreenProps = StackScreenProps<AuthStackParams, 'TabNavigation'>;

export const CartScreen = ({ navigation }: CartScreenProps) => {
  const { data, loading } = useGetUserCartItemsQuery();
  const cartData = data?.UserCartItem;

  let cartTotal = 0;
  if (cartData) {
    cartData.forEach(cartItem => (cartTotal += parseFloat(cartItem.StoreItem.price.substring(1))));
  }

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

      {cartData && cartData.length > 0 ? (
        <>
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
          <CheckoutButton
            text="Proceed to Checkout"
            onPress={() => {
              ReactNativeHapticFeedback.trigger('selection', hapticOptions);

              navigation.navigate('ScanningScreen');
            }}
          />
        </>
      ) : (
        <EmptyCartItemsState />
      )}
    </FullScreenWhite>
  );
};
