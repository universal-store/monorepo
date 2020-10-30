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
      <StoreDetailPopularItemContainer onPress={() => console.log('Pressed')}>
        {/*<StoreDetailImageContainer><StoreDetailImage src={{uri: }} /></StoreDetailImageContainer>*/}
        <StoreDetailPopularItemNameText numberOfLines={1}>Hand Sanitizer</StoreDetailPopularItemNameText>
        <StoreDetailPopularItemPriceText>$2.99</StoreDetailPopularItemPriceText>
      </StoreDetailPopularItemContainer>
    </>
  );
};
