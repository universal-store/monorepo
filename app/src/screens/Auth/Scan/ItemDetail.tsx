/** @format */

import React, { useState } from 'react';

// Libraries
import BottomSheet from 'reanimated-bottom-sheet';

// Components
import {
  AddCartButton,
  AddCartButtonContainer,
  AddCartButtonText,
  FullScreenLightPurple,
  FuturaBoldLarge as ItemText,
  isiPhoneX,
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
  ProductDetailsScroll,
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

const smallDescriptionLines = isiPhoneX ? 8 : 1;

type ItemDetailProps = StackScreenProps<AuthStackParams, 'ItemDetail'>;

export const ItemDetail = ({ route, navigation }: ItemDetailProps) => {
  const { barcodeId } = route.params;

  const [modalExpand, setModalExpand] = useState<boolean>(false);

  // TODO: Replace with User Favorites Mutation
  const [favorite, setFavorite] = useState<boolean>(false);

  const { data } = useGetStoreItemQuery({ variables: { barcodeId } });
  const itemData = data?.StoreItem_by_pk;

  const [updatePurchaseMutation] = useUpdateStoreItemPurchaseMutation();

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
          <ProductDetailsScroll bounces={false} showsVerticalScrollIndicator={false}>
            <ProductDetailsText numberOfLines={modalExpand ? 50 : smallDescriptionLines}>
              {itemData.description}
            </ProductDetailsText>
          </ProductDetailsScroll>
        </ItemDetailModalContainer>
      )}
    </>
  );

  return (
    <FullScreenLightPurple>
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
        renderHeader={renderHeader}
        renderContent={renderContent}
        enabledBottomInitialAnimation
        enabledContentGestureInteraction={false}
        onOpenStart={() => setModalExpand(true)}
        onCloseStart={() => setModalExpand(false)}
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
    </FullScreenLightPurple>
  );
};
