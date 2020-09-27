/** @format */

import React, { useContext, useEffect, useState } from 'react';
import { StatusBar } from 'react-native';

// Screens
import { SplashScreen } from '&screens';

// Stack Navigators
import { AuthStackNavigator } from './AuthStack';
import { OnboardingStackNavigator } from './OnboardingStack';
import { NavigationContainer } from '@react-navigation/native';

// Context
import { AuthContext } from '&stores';

export const Root = () => {
  const authContext = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (authContext !== null) {
      setLoading(false);
    }
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        {loading ? <SplashScreen /> : authContext?.token ? <AuthStackNavigator /> : <OnboardingStackNavigator />}
      </NavigationContainer>
    </>
  );
};
