/** @format */

import React, { useEffect, useState } from 'react';
import { Alert, Animated } from 'react-native';

// Styled Components
import {
  AnimatedItemPreviewContainer,
  ItemPreviewImage,
  ItemPreviewImageContainer,
  ItemPreviewPriceText,
  ItemPreviewTextContainer,
} from './Styled';

import { HeaderSmallText } from '../Text';

// Navigation
import { useNavigation } from '@react-navigation/native';

// Queries
import { useGetStoreItemQuery } from '&graphql';

interface ItemPreviewProps {
  shown: boolean;
  barcodeId: string;
  badScan: () => void;
  onPress: () => void;
}

export const ItemPreview = ({ badScan, barcodeId, onPress, shown }: ItemPreviewProps) => {
  const animatedValue = useState(new Animated.Value(0))[0];

  // Navigation
  const navigation = useNavigation();

  const { data, loading } = useGetStoreItemQuery({ variables: { barcodeId } });
  const itemData = data?.StoreItem_by_pk;

  useEffect(() => {
    Animated.timing(animatedValue, {
      duration: 500,
      useNativeDriver: true,
      toValue: shown ? 1 : 0,
    }).start();
  }, [shown]);

  if (shown && !loading && !itemData) {
    Alert.alert('Incorrect Scan!', `That Item does not belong to this Store`, [
      { text: 'Okay', onPress: badScan },
      {
        text: 'Add Item To Database',
        onPress: () => {
          badScan();
          navigation.navigate('AddItemScreen', { barcodeId });
        },
      },
    ]);
    return <></>;
  }

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
        </AnimatedItemPreviewContainer>
      )}
    </>
  );
};
