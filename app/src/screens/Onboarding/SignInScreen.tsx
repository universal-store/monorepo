/** @format */

import React from 'react';
import { Keyboard } from 'react-native';

// Components
import {
  HeaderLargeText as OnboardingHeaderTitleText,
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
  return (
    <OnboardingMainContainer onPress={() => Keyboard.dismiss()}>
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
        <OnboardingTextInput />

        <OnboardingFormText>Password</OnboardingFormText>
        <OnboardingTextInput />

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
  );
};
