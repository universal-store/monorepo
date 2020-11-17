/** @format */

import React from 'react';

// Libraries
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

// Components
import { ScrollView } from 'react-native';

import {
  CartHeaderTextBold,
  CartHeaderTextRegular,
  CartItemCell,
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
  OrderStoreDetailContainer,
  StoreDetailHeaderRow,
  StoreDetailImage,
  StoreDetailImageContainer,
  StoreNameText,
} from '&components';

// Iconography
import { CloseIcon } from '&icons';

// Navigation
import { AuthStackParams } from '&navigation';
import { useNavigation } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';

// GraphQL
import { StorePreviewFragment } from '&graphql';

// Utils
import { hapticOptions } from '&utils';

// Constants
const SALES_TAX_PERCENT = 0.04;

type ReceiptScreenProps = StackScreenProps<AuthStackParams, 'ReceiptScreen'>;

export const ReceiptScreen = ({ route }: ReceiptScreenProps) => {
  const { orderData } = route.params;

  let storeData: StorePreviewFragment | undefined;

  if (orderData.StoreItems.length > 0) storeData = orderData.StoreItems[0].Store;

  const navigation = useNavigation();

  // Price Constants
  const subtotal = orderData.StoreItems.reduce((a, orderItem) => a + parseFloat(orderItem.price.substring(1)), 0);
  const sales_tax = (subtotal * SALES_TAX_PERCENT).toFixed(2);
  const total = (subtotal + parseFloat(sales_tax)).toFixed(2);

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
          Purchase <CartHeaderTextRegular>Details</CartHeaderTextRegular>
        </CartHeaderTextBold>
        <CheckoutHeaderPadding />
      </CheckoutHeaderContainer>

      {storeData && (
        <OrderStoreDetailContainer>
          {storeData.StorePic && (
            <StoreDetailImageContainer>
              <StoreDetailImage resizeMode="contain" source={{ uri: storeData.StorePic.size64 }} />
            </StoreDetailImageContainer>
          )}
          <StoreNameText>{storeData.name}</StoreNameText>
        </OrderStoreDetailContainer>
      )}

      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        <CheckoutHeaderText>{`Items (${orderData.StoreItems.length})`}</CheckoutHeaderText>
        {orderData.StoreItems.map(storeItem => (
          <CartItemCell inCheckout key={storeItem.barcodeId} cartItem={storeItem} />
        ))}

        <CheckoutHeaderText>Payment Details</CheckoutHeaderText>
        <CheckoutPaymentDetailsContainer>
          <CheckoutText>VISA Debit (1834)</CheckoutText>
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
    </FullScreenWhite>
  );
};
