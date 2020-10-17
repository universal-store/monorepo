/** @format */

import React, { useContext, useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';

// Libraries
import BottomSheet from 'reanimated-bottom-sheet';

// Components
import {
  AddCartButton,
  AddCartButtonContainer,
  AddCartButtonText,
  FullScreenLightPurple,
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
  ItemPriceText,
  ItemSizeText,
  ItemSubDetailRow,
  ProductDetailsHeaderText,
  ProductDetailsScroll,
  ProductDetailsText,
  screenHeight,
} from '&components';

// Iconography
import { CartIcon, CloseIcon, HeartIconOff, HeartIconOn } from '&icons';

// Context
import { AuthContext } from '&stores';

// Navigation
import { RootAuthParams } from '&navigation';
import { StackScreenProps } from '@react-navigation/stack';

// GraphQL
import {
  CheckItemInCartDocument,
  CheckItemInFavoritesDocument,
  useGetUserQuery,
  useGetStoreItemQuery,
  useCheckItemInCartQuery,
  useCheckItemInFavoritesQuery,
  useAddUserCartItemMutation,
  useRemoveUserCartItemMutation,
  useAddUserFavoriteItemMutation,
  useRemoveUserFavoriteItemMutation,
} from '&graphql';

// Constants
const largeModalHeight = screenHeight - (isiPhoneX ? 92 : 62);
const smallModalHeight = screenHeight - (isiPhoneX ? 402 : 372);

const smallDescriptionLines = isiPhoneX ? 8 : 1;

type ItemDetailProps = StackScreenProps<RootAuthParams, 'ItemDetail'>;

export const ItemDetail = ({ route, navigation }: ItemDetailProps) => {
  const { barcodeId } = route.params;

  const authContext = useContext(AuthContext);
  const sessionId = authContext?.token!;

  const [modalExpand, setModalExpand] = useState<boolean>(false);

  const { data, loading } = useGetStoreItemQuery({ variables: { barcodeId } });
  const itemData = data?.StoreItem_by_pk;

  const { data: userData } = useGetUserQuery({ variables: { sessionId } });
  const userId = userData?.User[0].id;

  const { data: userCart } = useCheckItemInCartQuery({ variables: { barcodeId, sessionId } });
  const { data: userFavorites } = useCheckItemInFavoritesQuery({ variables: { barcodeId, sessionId } });

  const [inCart, setInCart] = useState<boolean>(userCart?.StoreItem_by_pk?.UserCartItems.length !== 0);
  const [favorite, setFavorite] = useState<boolean>(userFavorites?.StoreItem_by_pk?.UserFavoriteItems.length !== 0);

  useEffect(() => {
    if (userCart) {
      setInCart(userCart.StoreItem_by_pk?.UserCartItems.length !== 0);
    }
  }, [inCart, userCart]);

  useEffect(() => {
    if (userFavorites) {
      setFavorite(userFavorites.StoreItem_by_pk?.UserFavoriteItems.length !== 0);
    }
  }, [favorite, userFavorites]);

  // Mutations
  const [addToCartMutation] = useAddUserCartItemMutation();
  const [addToFavoritesMutation] = useAddUserFavoriteItemMutation();

  const [removeFromCartMutation] = useRemoveUserCartItemMutation();
  const [removeFromFavoritesMutation] = useRemoveUserFavoriteItemMutation();

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

            <ItemDetailFavoriteButton onPress={addOrRemoveFromFavorites}>
              {favorite ? <HeartIconOn /> : <HeartIconOff />}
            </ItemDetailFavoriteButton>
          </ItemSubDetailRow>

          <ItemSubDetailRow>
            <ItemSizeText numberOfLines={1}>{itemData.quantity}</ItemSizeText>
            <ItemPriceText>{itemData.price}</ItemPriceText>
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

  const addOrRemoveFromFavorites = () => {
    if (favorite) {
      void removeFromFavoritesMutation({
        variables: { userId, itemBarcodeId: barcodeId },
        refetchQueries: [{ query: CheckItemInFavoritesDocument, variables: { barcodeId, sessionId } }],
      });
    } else {
      void addToFavoritesMutation({
        variables: { userId, itemBarcodeId: barcodeId },
        refetchQueries: [{ query: CheckItemInFavoritesDocument, variables: { barcodeId, sessionId } }],
      });
    }
  };

  const addOrRemoveFromCart = () => {
    if (inCart) {
      void removeFromCartMutation({
        variables: { userId, itemBarcodeId: barcodeId },
        refetchQueries: [{ query: CheckItemInCartDocument, variables: { barcodeId, sessionId } }],
      });
    } else {
      void addToCartMutation({
        variables: { userId, itemBarcodeId: barcodeId },
        refetchQueries: [{ query: CheckItemInCartDocument, variables: { barcodeId, sessionId } }],
      });
    }
  };

  return (
    <FullScreenLightPurple>
      <ItemDetailHeaderRow>
        <ItemDetailHeaderButton onPress={() => navigation.goBack()}>
          <CloseIcon />
        </ItemDetailHeaderButton>

        <ItemDetailHeaderButton onPress={() => navigation.navigate('TabNavigation', { screen: 'CartScreen' })}>
          <CartIcon />
        </ItemDetailHeaderButton>
      </ItemDetailHeaderRow>

      <ItemDetailImageContainer>
        {loading && <ActivityIndicator />}

        {itemData && itemData.StoreItemPic && (
          <ItemDetailImage
            source={{
              uri: itemData.StoreItemPic.size256,
            }}
          />
        )}
      </ItemDetailImageContainer>

      {itemData && (
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
      )}

      {itemData && (
        <AddCartButtonContainer>
          <AddCartButton added={inCart} onPress={addOrRemoveFromCart}>
            <AddCartButtonText added={inCart}>{inCart ? 'Added!' : 'Add to Cart'}</AddCartButtonText>
          </AddCartButton>
        </AddCartButtonContainer>
      )}
    </FullScreenLightPurple>
  );
};
