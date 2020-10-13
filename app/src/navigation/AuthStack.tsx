/** @format */

import React from 'react';

// Screens
import { CartScreen, FavoriteScreen, ItemDetail, MapViewScreen, ProfileScreen, ScanningScreen } from '&screens';

// Stack Navigators
import { OnboardingStackNavigator } from './OnboardingStack';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export type RootAuthParams = {
  MapView: { email: string; password: string };
  FavoritesScreen: undefined;
  CartScreen: undefined;
  ProfileScreen: undefined;
};

const RootAuth = createBottomTabNavigator();

export const RootAuthTabNavigator = () => (
  <RootAuth.Navigator initialRouteName="MapView">
    <RootAuth.Screen name="MapView" component={MapViewScreen} />
    <RootAuth.Screen name="FavoritesScreen" component={FavoriteScreen} />
    {/*<RootAuth.Screen name="ScanningScreen" component={ScanningStackNavigator} />*/}
    <RootAuth.Screen name="CartScreen" component={CartScreen} />
    <RootAuth.Screen name="ProfileScreen" component={ProfileScreen} />
  </RootAuth.Navigator>
);

export type ScanningStackParams = {
  ScanningScreen: undefined;
  ItemDetail: { barcodeId: string };
};

const ScanningStack = createStackNavigator<ScanningStackParams>();

export const ScanningStackNavigator = () => (
  <ScanningStack.Navigator
    initialRouteName="ScanningScreen"
    screenOptions={{ headerShown: false, gestureEnabled: false }}
  >
    <ScanningStack.Screen name="ScanningScreen" component={ScanningScreen} />
    <ScanningStack.Screen name="ItemDetail" component={ItemDetail} />
  </ScanningStack.Navigator>
);

export type AuthStackParams = {
  RootAuthTabs: undefined;
  OnboardingStack: undefined;
};

const AuthStack = createStackNavigator<AuthStackParams>();

export const AuthStackNavigator = () => (
  <AuthStack.Navigator initialRouteName="RootAuthTabs" screenOptions={{ headerShown: false, gestureEnabled: false }}>
    <AuthStack.Screen name="RootAuthTabs" component={RootAuthTabNavigator} />

    <AuthStack.Screen name="OnboardingStack" component={OnboardingStackNavigator} />
  </AuthStack.Navigator>
);
