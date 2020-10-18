/** @format */

import React from 'react';

// Screens
import {
  CartScreen,
  FavoriteScreen,
  ItemDetail,
  MapViewScreen,
  ProfileScreen,
  ScanningScreen,
  UserInfoScreen,
} from '&screens';

// Tab Icons
import {
  CartScreenIcon,
  FavoriteScreenIcon,
  MapViewScreenIcon,
  ProfileScreenIcon,
  TabNavigationIconProps,
} from '&icons';

// Stack Navigators
import { OnboardingStackNavigator } from './OnboardingStack';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export type RootAuthTabParams = {
  MapView: { email: string; password: string };
  FavoritesScreen: undefined;
  CartScreen: undefined;
  ProfileScreen: undefined;
  ItemDetail: { barcodeId: string };
};

const RootAuthTab = createBottomTabNavigator<RootAuthTabParams>();

export const RootAuthTabNavigator = () => (
  <RootAuthTab.Navigator initialRouteName="MapView" tabBarOptions={{ showLabel: false }}>
    <RootAuthTab.Screen
      name="MapView"
      component={MapViewScreen}
      options={{
        tabBarIcon: ({ focused }: TabNavigationIconProps) => <MapViewScreenIcon focused={focused} />,
      }}
    />
    <RootAuthTab.Screen
      name="FavoritesScreen"
      component={FavoriteScreen}
      options={{
        tabBarIcon: ({ focused }: TabNavigationIconProps) => <FavoriteScreenIcon focused={focused} />,
      }}
    />
    <RootAuthTab.Screen
      name="CartScreen"
      component={CartScreen}
      options={{
        tabBarIcon: ({ focused }: TabNavigationIconProps) => <CartScreenIcon focused={focused} />,
      }}
    />
    <RootAuthTab.Screen
      name="ProfileScreen"
      component={ProfileScreen}
      options={{
        tabBarIcon: ({ focused }: TabNavigationIconProps) => <ProfileScreenIcon focused={focused} />,
      }}
    />
  </RootAuthTab.Navigator>
);

export type RootAuthParams = {
  UserInfoScreen: undefined;
  TabNavigation: { screen: string };
  ScanningScreen: undefined;
  ItemDetail: { barcodeId: string };
};

export const RootAuth = createStackNavigator<RootAuthParams>();

export const RootAuthNavigator = () => (
  <RootAuth.Navigator initialRouteName="TabNavigation" screenOptions={{ headerShown: false, gestureEnabled: false }}>
    <RootAuth.Screen name="UserInfoScreen" component={UserInfoScreen} />
    <RootAuth.Screen name="TabNavigation" component={RootAuthTabNavigator} />
    <RootAuth.Screen name="ScanningScreen" component={ScanningScreen} />
    <RootAuth.Screen name="ItemDetail" component={ItemDetail} />
  </RootAuth.Navigator>
);

export type AuthStackParams = {
  RootAuthStack: undefined;
  OnboardingStack: { screen: string };
};

const AuthStack = createStackNavigator<AuthStackParams>();

export const AuthStackNavigator = () => (
  <AuthStack.Navigator initialRouteName="RootAuthStack" screenOptions={{ headerShown: false, gestureEnabled: false }}>
    <AuthStack.Screen name="RootAuthStack" component={RootAuthNavigator} />
    <AuthStack.Screen name="OnboardingStack" component={OnboardingStackNavigator} />
  </AuthStack.Navigator>
);
