/** @format */

import React, { useState } from 'react';
import { Keyboard, View as OnboardingFormContainer } from 'react-native';

// Components
import {
  HeaderLargeText as OnboardingHeaderTitleText,
  KeyboardDismiss,
  LogoContainer,
  OnboardingButton,
  OnboardingButtonText,
  OnboardingFormContainerHalf,
  OnboardingFormHalfRow,
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
  OnboardingSubHeaderText,
  OnboardingTextButton,
  OnboardingTextInput,
  RowView,
} from '&components';

// Navigation
import { OnboardingStackParams } from '&navigation';
import { StackScreenProps } from '@react-navigation/stack';
import { EmailIcon, LockIcon, PersonIcon, VisibleIcon } from '&icons';

type SignUpScreenProps = StackScreenProps<OnboardingStackParams, 'SignUpScreen'>;

export const SignUpScreen = ({ navigation }: SignUpScreenProps) => {
  // Form States
  const [userEmail, setUserEmail] = useState<string>('');
  const [userFirstName, setUserFirstName] = useState<string>('');
  const [userLastName, setUserLastName] = useState<string>('');
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

        <OnboardingHeaderTitleText>Getting Started</OnboardingHeaderTitleText>
        <OnboardingSubHeaderText>Create an account to continue</OnboardingSubHeaderText>

        <OnboardingFormContainer>
          <OnboardingFormText>Email Address*</OnboardingFormText>
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

          <OnboardingInputContainer>
            <OnboardingFormContainerHalf>
              <OnboardingFormText>First Name*</OnboardingFormText>

              <OnboardingFormHalfRow>
                <OnboardingInputIconContainer>
                  <PersonIcon />
                </OnboardingInputIconContainer>

                <OnboardingTextInput
                  value={userFirstName}
                  autoCompleteType="name"
                  onChangeText={setUserFirstName}
                  placeholder="First Name"
                />
              </OnboardingFormHalfRow>
            </OnboardingFormContainerHalf>

            <OnboardingFormContainerHalf>
              <OnboardingFormText>Last Name</OnboardingFormText>

              <OnboardingTextInput
                value={userLastName}
                autoCompleteType="name"
                onChangeText={setUserLastName}
                placeholder="Last Name"
              />
            </OnboardingFormContainerHalf>
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
