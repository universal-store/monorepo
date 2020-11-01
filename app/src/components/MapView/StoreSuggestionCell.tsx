/** @format */

import React from 'react';

// Components
import { StoreSuggestionCellContainer, StoreSuggestionNameText, StoreSuggestionAddressText } from './Styled';

// GraphQL
import { MarkerInfoFragment } from '&graphql';

interface StoreSuggestionCellProps {
  onPress: () => void;
  storeData: MarkerInfoFragment;
}

export const StoreSuggestionCell = ({ storeData, onPress }: StoreSuggestionCellProps) => {
  return (
    <StoreSuggestionCellContainer onPress={onPress}>
      <StoreSuggestionNameText numberOfLines={1}>{storeData.name}</StoreSuggestionNameText>
      <StoreSuggestionAddressText numberOfLines={1}>{storeData.address}</StoreSuggestionAddressText>
    </StoreSuggestionCellContainer>
  );
};
