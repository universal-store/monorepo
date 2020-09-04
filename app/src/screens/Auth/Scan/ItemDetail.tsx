/** @format */

import React, { useState } from 'react';

import { AuthStackParams } from '&navigation';
import { StackScreenProps } from '@react-navigation/stack';

// Components
import {
  AddCartButton,
  AddCartButtonContainer,
  AddCartButtonText,
  FuturaBoldLarge as ItemNameText,
  ItemDetailContainer,
  ItemDetailModalContainer,
  ItemDetailModalSheet,
  ItemPriceText,
  ItemSizeText,
  ItemSubDetailRow,
  ProductDetailsHeaderText,
  ProductDetailsText,
  screenHeight,
} from '&components';

type ItemDetailProps = StackScreenProps<AuthStackParams, 'ItemDetail'>;

export const ItemDetail = ({ route, navigation }: ItemDetailProps) => {
  const { itemData } = route.params;

  const [addedToCart, setAddedToCart] = useState<boolean>(false);

  const renderContent = () => (
    <ItemDetailModalContainer>
      <ItemNameText numberOfLines={2}>{itemData.longName}</ItemNameText>
      <ItemSubDetailRow>
        <ItemSizeText numberOfLines={1}>{itemData.size}</ItemSizeText>
        <ItemPriceText>${itemData.price}</ItemPriceText>
      </ItemSubDetailRow>

      <ProductDetailsHeaderText>Product Details</ProductDetailsHeaderText>
      <ProductDetailsText numberOfLines={5}>{itemData.description}</ProductDetailsText>
    </ItemDetailModalContainer>
  );

  return (
    <ItemDetailContainer>
      <ItemDetailModalSheet initialSnap={1} renderContent={renderContent} snapPoints={[screenHeight - 144, 390, 190]} />

      <AddCartButtonContainer>
        <AddCartButton added={addedToCart} onPress={() => setAddedToCart(!addedToCart)}>
          <AddCartButtonText added={addedToCart}>{addedToCart ? 'Added!' : 'Add to Cart'}</AddCartButtonText>
        </AddCartButton>
      </AddCartButtonContainer>
    </ItemDetailContainer>
  );
};
