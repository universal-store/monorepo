/** @format */

import React, { useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { Alert, Keyboard, View as OnboardingFormContainer } from 'react-native';

// Components
import {
  HeaderLargeText as OnboardingHeaderTitleText,
  KeyboardDismiss,
  LogoContainer,
  OnboardingButton,
  OnboardingButtonText,
  OnboardingForgotPasswordButton,
  OnboardingFormText,
  OnboardingHeaderContainer,
  OnboardingHeaderTextContainer,
  OnboardingInputContainer,
  OnboardingInputIconContainer,
  OnboardingMainContainer,
  OnboardingRequiredText,
  OnboardingRow,
  OnboardingScroll,
  OnboardingSecureInputIconContainer,
  OnboardingSmallerBoldText,
  OnboardingSmallerText,
  OnboardingSmallText,
  OnboardingSubHeaderText,
  OnboardingTextButton,
  OnboardingTextInput,
} from '&components';

// Iconography
import { EmailIcon, LockIcon, VisibleIcon } from '&icons';

// Navigation
import { OnboardingStackParams } from '&navigation';
import { StackScreenProps } from '@react-navigation/stack';

// Firebase Authentication
import Firebase from '../../lib/firebase';

// Utils
import { emailRegex, validInput } from '&utils';

type SignInScreenProps = StackScreenProps<OnboardingStackParams, 'SignInScreen'>;

export const SignInScreen = ({ navigation }: SignInScreenProps) => {
  // Form States
  const [userEmail, setUserEmail] = useState<string>('');
  const [userPassword, setUserPassword] = useState<string>('');

  // Validation States
  const [validEmail, setValidEmail] = useState<validInput>('NEEDS_CHECK');
  const [validPassword, setValidPassword] = useState<validInput>('NEEDS_CHECK');

  // Determines if text in password input is visible or not
  const [secureTextEntry, setSecureTextEntry] = useState<boolean>(true);

  const validateSignIn = () => {
    let validInput = true;

    if (userEmail === '' || !emailRegex.test(userEmail)) {
      validInput = false;
      setValidEmail('INVALID');
    } else {
      setValidEmail('VALID');
    }

    if (userPassword === '') {
      validInput = false;
      setValidPassword('INVALID');
    } else {
      setValidPassword('VALID');
    }

    if (validInput) {
      Firebase.auth()
        .signInWithEmailAndPassword(userEmail.toLowerCase(), userPassword)
        .then(async userCredentials => {
          if (userCredentials.user) {
            const newToken = await userCredentials.user.getIdToken();
            await AsyncStorage.setItem('userToken', newToken);
          }
        })
        .catch(error => {
          if (error.code === 'auth/wrong-password') {
            Alert.alert('Wrong Password!', `That password does not match the account associated with that email`, [
              { text: 'Okay' },
            ]);
          } else if (error.code === 'auth/invalid-email') {
            Alert.alert('Invalid Email!', `That email address is invalid`, [{ text: 'Okay' }]);
          } else if (error.code === 'auth/user-not-found') {
            Alert.alert('Invalid Credentials!', `That email is not associated with any accounts`, [{ text: 'Okay' }]);
          }
        });
    }
  };

  return (
    <KeyboardDismiss onPress={Keyboard.dismiss}>
      <OnboardingMainContainer>
        <OnboardingScroll bounces={false} keyboardShouldPersistTaps="always" showsVerticalScrollIndicator={false}>
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
            <OnboardingInputContainer valid={validEmail}>
              <OnboardingInputIconContainer>
                <EmailIcon />
              </OnboardingInputIconContainer>
              <OnboardingTextInput
                value={userEmail}
                autoCompleteType="email"
                keyboardType="email-address"
                textContentType="emailAddress"
                placeholder="Enter your email address..."
                onChangeText={text => {
                  setUserEmail(text);
                  setValidEmail('NEEDS_CHECK');
                }}
              />
            </OnboardingInputContainer>
            {validEmail === 'INVALID' &&
              (userEmail === '' ? (
                <OnboardingRequiredText>Email is required</OnboardingRequiredText>
              ) : (
                <OnboardingRequiredText>Email is invalid</OnboardingRequiredText>
              ))}

            <OnboardingFormText>Password</OnboardingFormText>
            <OnboardingInputContainer valid={validPassword}>
              <OnboardingInputIconContainer>
                <LockIcon />
              </OnboardingInputIconContainer>
              <OnboardingTextInput
                value={userPassword}
                textContentType="password"
                autoCompleteType="password"
                secureTextEntry={secureTextEntry}
                placeholder="Enter a password..."
                onChangeText={text => {
                  setUserPassword(text);
                  setValidPassword('NEEDS_CHECK');
                }}
              />
              <OnboardingSecureInputIconContainer onPress={() => setSecureTextEntry(!secureTextEntry)}>
                <VisibleIcon />
              </OnboardingSecureInputIconContainer>
            </OnboardingInputContainer>
            {validPassword === 'INVALID' && <OnboardingRequiredText>Password is required</OnboardingRequiredText>}

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

          <OnboardingButton onPress={validateSignIn}>
            <OnboardingButtonText>Log In</OnboardingButtonText>
          </OnboardingButton>
        </OnboardingScroll>
      </OnboardingMainContainer>
    </KeyboardDismiss>
  );
};
