/** @format */

import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import AsyncStorage from '@react-native-community/async-storage';

//Components
import { LoadingOverlay } from '&components';

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
import firebase from 'firebase';
import { Firebase } from '&lib';

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
  const [user, setUser] = useState<firebase.User | null>(null);

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
    SplashScreen.hide();
    void Firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(onAuthStateChanged);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <>
          <StatusBar barStyle="dark-content" />
          {loading ? (
            <LoadingOverlay />
          ) : (
            <NavigationContainer>
              {user && user.displayName ? <AuthNavigator /> : <OnboardingStackNavigator />}
            </NavigationContainer>
          )}
        </>
      </ApolloProvider>
    </ThemeProvider>
  );
};

export default App;
