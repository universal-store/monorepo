/** @format */

import React from 'react';

// Components
import { NoCartItemsText } from './Styled';
import { FullScreenCenter } from '../Views';

export const EmptyCartItemsState = () => (
  <FullScreenCenter>
    <NoCartItemsText>You Don't Have Any Items In Your Cart Yet</NoCartItemsText>
  </FullScreenCenter>
);
