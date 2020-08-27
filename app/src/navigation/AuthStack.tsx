/** @format */

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { ItemDetail, ScanningPage } from '&screens';

const HomeTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <HomeTab.Navigator initialRouteName="Scan">
      <HomeTab.Screen name="Scan" component={ScanningPage} />
      <HomeTab.Screen name="ItemDetail" component={ItemDetail} />
    </HomeTab.Navigator>
  );
};

export type AuthStackParams = {
  TabNavigation: undefined;
};

const AuthStack = createStackNavigator<AuthStackParams>();

export const AuthStackNavigator = () => (
  <AuthStack.Navigator screenOptions={{ headerShown: false }}>
    <AuthStack.Screen name="TabNavigation" component={BottomTabNavigator} />
  </AuthStack.Navigator>
);
