/** @format */

import styled from 'styled-components/native';

const FuturaBold = styled.Text`
  font-weight: bold;
  font-family: Futura-Bold;
  color: ${({ theme }) => theme.colors.gray[1]};
`;

export const FuturaBoldLarge = styled(FuturaBold)`
  font-size: 18px;
  line-height: 24px;
`;

export const FuturaBoldMedium = styled(FuturaBold)`
  font-size: 14px;
  line-height: 19px;
`;

export const FuturaBoldSmall = styled(FuturaBold)`
  font-size: 12px;
  line-height: 16px;
`;

export const FuturaBoldCardTitle = styled(FuturaBold)`
  font-size: 15px;
  line-height: 20px;
`;

export const FuturaBoldButtonText = styled(FuturaBold)`
  font-size: 16px;
  line-height: 21px;
`;
