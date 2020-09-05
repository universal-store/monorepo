/** @format */

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { ItemDetail, ScanningPage } from '&screens';

export type AuthStackParams = {
  ScanPage: undefined;
  ItemDetail: { barcodeId: string };
};

const AuthStack = createStackNavigator<AuthStackParams>();

export const AuthStackNavigator = () => (
  <AuthStack.Navigator screenOptions={{ headerShown: false }}>
    <AuthStack.Screen name="ScanPage" component={ScanningPage} />
    <AuthStack.Screen name="ItemDetail" component={ItemDetail} />
  </AuthStack.Navigator>
);
