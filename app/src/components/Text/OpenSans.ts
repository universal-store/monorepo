/** @format */

import styled from 'styled-components/native';

const OpenSansSemiBold = styled.Text`
  font-family: OpenSans-SemiBold;
  color: ${({ theme }) => theme.colors.gray[1]};
`;

export const OpenSansSemiBoldLarge = styled(OpenSansSemiBold)`
  font-size: 20px;
`;

export const OpenSansSemiBoldMedium = styled(OpenSansSemiBold)`
  font-size: 18px;
`;

const OpenSansRegular = styled.Text`
  font-family: OpenSans-Regular;
  color: ${({ theme }) => theme.colors.gray[1]};
`;

export const OpenSansRegularLarge = styled(OpenSansRegular)`
  font-size: 17px;
`;

export const OpenSansRegularMedium = styled(OpenSansRegular)`
  font-size: 15px;
  line-height: 22px;
`;
