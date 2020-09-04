/** @format */

// Components
import { AddCartButtonStyle, AddCartButtonContainer, AddCartButtonText } from '&components';

import React, { useState } from 'react';

export const AddCartButton = () => {
  const [addedToCart, setAddedToCart] = useState<boolean>(false);

  return (
    <AddCartButtonContainer>
      <AddCartButtonStyle added={addedToCart} onPress={() => setAddedToCart(!addedToCart)}>
        <AddCartButtonText added={addedToCart}>{addedToCart ? 'Added!' : 'Add to Cart'}</AddCartButtonText>
      </AddCartButtonStyle>
    </AddCartButtonContainer>
  );
};
