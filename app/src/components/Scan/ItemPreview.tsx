/** @format */

import React from 'react';

// Components
import {
  ItemPreviewContainer,
  ItemPreviewImageContainer,
  ItemPreviewPriceText,
  ItemPreviewTextContainer,
} from './Styled';

import { FuturaBoldCardTitle } from '../Text';

// Mock Data
// import { MockItem } from '&data';

// export const ItemPreview = ({ shortName, price }: MockItem) => {
export const ItemPreview = () => {
  return (
    <ItemPreviewContainer>
      <ItemPreviewImageContainer />
      <ItemPreviewTextContainer>
        <FuturaBoldCardTitle numberOfLines={1}>Gatorade Orange 28oz</FuturaBoldCardTitle>
        <ItemPreviewPriceText>$3.19</ItemPreviewPriceText>
      </ItemPreviewTextContainer>
    </ItemPreviewContainer>
  );
};
