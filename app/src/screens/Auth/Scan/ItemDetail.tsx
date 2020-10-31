/** @format */

import React, { useEffect, useState } from 'react';

// Libraries
import BottomSheet from 'reanimated-bottom-sheet';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

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
  ItemNameText,
  ItemPriceText,
  ItemSizeText,
  ItemSubDetailRow,
  largeModalHeight,
  LoadingOverlay,
  ModalContainer,
  ModalFlexContainer,
  ModalHeader,
  ModalHeaderTab,
  ProductDetailsHeaderText,
  ProductDetailsScroll,
  ProductDetailsText,
  smallModalHeight,
} from '&components';

// Iconography
import { CartIcon, CloseIcon, HeartIconOff, HeartIconOn } from '&icons';

// Navigation
import { RootAuthTabParams } from '&navigation';
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
  GetUserFavoriteItemsDocument,
  GetUserCartItemsDocument,
} from '&graphql';

// Utils
import { hapticOptions } from '&utils';

type ItemDetailProps = StackScreenProps<RootAuthTabParams, 'ItemDetail'>;

export const ItemDetail = ({ route, navigation }: ItemDetailProps) => {
  const { barcodeId, scanned } = route.params;

  const { data: userData } = useGetUserQuery();
  const userId = userData?.User[0].id!;

  const { data, loading } = useGetStoreItemQuery({ variables: { barcodeId } });
  const itemData = data?.StoreItem_by_pk;

  const { data: userCart } = useCheckItemInCartQuery({ variables: { barcodeId } });
  const { data: userFavorites } = useCheckItemInFavoritesQuery({ variables: { barcodeId } });

  const [inCart, setInCart] = useState<boolean>(false);
  const [favorite, setFavorite] = useState<boolean>(false);

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

  const addOrRemoveFromFavorites = async () => {
    if (favorite) {
      await removeFromFavoritesMutation({
        variables: { userId, itemBarcodeId: barcodeId },
        refetchQueries: [
          { query: GetUserFavoriteItemsDocument },
          { query: CheckItemInFavoritesDocument, variables: { barcodeId } },
        ],
      });
    } else {
      await addToFavoritesMutation({
        variables: { userId, itemBarcodeId: barcodeId },
        refetchQueries: [
          { query: GetUserFavoriteItemsDocument },
          { query: CheckItemInFavoritesDocument, variables: { barcodeId } },
        ],
      });
    }
  };

  const addOrRemoveFromCart = async () => {
    if (inCart) {
      await removeFromCartMutation({
        variables: { userId, itemBarcodeId: barcodeId },
        refetchQueries: [
          { query: GetUserCartItemsDocument },
          { query: CheckItemInCartDocument, variables: { barcodeId } },
        ],
      });
    } else {
      await addToCartMutation({
        variables: { userId, itemBarcodeId: barcodeId },
        refetchQueries: [
          { query: GetUserCartItemsDocument },
          { query: CheckItemInCartDocument, variables: { barcodeId } },
        ],
      });
    }
  };

  const renderHeader = () => (
    <ModalHeader>
      <ModalHeaderTab />
    </ModalHeader>
  );

  const renderContent = () => (
    <ModalContainer>
      <ModalFlexContainer>
        {itemData && (
          <>
            <ItemSubDetailRow>
              <ItemNameText numberOfLines={2}>{itemData.longName}</ItemNameText>

              <ItemDetailFavoriteButton
                onPress={() => {
                  ReactNativeHapticFeedback.trigger('selection', hapticOptions);
                  void addOrRemoveFromFavorites();
                }}
              >
                {favorite ? <HeartIconOn /> : <HeartIconOff />}
              </ItemDetailFavoriteButton>
            </ItemSubDetailRow>

            <ItemSubDetailRow>
              <ItemSizeText numberOfLines={1}>{itemData.quantity}</ItemSizeText>
              <ItemPriceText>{itemData.price}</ItemPriceText>
            </ItemSubDetailRow>

            <ProductDetailsHeaderText>Product Details</ProductDetailsHeaderText>
            <ProductDetailsScroll
              bounces={false}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom: isiPhoneX ? 100 : 70 }}
            >
              <ProductDetailsText>{itemData.description}</ProductDetailsText>
              <ProductDetailsText>{itemData.description}</ProductDetailsText>
            </ProductDetailsScroll>
          </>
        )}
      </ModalFlexContainer>
    </ModalContainer>
  );

  return (
    <FullScreenLightPurple>
      {loading && <LoadingOverlay />}

      <ItemDetailHeaderRow>
        <ItemDetailHeaderButton
          onPress={() => {
            ReactNativeHapticFeedback.trigger('selection', hapticOptions);
            navigation.goBack();
          }}
        >
          <CloseIcon />
        </ItemDetailHeaderButton>

        <ItemDetailHeaderButton
          onPress={() => {
            ReactNativeHapticFeedback.trigger('selection', hapticOptions);
            navigation.navigate('CartScreen');
          }}
        >
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
        enabledBottomClamp
        renderHeader={renderHeader}
        renderContent={renderContent}
        enabledBottomInitialAnimation
        enabledContentGestureInteraction={false}
        snapPoints={[largeModalHeight, smallModalHeight]}
      />

      {scanned && (
        <AddCartButtonContainer>
          <AddCartButton
            added={inCart}
            onPress={() => {
              ReactNativeHapticFeedback.trigger('impactMedium', hapticOptions);
              void addOrRemoveFromCart();
            }}
          >
            <AddCartButtonText added={inCart}>{inCart ? 'Added!' : 'Add to Cart'}</AddCartButtonText>
          </AddCartButton>
        </AddCartButtonContainer>
      )}
    </FullScreenLightPurple>
  );
};
