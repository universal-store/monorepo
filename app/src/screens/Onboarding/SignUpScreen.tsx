/** @format */

import React from 'react';
import { Keyboard } from 'react-native';

// Components
import {
  HeaderLargeText as OnboardingHeaderTitleText,
  LogoContainer,
  OnboardingButton,
  OnboardingButtonText,
  OnboardingFormContainer,
  OnboardingFormText,
  OnboardingHeaderContainer,
  OnboardingHeaderTextContainer,
  OnboardingMainContainer,
  OnboardingRow,
  OnboardingSmallerBoldText,
  OnboardingSmallerText,
  OnboardingSubHeaderText,
  OnboardingTextButton,
  OnboardingTextInput,
} from '&components';

// Navigation
import { OnboardingStackParams } from '&navigation';
import { StackScreenProps } from '@react-navigation/stack';

type SignUpScreenProps = StackScreenProps<OnboardingStackParams, 'SignUpScreen'>;

export const SignUpScreen = ({ navigation }: SignUpScreenProps) => {
  return (
    <OnboardingMainContainer onPress={() => Keyboard.dismiss()}>
      <OnboardingHeaderContainer>
        <LogoContainer />
        <OnboardingHeaderTextContainer>
          <OnboardingHeaderTitleText>Universal Store</OnboardingHeaderTitleText>
          <OnboardingSubHeaderText>Redefining express checkout.</OnboardingSubHeaderText>
        </OnboardingHeaderTextContainer>
      </OnboardingHeaderContainer>

      <OnboardingHeaderTitleText>Getting Started</OnboardingHeaderTitleText>
      <OnboardingSubHeaderText>Create an account to continue</OnboardingSubHeaderText>

      <OnboardingFormContainer>
        <OnboardingFormText>Email Address*</OnboardingFormText>
        <OnboardingTextInput />

        <OnboardingFormText>First Name* Last Name*</OnboardingFormText>
        <OnboardingTextInput />

        <OnboardingFormText>Password</OnboardingFormText>
        <OnboardingTextInput />
      </OnboardingFormContainer>

      <OnboardingRow>
        <OnboardingSmallerText>Already have an account? </OnboardingSmallerText>
        <OnboardingTextButton onPress={() => navigation.navigate('SignInScreen')}>
          <OnboardingSmallerBoldText>Log In</OnboardingSmallerBoldText>
        </OnboardingTextButton>
      </OnboardingRow>

      <OnboardingButton onPress={() => console.log('Sign Up Pressed')}>
        <OnboardingButtonText>Sign Up</OnboardingButtonText>
      </OnboardingButton>

      <OnboardingSmallerText>
        By continuing you agree to our
        <OnboardingSmallerBoldText> Terms of Service </OnboardingSmallerBoldText>
        and
        <OnboardingSmallerBoldText> Privacy Policy</OnboardingSmallerBoldText>
      </OnboardingSmallerText>
    </OnboardingMainContainer>
  );
};
