/** @format */

import styled from 'styled-components/native';

// Components
import { FullScreenWhite, isiPhoneX, RowView } from './Views';
import { HeaderLargeText, HeaderSmallText, TextSmall, TextSmall2 } from './Text';

export const UserProfileMainContainer = styled(FullScreenWhite)`
  flex: 1;
  width: 100%;
  display: flex;
  padding: 24px 24px 106px; ;
`;

export const UserProfileHeaderText = styled(HeaderLargeText)`
  flex: 1;
  color: ${({ theme }) => theme.colors.gray[1]};
`;

export const UserProfileHeaderNameText = styled(UserProfileHeaderText)`
  font-family: NunitoSans-Regular;
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
  margin-bottom: 6px;
  color: ${({ theme }) => theme.colors.gray[1]};
`;

export const UserProfilePictureContainer = styled.View`
  display: flex;
  width: 64px;
  height: 64px;
  margin-right: 24px;
  border-radius: 64px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.purple[3]};
`;

export const UserProfilePicture = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 64px;
`;

export const UserProfileInitialText = styled(HeaderLargeText)`
  font-size: 28px;
  text-align: center;
  color: ${({ theme }) => theme.colors.purple[1]};
`;

export const UserProfileEmailContainer = styled.View`
  margin-bottom: 16px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.gray[5]};
`;

export const UserProfilePaymentInfoContainer = styled.TouchableOpacity`
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

export const UserProfileHeaderRow = styled(RowView)`
  width: 100%;
  margin-bottom: 24px;
  align-items: center;
  margin-top: ${isiPhoneX ? 30 : 0}px;
`;

export const UserPaymentInfoNameRow = styled(RowView)``;
