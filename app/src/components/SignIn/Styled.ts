/** @format */

import styled from 'styled-components/native';

import { isiPhoneX, RowView, screenWidth } from '../Views';

import {
  FuturaBoldLarge,
  FuturaBoldMedium,
  FuturaBoldSmall,
  OpenSansRegularLarge,
  OpenSansRegularSmall,
} from '../Text';

export const SignIn_UniversalStoreTextContainer = styled.View`
  display: flex;
  width: 301px;
  height: 33px;
  margin: 48px 32px;
`;

export const SignIn_UniversalStoreText = styled(FuturaBoldLarge)``;

export const SignIn_SloganText = styled(FuturaBoldMedium)`
  margin-top: 9px;
  color: ${({ theme }) => theme.colors.gray[3]};
`;

export const SignIn_SignInText = styled(FuturaBoldLarge)`
  width: 78px;
  height: 28px;
  margin-left: 32px;
`;

export const SignIn_WelcomeBackText = styled(FuturaBoldMedium)`
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

export const SignIn_ForgotPasswordText = styled(OpenSansRegularSmall)`
  margin-left: 209px;
  color: ${({ theme }) => theme.colors.gray[3]};
`;

export const SignIn_SignUpText = styled(OpenSansRegularSmall)`
  margin-left: auto;
  margin-right: auto;
  color: ${({ theme }) => theme.colors.gray[3]};
`;
