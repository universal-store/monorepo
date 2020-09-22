/** @format */

import styled from 'styled-components/native';
import { FuturaBoldMedium } from '../Text';

export const SplashLogoBox = styled.View`
  display: flex;
  width: 200px;
  height: 200px;
  background-color: ${({ theme }) => theme.colors.purple[1]};
  margin: 112px auto 0;
  border-radius: 20px;
`;

export const SplashTitleText = styled(FuturaBoldMedium)`
  margin-top: 32px;
  text-align: center;
`;

export const SplashSubtitleText = styled(FuturaBoldMedium)`
  margin-top: 4px;
  color: ${({ theme }) => theme.colors.gray[3]};
  text-align: center;
`;
