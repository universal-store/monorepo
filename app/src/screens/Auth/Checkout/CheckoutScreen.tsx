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
import {
  GetUserOrdersDocument,
  GetUserCartItemsDocument,
  useGetUserQuery,
  useGetUserCartItemsQuery,
  useCreateUserOrderMutation,
  useClearUserCartItemsMutation,
  usePurchaseStoreItemsMutation,
  UserOrderInfoFragment,
} from '&graphql';

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

  // Price Constants
  const subtotal = cartData.reduce((a, cartItem) => a + parseFloat(cartItem.StoreItem.price.substring(1)), 0);
  const sales_tax = (subtotal * SALES_TAX_PERCENT).toFixed(2);
  const total = (subtotal + parseFloat(sales_tax)).toFixed(2);

  // Get User Query
  const { data: userData } = useGetUserQuery();
  const userId = userData?.User[0].id!;

  // Mutations
  const [createOrderMutation] = useCreateUserOrderMutation();
  const [purchaseItemsMutation] = usePurchaseStoreItemsMutation();
  const [clearCartMutation] = useClearUserCartItemsMutation();

  /**
   * Creates order, sets items to purchased, and clears cart
   */
  const checkoutItems = async () => {
    if (userId) {
      const itemBarcodes = cartData.map(cartItem => cartItem.StoreItem.barcodeId);

      let orderData: UserOrderInfoFragment | undefined;

      await createOrderMutation({ variables: { userId }, refetchQueries: [{ query: GetUserOrdersDocument }] }).then(
        async res => {
          if (res.data && res.data.insert_UserOrder_one) {
            orderData = res.data.insert_UserOrder_one;

            if (orderData) {
              await purchaseItemsMutation({ variables: { itemBarcodes, orderId: orderData.id } });
              await clearCartMutation({ variables: { userId }, refetchQueries: [{ query: GetUserCartItemsDocument }] });
              await navigation.navigate('ReceiptScreen', { orderData });
            }
          }
        }
      );
    }
  };

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
          void checkoutItems();
        }}
      />
    </FullScreenWhite>
  );
};
