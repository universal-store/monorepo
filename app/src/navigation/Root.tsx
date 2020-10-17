/** @format */

import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';

// Screens
import { SplashScreen } from '&screens';

// Stack Navigators
import { AuthStackNavigator } from './AuthStack';
import { OnboardingStackNavigator } from './OnboardingStack';
import { NavigationContainer } from '@react-navigation/native';

// Firebase Authentication
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

export const Root = () => {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  const [loading, setLoading] = useState(true);

  const onAuthStateChanged = (user: FirebaseAuthTypes.User | null) => {
    setUser(user);
    if (loading) setLoading(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (loading) return <SplashScreen />;

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>{user ? <AuthStackNavigator /> : <OnboardingStackNavigator />}</NavigationContainer>
    </>
  );
};
