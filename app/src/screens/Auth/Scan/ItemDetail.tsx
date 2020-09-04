/** @format */

import React, { useState } from 'react';

// Components
import {
  AddCartButton,
  AddCartButtonContainer,
  AddCartButtonText,
  FuturaBoldLarge as ItemNameText,
  ItemDetailContainer,
  ItemDetailModalContainer,
  ItemDetailModalSheet,
  ItemPriceText,
  ItemSizeText,
  ItemSubDetailRow,
  ProductDetailsHeaderText,
  ProductDetailsText,
  screenHeight,
} from '&components';

export const ItemDetail = () => {
  const [addedToCart, setAddedToCart] = useState<boolean>(false);

  const renderContent = () => (
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
    </ItemDetailModalContainer>
  );

  return (
    <ItemDetailContainer>
      <ItemDetailModalSheet initialSnap={1} renderContent={renderContent} snapPoints={[screenHeight - 144, 390, 190]} />
      <AddCartButton />
    </ItemDetailContainer>
  );
};
