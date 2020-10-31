/** @format */

import React from 'react';

// Components
import { StoreSuggestionCellContainer, StoreSuggestionNameText, StoreSuggestionAddressText } from './Styled';

// GraphQL
import { MarkerInfoFragment } from '&graphql';

interface StoreSuggestionCellProps {
  storeData: MarkerInfoFragment;
}

export const StoreSuggestionCell = ({ storeData }: StoreSuggestionCellProps) => {
  return (
    <StoreSuggestionCellContainer>
      <StoreSuggestionNameText numberOfLines={1}>{storeData.name}</StoreSuggestionNameText>
      <StoreSuggestionAddressText numberOfLines={1}>{storeData.address}</StoreSuggestionAddressText>
    </StoreSuggestionCellContainer>
  );
};
