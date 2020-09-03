/** @format */

import React, { useState } from 'react';

// Custom Components
import styled from 'styled-components/native';
import { AddCartButton, AddCartButtonText } from '&components';

// Icons
// import { HeartIcon } from '&icons';

const ItemDetailContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.purple[3]};
`;

// const HeartIconContainer = styled.View`
//   display: flex;
//   width: 24px;
//   height: 24px;
// `;

export const ItemDetail = () => {
  const [addedToCart, setAddedToCart] = useState<boolean>(false);

  return (
    <ItemDetailContainer>
      <AddCartButton added={addedToCart} onPress={() => setAddedToCart(!addedToCart)}>
        <AddCartButtonText added={addedToCart}>{addedToCart ? 'Added!' : 'Add to Cart'}</AddCartButtonText>
      </AddCartButton>
    </ItemDetailContainer>
  );
};
