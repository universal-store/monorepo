/** @format */

import React from 'react';
import { StatusBar } from 'react-native';

import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client';

// Create the client as outlined in the setup guide
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'http://localhost:8080/v1/graphql',
  }),
});
const App = () => {
  return (
    <ApolloProvider client={client}>
      <StatusBar barStyle="dark-content" />
    </ApolloProvider>
  );
};

export default App;
