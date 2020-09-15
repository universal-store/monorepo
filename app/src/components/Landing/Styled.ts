/** @format */

import styled from 'styled-components/native';
import { FuturaBoldMedium } from '../Text';

export const SplashLogoBox = styled.View`
  display: flex;
  width: 200px;
  height: 200px;
  background-color: ${({ theme }) => theme.colors.purple[1]};
  margin: 112px auto 0;
  border-radius: 30px;
`;

export const SplashTitleText = styled(FuturaBoldMedium)`
  margin-top: 29px;
  font-size: 21px;
  line-height: 28px;
  text-align: center;
`;

export const SplashSubtitleText = styled(FuturaBoldMedium)`
  margin-top: 5px;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.gray[3]};
  line-height: 20px;
  text-align: center;
`;
