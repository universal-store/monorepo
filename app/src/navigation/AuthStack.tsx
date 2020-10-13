/** @format */

import React from 'react';

// Screens
import { ItemDetail, LandingScreen, ScanningScreen, UserProfileScreen } from '&screens';

// Stack Navigators
import { createStackNavigator } from '@react-navigation/stack';
import { OnboardingStackNavigator } from './OnboardingStack';

export type AuthStackParams = {
  ScanningScreen: undefined;
  OnboardingStack: undefined;
  ItemDetail: { barcodeId: string };
  LandingScreen: { email: string; password: string };
  UserProfile: undefined;
};

const AuthStack = createStackNavigator<AuthStackParams>();

export const AuthStackNavigator = () => (
  <AuthStack.Navigator initialRouteName="LandingScreen" screenOptions={{ headerShown: false, gestureEnabled: false }}>
    <AuthStack.Screen name="LandingScreen" component={LandingScreen} />

    <AuthStack.Screen name="ScanningScreen" component={ScanningScreen} />
    <AuthStack.Screen name="ItemDetail" component={ItemDetail} />

    <AuthStack.Screen name="UserProfile" component={UserProfileScreen} />

    <AuthStack.Screen name="OnboardingStack" component={OnboardingStackNavigator} />
  </AuthStack.Navigator>
);
