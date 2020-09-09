/** @format */

import React from 'react';

// Components
import { FullScreenWhite, TestButton, TestButtons, TestButtonText } from '&components';

// Navigation
import { OnboardingStackParams } from '&navigation';
import { StackScreenProps } from '@react-navigation/stack';

type SignUpScreenProps = StackScreenProps<OnboardingStackParams, 'SignUpScreen'>;

export const SignUpScreen = ({ navigation }: SignUpScreenProps) => {
  return (
    <FullScreenWhite>
      <TestButtons>
        <TestButton onPress={() => navigation.navigate('LandingScreen')}>
          <TestButtonText>Go To Landing</TestButtonText>
        </TestButton>

        <TestButton onPress={() => navigation.navigate('SignInScreen')}>
          <TestButtonText>Go To Sign In</TestButtonText>
        </TestButton>
      </TestButtons>
    </FullScreenWhite>
  );
};
