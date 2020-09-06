/** @format */

import React, { useState } from 'react';

import {
  AddCartButtonContainer,
  AddCartButtonText,
  FuturaBoldLarge as ItemText,
  ItemAdditionalInfoScroll,
  ItemDetailContainer,
  ItemDetailFavoriteButton,
  ItemDetailHeaderButton,
  ItemDetailHeaderRow,
  ItemDetailImage,
  ItemDetailImageContainer,
  ItemDetailModalContainer,
  ItemNameText,
  ItemSizeText,
  ItemSubDetailRow,
  ProductDetailsHeaderText,
  ProductDetailsText,
} from '&components';

// Iconography
import { CartIcon, CloseIcon, HeartIconOff, HeartIconOn } from '&icons';

// GraphQL
import { GetStoreItemDocument, useGetStoreItemQuery, useUpdateStoreItemPurchaseMutation } from '&graphql';

// Navigation
import { AuthStackParams } from '&navigation';
import { StackScreenProps } from '@react-navigation/stack';

type ItemDetailProps = StackScreenProps<AuthStackParams, 'ItemDetail'>;

export const ItemDetail = ({ route, navigation }: ItemDetailProps) => {
  const { barcodeId } = route.params;

  const [favorite, setFavorite] = useState<boolean>(false);

  const { data } = useGetStoreItemQuery({ variables: { barcodeId } });
  const itemData = data?.StoreItem_by_pk;

  const [updatePurchaseMutation] = useUpdateStoreItemPurchaseMutation({
    refetchQueries: () => [{ query: GetStoreItemDocument, variables: { barcodeId } }],
  });

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
            <ItemNameText numberOfLines={2}>{itemData.longName}</ItemNameText>

            <ItemDetailFavoriteButton onPress={() => setFavorite(!favorite)}>
              {favorite ? <HeartIconOn /> : <HeartIconOff />}
            </ItemDetailFavoriteButton>
          </ItemSubDetailRow>

          <ItemAdditionalInfoScroll bounces={false} showsVerticalScrollIndicator={false}>
            <ItemSubDetailRow>
              <ItemSizeText numberOfLines={1}>{itemData.quantity}</ItemSizeText>
              <ItemText>{itemData.price}</ItemText>
            </ItemSubDetailRow>

            <ProductDetailsHeaderText>Product Details</ProductDetailsHeaderText>
            <ProductDetailsText>{itemData.description}</ProductDetailsText>
          </ItemAdditionalInfoScroll>

          <AddCartButtonContainer
            added={itemData.purchased}
            onPress={() => void updatePurchaseMutation({ variables: { barcodeId, purchased: !itemData.purchased } })}
          >
            <AddCartButtonText added={itemData.purchased}>
              {itemData.purchased ? 'Added!' : 'Add to Cart'}
            </AddCartButtonText>
          </AddCartButtonContainer>
        </ItemDetailModalContainer>
      )}
    </ItemDetailContainer>
  );
};
