/** @format */

import React from 'react';

import {
  StoreDetailPopularItemContainer,
  StoreDetailPopularItemNameText,
  StoreDetailPopularItemPriceText,
} from './Styled';

export const PopularItemCell = () => {
  return (
    <>
      <StoreDetailPopularItemContainer>
        {/*<StoreDetailImageContainer><StoreDetailImage src={{uri: }} /></StoreDetailImageContainer>*/}
        <StoreDetailPopularItemNameText>Hand Sanitizer</StoreDetailPopularItemNameText>
        <StoreDetailPopularItemPriceText>$2.99</StoreDetailPopularItemPriceText>
      </StoreDetailPopularItemContainer>
    </>
  );
};
