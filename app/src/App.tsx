/** @format */

import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

// Screens
import { SplashScreen } from '&screens';

// Stack Navigators
import { NavigationContainer } from '@react-navigation/native';
import { AuthStackNavigator, OnboardingStackNavigator } from '&navigation';

// Theme
import { theme } from '&theme';
import { ThemeProvider } from 'styled-components/native';

// Apollo
import { setContext } from '@apollo/client/link/context';
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client';

// Firebase Authentication
import { User } from 'firebase';
import Firebase from './lib/firebase';

// Environment Variables
import { GRAPHQL_API } from '&env';

const httpLink = createHttpLink({
  uri: `${GRAPHQL_API}`,
});

const authLink = setContext(async (_, { headers }) => {
  const token = await AsyncStorage.getItem('userToken');

  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : '',
    },
  };
});

// Create the client
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});

const App = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  const onAuthStateChanged = (user: User | null) => {
    setUser(user);
    if (loading) setLoading(false);
  };

  useEffect(() => {
    const subscriber = Firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <>
          <StatusBar barStyle="dark-content" />
          {loading ? (
            <SplashScreen />
          ) : (
            <NavigationContainer>{user ? <AuthStackNavigator /> : <OnboardingStackNavigator />}</NavigationContainer>
          )}
        </>
      </ApolloProvider>
    </ThemeProvider>
  );
};

export default App;
