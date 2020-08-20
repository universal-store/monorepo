/** @format */

import { PrismaClient, User } from '@prisma/client';
import { getUserFromToken } from './auth';

const prisma = new PrismaClient();

export interface Context {
  prisma: PrismaClient;
  user: User | null;
}

export default async ({ req }: any): Promise<Context> => {
  const user = await getUserFromToken(req.get('Authorization'), prisma);
  return { prisma, user };
};
