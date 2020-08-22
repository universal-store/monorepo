/** @format */

import React from 'react';
import { StatusBar } from 'react-native';

import { AuthStackNavigator } from './AuthStack';
import { NavigationContainer } from '@react-navigation/native';

export const Root = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <AuthStackNavigator />
      </NavigationContainer>
    </>
  );
};
