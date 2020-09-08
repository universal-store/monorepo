/** @format */

import React from 'react';

import { theme } from '&theme';
import { ThemeProvider } from 'styled-components/native';

import { Root } from '&navigation';

import { HASURA_GRAPHQL_ADMIN_SECRET, LOCALHOST_IP } from '&env';

import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client';

// Create the client
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: `http://${LOCALHOST_IP}:8080/v1/graphql`,
    headers: {
      'x-hasura-role': 'Shopper',
      'x-hasura-admin-secret': HASURA_GRAPHQL_ADMIN_SECRET,
      'x-hasura-id': '8cc205d3-1ff5-42dd-8d64-4228a408c7c2',
    },
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
