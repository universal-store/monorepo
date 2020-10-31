/** @format */

import React from 'react';

// Libraries
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

// Components
import {
  StoreDetailImage,
  StoreDetailImageContainer,
  StoreDetailPopularItemContainer,
  StoreDetailPopularItemNameText,
  StoreDetailPopularItemPriceText,
} from './Styled';

// Navigation
import { useNavigation } from '@react-navigation/native';

// GraphQL
import { PopularItemInfoFragment } from '&graphql';

// Utils
import { hapticOptions } from '&utils';

interface PopularItemCellProps {
  itemData: PopularItemInfoFragment;
}

export const PopularItemCell = ({ itemData }: PopularItemCellProps) => {
  const navigation = useNavigation();

  return (
    <>
      <StoreDetailPopularItemContainer
        onPress={() => {
          ReactNativeHapticFeedback.trigger('impactMedium', hapticOptions);
          navigation.navigate('ItemDetail', { barcodeId: itemData.barcodeId });
        }}
      >
        {itemData.StoreItemPic && (
          <StoreDetailImageContainer>
            <StoreDetailImage source={{ uri: itemData.StoreItemPic.size64 }} />
          </StoreDetailImageContainer>
        )}

        <StoreDetailPopularItemNameText numberOfLines={1}>{itemData.shortName}</StoreDetailPopularItemNameText>
        <StoreDetailPopularItemPriceText>{itemData.price}</StoreDetailPopularItemPriceText>
      </StoreDetailPopularItemContainer>
    </>
  );
};
