/** @format */

import { extendType } from '@nexus/schema';

export const me = extendType({
  type: 'Query',
  definition(t) {
    t.field('me', {
      type: 'User',
      resolve: async (parent, args, ctx) => {
        if (!ctx.user) {
          throw new Error('Unauthorized');
        }

        return ctx.user;
      },
    });
  },
});
