/** @format */

import React, { useEffect, useState } from 'react';
import { Alert, Animated, Text } from 'react-native';

// Libraries
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

// Styled Components
import {
  AddToCartButton,
  AnimatedItemPreviewContainer,
  ItemPreviewImage,
  ItemPreviewImageContainer,
  ItemPreviewPriceText,
  ItemPreviewTextContainer,
} from './Styled';

import { HeaderSmallText } from '../Text';

// Iconography
import { AddCartIcon, RemoveCartIcon } from '&icons';

// Queries
import {
  CheckItemInCartDocument,
  GetUserCartItemsDocument,
  useAddUserCartItemMutation,
  useCheckItemInCartQuery,
  useGetStoreItemQuery,
  useGetUserQuery,
  useRemoveUserCartItemMutation,
} from '&graphql';

// Utils
import { hapticOptions } from '&utils';

interface ItemPreviewProps {
  shown: boolean;
  barcodeId: string;
  badScan: () => void;
  onPress: () => void;
  toggleScanned: () => void;
}

export const ItemPreview = ({ badScan, barcodeId, onPress, toggleScanned, shown }: ItemPreviewProps) => {
  const animatedValue = useState(new Animated.Value(0))[0];

  const [inCart, setInCart] = useState<boolean>(false);

  // Get User Query
  const { data: userData } = useGetUserQuery();
  const userId = userData?.User[0].id!;

  // Get Item Query
  const { data, loading } = useGetStoreItemQuery({ variables: { barcodeId } });
  const itemData = data?.StoreItem_by_pk;

  // Check Item In Cart Query
  const { data: userCart } = useCheckItemInCartQuery({ variables: { barcodeId } });

  // Cart Mutations
  const [addToCartMutation] = useAddUserCartItemMutation();
  const [removeFromCartMutation] = useRemoveUserCartItemMutation();

  useEffect(() => {
    if (userCart) {
      setInCart(userCart.StoreItem_by_pk?.UserCartItems.length !== 0);
    }
  }, [inCart, userCart]);

  useEffect(() => {
    Animated.timing(animatedValue, {
      duration: 500,
      useNativeDriver: true,
      toValue: shown ? 1 : 0,
    }).start();

    if (shown) {
      ReactNativeHapticFeedback.trigger('impactMedium', hapticOptions);
    }
  }, [shown]);

  if (shown && !loading && !itemData) {
    Alert.alert('Incorrect Scan!', `That item does not belong to this Store`, [
      { text: 'Okay', onPress: badScan },
      // TODO: Use for adding items during development
      // {
      //   text: 'Add Item To Database',
      //   onPress: () => {
      //     badScan();
      //     navigation.navigate('AddItemScreen', { barcodeId });
      //   },
      // },
    ]);
    return <></>;
  }

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

  return (
    <>
      {shown && (
        <AnimatedItemPreviewContainer
          onPress={onPress}
          style={{
            transform: [
              { translateY: animatedValue.interpolate({ inputRange: [0, 1], outputRange: [500, 0] }) },
              { perspective: 1000 },
            ],
          }}
        >
          <ItemPreviewImageContainer>
            {itemData && itemData.StoreItemPic && (
              <ItemPreviewImage
                resizeMode="contain"
                source={{
                  uri: itemData.StoreItemPic.size64,
                }}
              />
            )}
          </ItemPreviewImageContainer>

          {itemData && (
            <ItemPreviewTextContainer>
              <HeaderSmallText numberOfLines={1}>
                {itemData.shortName ? itemData.shortName : itemData.longName}
              </HeaderSmallText>
              <ItemPreviewPriceText>{itemData.price}</ItemPreviewPriceText>
            </ItemPreviewTextContainer>
          )}

          <AddToCartButton
            hitSlop={{ left: 8, right: 8 }}
            onPress={async () => {
              await addOrRemoveFromCart();
              await toggleScanned();
            }}
          >
            {inCart ? <RemoveCartIcon /> : <AddCartIcon />}
          </AddToCartButton>
        </AnimatedItemPreviewContainer>
      )}
    </>
  );
};
