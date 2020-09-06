/** @format */

import React, { useState } from 'react';

// Styled Components
import { AddCartButtonContainer, AddCartButtonText } from './Styled';

// Mutation
import { useUpdateStoreItemPurchaseMutation } from '&graphql';

interface AddCartButtonProps {
  barcodeId: string;
}

export const AddCartButton = ({ barcodeId }: AddCartButtonProps) => {
  const [addedToCart, setAddedToCart] = useState<boolean>(false);

  const [updatePurchaseMutation] = useUpdateStoreItemPurchaseMutation();

  return (
    <AddCartButtonContainer
      added={addedToCart}
      onPress={() => {
        updatePurchaseMutation({ variables: { barcodeId, purchased: !addedToCart } })
          .then(() => setAddedToCart(!addedToCart))
          .catch((err: Error) => console.warn(err));
      }}
    >
      <AddCartButtonText added={addedToCart}>{addedToCart ? 'Added!' : 'Add to Cart'}</AddCartButtonText>
    </AddCartButtonContainer>
  );
};
