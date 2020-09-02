/** @format */

import styled from 'styled-components/native';

const FuturaBold = styled.Text`
  font-weight: bold;
  font-family: Futura-Bold;
  color: ${({ theme }) => theme.colors.gray[1]};
`;

export const FuturaBoldTitle = styled(FuturaBold)`
  font-size: 18px;
  line-height: 24px;
`;

export const FuturaBoldCardTitle = styled(FuturaBold)`
  font-size: 15px;
  line-height: 20px;
`;
