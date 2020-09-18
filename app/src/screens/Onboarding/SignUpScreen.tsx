/** @format */

import React from 'react';

// Components
import {
  FuturaBoldLarge as SignInHeaderTitleText,
  LogoContainer,
  SignInButton,
  SignInButtonText,
  SignInFormContainer,
  SignInFormText,
  SignInHeaderContainer,
  SignInHeaderTextContainer,
  SignInMainContainer,
  SignInSignUpBoldText,
  SignInSignUpRow,
  SignInSignUpText,
  SignInSignUpTextButton,
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

type SignUpScreenProps = StackScreenProps<OnboardingStackParams, 'SignUpScreen'>;

export const SignUpScreen = ({ navigation }: SignUpScreenProps) => {
  return (
    <SignInMainContainer>
      <SignInHeaderContainer>
        <LogoContainer />
        <SignInHeaderTextContainer>
          <SignInHeaderTitleText>Universal Store</SignInHeaderTitleText>
          <SignInSubHeaderText>Redefining express checkout.</SignInSubHeaderText>
        </SignInHeaderTextContainer>
      </SignInHeaderContainer>

      <SignInHeaderTitleText>Getting Started</SignInHeaderTitleText>
      <SignInSubHeaderText>Create an account to continue</SignInSubHeaderText>

      <SignInFormContainer>
        <SignInFormText>Email Address*</SignInFormText>
        <SignInTextInputEmail />

        <SignInFormText>Password</SignInFormText>
        <SignInTextInput />
      </SignInFormContainer>

      <SignInSignUpRow>
        <SignInSignUpText>Already have an account?</SignInSignUpText>
        <SignInSignUpTextButton onPress={() => navigation.navigate('SignInScreen')}>
          <SignInSignUpBoldText>Log In</SignInSignUpBoldText>
        </SignInSignUpTextButton>
      </SignInSignUpRow>

      <SignInButton onPress={() => console.log('Sign Up Pressed')}>
        <SignInButtonText>Sign Up</SignInButtonText>
      </SignInButton>

      <TestButtons>
        <TestButton onPress={() => navigation.navigate('LandingScreen')}>
          <TestButtonText>Go To Landing</TestButtonText>
        </TestButton>
      </TestButtons>
    </SignInMainContainer>
  );
};
