/** @format */

import React, { useEffect, useState } from 'react';
import { Animated } from 'react-native';

// Components
import {
  AnimatedItemPreviewContainer,
  ItemPreviewImageContainer,
  ItemPreviewPriceText,
  ItemPreviewTextContainer,
} from './Styled';

import { FuturaBoldCardTitle } from '../Text';

// Queries
import { useGetStoreItemQuery } from '&graphql';

interface ItemPreviewProps {
  shown: boolean;
  barcodeId: string;
  onPress: () => void;
}

export const ItemPreview = ({ shown, barcodeId, onPress }: ItemPreviewProps) => {
  const animatedValue = useState(new Animated.Value(0))[0];

  const { data } = useGetStoreItemQuery({ variables: { barcodeId } });
  const itemData = data?.StoreItem_by_pk;

  useEffect(() => {
    Animated.timing(animatedValue, {
      duration: 500,
      useNativeDriver: true,
      toValue: shown ? 1 : 0,
    }).start();
  }, [shown]);

  return (
    <AnimatedItemPreviewContainer
      onPress={onPress}
      style={{
        transform: [
          { translateY: animatedValue.interpolate({ inputRange: [0, 1], outputRange: [500, 0] }) },
          { perspective: 1000 },
        ],
      }}
    >
      <ItemPreviewImageContainer />
      {itemData && (
        <ItemPreviewTextContainer>
          <FuturaBoldCardTitle numberOfLines={1}>
            {itemData.shortName ? itemData.shortName : itemData.longName}
          </FuturaBoldCardTitle>
          <ItemPreviewPriceText>${Number(itemData.price).toFixed(2)}</ItemPreviewPriceText>
        </ItemPreviewTextContainer>
      )}
    </AnimatedItemPreviewContainer>
  );
};
