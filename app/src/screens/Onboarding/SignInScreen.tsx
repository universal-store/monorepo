/** @format */

import React, { useState } from 'react';

// Components
import {
  FuturaBoldLarge as SignInHeaderTitleText,
  LogoContainer,
  SignInButton,
  SignInButtonText,
  SignInForgotPasswordButton,
  SignInFormContainer,
  SignInFormText,
  SignInHeaderContainer,
  SignInHeaderTextContainer,
  SignInMainContainer,
  SignInSignUpBoldText,
  SignInSignUpRow,
  SignInSignUpText,
  SignInSignUpTextButton,
  SignInSmallText,
  SignInSubHeaderText,
  SignInInputContainer,
  SignInTextInput,
  SignInTextInputIconContainer,
  SignInVisibleIconButton,
  TestButton,
  TestButtons,
  TestButtonText,
} from '&components';

// Icons
import { LockIcon, VisibleIcon, EmailIcon } from '&icons';

// Navigation
import { OnboardingStackParams } from '&navigation';
import { StackScreenProps } from '@react-navigation/stack';

type SignInScreenProps = StackScreenProps<OnboardingStackParams, 'SignInScreen'>;

export const SignInScreen = ({ navigation }: SignInScreenProps) => {
  // Determines if text in password input is visible or not
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
    <SignInMainContainer>
      <SignInHeaderContainer>
        <LogoContainer />
        <SignInHeaderTextContainer>
          <SignInHeaderTitleText>Universal Store</SignInHeaderTitleText>
          <SignInSubHeaderText>Redefining express checkout.</SignInSubHeaderText>
        </SignInHeaderTextContainer>
      </SignInHeaderContainer>

      <SignInHeaderTitleText>Sign In</SignInHeaderTitleText>
      <SignInSubHeaderText>Welcome back!</SignInSubHeaderText>

      <SignInFormContainer>
        <SignInFormText>Email</SignInFormText>

        <SignInInputContainer>
          <SignInTextInputIconContainer>
            <EmailIcon></EmailIcon>
          </SignInTextInputIconContainer>
          <SignInTextInput></SignInTextInput>
        </SignInInputContainer>

        <SignInFormText>Password</SignInFormText>

        <SignInInputContainer>
          <SignInTextInputIconContainer>
            <LockIcon></LockIcon>
          </SignInTextInputIconContainer>
          <SignInTextInput secureTextEntry={true ? !passwordInputVisible : false}></SignInTextInput>
          <SignInVisibleIconButton onPress={() => TogglePasswordVisibility}>
            <VisibleIcon></VisibleIcon>
          </SignInVisibleIconButton>
        </SignInInputContainer>

        <SignInForgotPasswordButton onPress={() => console.log('Forgot Password Pressed')}>
          <SignInSmallText>Forget Password?</SignInSmallText>
        </SignInForgotPasswordButton>
      </SignInFormContainer>

      <SignInSignUpRow>
        <SignInSignUpText>Need an account?</SignInSignUpText>
        <SignInSignUpTextButton onPress={() => navigation.navigate('SignUpScreen')}>
          <SignInSignUpBoldText>Sign Up</SignInSignUpBoldText>
        </SignInSignUpTextButton>
      </SignInSignUpRow>

      <SignInButton onPress={() => console.log('Log In Pressed')}>
        <SignInButtonText>Log In</SignInButtonText>
      </SignInButton>

      <TestButtons>
        <TestButton onPress={() => navigation.navigate('LandingScreen')}>
          <TestButtonText>Go To Landing</TestButtonText>
        </TestButton>

        <TestButton onPress={() => navigation.navigate('SignUpScreen')}>
          <TestButtonText>Go To Sign Up</TestButtonText>
        </TestButton>
      </TestButtons>
    </SignInMainContainer>
  );
};
