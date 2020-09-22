/** @format */

import styled from 'styled-components/native';

import { FullScreenWhite, RowView, screenWidth } from '../Views';

import { FuturaBoldSmall, OpenSansRegularSmall, OpenSansRegularExtraSmall } from '../Text';

export const SignInMainContainer = styled(FullScreenWhite)`
  width: 100%;
  display: flex;
  padding: 0 32px;
`;

export const SignInHeaderContainer = styled(RowView)`
  width: 100%;
  margin: 48px 0 24px;
`;

export const LogoContainer = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.purple[1]};
`;

export const SignInHeaderTextContainer = styled.View`
  display: flex;
  margin-left: 16px;
  justify-content: space-between;
`;

export const SignInSubHeaderText = styled(FuturaBoldSmall)`
  color: ${({ theme }) => theme.colors.gray[3]};
`;

export const SignInFormContainer = styled.View`
  margin-top: 32px;
`;

export const SignInFormText = styled(OpenSansRegularSmall)`
  margin-bottom: 19px;
  color: ${({ theme }) => theme.colors.gray[3]};
`;

export const SignInInputContainer = styled(RowView)`
  margin-bottom: 8px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.gray[3]};
`;

export const SignInTextInputIconContainer = styled.View`
  margin-right: 16px;
  margin-bottom: 8px;
`;

export const SignInTextInput = styled.TextInput``;

export const SignInVisibleIconButton = styled.TouchableOpacity`
  margin-left: auto;
  margin-right: 8px;
`;

export const SignInForgotPasswordButton = styled.TouchableOpacity`
  margin-left: auto;
  margin-right: 12px;
`;

export const SignInSmallText = styled(OpenSansRegularExtraSmall)`
  color: ${({ theme }) => theme.colors.gray[3]};
`;

export const SignInSignUpRow = styled(RowView)`
  margin-top: 24px;
  justify-content: center;
`;

export const SignInSignUpText = styled(SignInSmallText)`
  text-align: center;
  color: ${({ theme }) => theme.colors.gray[1]};
`;

export const SignInSignUpTextButton = styled.TouchableOpacity`
  display: flex;
  margin-left: 2px;
  align-items: center;
  justify-content: center;
`;

export const SignInSignUpBoldText = styled(SignInSignUpText)`
  font-family: OpenSans-SemiBold;
`;

export const SignInButton = styled.TouchableOpacity`
  width: 100%;
  height: 40px;
  display: flex;
  padding: 10px;
  border-radius: 40px;
  align-items: center;
  margin: auto 0 80px;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.purple[1]};
`;

export const SignInButtonText = styled(FuturaBoldSmall)`
  color: ${({ theme }) => theme.colors.white[1]};
`;
