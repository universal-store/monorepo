/** @format */

import React, { useState } from 'react';

// Components
import {
  AddCartButton,
  AddCartButtonText,
  FuturaBoldLarge as ItemNameText,
  ItemDetailContainer,
  ItemDetailModalContainer,
  ItemPriceText,
  ItemSizeText,
  ItemSubDetailRow,
  ProductDetailsHeaderText,
  ProductDetailsText,
} from '&components';

export const ItemDetail = () => {
  const [addedToCart, setAddedToCart] = useState<boolean>(false);

  return (
    <ItemDetailContainer>
      <ItemDetailModalContainer>
        <ItemNameText numberOfLines={2}>Gatorade Thirst Quencher Sports Drink, Orange</ItemNameText>
        <ItemSubDetailRow>
          <ItemSizeText numberOfLines={1}>28 oz Bottle</ItemSizeText>
          <ItemPriceText>$3.19</ItemPriceText>
        </ItemSubDetailRow>

        <ProductDetailsHeaderText>Product Details</ProductDetailsHeaderText>
        <ProductDetailsText numberOfLines={5}>
          {`When you sweat, you lose more than water. You also lose critical electrolytes, like sodium and potassium, which help the brain communicate with muscles and regulate fluid level balance throughout the body. Significant losses in fluids and electrolytes can negatively impact performance, especially during long bouts of training. The one and only. With a legacy over 40 years in the making, it's the most scientifically researched and game-tested way to replace electrolytes lost in sweat.`}
        </ProductDetailsText>

        <AddCartButton added={addedToCart} onPress={() => setAddedToCart(!addedToCart)}>
          <AddCartButtonText added={addedToCart}>{addedToCart ? 'Added!' : 'Add to Cart'}</AddCartButtonText>
        </AddCartButton>
      </ItemDetailModalContainer>
    </ItemDetailContainer>
  );
};
