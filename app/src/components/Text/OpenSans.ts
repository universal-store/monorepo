/** @format */

import styled from 'styled-components/native';

const OpenSansSemiBold = styled.Text`
  font-family: OpenSans-SemiBold;
  color: ${({ theme }) => theme.colors.gray[1]};
`;

export const OpenSansSemiBoldSmall = styled(OpenSansSemiBold)`
  font-size: 18px;
  line-height: 25px;
`;

export const OpenSansBoldCardPrice = styled(OpenSansSemiBold)`
  font-size: 14px;
  line-height: 19px;
  color: ${({ theme }) => theme.colors.gray[2]};
`;
