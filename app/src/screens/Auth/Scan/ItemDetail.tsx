/** @format */

import React, { useState } from 'react';

// Custom Components
import styled from 'styled-components/native';
import { AddCartButton, AddCartButtonText } from '&components';

const ItemDetailContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.purple[3]};
`;

export const ItemDetail = () => {
  const [addedToCart, setAddedToCart] = useState<boolean>(false);

  return (
    <ItemDetailContainer>
      <AddCartButton onPress={() => setAddedToCart(!addedToCart)} added={addedToCart}>
        <AddCartButtonText added={addedToCart}>{addedToCart ? 'Added!' : 'Add to Cart'}</AddCartButtonText>
      </AddCartButton>
    </ItemDetailContainer>
  );
};
