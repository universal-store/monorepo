/** @format */

import React from 'react';

// Components
import {
  FuturaBoldLarge as SignInHeaderTitleText,
  LogoContainer,
  SignInButton,
  SignInButtonText,
  SignInForgotPasswordButton,
  SignInFormContainer,
  SignInFormText,
  SignInHeaderContainer,
  SignInHeaderTextContainer,
  SignInMainContainer,
  SignInSignUpText,
  SignInSmallText,
  SignInSubHeaderText,
  SignInTextInput,
  SignInTextInputEmail,
  TestButton,
  TestButtons,
  TestButtonText,
} from '&components';

// Navigation
import { OnboardingStackParams } from '&navigation';
import { StackScreenProps } from '@react-navigation/stack';

type SignInScreenProps = StackScreenProps<OnboardingStackParams, 'SignInScreen'>;

export const SignInScreen = ({ navigation }: SignInScreenProps) => {
  return (
    <SignInMainContainer>
      <SignInHeaderContainer>
        <LogoContainer />
        <SignInHeaderTextContainer>
          <SignInHeaderTitleText>Universal Store</SignInHeaderTitleText>
          <SignInSubHeaderText>Redefining express checkout.</SignInSubHeaderText>
        </SignInHeaderTextContainer>
      </SignInHeaderContainer>

      <SignInHeaderTitleText>Sign In</SignInHeaderTitleText>
      <SignInSubHeaderText>Welcome back!</SignInSubHeaderText>

      <SignInFormContainer>
        <SignInFormText>Email</SignInFormText>
        <SignInTextInputEmail />

        <SignInFormText>Password</SignInFormText>
        <SignInTextInput />

        <SignInForgotPasswordButton>
          <SignInSmallText>Forget Password?</SignInSmallText>
        </SignInForgotPasswordButton>
      </SignInFormContainer>

      <SignInSignUpText>Need an account? Sign Up</SignInSignUpText>

      <SignInButton>
        <SignInButtonText>Log In</SignInButtonText>
      </SignInButton>

      <TestButtons>
        <TestButton onPress={() => navigation.navigate('LandingScreen')}>
          <TestButtonText>Go To Landing</TestButtonText>
        </TestButton>

        <TestButton onPress={() => navigation.navigate('SignUpScreen')}>
          <TestButtonText>Go To Sign Up</TestButtonText>
        </TestButton>
      </TestButtons>
    </SignInMainContainer>
  );
};
