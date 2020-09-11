/** @format */

import styled from 'styled-components/native';

import { isiPhoneX, ColumnView, screenWidth } from '../Views';

import { FuturaBoldLarge, FuturaBoldSmall, OpenSansRegularSmall, OpenSansRegularExtraSmall } from '../Text';

export const SignIn_UniversalStoreContainer = styled.View`
  display: flex;
  flex-direction: row;
  width: 301px;
  height: 33px;
  margin: 48px 32px;
`;

export const SignIn_Logo = styled.View`
  width: 50px;
  height: 50px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: ${({ theme }) => theme.colors.purple[1]};
`;

export const SignIn_UniversalStoreTextContainer = styled.View`
  display: flex;
`;

export const SignIn_UniversalStoreText = styled(FuturaBoldLarge)`
  margin-left: 16px;
`;

export const SignIn_SloganText = styled(FuturaBoldSmall)`
  margin-left: 16px;
  color: ${({ theme }) => theme.colors.gray[3]};
`;

export const SignIn_SignInText = styled(FuturaBoldLarge)`
  width: 78px;
  height: 28px;
  margin-left: 32px;
`;

export const SignIn_WelcomeBackText = styled(FuturaBoldSmall)`
  width: 124px;
  height: 20px;
  margin-left: 32px;
  color: ${({ theme }) => theme.colors.gray[3]};
`;

export const SignIn_FormContainer = styled.View`
  display: flex;
  width: ${screenWidth - 64}px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 32px;
  margin-bottom: 16px;
`;

export const SignIn_EmailText = styled(OpenSansRegularSmall)`
  color: ${({ theme }) => theme.colors.gray[3]};
  margin-bottom: 19px;
`;

export const SignIn_UsernameTextInput = styled.TextInput`
  border-bottom-width: 1;
  margin-bottom: 29px;
`;

export const SignIn_PasswordText = styled(OpenSansRegularSmall)`
  color: ${({ theme }) => theme.colors.gray[3]};
  margin-bottom: 19px;
`;

export const SignIn_PasswordTextInput = styled.TextInput`
  border-bottom-width: 1;
  margin-bottom: 29px;
`;

export const SignIn_ForgotPasswordText = styled(OpenSansRegularExtraSmall)`
  margin-left: 209px;
  color: ${({ theme }) => theme.colors.gray[3]};
`;

export const SignIn_SignUpText = styled(OpenSansRegularExtraSmall)`
  margin-left: auto;
  margin-right: auto;
  color: ${({ theme }) => theme.colors.gray[3]};
`;
