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
import { ApolloClient, ApolloProvider, createHttpLink, HttpLink, InMemoryCache } from '@apollo/client';

// Firebase Authentication
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

// Context Store
import AuthProvider from '&stores';

// Environment Variables
import { GRAPHQL_API, HASURA_GRAPHQL_ADMIN_SECRET } from '&env';

const httpLink = createHttpLink({
  uri: `${GRAPHQL_API}`,
});

const authLink = setContext(async (_, { headers }) => {
  const userId = await AsyncStorage.getItem('userToken');

  if (userId)
    return {
      headers: {
        'x-hasura-role': 'Shopper',
        'x-hasura-user-id': userId,
        'x-hasura-admin-secret': HASURA_GRAPHQL_ADMIN_SECRET,
      },
    };

  return {
    headers: {
      'x-hasura-admin-secret': HASURA_GRAPHQL_ADMIN_SECRET,
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
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  const onAuthStateChanged = (user: FirebaseAuthTypes.User | null) => {
    setUser(user);
    if (loading) setLoading(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <AuthProvider>
          <>
            <StatusBar barStyle="dark-content" />
            {loading ? (
              <SplashScreen />
            ) : (
              <NavigationContainer>{user ? <AuthStackNavigator /> : <OnboardingStackNavigator />}</NavigationContainer>
            )}
          </>
        </AuthProvider>
      </ApolloProvider>
    </ThemeProvider>
  );
};

export default App;
