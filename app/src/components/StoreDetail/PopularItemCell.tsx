/** @format */

import React from 'react';

// Components
import {
  PopularItemCellContainer,
  PopularItemCellContainerSmall,
  PopularItemCellTextContainer,
  PopularItemNameText,
  PopularItemPriceText,
  PopularItemImageContainer,
} from '&components';

export const PopularItemCell = () => {
  return (
    <PopularItemCellContainer>
      <PopularItemCellContainerSmall>
        <PopularItemImageContainer />
        <PopularItemCellTextContainer>
          <PopularItemNameText numberOfLines={1}>Hand Sanitizer</PopularItemNameText>
          <PopularItemPriceText>$2.99</PopularItemPriceText>
        </PopularItemCellTextContainer>
      </PopularItemCellContainerSmall>
    </PopularItemCellContainer>
  );
};
