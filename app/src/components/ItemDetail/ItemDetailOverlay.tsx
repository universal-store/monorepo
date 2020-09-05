/** @format */

import React from 'react';

// Iconography
import { CloseIcon, CartIcon } from '&icons';

// Components
import { ItemDetailContainer } from '&components';

// Styled Components
import { ItemDetailHeaderRow } from './Styled';

export const ItemDetailOverlay = () => {
  return (
    <ItemDetailContainer>
      <ItemDetailHeaderRow>
        <CloseIcon />
        <CartIcon />
      </ItemDetailHeaderRow>
    </ItemDetailContainer>
  );
};
