/** @format */

import React, { useState } from 'react';

// Components
import { AddCartButtonContainer, AddCartButtonText } from '&components';

export const AddCartButton = () => {
  const [addedToCart, setAddedToCart] = useState<boolean>(false);

  return (
    <AddCartButtonContainer added={addedToCart} onPress={() => setAddedToCart(!addedToCart)}>
      <AddCartButtonText added={addedToCart}>{addedToCart ? 'Added!' : 'Add to Cart'}</AddCartButtonText>
    </AddCartButtonContainer>
  );
};
