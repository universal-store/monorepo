/** @format */

import React from 'react';

import {
  StoreDetailPopularItemContainer,
  StoreDetailImageContainer,
  StoreDetailPopularItemNameText,
  StoreDetailPopularItemPriceText,
} from './Styled';

export const PopularItemCell = () => {
  return (
    <>
      <StoreDetailPopularItemContainer>
        <StoreDetailImageContainer></StoreDetailImageContainer>
        <StoreDetailPopularItemNameText>Hand Sanitizer</StoreDetailPopularItemNameText>
        <StoreDetailPopularItemPriceText>$2.99</StoreDetailPopularItemPriceText>
      </StoreDetailPopularItemContainer>
    </>
  );
};
