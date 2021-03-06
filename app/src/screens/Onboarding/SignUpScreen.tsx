/** @format */

import React, { useState } from 'react';

// Libraries
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

// Components
import { Alert, Keyboard, KeyboardAvoidingView, View as OnboardingFormContainer } from 'react-native';

import {
  HeaderLargeText as OnboardingHeaderTitleText,
  KeyboardDismiss,
  LoadingOverlay,
  LogoContainer,
  OnboardingButton,
  OnboardingButtonText,
  OnboardingFormText,
  OnboardingHeaderContainer,
  OnboardingHeaderTextContainer,
  OnboardingInputContainer,
  OnboardingInputIconContainer,
  OnboardingMainContainer,
  OnboardingPadding,
  OnboardingRequiredText,
  OnboardingRow,
  OnboardingScroll,
  OnboardingSecureInputIconContainer,
  OnboardingSmallerBoldText,
  OnboardingSmallerText,
  OnboardingSubHeaderText,
  OnboardingTextButton,
  OnboardingTextInput,
} from '&components';

// Iconography
import { AppIcon, EmailIcon, LockIcon, VisibleIcon } from '&icons';

// Navigation
import { OnboardingStackParams } from '&navigation';
import { StackScreenProps } from '@react-navigation/stack';

// Firebase Authentication
import { Firebase, fns } from '&lib';

// Utils
import { emailRegex, hapticOptions, validInput } from '&utils';

type SignUpScreenProps = StackScreenProps<OnboardingStackParams, 'SignUpScreen'>;

