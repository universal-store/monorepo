/** @format */

import React from 'react';

// Theme
import { theme } from '&theme';
import { ThemeProvider } from 'styled-components/native';

// Navigation
import { Root } from '&navigation';

// Apollo
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client';

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

const App = () => (
  <ThemeProvider theme={theme}>
    <ApolloProvider client={client}>
      <AuthProvider>
        <Root />
      </AuthProvider>
    </ApolloProvider>
  </ThemeProvider>
);

export default App;
