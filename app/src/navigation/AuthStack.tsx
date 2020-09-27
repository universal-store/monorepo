/** @format */

import React from 'react';

// Screens
import { ItemDetail, LandingScreen, ScanningScreen } from '&screens';

// Stack Navigators
import { createStackNavigator } from '@react-navigation/stack';
import { OnboardingStackNavigator } from './OnboardingStack';

export type AuthStackParams = {
  ScanningScreen: undefined;
  OnboardingStack: undefined;
  ItemDetail: { barcodeId: string };
  LandingScreen: { email: string; password: string };
};

const AuthStack = createStackNavigator<AuthStackParams>();

export const AuthStackNavigator = () => (
  <AuthStack.Navigator initialRouteName="LandingScreen" screenOptions={{ headerShown: false, gestureEnabled: false }}>
    <AuthStack.Screen name="LandingScreen" component={LandingScreen} />

    <AuthStack.Screen name="ScanningScreen" component={ScanningScreen} />
    <AuthStack.Screen name="ItemDetail" component={ItemDetail} />

    <AuthStack.Screen name="OnboardingStack" component={OnboardingStackNavigator} />
  </AuthStack.Navigator>
);
