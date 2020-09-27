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
  OnboardingForgotPasswordButton,
  OnboardingFormContainer,
  OnboardingFormText,
  OnboardingHeaderContainer,
  OnboardingHeaderTextContainer,
  OnboardingInputContainer,
  OnboardingInputIconContainer,
  OnboardingMainContainer,
  OnboardingRow,
  OnboardingSecureInputIconContainer,
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
import { EmailIcon, LockIcon, VisibleIcon } from '&icons';

type SignInScreenProps = StackScreenProps<OnboardingStackParams, 'SignInScreen'>;

export const SignInScreen = ({ navigation }: SignInScreenProps) => {
  // Form States
  const [userEmail, setUserEmail] = useState<string>('');
  const [userPassword, setUserPassword] = useState<string>('');

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
          <OnboardingInputContainer>
            <OnboardingInputIconContainer>
              <EmailIcon />
            </OnboardingInputIconContainer>
            <OnboardingTextInput
              value={userEmail}
              autoCompleteType="email"
              onChangeText={setUserEmail}
              placeholder="Enter your email address..."
            />
          </OnboardingInputContainer>

          <OnboardingFormText>Password</OnboardingFormText>
          <OnboardingInputContainer>
            <OnboardingInputIconContainer>
              <LockIcon />
            </OnboardingInputIconContainer>
            <OnboardingTextInput
              value={userPassword}
              autoCompleteType="password"
              onChangeText={setUserPassword}
              secureTextEntry={secureTextEntry}
              placeholder="Enter a password..."
            />
            <OnboardingSecureInputIconContainer onPress={() => setSecureTextEntry(!secureTextEntry)}>
              <VisibleIcon />
            </OnboardingSecureInputIconContainer>
          </OnboardingInputContainer>

          <OnboardingForgotPasswordButton onPress={() => console.log('Forgot Password Pressed')}>
            <OnboardingSmallText>Forgot Password?</OnboardingSmallText>
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
