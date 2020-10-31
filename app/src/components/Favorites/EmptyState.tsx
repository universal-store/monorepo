/** @format */

import React from 'react';

// Components
import { NoFavoritesText } from './Styled';
import { FullScreenCenter } from '../Views';

export const EmptyFavoritesState = () => (
  <FullScreenCenter>
    <NoFavoritesText>You Don't Have Any Saved Items Yet</NoFavoritesText>
  </FullScreenCenter>
);
