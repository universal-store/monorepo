/** @format */

import styled from 'styled-components/native';

import { FullScreenWhite, RowView } from '../Views';

import { FuturaBoldSmall, OpenSansRegularSmall, OpenSansRegularExtraSmall } from '../Text';

export const SignInMainContainer = styled(FullScreenWhite)`
  width: 100%;
  display: flex;
  padding: 0 32px;
`;

export const SignInHeaderContainer = styled(RowView)`
  width: 100%;
  margin: 24px 0 24px;
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
  margin-bottom: 9px;
  color: ${({ theme }) => theme.colors.gray[3]};
`;

export const SignInTextInput = styled.TextInput`
  margin-bottom: 8px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.gray[3]};
`;

export const SignInSmallText = styled(OpenSansRegularExtraSmall)`
  color: ${({ theme }) => theme.colors.gray[3]};
`;

export const SignInSignUpRow = styled(RowView)`
  margin-top: 12px;
  margin-bottom: 12px;
  justify-content: center;
`;

export const SignInSignUpText = styled(SignInSmallText)`
  text-align: center;
  color: ${({ theme }) => theme.colors.gray[1]};
`;

export const SignInSignUpBoldText = styled(SignInSignUpText)`
  font-family: OpenSans-SemiBold;
`;

export const SignInSignUpTextButton = styled.TouchableOpacity`
  display: flex;
  margin-left: 2px;
  align-items: center;
  justify-content: center;
`;

export const SignInButton = styled.TouchableOpacity`
  width: 100%;
  height: 40px;
  display: flex;
  padding: 10px;
  border-radius: 40px;
  align-items: center;
  margin: 24px 0 8px;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.purple[1]};
`;

export const SignInButtonText = styled(FuturaBoldSmall)`
  color: ${({ theme }) => theme.colors.white[1]};
`;
