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
  BadgeContainer,
  BadgeText,
  CartIconContainer,
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
  useGetUserCartItemsQuery,
  useCheckItemInFavoritesQuery,
  useAddUserCartItemMutation,
  useRemoveUserCartItemMutation,
  useUpdateUserShoppingMutation,
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
  const itemData = data?.StoreItem[0];
  const itemId = itemData && itemData.id ? itemData.id : '';

  const { data: userCartItems } = useGetUserCartItemsQuery();

  const { data: userCart } = useCheckItemInCartQuery({ variables: { itemId } });
  const { data: userFavorites } = useCheckItemInFavoritesQuery({ variables: { itemId } });

  const [inCart, setInCart] = useState<boolean>(false);
  const [favorite, setFavorite] = useState<boolean>(false);

  useEffect(() => {
    if (userCart) {
      setInCart(userCart.UserCartItem.length !== 0);
    }
  }, [inCart, userCart]);

  useEffect(() => {
    if (userFavorites) {
      setFavorite(userFavorites.UserFavoriteItem.length !== 0);
    }
  }, [favorite, userFavorites]);

  // Mutations
  const [addToCartMutation] = useAddUserCartItemMutation();
  const [addToFavoritesMutation] = useAddUserFavoriteItemMutation();

  const [removeFromCartMutation] = useRemoveUserCartItemMutation();
  const [removeFromFavoritesMutation] = useRemoveUserFavoriteItemMutation();

  const [updateShoppingMutation] = useUpdateUserShoppingMutation();

  /**
   * Checks if item is in favorites and removes if it is, adds if not
   */
  const addOrRemoveFromFavorites = async () => {
    if (favorite) {
      await removeFromFavoritesMutation({
        variables: { userId, itemId },
        refetchQueries: [
          { query: GetUserFavoriteItemsDocument },
          { query: CheckItemInFavoritesDocument, variables: { itemId } },
        ],
      });
    } else {
      await addToFavoritesMutation({
        variables: { userId, itemId },
        refetchQueries: [
          { query: GetUserFavoriteItemsDocument },
          { query: CheckItemInFavoritesDocument, variables: { itemId } },
        ],
      });
    }
  };

  /**
   * Checks if item is in cart and removes if it is, adds if not
   */
  const addOrRemoveFromCart = async () => {
    if (inCart) {
      await removeFromCartMutation({
        variables: { userId, itemId },
        refetchQueries: [
          { query: GetUserCartItemsDocument },
          { query: CheckItemInCartDocument, variables: { itemId } },
        ],
      });
    } else {
      await addToCartMutation({
        variables: { userId, itemId },
        refetchQueries: [
          { query: GetUserCartItemsDocument },
          { query: CheckItemInCartDocument, variables: { itemId } },
        ],
      });
    }

    await updateShoppingMutation({
      variables: {
        userId,
        lastItem: barcodeId,
      },
    });

    await navigation.goBack();
  };

  // Renders header tab
  const renderHeader = () => (
    <ModalHeader>
      <ModalHeaderTab />
    </ModalHeader>
  );

  // Renders inside of detail modal
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
              contentContainerStyle={{ paddingBottom: isiPhoneX ? 104 : 70 }}
            >
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
          <CartIconContainer>
            <CartIcon />
            {userCartItems && userCartItems.UserCartItem.length > 0 && (
              <BadgeContainer>
                <BadgeText>{userCartItems.UserCartItem.length}</BadgeText>
              </BadgeContainer>
            )}
          </CartIconContainer>
        </ItemDetailHeaderButton>
      </ItemDetailHeaderRow>

      <ItemDetailImageContainer>
        {itemData && itemData.StoreItemPic && (
          <ItemDetailImage
            resizeMode="contain"
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
