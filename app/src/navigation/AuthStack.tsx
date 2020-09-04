/** @format */

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { ItemDetail, ScanningPage } from '&screens';

// Interfaces
import { MockItem } from '&data';

export type AuthStackParams = {
  Scan: undefined;
  ItemDetail: { itemData: MockItem };
};

const AuthStack = createStackNavigator<AuthStackParams>();

export const AuthStackNavigator = () => (
  <AuthStack.Navigator screenOptions={{ headerShown: false }}>
    <AuthStack.Screen name="Scan" component={ScanningPage} />
    <AuthStack.Screen name="ItemDetail" component={ItemDetail} />
  </AuthStack.Navigator>
);
