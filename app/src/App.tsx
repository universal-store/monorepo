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
      'x-hasura-id': '3501f01c-801f-4a38-98fb-532eaa7cb0b8',
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
