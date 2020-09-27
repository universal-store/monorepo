/** @format */

import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

// Stack Navigators
// import { AuthStackNavigator } from './AuthStack';
import { OnboardingStackNavigator } from './OnboardingStack';

export const Root = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        {/*<AuthStackNavigator />*/}
        <OnboardingStackNavigator />
      </NavigationContainer>
    </>
  );
};
