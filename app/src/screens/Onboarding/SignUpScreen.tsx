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
        <SignInTextInput />
        <SignInFormText>First Name* Last Name*</SignInFormText>
        <SignInTextInput />
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

      <SignInSignUpText>By continuing you agree to our</SignInSignUpText>
      <SignInSignUpText>
        <SignInSignUpBoldText>Terms of Service </SignInSignUpBoldText>
        and
        <SignInSignUpBoldText> Privacy Policy</SignInSignUpBoldText>
      </SignInSignUpText>
    </SignInMainContainer>
  );
};
