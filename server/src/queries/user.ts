/** @format */

import { extendType } from '@nexus/schema';

export const crud = extendType({
  type: 'Query',
  definition(t) {
    t.crud.user();
  },
});
