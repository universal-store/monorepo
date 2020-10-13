/** @format */

import styled from 'styled-components/native';
import { Animated } from 'react-native';

// Components
import { FullScreenWhite, RowView } from '../Views';
import { HeaderLargeText, HeaderSmallText, TextSmall, TextSmall2 } from '../Text';

export const UserProfileMainContainer = styled(FullScreenWhite)`
  flex: 1;
  width: 100%;
  display: flex;
  padding: 24px;
`;

export const UserProfileHeaderText = styled(HeaderLargeText)`
  color: ${({ theme }) => theme.colors.gray[1]};
`;

export const UserProfileSubHeaderText = styled(HeaderSmallText)`
  margin-bottom: 6px;
  color: ${({ theme }) => theme.colors.gray[1]};
`;

export const UserProfileEmailText = styled(TextSmall)`
  margin-bottom: 4px;
  color: ${({ theme }) => theme.colors.gray[1]};
`;

export const UserProfilePaymentInfoText = styled(TextSmall2)`
  margin-bottom: 4px;
  color: ${({ theme }) => theme.colors.gray[1]};
`;

export const UserProfileProfilePictureContainer = styled.View`
  width: 64px;
  height: 64px;
  margin-right: 24px;
`;

export const UserProfileEmailContainer = styled.View`
  margin-bottom: 16px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.gray[5]};
`;

export const UserProfilePaymentInfoContainer = styled.View`
  margin-bottom: 16px;
`;

export const UserProfileCheckMarkLogoContainer = styled.View`
  width: 14px;
  height: 11px;
  margin-left: auto;
  margin-right: 4px;
`;

export const UserProfileHeaderRow = styled(RowView)`
  margin-bottom: 24px;
`;

export const UserPaymentInfoNameRow = styled(RowView)``;
