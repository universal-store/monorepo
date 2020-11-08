/** @format */

import React from 'react';
import { FlatList, ScrollView } from 'react-native';

// Libraries
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

// Components
import {
  CartHeaderTextBold,
  CartHeaderTextRegular,
  CartItemCell,
  CheckoutButton,
  CheckoutHeaderBackButton,
  CheckoutHeaderContainer,
  CheckoutHeaderPadding,
  CheckoutHeaderText,
  CheckoutPaymentDetailsContainer,
  CheckoutText,
  CheckoutText2,
  CheckoutTextBold,
  CheckoutTextPurple,
  FullScreenWhite,
  LoadingOverlay,
} from '&components';

// Iconography
import { CloseIcon } from '&icons';

// Navigation
import { useNavigation } from '@react-navigation/native';

// GraphQL
import { useGetUserCartItemsQuery } from '&graphql';

// Utils
import { hapticOptions } from '&utils';

// Constants
const SALES_TAX_PERCENT = 0.04;

export const CheckoutScreen = () => {
  const navigation = useNavigation();

  const { data, loading } = useGetUserCartItemsQuery();
  const cartData = data?.UserCartItem;

  if (loading || !cartData) {
    return (
      <FullScreenWhite>
        <LoadingOverlay />
      </FullScreenWhite>
    );
  }

  const subtotal = cartData.reduce((a, cartItem) => a + parseFloat(cartItem.StoreItem.price.substring(1)), 0);
  const sales_tax = (subtotal * SALES_TAX_PERCENT).toFixed(2);
  const total = subtotal + parseFloat(sales_tax);

  return (
    <FullScreenWhite>
      <CheckoutHeaderContainer>
        <CheckoutHeaderBackButton
          onPress={() => {
            ReactNativeHapticFeedback.trigger('selection', hapticOptions);
            navigation.goBack();
          }}
        >
          <CloseIcon />
        </CheckoutHeaderBackButton>
        <CartHeaderTextBold>
          Shopping <CartHeaderTextRegular>Cart</CartHeaderTextRegular>
        </CartHeaderTextBold>
        <CheckoutHeaderPadding />
      </CheckoutHeaderContainer>

      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        <CheckoutHeaderText>{`Items (${cartData.length})`}</CheckoutHeaderText>
        {cartData.map(cartItem => (
          <CartItemCell inCheckout key={cartItem.id} cartItem={cartItem.StoreItem} />
        ))}

        <CheckoutHeaderText>Payment Details</CheckoutHeaderText>
        <CheckoutPaymentDetailsContainer>
          <CheckoutText>VISA Debit (1834)</CheckoutText>
          <CheckoutTextPurple>Choose a Different Method</CheckoutTextPurple>
        </CheckoutPaymentDetailsContainer>

        <CheckoutHeaderText>Order Total</CheckoutHeaderText>
        <CheckoutPaymentDetailsContainer>
          <CheckoutText>Sub-total:</CheckoutText>
          <CheckoutText2>${subtotal}</CheckoutText2>
        </CheckoutPaymentDetailsContainer>
        <CheckoutPaymentDetailsContainer>
          <CheckoutText>Sales Tax:</CheckoutText>
          <CheckoutText2>${sales_tax}</CheckoutText2>
        </CheckoutPaymentDetailsContainer>
        <CheckoutPaymentDetailsContainer>
          <CheckoutTextBold>TOTAL:</CheckoutTextBold>
          <CheckoutTextPurple>${total}</CheckoutTextPurple>
        </CheckoutPaymentDetailsContainer>
      </ScrollView>

      <CheckoutButton
        text="Pay Now"
        isCheckoutScreen
        onPress={() => {
          ReactNativeHapticFeedback.trigger('selection', hapticOptions);
          navigation.goBack();
        }}
      />
    </FullScreenWhite>
  );
};
