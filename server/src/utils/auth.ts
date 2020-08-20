/** @format */

import { PrismaClientOptions, PrismaClient, User } from '@prisma/client';

export const getUserFromToken = async (
  authorization: string,
  prisma: PrismaClient<PrismaClientOptions, never>
): Promise<User | null> => {
  try {
    const token = authorization.match('^Bearer (.*)$')![1];
    return await prisma.user.findOne({ where: { sessionId: token } });
  } catch (e) {
    return null;
  }
};