export const SignUpScreen = ({ navigation }: SignUpScreenProps) => {
  // Form States
  const [userEmail, setUserEmail] = useState<string>('');
  const [userPassword, setUserPassword] = useState<string>('');
  const [userConfirmPassword, setUserConfirmPassword] = useState<string>('');

  // Validation States
  const [validEmail, setValidEmail] = useState<validInput>('NEEDS_CHECK');
  const [validPassword, setValidPassword] = useState<validInput>('NEEDS_CHECK');
  const [validConfirmPassword, setValidConfirmPassword] = useState<validInput>('NEEDS_CHECK');

  // Determines if text in password input is visible or not
  const [securePassEntry, setSecurePassEntry] = useState<boolean>(true);
  const [secureConfirmPassEntry, setSecureConfirmPassEntry] = useState<boolean>(true);

  // Loading Indicator
  const [loading, setLoading] = useState<boolean>(false);

  const validateSignUp = async () => {
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

    if (userConfirmPassword === '' || userConfirmPassword !== userPassword) {
      validInput = false;
      setValidConfirmPassword('INVALID');
    } else {
      setValidConfirmPassword('VALID');
    }

    if (validInput) {
      setLoading(true);

      const registerUser = fns.httpsCallable('registerUser');
      await registerUser({ email: userEmail.toLowerCase(), password: userPassword }).catch(error => {
        if (error.code === 'already-exists') {
          Alert.alert('Account Found!', `That email address is already associated with an account`, [{ text: 'Okay' }]);
        } else {
          Alert.alert('Invalid Credentials!', `That email address/password is invalid`, [{ text: 'Okay' }]);
        }
      });

      await Firebase.auth()
        .signInWithEmailAndPassword(userEmail.toLowerCase(), userPassword)
        .then(async userCredentials => {
          if (userCredentials.user) {
            const newToken = await userCredentials.user.getIdToken();

            navigation.navigate('UserInfoScreen', { id: userCredentials.user.uid, token: newToken });
          }
        });

      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView enabled behavior="padding" style={{ flex: 1 }}>
      <KeyboardDismiss onPress={Keyboard.dismiss}>
        <OnboardingMainContainer>
          <OnboardingScroll bounces={false} keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
            <OnboardingHeaderContainer>
              <LogoContainer>
                <AppIcon />
              </LogoContainer>
              <OnboardingHeaderTextContainer>
                <OnboardingHeaderTitleText>Universal Store</OnboardingHeaderTitleText>
                <OnboardingSubHeaderText>Redefining express checkout.</OnboardingSubHeaderText>
              </OnboardingHeaderTextContainer>
            </OnboardingHeaderContainer>

            <OnboardingHeaderTitleText>Getting Started</OnboardingHeaderTitleText>
            <OnboardingSubHeaderText>Create an account to continue</OnboardingSubHeaderText>

            <OnboardingFormContainer>
              <OnboardingFormText>Email Address*</OnboardingFormText>
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

              <OnboardingFormText>Password*</OnboardingFormText>
              <OnboardingInputContainer valid={validPassword}>
                <OnboardingInputIconContainer>
                  <LockIcon />
                </OnboardingInputIconContainer>
                <OnboardingTextInput
                  value={userPassword}
                  textContentType="password"
                  autoCompleteType="password"
                  secureTextEntry={securePassEntry}
                  placeholder="Enter a password..."
                  onChangeText={text => {
                    setUserPassword(text);
                    setValidPassword('NEEDS_CHECK');
                  }}
                />
                <OnboardingSecureInputIconContainer onPress={() => setSecurePassEntry(!securePassEntry)}>
                  <VisibleIcon />
                </OnboardingSecureInputIconContainer>
              </OnboardingInputContainer>
              {validPassword === 'INVALID' && <OnboardingRequiredText>Password is required</OnboardingRequiredText>}

              <OnboardingFormText>Confirm Password*</OnboardingFormText>
              <OnboardingInputContainer valid={validConfirmPassword}>
                <OnboardingInputIconContainer>
                  <LockIcon />
                </OnboardingInputIconContainer>
                <OnboardingTextInput
                  textContentType="password"
                  autoCompleteType="password"
                  value={userConfirmPassword}
                  secureTextEntry={secureConfirmPassEntry}
                  onChangeText={text => {
                    setUserConfirmPassword(text);
                    setValidConfirmPassword('NEEDS_CHECK');
                  }}
                  placeholder="Confirm your password..."
                />
                <OnboardingSecureInputIconContainer onPress={() => setSecureConfirmPassEntry(!secureConfirmPassEntry)}>
                  <VisibleIcon />
                </OnboardingSecureInputIconContainer>
              </OnboardingInputContainer>
              {validConfirmPassword === 'INVALID' &&
                (userConfirmPassword === '' ? (
                  <OnboardingRequiredText>Confirm Password is required</OnboardingRequiredText>
                ) : (
                  <OnboardingRequiredText>Passwords do not match</OnboardingRequiredText>
                ))}
            </OnboardingFormContainer>

            <OnboardingRow>
              <OnboardingSmallerText>Already have an account? </OnboardingSmallerText>
              <OnboardingTextButton
                onPress={() => {
                  ReactNativeHapticFeedback.trigger('selection', hapticOptions);
                  navigation.navigate('SignInScreen');
                }}
              >
                <OnboardingSmallerBoldText>Log In</OnboardingSmallerBoldText>
              </OnboardingTextButton>
            </OnboardingRow>

            <OnboardingButton
              onPress={() => {
                ReactNativeHapticFeedback.trigger('impactMedium', hapticOptions);
                void validateSignUp();
              }}
            >
              <OnboardingButtonText>Sign Up</OnboardingButtonText>
            </OnboardingButton>

            <OnboardingSmallerText>
              By continuing you agree to our
              <OnboardingSmallerBoldText> Terms of Service </OnboardingSmallerBoldText>
              and
              <OnboardingSmallerBoldText> Privacy Policy</OnboardingSmallerBoldText>
            </OnboardingSmallerText>

            <OnboardingPadding />
          </OnboardingScroll>

          {loading && <LoadingOverlay />}
        </OnboardingMainContainer>
      </KeyboardDismiss>
    </KeyboardAvoidingView>
  );
};
