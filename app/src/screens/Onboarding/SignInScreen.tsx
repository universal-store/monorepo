/** @format */

import React, {useState} from 'react';
import { Keyboard } from 'react-native';

// Components
import {
  HeaderLargeText as OnboardingHeaderTitleText,
  KeyboardDismiss,
  LogoContainer,
  OnboardingButton,
  OnboardingButtonText,
  OnboardingForgotPasswordButton,
  OnboardingFormContainer,
  OnboardingFormText,
  OnboardingHeaderContainer,
  OnboardingHeaderTextContainer,
  OnboardingMainContainer,
  OnboardingRow,
  OnboardingSmallerBoldText,
  OnboardingSmallerText,
  OnboardingSmallText,
  OnboardingSubHeaderText,
  OnboardingTextButton,
  OnboardingTextInput,
} from '&components';

// Navigation
import { OnboardingStackParams } from '&navigation';
import { StackScreenProps } from '@react-navigation/stack';

type SignInScreenProps = StackScreenProps<OnboardingStackParams, 'SignInScreen'>;

export const SignInScreen = ({ navigation }: SignInScreenProps) => {
  // Determines if text in password input is visible or not
  const [secureTextEntry, setSecureTextEntry] = useState<boolean>(true);

  return (
    <KeyboardDismiss onPress={Keyboard.dismiss}>
      <OnboardingMainContainer>
        <OnboardingHeaderContainer>
          <LogoContainer />
          <OnboardingHeaderTextContainer>
            <OnboardingHeaderTitleText>Universal Store</OnboardingHeaderTitleText>
            <OnboardingSubHeaderText>Redefining express checkout.</OnboardingSubHeaderText>
          </OnboardingHeaderTextContainer>
        </OnboardingHeaderContainer>

        <OnboardingHeaderTitleText>Sign In</OnboardingHeaderTitleText>
        <OnboardingSubHeaderText>Welcome back!</OnboardingSubHeaderText>

        <OnboardingFormContainer>
          <OnboardingFormText>Email</OnboardingFormText>
          <OnboardingTextInput autoCompleteType="email" placeholder="Enter your email address..." />

          <OnboardingFormText>Password</OnboardingFormText>
          <OnboardingTextInput autoCompleteType="password" placeholder="Enter a password..." />

          <OnboardingForgotPasswordButton onPress={() => console.log('Forgot Password Pressed')}>
            <OnboardingSmallText>Forget Password?</OnboardingSmallText>
          </OnboardingForgotPasswordButton>
        </OnboardingFormContainer>

        <OnboardingRow>
          <OnboardingSmallerText>Need an account? </OnboardingSmallerText>
          <OnboardingTextButton onPress={() => navigation.navigate('SignUpScreen')}>
            <OnboardingSmallerBoldText>Sign Up</OnboardingSmallerBoldText>
          </OnboardingTextButton>
        </OnboardingRow>

        <OnboardingButton onPress={() => console.log('Log In Pressed')}>
          <OnboardingButtonText>Log In</OnboardingButtonText>
        </OnboardingButton>
      </OnboardingMainContainer>
    </KeyboardDismiss>
  );
};
