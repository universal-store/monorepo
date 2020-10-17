/** @format */

import React from 'react';

// Screens
import { SignInScreen, SignUpScreen, ValidateUserScreen } from '&screens';

// Stack Navigators
import { AuthStackNavigator } from './AuthStack';
import { createStackNavigator } from '@react-navigation/stack';

export type OnboardingStackParams = {
  AuthStack: { screen: string };
  SignInScreen: undefined;
  SignUpScreen: undefined;
  ValidateUserScreen: { email: string; password: string };
};

const OnboardingStack = createStackNavigator<OnboardingStackParams>();

export const OnboardingStackNavigator = () => (
  <OnboardingStack.Navigator
    initialRouteName="SignInScreen"
    screenOptions={{ headerShown: false, gestureEnabled: false }}
  >
    <OnboardingStack.Screen name="SignInScreen" component={SignInScreen} />
    <OnboardingStack.Screen name="SignUpScreen" component={SignUpScreen} />
    <OnboardingStack.Screen name="ValidateUserScreen" component={ValidateUserScreen} />
    <OnboardingStack.Screen name="AuthStack" component={AuthStackNavigator} />
  </OnboardingStack.Navigator>
);
