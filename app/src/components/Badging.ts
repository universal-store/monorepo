/** @format */

import styled from 'styled-components/native';

// Typography
import { TextSmall2 } from './Text';

export const CartIconContainer = styled.View`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BadgeContainer = styled.View`
  position: absolute;
  top: -4px;
  right: -6px;
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  border-radius: 16px;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.red};
`;

export const BadgeText = styled(TextSmall2)`
  padding-top: 3px;
  font-size: 9px;
  line-height: 9px;
  color: ${({ theme }) => theme.colors.white[1]};
`;
