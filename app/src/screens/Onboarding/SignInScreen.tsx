/** @format */

import React from 'react';
import { Button } from 'react-native';

// Components
import {
  FullScreenWhite,
  TestButton,
  TestButtons,
  TestButtonText,
  SignIn_UniversalStoreContainer,
  SignIn_Logo,
  SignIn_UniversalStoreTextContainer,
  SignIn_UniversalStoreText,
  SignIn_SloganText,
  SignIn_SignInText,
  SignIn_WelcomeBackText,
  SignIn_FormContainer,
  SignIn_UsernameTextInput,
  SignIn_EmailText,
  SignIn_PasswordTextInput,
  SignIn_PasswordText,
  SignIn_ForgotPasswordText,
  SignIn_SignUpText,
} from '&components';

// Navigation
import { OnboardingStackParams } from '&navigation';
import { StackScreenProps } from '@react-navigation/stack';

type SignInScreenProps = StackScreenProps<OnboardingStackParams, 'SignInScreen'>;

export const SignInScreen = ({ navigation }: SignInScreenProps) => {
  return (
    <FullScreenWhite>
      <SignIn_UniversalStoreContainer>
        <SignIn_Logo></SignIn_Logo>
        <SignIn_UniversalStoreTextContainer>
          <SignIn_UniversalStoreText>Universal Store</SignIn_UniversalStoreText>
          <SignIn_SloganText>Redefining express checkout.</SignIn_SloganText>
        </SignIn_UniversalStoreTextContainer>
      </SignIn_UniversalStoreContainer>
      <SignIn_SignInText>Sign In</SignIn_SignInText>
      <SignIn_WelcomeBackText>Welcome back!</SignIn_WelcomeBackText>
      <SignIn_FormContainer>
        <SignIn_EmailText>Email</SignIn_EmailText>
        <SignIn_UsernameTextInput></SignIn_UsernameTextInput>
        <SignIn_PasswordText>Password</SignIn_PasswordText>
        <SignIn_PasswordTextInput></SignIn_PasswordTextInput>
        <SignIn_ForgotPasswordText>Forget Password?</SignIn_ForgotPasswordText>
      </SignIn_FormContainer>
      <SignIn_SignUpText>Need an account? Sign Up</SignIn_SignUpText>
      <TestButtons>
        <TestButton onPress={() => navigation.navigate('LandingScreen')}>
          <TestButtonText>Go To Landing</TestButtonText>
        </TestButton>

        <TestButton onPress={() => navigation.navigate('SignUpScreen')}>
          <TestButtonText>Go To Sign Up</TestButtonText>
        </TestButton>
      </TestButtons>
    </FullScreenWhite>
  );
};
