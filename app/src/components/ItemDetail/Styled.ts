/** @format */

import styled from 'styled-components/native';

// Constants
import { screenWidth } from '../Views';

// Typography
import { FuturaBoldButtonText } from '&components';

// Add to Cart Button Styles ----------------------------------------------------------

interface AddCartButtonProps {
  added: boolean;
}

export const AddCartButton = styled.TouchableOpacity<AddCartButtonProps>`
  width: ${screenWidth - 64}px;
  height: 48px;
  display: flex;
  border-radius: 8px;
  align-items: center;
  margin: auto 32px 24px;
  justify-content: center;
  border: 2px solid ${({ theme }) => theme.colors.purple[1]};
  background-color: ${({ theme, added }) => (added ? theme.colors.purple[1] : theme.colors.white[1])};
`;

export const AddCartButtonText = styled(FuturaBoldButtonText)<AddCartButtonProps>`
  color: ${({ theme, added }) => (added ? theme.colors.white[1] : theme.colors.purple[1])};
`;
