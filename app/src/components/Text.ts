/** @format */

import styled from 'styled-components/native';

export const NunitoSansExtraBold = styled.Text`
  font-family: NunitoSans-ExtraBold;
  color: ${({ theme }) => theme.colors.gray[1]};
`;

export const HeaderLargeText = styled(NunitoSansExtraBold)`
  font-size: 21px;
`;

export const HeaderMediumText = styled(NunitoSansExtraBold)`
  font-size: 17px;
`;

export const HeaderSmallText = styled(NunitoSansExtraBold)`
  font-size: 15px;
`;

export const NunitoSansBold = styled.Text`
  font-family: NunitoSans-Bold;
  color: ${({ theme }) => theme.colors.gray[1]};
`;

export const TextLarge = styled(NunitoSansBold)`
  font-size: 24px;
`;

export const TextMedium = styled(NunitoSansBold)`
  font-size: 20px;
`;

export const NunitoSansRegular = styled.Text`
  font-family: NunitoSans-Regular;
  color: ${({ theme }) => theme.colors.gray[1]};
`;

export const TextLarge2 = styled(NunitoSansRegular)`
  font-size: 22px;
`;

export const TextMedium2 = styled(NunitoSansRegular)`
  font-size: 18px;
`;

export const TextSmall = styled(NunitoSansRegular)`
  font-size: 16px;
`;

export const TextSmall2 = styled(NunitoSansRegular)`
  font-size: 15px;
`;
