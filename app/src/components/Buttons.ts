/** @format */

import styled from 'styled-components/native';
import { HeaderSmallText } from './Text';

const BasicButton = styled.TouchableOpacity`
  width: 100%;
  height: 40px;
  display: flex;
  margin-top: 8px;
  border-radius: 40px;
  align-items: center;
  justify-content: center;
`;

export const ButtonContainer = styled.View`
  margin-top: auto;
`;

export const PrimaryButton = styled(BasicButton)`
  background-color: ${({ theme }) => theme.colors.purple[2]};
`;

export const PrimaryButtonText = styled(HeaderSmallText)`
  color: ${({ theme }) => theme.colors.white[1]};
`;

export const SecondaryButton = styled(BasicButton)`
  background-color: ${({ theme }) => theme.colors.white[1]};
  border: 2px solid ${({ theme }) => theme.colors.purple[2]};
`;

export const SecondaryButtonText = styled(PrimaryButtonText)`
  color: ${({ theme }) => theme.colors.purple[2]};
`;
