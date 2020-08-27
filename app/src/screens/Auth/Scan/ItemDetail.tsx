/** @format */

import React from 'react';

// Custom Components
import styled from 'styled-components/native';

const ItemDetailContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.purple[3]};
`;

export const ItemDetail = () => {
  return <ItemDetailContainer />;
};
