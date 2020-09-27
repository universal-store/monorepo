/** @format */

import React from 'react';

import { theme } from '&theme';
import { ThemeProvider } from 'styled-components/native';

import { Root } from '&navigation';

import { GRAPHQL_API, HASURA_GRAPHQL_ADMIN_SECRET, TEST_USER } from '&env';

import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client';

// Create the client
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: `${GRAPHQL_API}`,
    headers: {
      'x-hasura-id': TEST_USER,
      'x-hasura-role': 'Shopper',
      'x-hasura-admin-secret': HASURA_GRAPHQL_ADMIN_SECRET,
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
