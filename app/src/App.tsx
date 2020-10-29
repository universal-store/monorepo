/** @format */

import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

// Screens
import { SplashScreen } from '&screens';

// Stack Navigators
import { NavigationContainer } from '@react-navigation/native';
import { OnboardingStackNavigator, AuthNavigator } from '&navigation';

// Theme
import { theme } from '&theme';
import { ThemeProvider } from 'styled-components/native';

// Apollo
import { setContext } from '@apollo/client/link/context';
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client';

// Firebase Authentication
import { Firebase } from '&lib';
import { auth, User } from 'firebase';

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

  const onAuthStateChanged = () => {
    return Firebase.auth().onAuthStateChanged(async user => {
      if (user) {
        const newToken = await user.getIdToken(true);
        await AsyncStorage.setItem('userToken', newToken);

        setUser(user);
      }

      if (loading) setLoading(false);
    });
  };

  useEffect(() => {
    Firebase.auth().setPersistence(auth.Auth.Persistence.LOCAL).then(onAuthStateChanged);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <>
          <StatusBar barStyle="dark-content" />
          {loading ? (
            <SplashScreen />
          ) : (
            <NavigationContainer>{user ? <AuthNavigator /> : <OnboardingStackNavigator />}</NavigationContainer>
          )}
        </>
      </ApolloProvider>
    </ThemeProvider>
  );
};

export default App;
