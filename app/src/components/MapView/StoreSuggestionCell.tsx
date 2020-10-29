/** @format */

import React from 'react';

// Components
import { StoreSuggestionCellContainer, StoreSuggestionNameText, StoreSuggestionAddressText } from './Styled';

// TODO: Replace
import { Text } from 'react-native';

export const StoreSuggestionCell = () => {
  return (
    <StoreSuggestionCellContainer>
      <StoreSuggestionNameText>Publix</StoreSuggestionNameText>
      <StoreSuggestionAddressText>950 W Peachtree St NW, Atlanta, GA 30309</StoreSuggestionAddressText>
    </StoreSuggestionCellContainer>
  );
};
