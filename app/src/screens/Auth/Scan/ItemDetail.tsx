/** @format */

import React, { useState } from 'react';

// Custom Components
import styled from 'styled-components/native';
import { AddCartButton, AddCartButtonText } from '&components';

// Icons
// import { HeartIcon } from '&icons';

// Components
import { FullScreen } from '&components';

const ItemDetailContainer = styled(FullScreen)`
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
      <AddCartButton onPress={() => setAddedToCart(!addedToCart)} added={addedToCart}>
        <AddCartButtonText added={addedToCart}>{addedToCart ? 'Added!' : 'Add to Cart'}</AddCartButtonText>
      </AddCartButton>
    </ItemDetailContainer>
  );
};
