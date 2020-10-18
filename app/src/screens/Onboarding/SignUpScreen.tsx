/** @format */

import React, { useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

// Components
import { Alert, Keyboard, View as OnboardingFormContainer } from 'react-native';

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
import { EmailIcon, LockIcon, VisibleIcon } from '&icons';

// Navigation
import { OnboardingStackParams } from '&navigation';
import { StackScreenProps } from '@react-navigation/stack';

// Firebase Authentication
import Firebase, { fns } from '../../lib/firebase';

// Utils
import { emailRegex, validInput } from '&utils';

type SignUpScreenProps = StackScreenProps<OnboardingStackParams, 'SignUpScreen'>;

export const SignUpScreen = ({ navigation }: SignUpScreenProps) => {
  // Form States
  const [userEmail, setUserEmail] = useState<string>('');
  // const [userFirstName, setUserFirstName] = useState<string>('');
  // const [userLastName, setUserLastName] = useState<string>('');
  const [userPassword, setUserPassword] = useState<string>('');
  const [userConfirmPassword, setUserConfirmPassword] = useState<string>('');

  // Validation States
  const [validEmail, setValidEmail] = useState<validInput>('NEEDS_CHECK');
  // const [validFirstname, setValidFirstname] = useState<validInput>('NEEDS_CHECK');
  const [validPassword, setValidPassword] = useState<validInput>('NEEDS_CHECK');
  const [validConfirmPassword, setValidConfirmPassword] = useState<validInput>('NEEDS_CHECK');

  // Determines if text in password input is visible or not
  const [securePassEntry, setSecurePassEntry] = useState<boolean>(true);
  const [secureConfirmPassEntry, setSecureConfirmPassEntry] = useState<boolean>(true);

  const validateSignUp = async () => {
    let validInput = true;

    if (userEmail === '' || !emailRegex.test(userEmail)) {
      validInput = false;
      setValidEmail('INVALID');
    } else {
      setValidEmail('VALID');
    }

    // if (userFirstName === '') {
    //   validInput = false;
    //   setValidFirstname('INVALID');
    // } else {
    //   setValidFirstname('VALID');
    // }

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
      const registerUser = fns.httpsCallable('registerUser');
      await registerUser({ email: userEmail.toLowerCase(), password: userPassword });
      await Firebase.auth()
        .signInWithEmailAndPassword(userEmail.toLowerCase(), userPassword)
        .then(async userCredentials => {
          if (userCredentials.user) {
            const newToken = await userCredentials.user.getIdToken();
            await AsyncStorage.setItem('userToken', newToken);
          }
        });
    }
  };

  return (
    <KeyboardDismiss onPress={Keyboard.dismiss}>
      <OnboardingMainContainer>
        <OnboardingScroll
          bounces={false}
          keyboardShouldPersistTaps="always"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 40 }}
        >
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

            {/*<OnboardingInputContainer valid={validFirstname}>*/}
            {/*  <OnboardingFormContainerHalf>*/}
            {/*    <OnboardingFormText>First Name*</OnboardingFormText>*/}

            {/*    <OnboardingFormHalfRow>*/}
            {/*      <OnboardingInputIconContainer>*/}
            {/*        <PersonIcon />*/}
            {/*      </OnboardingInputIconContainer>*/}

            {/*      <OnboardingTextInput*/}
            {/*        value={userFirstName}*/}
            {/*        textContentType="name"*/}
            {/*        autoCompleteType="name"*/}
            {/*        placeholder="First Name"*/}
            {/*        onChangeText={text => {*/}
            {/*          setUserFirstName(text);*/}
            {/*          setValidFirstname('NEEDS_CHECK');*/}
            {/*        }}*/}
            {/*      />*/}
            {/*    </OnboardingFormHalfRow>*/}
            {/*  </OnboardingFormContainerHalf>*/}

            {/*  <OnboardingFormContainerHalf>*/}
            {/*    <OnboardingFormText>Last Name</OnboardingFormText>*/}

            {/*    <OnboardingTextInput*/}
            {/*      value={userLastName}*/}
            {/*      autoCompleteType="name"*/}
            {/*      placeholder="Last Name"*/}
            {/*      textContentType="familyName"*/}
            {/*      onChangeText={setUserLastName}*/}
            {/*    />*/}
            {/*  </OnboardingFormContainerHalf>*/}
            {/*</OnboardingInputContainer>*/}
            {/*{validFirstname === 'INVALID' && <OnboardingRequiredText>First Name is required</OnboardingRequiredText>}*/}

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
            <OnboardingTextButton onPress={() => navigation.navigate('SignInScreen')}>
              <OnboardingSmallerBoldText>Log In</OnboardingSmallerBoldText>
            </OnboardingTextButton>
          </OnboardingRow>

          <OnboardingButton onPress={validateSignUp}>
            <OnboardingButtonText>Sign Up</OnboardingButtonText>
          </OnboardingButton>

          <OnboardingSmallerText>
            By continuing you agree to our
            <OnboardingSmallerBoldText> Terms of Service </OnboardingSmallerBoldText>
            and
            <OnboardingSmallerBoldText> Privacy Policy</OnboardingSmallerBoldText>
          </OnboardingSmallerText>
        </OnboardingScroll>
      </OnboardingMainContainer>
    </KeyboardDismiss>
  );
};
