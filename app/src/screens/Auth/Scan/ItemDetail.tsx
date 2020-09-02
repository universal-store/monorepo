/** @format */

import React from 'react';

// Custom Components
import styled from 'styled-components/native';

// Icons
// import { HeartIcon } from '&icons';

// Components
import { FullScreen } from '&components';

const ItemDetailContainer = styled(FullScreen)`
  background-color: ${({ theme }) => theme.colors.purple[3]};
`;

// const HeartIconContainer = styled.View`
//   display: flex;
//   width: 24px;
//   height: 24px;
// `;

export const ItemDetail = () => {
  return <ItemDetailContainer />;
};
