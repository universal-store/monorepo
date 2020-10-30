/** @format */

import React from 'react';

// Screens
import { SignInScreen, SignUpScreen, UserInfoScreen } from '&screens';

// Stack Navigators
import { createStackNavigator } from '@react-navigation/stack';

export type OnboardingStackParams = {
  SignInScreen: undefined;
  SignUpScreen: undefined;
  UserInfoScreen: { id: string; token: string };
};

const OnboardingStack = createStackNavigator<OnboardingStackParams>();

export const OnboardingStackNavigator = () => (
  <OnboardingStack.Navigator
    initialRouteName="SignInScreen"
    screenOptions={{ headerShown: false, gestureEnabled: false }}
  >
    <OnboardingStack.Screen name="SignInScreen" component={SignInScreen} />
    <OnboardingStack.Screen name="SignUpScreen" component={SignUpScreen} />
    <OnboardingStack.Screen name="UserInfoScreen" component={UserInfoScreen} />
  </OnboardingStack.Navigator>
);
