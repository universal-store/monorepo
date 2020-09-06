/** @format */

import React, { useState } from 'react';

// Libraries
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';

// Components
import {
  AddCartButton,
  AddCartButtonContainer,
  AddCartButtonText,
  FuturaBoldLarge as ItemText,
  isiPhoneX,
  ItemDetailContainer,
  ItemDetailFavoriteButton,
  ItemDetailHeaderButton,
  ItemDetailHeaderRow,
  ItemDetailImage,
  ItemDetailImageContainer,
  ItemDetailModalContainer,
  ItemDetailModalHeader,
  ItemDetailModalHeaderTab,
  ItemNameText,
  ItemSizeText,
  ItemSubDetailRow,
  ProductDetailsHeaderText,
  ProductDetailsText,
  screenHeight,
} from '&components';

// Iconography
import { CartIcon, CloseIcon, HeartIconOff, HeartIconOn } from '&icons';

// GraphQL
import { GetStoreItemDocument, useGetStoreItemQuery, useUpdateStoreItemPurchaseMutation } from '&graphql';

// Navigation
import { AuthStackParams } from '&navigation';
import { StackScreenProps } from '@react-navigation/stack';

// Constants
const largeModalHeight = screenHeight - (isiPhoneX ? 122 : 92);
const smallModalHeight = screenHeight - (isiPhoneX ? 402 : 372);

const { eq, Value } = Animated;

type ItemDetailProps = StackScreenProps<AuthStackParams, 'ItemDetail'>;

export const ItemDetail = ({ route, navigation }: ItemDetailProps) => {
  const { barcodeId } = route.params;

  // TODO: Replace with User Favorites Mutation
  const [favorite, setFavorite] = useState<boolean>(false);

  const { data } = useGetStoreItemQuery({ variables: { barcodeId } });
  const itemData = data?.StoreItem_by_pk;

  const [updatePurchaseMutation] = useUpdateStoreItemPurchaseMutation();

  const modalHeight = new Value(1);

  const renderHeader = () => (
    <ItemDetailModalHeader>
      <ItemDetailModalHeaderTab />
    </ItemDetailModalHeader>
  );

  const renderContent = () => (
    <>
      {itemData && (
        <ItemDetailModalContainer>
          <ItemSubDetailRow>
            <ItemNameText numberOfLines={2}>{itemData.longName}</ItemNameText>

            <ItemDetailFavoriteButton onPress={() => setFavorite(!favorite)}>
              {favorite ? <HeartIconOn /> : <HeartIconOff />}
            </ItemDetailFavoriteButton>
          </ItemSubDetailRow>

          <ItemSubDetailRow>
            <ItemSizeText numberOfLines={1}>{itemData.quantity}</ItemSizeText>
            <ItemText>{itemData.price}</ItemText>
          </ItemSubDetailRow>

          <ProductDetailsHeaderText>Product Details</ProductDetailsHeaderText>
          <ProductDetailsText numberOfLines={eq(modalHeight, new Value(1)) ? 5 : 10}>
            {itemData.description}
          </ProductDetailsText>
        </ItemDetailModalContainer>
      )}
    </>
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

      <ItemDetailImageContainer>
        {itemData && itemData.StoreItemPic && (
          <ItemDetailImage
            source={{
              uri: itemData.StoreItemPic.size256,
            }}
          />
        )}
      </ItemDetailImageContainer>

      <BottomSheet
        initialSnap={1}
        callbackNode={modalHeight}
        renderHeader={renderHeader}
        renderContent={renderContent}
        enabledBottomInitialAnimation
        enabledContentGestureInteraction={false}
        snapPoints={[largeModalHeight, smallModalHeight]}
      />

      {itemData && (
        <AddCartButtonContainer>
          <AddCartButton
            added={itemData.purchased}
            onPress={() =>
              void updatePurchaseMutation({
                variables: { barcodeId, purchased: !itemData.purchased },
                refetchQueries: () => [{ query: GetStoreItemDocument, variables: { barcodeId } }],
                optimisticResponse: {
                  __typename: 'mutation_root',
                  update_StoreItem_by_pk: {
                    __typename: 'StoreItem',
                    shortName: itemData.shortName,
                    purchased: !itemData.purchased,
                  },
                },
              })
            }
          >
            <AddCartButtonText added={itemData.purchased}>
              {itemData.purchased ? 'Added!' : 'Add to Cart'}
            </AddCartButtonText>
          </AddCartButton>
        </AddCartButtonContainer>
      )}
    </ItemDetailContainer>
  );
};
