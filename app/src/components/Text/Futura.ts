/** @format */

import styled from 'styled-components/native';

const FuturaBold = styled.Text`
  font-weight: bold;
  font-family: Futura-Bold;
  color: ${({ theme }) => theme.colors.gray[1]};
`;

export const FuturaBoldLarge = styled(FuturaBold)`
  font-size: 21px;
`;

export const FuturaBoldMedium = styled(FuturaBold)`
  font-size: 17px;
`;

export const FuturaBoldSmall = styled(FuturaBold)`
  font-size: 15px;
`;

export const FuturaBoldCardTitle = styled(FuturaBold)`
  font-size: 17px;
`;

export const FuturaBoldButtonText = styled(FuturaBold)`
  font-size: 15px;
`;
