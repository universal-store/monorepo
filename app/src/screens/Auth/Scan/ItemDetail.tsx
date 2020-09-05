/** @format */

import React from 'react';

// Libraries
import BottomSheet from 'reanimated-bottom-sheet';

// Components
import {
  AddCartButton,
  FuturaBoldLarge as ItemNameText,
  ItemDetailContainer,
  ItemDetailHeaderButton,
  ItemDetailHeaderRow,
  ItemDetailModalContainer,
  ItemPriceText,
  ItemSizeText,
  ItemSubDetailRow,
  ProductDetailsHeaderText,
  ProductDetailsText,
  screenHeight,
} from '&components';

// Iconography
import { CartIcon, CloseIcon } from '&icons';

// Navigation
import { AuthStackParams } from '&navigation';
import { StackScreenProps } from '@react-navigation/stack';

type ItemDetailProps = StackScreenProps<AuthStackParams, 'ItemDetail'>;

export const ItemDetail = ({ route, navigation }: ItemDetailProps) => {
  const { itemData } = route.params;

  const renderContent = () => (
    <ItemDetailModalContainer>
      <ItemNameText numberOfLines={2}>{itemData.longName}</ItemNameText>
      <ItemSubDetailRow>
        <ItemSizeText numberOfLines={1}>{itemData.quantity}</ItemSizeText>
        <ItemPriceText>${itemData.price}</ItemPriceText>
      </ItemSubDetailRow>

      <ProductDetailsHeaderText>Product Details</ProductDetailsHeaderText>
      <ProductDetailsText numberOfLines={5}>{itemData.description}</ProductDetailsText>
    </ItemDetailModalContainer>
  );

  return (
    <ItemDetailContainer>
      <ItemDetailHeaderRow>
        <ItemDetailHeaderButton onPress={() => navigation.goBack()}>
          <CloseIcon />
        </ItemDetailHeaderButton>
        <ItemDetailHeaderButton>
          <CartIcon />
        </ItemDetailHeaderButton>
      </ItemDetailHeaderRow>

      <BottomSheet initialSnap={1} renderContent={renderContent} snapPoints={[screenHeight - 144, 390, 390]} />

      <AddCartButton />
    </ItemDetailContainer>
  );
};
