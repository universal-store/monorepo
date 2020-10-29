/** @format */

import styled from 'styled-components/native';

// Typography
import { HeaderMediumText } from './../Text';

// Constants
import { isiPhoneX, screenWidth } from './../Views';

// Select Store Button
export const SelectStoreButtonContainer = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  z-index: 100;
  padding: 16px 32px ${isiPhoneX ? 106 : 76}px;
  background-color: ${({ theme }) => theme.colors.white[1]};
`;

interface SelectStoreButtonProps {
  selected: boolean;
}

export const SelectStoreButton = styled.TouchableOpacity<SelectStoreButtonProps>`
  height: 48px;
  display: flex;
  margin-top: auto;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  width: ${screenWidth - 64}px;
  border: 2px solid ${({ theme }) => theme.colors.purple[1]};
  background-color: ${({ theme, selected }) => (selected ? theme.colors.purple[1] : theme.colors.white[1])};
`;

export const SelectStoreButtonText = styled(HeaderMediumText)<SelectStoreButtonProps>`
  color: ${({ theme, selected }) => (selected ? theme.colors.white[1] : theme.colors.purple[1])};
`;
