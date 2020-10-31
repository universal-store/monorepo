/** @format */

import styled from 'styled-components/native';

import { isiPhoneX, screenHeight } from './Views';

// Constants
export const largeModalHeight = screenHeight - (isiPhoneX ? 92 : 62);
export const smallModalHeight = screenHeight - (isiPhoneX ? 402 : 372);

// Styled Components
export const ModalHeader = styled.View`
  height: 36px;
  display: flex;
  shadow-radius: 2px;
  align-items: center;
  shadow-opacity: 0.15;
  justify-content: center;
  shadow-offset: 0px -3.5px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  shadow-color: ${({ theme }) => theme.colors.gray[1]};
  background-color: ${({ theme }) => theme.colors.white[1]};
`;

export const ModalHeaderTab = styled.View`
  width: 42px;
  height: 4px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.gray[4]};
`;

export const ModalContainer = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  padding-bottom: 24px;
  background-color: ${({ theme }) => theme.colors.white[1]};
`;

export const ModalFlexContainer = styled.View`
  flex: 1;
  padding: 0 32px;
`;
