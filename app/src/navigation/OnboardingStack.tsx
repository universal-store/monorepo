/** @format */

import React from 'react';

// Screens
import { SignInScreen, SignUpScreen } from '&screens';

// Stack Navigators
import { AuthStackNavigator } from './AuthStack';
import { createStackNavigator } from '@react-navigation/stack';

export type OnboardingStackParams = {
  AuthStack: undefined;
  SignInScreen: undefined;
  SignUpScreen: undefined;
};

const OnboardingStack = createStackNavigator<OnboardingStackParams>();

export const OnboardingStackNavigator = () => (
  <OnboardingStack.Navigator
    initialRouteName="SignInScreen"
    screenOptions={{ headerShown: false, gestureEnabled: false }}
  >
    <OnboardingStack.Screen name="SignInScreen" component={SignInScreen} />
    <OnboardingStack.Screen name="SignUpScreen" component={SignUpScreen} />
    <OnboardingStack.Screen name="AuthStack" component={AuthStackNavigator} />
  </OnboardingStack.Navigator>
);
