/** @format */

import React from 'react';

// Components
import { FullScreenWhite, TestButton, TestButtons, TestButtonText } from '&components';

// Navigation
import { OnboardingStackParams } from '&navigation';
import { StackScreenProps } from '@react-navigation/stack';

type LandingScreenProps = StackScreenProps<OnboardingStackParams, 'LandingScreen'>;

export const LandingScreen = ({ navigation }: LandingScreenProps) => {
  return (
    <FullScreenWhite>
      <TestButtons>
        <TestButton onPress={() => navigation.navigate('SignUpScreen')}>
          <TestButtonText>Go To Sign Up</TestButtonText>
        </TestButton>

        <TestButton onPress={() => navigation.navigate('SignInScreen')}>
          <TestButtonText>Go To Sign In</TestButtonText>
        </TestButton>
      </TestButtons>
    </FullScreenWhite>
  );
};
