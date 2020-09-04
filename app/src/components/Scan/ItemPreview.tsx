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

// Interfaces
import { StoreItem } from '&graphql';

interface ItemPreviewProps {
  shown: boolean;
  scannedItem: StoreItem;
}

export const ItemPreview = ({ shown, scannedItem }: ItemPreviewProps) => {
  const animatedValue = useState(new Animated.Value(0))[0];

  const { shortName, longName, price } = scannedItem;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: shown ? 1 : 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [shown]);

  return (
    <AnimatedItemPreviewContainer
      style={{
        transform: [
          { translateY: animatedValue.interpolate({ inputRange: [0, 1], outputRange: [500, 0] }) },
          { perspective: 1000 },
        ],
      }}
    >
      <ItemPreviewImageContainer />
      <ItemPreviewTextContainer>
        <FuturaBoldCardTitle numberOfLines={1}>{shortName ? shortName : longName}</FuturaBoldCardTitle>
        <ItemPreviewPriceText>${price.toFixed(2)}</ItemPreviewPriceText>
      </ItemPreviewTextContainer>
    </AnimatedItemPreviewContainer>
  );
};
