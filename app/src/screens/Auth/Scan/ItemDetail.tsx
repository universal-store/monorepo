/** @format */

import React from 'react';

// Components

export const ItemDetail = () => {
  return (
    <ItemDetailBackground>
      <ExitButton></ExitButton>
      <ViewCartButton></ViewCartButton>
      <ItemDetailContainer>
        <ItemName>Gatorade Thirst Quencher Sports Drink, Orange</ItemName>
        <ItemSize>28 oz Bottle</ItemSize>
        <ItemPrice>$3.19</ItemPrice>
        <ProductDetailsHeader>Product Details</ProductDetailsHeader>
        <ProductDetailsText>
          When you sweat, you lose more than water. You also lose critical electrolytes, like sodium and potassium,
          which help the brain communicate with muscles and regulate fluid balance throughout the body. Significant
          losses in fluid and electrolytes can negatively impact performance...
        </ProductDetailsText>
      </ItemDetailContainer>
    </ItemDetailBackground>
  );
};
