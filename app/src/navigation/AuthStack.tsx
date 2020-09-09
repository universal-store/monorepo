/** @format */

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { ItemDetail, ScanningScreen } from '&screens';

export type AuthStackParams = {
  ScanningScreen: undefined;
  ItemDetail: { barcodeId: string };
};

const AuthStack = createStackNavigator<AuthStackParams>();

export const AuthStackNavigator = () => (
  <AuthStack.Navigator initialRouteName="ScanningScreen" screenOptions={{ headerShown: false }}>
    <AuthStack.Screen name="ScanningScreen" component={ScanningScreen} />
    <AuthStack.Screen name="ItemDetail" component={ItemDetail} options={{ gestureEnabled: false }} />
  </AuthStack.Navigator>
);
