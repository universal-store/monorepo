/** @format */

import React from 'react';

// Components
import { StoreSuggestionCellContainer, StoreSuggestionNameText, StoreSuggestionAddressText } from './Styled';

export const StoreSuggestionCell = () => {
  return (
    <StoreSuggestionCellContainer>
      <StoreSuggestionNameText numberOfLines={1}>Publix</StoreSuggestionNameText>
      <StoreSuggestionAddressText numberOfLines={1}>
        950 W Peachtree St NW, Atlanta, GA 30309
      </StoreSuggestionAddressText>
    </StoreSuggestionCellContainer>
  );
};
