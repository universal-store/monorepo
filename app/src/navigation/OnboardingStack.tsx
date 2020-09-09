/** @format */

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { LandingScreen, SignInScreen, SignUpScreen } from '&screens';

export type OnboardingStackParams = {
  SignInScreen: undefined;
  SignUpScreen: undefined;
  LandingScreen: undefined;
};

const OnboardingStack = createStackNavigator<OnboardingStackParams>();

export const OnboardingStackNavigator = () => (
  <OnboardingStack.Navigator initialRouteName="LandingScreen" screenOptions={{ headerShown: true }}>
    <OnboardingStack.Screen name="LandingScreen" component={LandingScreen} />
    <OnboardingStack.Screen name="SignInScreen" component={SignInScreen} options={{ gestureEnabled: false }} />
    <OnboardingStack.Screen name="SignUpScreen" component={SignUpScreen} options={{ gestureEnabled: false }} />
  </OnboardingStack.Navigator>
);
