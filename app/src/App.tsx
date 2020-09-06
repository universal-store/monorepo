/** @format */

import React from 'react';

import { theme } from '&theme';
import { ThemeProvider } from 'styled-components/native';

import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client';

import { Root } from '&navigation';

// Create the client
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'http://10.2.39.47:8080/v1/graphql',
  }),
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <Root />
      </ApolloProvider>
    </ThemeProvider>
  );
};

export default App;
