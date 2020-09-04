/** @format */

import React from 'react';

// Components
import { FullScreen, ItemDetailsComponents } from '&components';

// Custom Components
import styled from 'styled-components/native';

const ItemDetailBackground = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.purple[3]};
`;

export const ItemDetail = () => {
  return (
    <FullScreen>
      <ItemDetailsComponents></ItemDetailsComponents>
    </FullScreen>
  );
};
