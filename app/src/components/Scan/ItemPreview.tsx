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

// Mock Data
// import { MockItem } from '&data';

interface ItemPreviewProps {
  shown: boolean;
}

// export const ItemPreview = ({ shortName, price }: MockItem) => {
export const ItemPreview = ({ shown }: ItemPreviewProps) => {
  const animatedValue = useState(new Animated.Value(0))[0];

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
        <FuturaBoldCardTitle numberOfLines={1}>Gatorade Orange 28oz</FuturaBoldCardTitle>
        <ItemPreviewPriceText>$3.19</ItemPreviewPriceText>
      </ItemPreviewTextContainer>
    </AnimatedItemPreviewContainer>
  );
};
