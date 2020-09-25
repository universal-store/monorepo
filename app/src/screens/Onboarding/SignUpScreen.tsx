/** @format */

import React, { useState } from 'react';
import { Keyboard } from 'react-native';

// Components
import {
  HeaderLargeText as OnboardingHeaderTitleText,
  KeyboardDismiss,
  LogoContainer,
  OnboardingButton,
  OnboardingButtonText,
  OnboardingFormContainer,
  OnboardingFormText,
  OnboardingHeaderContainer,
  OnboardingHeaderTextContainer,
  OnboardingIconTextInputRow,
  OnboardingMainContainer,
  OnboardingRow,
  OnboardingSmallerBoldText,
  OnboardingSmallerText,
  OnboardingSubHeaderText,
  OnboardingTextButton,
  OnboardingTextInput,
  PasswordVisibleIconButton,
} from '&components';

// Navigation
import { OnboardingStackParams } from '&navigation';
import { StackScreenProps } from '@react-navigation/stack';
import { EmailIcon, LockIcon, PersonIcon, VisibleIcon } from '&icons';

type SignUpScreenProps = StackScreenProps<OnboardingStackParams, 'SignUpScreen'>;

export const SignUpScreen = ({ navigation }: SignUpScreenProps) => {
  const [passwordInputVisible, setPasswordInputVisible] = useState<boolean>(false);

  // Changes passwordInputVisible Value for when eye icon is passed
  const TogglePasswordVisibility = () => {
    if (!passwordInputVisible) {
      setPasswordInputVisible(true);
    } else {
      setPasswordInputVisible(false);
    }
  };

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

        <OnboardingHeaderTitleText>Getting Started</OnboardingHeaderTitleText>
        <OnboardingSubHeaderText>Create an account to continue</OnboardingSubHeaderText>

        <OnboardingFormContainer>
          <OnboardingFormText>Email Address*</OnboardingFormText>
          <OnboardingIconTextInputRow>
            <EmailIcon></EmailIcon>
            <OnboardingTextInput autoCompleteType="email" placeholder="Enter your email address..." />
          </OnboardingIconTextInputRow>

          <OnboardingFormText>First Name* Last Name*</OnboardingFormText>
          <OnboardingIconTextInputRow>
            <PersonIcon></PersonIcon>
            <OnboardingTextInput autoCompleteType="name" placeholder="Enter your name..." />
          </OnboardingIconTextInputRow>

          <OnboardingFormText>Password</OnboardingFormText>
          <OnboardingIconTextInputRow>
            <LockIcon></LockIcon>
            <OnboardingTextInput
              autoCompleteType="password"
              placeholder="Enter your password..."
              secureTextEntry={true ? !passwordInputVisible : false}
            />
            <PasswordVisibleIconButton onPress={() => TogglePasswordVisibility}>
              <VisibleIcon></VisibleIcon>
            </PasswordVisibleIconButton>
          </OnboardingIconTextInputRow>
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
    </KeyboardDismiss>
  );
};
