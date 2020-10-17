/** @format */

import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
// Screens
import { SplashScreen } from '&screens';

// Stack Navigators
import { NavigationContainer } from '@react-navigation/native';
import { AuthStackNavigator, OnboardingStackNavigator } from '&navigation';

// Theme
import { theme } from '&theme';
import { ThemeProvider } from 'styled-components/native';

// Apollo
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client';

// Firebase Authentication
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

// Context Store
import AuthProvider from '&stores';

// Environment Variables
import { GRAPHQL_API, HASURA_GRAPHQL_ADMIN_SECRET } from '&env';

// Create the client
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: `${GRAPHQL_API}`,
    headers: {
      'x-hasura-admin-secret': HASURA_GRAPHQL_ADMIN_SECRET,
    },
  }),
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
