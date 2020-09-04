/** @format */

import React from 'react';

// Components
import {
  FuturaBoldLarge as ItemName,
  ItemDetailContainer,
  ItemDetailModalContainer,
  ItemPrice,
  ItemSize,
  ProductDetailsHeader,
  ProductDetailsText,
  RowView,
} from '&components';

export const ItemDetail = () => {
  return (
    <ItemDetailContainer>
      <ItemDetailModalContainer>
        <ItemName numberOfLines={2}>Gatorade Thirst Quencher Sports Drink, Orange</ItemName>
        <RowView>
          <ItemSize numberOfLines={1}>28 oz Bottle</ItemSize>
          <ItemPrice>$3.19</ItemPrice>
        </RowView>

        <ProductDetailsHeader>Product Details</ProductDetailsHeader>
        <ProductDetailsText numberOfLines={5}>
          {`When you sweat, you lose more than water. You also lose critical electrolytes, like sodium and potassium, which help the brain communicate with muscles and regulate fluid level balance throughout the body. Significant losses in fluids and electrolytes can negatively impact performance, especially during long bouts of training. The one and only. With a legacy over 40 years in the making, it's the most scientifically researched and game-tested way to replace electrolytes lost in sweat.`}
        </ProductDetailsText>
      </ItemDetailModalContainer>
    </ItemDetailContainer>
  );
};
