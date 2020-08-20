/** @format */

import { makeSchema } from '@nexus/schema';
import { nexusSchemaPrisma } from 'nexus-plugin-prisma/schema';

import * as Objects from '../objects';
import * as Queries from '../queries';
// import * as Mutations from '../mutations';

const generateArtifacts = true;

export const schema = makeSchema({
  types: [
    ...Object.values(Queries),
    // ...Object.values(Mutations),
    ...Object.values(Objects),
  ],
  plugins: [
    nexusSchemaPrisma({
      shouldGenerateArtifacts: generateArtifacts,
      outputs: {
        typegen: `${__dirname}/nexus/prisma-nexus.ts`,
      },
      experimentalCRUD: true,
    }),
  ],
  shouldGenerateArtifacts: generateArtifacts,
  outputs: {
    schema: `${__dirname}/schema.graphql`,
    typegen: `${__dirname}/nexus/nexus.ts`,
  },
  typegenAutoConfig: {
    contextType: 'Context.Context',
    sources: [
      {
        source: '@prisma/client',
        alias: 'prisma',
      },
      {
        source: require.resolve('../utils/context'),
        alias: 'Context',
      },
    ],
  },
});
