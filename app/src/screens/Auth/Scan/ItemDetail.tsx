/** @format */

import React from 'react';
import { View } from 'react-native';

// Libraries
import BottomSheet from 'reanimated-bottom-sheet';

import { AuthStackParams } from '&navigation';
import { StackScreenProps } from '@react-navigation/stack';

// Components
import {
  AddCartButton,
  FuturaBoldLarge as ItemNameText,
  ItemDetailContainer,
  ItemDetailModalContainer,
  ItemPriceText,
  ItemSizeText,
  ItemSubDetailRow,
  ProductDetailsHeaderText,
  ProductDetailsText,
  screenHeight,
} from '&components';

// Queries
import { useGetStoreItemQuery } from '&graphql';

type ItemDetailProps = StackScreenProps<AuthStackParams, 'ItemDetail'>;

export const ItemDetail = ({ route }: ItemDetailProps) => {
  const { barcodeId } = route.params;

  const { data } = useGetStoreItemQuery({ variables: { barcodeId } });
  const itemData = data?.StoreItem_by_pk;

  const renderContent = () => (
    <View style={{ elevation: 4 }}>
      <ItemDetailModalContainer>
        {itemData && (
          <>
            <ItemNameText numberOfLines={2}>{itemData.longName}</ItemNameText>
            <ItemSubDetailRow>
              <ItemSizeText numberOfLines={1}>{itemData.quantity}</ItemSizeText>
              <ItemPriceText>${Number(itemData.price).toFixed(2)}</ItemPriceText>
            </ItemSubDetailRow>

            <ProductDetailsHeaderText>Product Details</ProductDetailsHeaderText>
            <ProductDetailsText numberOfLines={5}>{itemData.description}</ProductDetailsText>
          </>
        )}
      </ItemDetailModalContainer>
    </View>
  );

  return (
    <ItemDetailContainer>
      <BottomSheet initialSnap={1} renderContent={renderContent} snapPoints={[screenHeight - 144, 410, 410]} />
      <AddCartButton />
    </ItemDetailContainer>
  );
};
