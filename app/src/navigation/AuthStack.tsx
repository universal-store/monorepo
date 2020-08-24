/** @format */

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { ScanPage } from '../screens/Auth/Scan';

const HomeTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <HomeTab.Navigator initialRouteName="Scan">
      <HomeTab.Screen name="Scan" component={ScanPage} />
    </HomeTab.Navigator>
  );
};

export type AuthStackParams = {
  TabNavigation: undefined;
};

const AuthStack = createStackNavigator<AuthStackParams>();

export const AuthStackNavigator = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="TabNavigation" component={BottomTabNavigator} />
  </AuthStack.Navigator>
);
