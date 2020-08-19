import React, { useState } from 'react';

import {
  Platform,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';

import { ApolloClient, InMemoryCache, ApolloLink, ApolloProvider } from '@apollo/client';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';

import { mockedLink } from './mock';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: mockedLink as unknown as ApolloLink,
});

const Stack = createStackNavigator();

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
});

interface AppProps {
  skipLoadingScreen: boolean;
}

const App = ({ skipLoadingScreen }: AppProps) => {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  const loadResourcesAsync = async () => {
    await Promise.all([
      Asset.loadAsync([
        // ...
      ]),
      Font.loadAsync({
        // ...
      }),
    ]);
  };

  const handleLoadingError = () => {
    // ...
  };

  const handleFinishLoading = () => {
    setLoadingComplete(true);
  };

  if (!isLoadingComplete && !skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={handleFinishLoading}
      />
    );
  }
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="About" component={AboutScreen} />
          </Stack.Navigator>
        </View>
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;
