/** @format */

import React from 'react';

// Libraries
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

// Components
import {
  OrderCellContainer,
  OrderCellHeaderRow,
  OrderCellImage,
  OrderCellInnerContainer,
  OrderCellItemsText,
  OrderCellPriceText,
  OrderCellPurchaseNumText,
  OrderCellTitleText,
} from './Styled';

// GraphQL
import { UserOrderInfoFragment } from '&graphql';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import { hapticOptions } from '&utils';

// Constants
const SALES_TAX_PERCENT = 0.04;

// DayJS From Now Plugin
dayjs.extend(relativeTime);

interface OrderCellProps {
  orderData: UserOrderInfoFragment;
}

export const OrderCell = ({ orderData }: OrderCellProps) => {
  const { id, created_at, StoreItems } = orderData;

  // Constants
  const time_since = dayjs(created_at).fromNow(true);

  const subtotal = StoreItems.reduce((a, cartItem) => a + parseFloat(cartItem.price.substring(1)), 0);
  const sales_tax = (subtotal * SALES_TAX_PERCENT).toFixed(2);
  const total = (subtotal + parseFloat(sales_tax)).toFixed(2);

  const store = StoreItems[0].Store;

  return (
    <OrderCellContainer
      onPress={() => {
        ReactNativeHapticFeedback.trigger('selection', hapticOptions);
      }}
    >
      {store.StorePic && <OrderCellImage resizeMode="contain" source={{ uri: store.StorePic.size64 }} />}

      <OrderCellInnerContainer>
        <OrderCellHeaderRow>
          <OrderCellTitleText numberOfLines={1}>{store.name}</OrderCellTitleText>
          <OrderCellItemsText>{time_since}</OrderCellItemsText>
        </OrderCellHeaderRow>

        <OrderCellHeaderRow>
          <OrderCellPurchaseNumText numberOfLines={1}>Purchase No: {id.substring(0, 18)}</OrderCellPurchaseNumText>
          <OrderCellPriceText>${total}</OrderCellPriceText>
        </OrderCellHeaderRow>
      </OrderCellInnerContainer>
    </OrderCellContainer>
  );
};
