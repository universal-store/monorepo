/** @format */

import React from 'react';
import { StatusBar } from 'react-native';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

// import { config } from "./configs";

// Create the client as outlined in the setup guide
const client = new ApolloClient({
  cache: new InMemoryCache(),
  // link: new HttpLink({
  // 	uri: config.API_URL,
  // }),
});
const App = () => {
  return (
    <ApolloProvider client={client}>
      <StatusBar barStyle="dark-content" />
    </ApolloProvider>
  );
};

export default App;
