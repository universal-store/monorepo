/** @format */

import { ApolloServer } from 'apollo-server';

import { schema } from './schema';
import createContext from './utils/context';

import { GraphQLFormattedError } from 'graphql';

const port = process.env.PORT || 4000;

void new ApolloServer({
  schema,
  context: createContext,
  formatError: (error): GraphQLFormattedError => {
    return error;
  },
}).listen({ port }, () => {
  if (process.env.EXIT_ON_SUCCESS) {
    process.exit(0);
  }

  console.log(
    `🚀 Server ready at: http://localhost:${port}\n⭐️ See sample queries: http://pris.ly/e/ts/graphql-apollo-server#using-the-graphql-api`
  );
});
