/** @format */

import React, { useState } from 'react';

import {
  AddCartButton,
  FuturaBoldLarge as ItemText,
  isLargeScreen,
  ItemDetailContainer,
  ItemDetailFavoriteButton,
  ItemDetailHeaderButton,
  ItemDetailHeaderRow,
  ItemDetailImage,
  ItemDetailImageContainer,
  ItemDetailModalContainer,
  ItemSizeText,
  ItemSubDetailRow,
  ProductDetailsHeaderText,
  ProductDetailsText,
} from '&components';

// Iconography
import { CartIcon, CloseIcon, HeartIconOff, HeartIconOn } from '&icons';

// Queries
import { useGetStoreItemQuery } from '&graphql';

// Navigation
import { AuthStackParams } from '&navigation';
import { StackScreenProps } from '@react-navigation/stack';
import { ScrollView } from 'react-native';

type ItemDetailProps = StackScreenProps<AuthStackParams, 'ItemDetail'>;

export const ItemDetail = ({ route, navigation }: ItemDetailProps) => {
  const { barcodeId } = route.params;

  const [favorite, setFavorite] = useState<boolean>(false);

  const { data } = useGetStoreItemQuery({ variables: { barcodeId } });
  const itemData = data?.StoreItem_by_pk;

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

      <ItemDetailImageContainer>
        {itemData && itemData.StoreItemPic && (
          <ItemDetailImage
            source={{
              uri: itemData.StoreItemPic.size256,
            }}
          />
        )}
      </ItemDetailImageContainer>

      {itemData && (
        <ItemDetailModalContainer>
          <ItemSubDetailRow>
            <ItemText numberOfLines={2}>{itemData.longName}</ItemText>
            <ItemDetailFavoriteButton onPress={() => setFavorite(!favorite)}>
              {favorite ? <HeartIconOn /> : <HeartIconOff />}
            </ItemDetailFavoriteButton>
          </ItemSubDetailRow>
          <ItemSubDetailRow>
            <ItemSizeText numberOfLines={1}>{itemData.quantity}</ItemSizeText>
            <ItemText>{itemData.price}</ItemText>
          </ItemSubDetailRow>

          <ScrollView bounces={false}>
            <ProductDetailsHeaderText>Product Details</ProductDetailsHeaderText>
            <ProductDetailsText numberOfLines={isLargeScreen ? 10 : 3}>{itemData.description}</ProductDetailsText>
          </ScrollView>

          <AddCartButton />
        </ItemDetailModalContainer>
      )}
    </ItemDetailContainer>
  );
};
