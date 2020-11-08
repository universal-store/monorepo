/** @format */

import styled from 'styled-components/native';

// Components
import { FullScreenWhite, isiPhoneX, RowView } from './Views';
import { HeaderLargeText, HeaderSmallText, TextSmall, TextSmall2 } from './Text';

export const UserProfileMainContainer = styled(FullScreenWhite)`
  flex: 1;
  width: 100%;
  display: flex;
  padding: 24px 0;
`;

export const UserProfileHeaderRow = styled(RowView)`
  width: 100%;
  padding: 0 24px;
  margin-bottom: 24px;
  align-items: center;
  margin-top: ${isiPhoneX ? 34 : 0}px;
`;

export const UserProfileHeaderText = styled(HeaderLargeText)`
  flex: 1;
  color: ${({ theme }) => theme.colors.gray[1]};
`;

export const UserProfileHeaderNameText = styled(UserProfileHeaderText)`
  font-family: NunitoSans-Regular;
`;

export const UserProfileSubHeaderText = styled(HeaderSmallText)`
  margin-left: 24px;
  margin-bottom: 6px;
  color: ${({ theme }) => theme.colors.gray[1]};
`;

export const UserProfileEmailText = styled(TextSmall)`
  margin-bottom: 4px;
  color: ${({ theme }) => theme.colors.gray[1]};
`;

export const UserProfilePaymentInfoText = styled(TextSmall2)`
  margin-bottom: 6px;
  color: ${({ theme }) => theme.colors.gray[1]};
`;

export const UserProfileEmailContainer = styled.View`
  padding-left: 24px;
  margin-bottom: 16px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.gray[5]};
`;

export const UserProfilePaymentInfoContainer = styled.TouchableOpacity`
  padding: 0 24px;
  margin-bottom: 16px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.gray[5]};
`;

export const UserProfileCheckMarkLogoContainer = styled.View`
  display: flex;
  width: 24px;
  height: 24px;
  margin-left: auto;
  align-content: center;
  justify-content: center;
`;

export const UserPaymentInfoNameRow = styled(RowView)``;
