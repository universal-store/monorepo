/** @format */

import * as Typegen from 'nexus-plugin-prisma/typegen';
import * as Prisma from '@prisma/client';

// Pagination type
type Pagination = {
  first?: boolean;
  last?: boolean;
  before?: boolean;
  after?: boolean;
};

// Prisma custom scalar names
type CustomScalars = 'DateTime';

// Prisma model type definitions
interface PrismaModels {
  UserProfilePhoto: Prisma.UserProfilePhoto;
  User: Prisma.User;
}

// Prisma input types metadata
interface NexusPrismaInputs {
  Query: {
    userProfilePhotos: {
      filtering:
        | 'AND'
        | 'OR'
        | 'NOT'
        | 'id'
        | 'createdAt'
        | 'updatedAt'
        | 'user'
        | 'userId'
        | 'size512'
        | 'size256'
        | 'size128'
        | 'size64';
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'userId' | 'size512' | 'size256' | 'size128' | 'size64';
    };
    users: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'sessionId' | 'phoneNumber' | 'firstName' | 'lastName' | 'profilePhoto';
      ordering: 'id' | 'sessionId' | 'phoneNumber' | 'firstName' | 'lastName';
    };
  };
  UserProfilePhoto: {};
  User: {};
}

// Prisma output types metadata
interface NexusPrismaOutputs {
  Query: {
    userProfilePhoto: 'UserProfilePhoto';
    userProfilePhotos: 'UserProfilePhoto';
    user: 'User';
    users: 'User';
  };
  Mutation: {
    createOneUserProfilePhoto: 'UserProfilePhoto';
    updateOneUserProfilePhoto: 'UserProfilePhoto';
    updateManyUserProfilePhoto: 'BatchPayload';
    deleteOneUserProfilePhoto: 'UserProfilePhoto';
    deleteManyUserProfilePhoto: 'BatchPayload';
    upsertOneUserProfilePhoto: 'UserProfilePhoto';
    createOneUser: 'User';
    updateOneUser: 'User';
    updateManyUser: 'BatchPayload';
    deleteOneUser: 'User';
    deleteManyUser: 'BatchPayload';
    upsertOneUser: 'User';
  };
  UserProfilePhoto: {
    id: 'String';
    createdAt: 'DateTime';
    updatedAt: 'DateTime';
    user: 'User';
    userId: 'String';
    size512: 'String';
    size256: 'String';
    size128: 'String';
    size64: 'String';
  };
  User: {
    id: 'String';
    sessionId: 'String';
    phoneNumber: 'String';
    firstName: 'String';
    lastName: 'String';
    profilePhoto: 'UserProfilePhoto';
  };
}

// Helper to gather all methods relative to a model
interface NexusPrismaMethods {
  UserProfilePhoto: Typegen.NexusPrismaFields<'UserProfilePhoto'>;
  User: Typegen.NexusPrismaFields<'User'>;
  Query: Typegen.NexusPrismaFields<'Query'>;
  Mutation: Typegen.NexusPrismaFields<'Mutation'>;
}

interface NexusPrismaGenTypes {
  inputs: NexusPrismaInputs;
  outputs: NexusPrismaOutputs;
  methods: NexusPrismaMethods;
  models: PrismaModels;
  pagination: Pagination;
  scalars: CustomScalars;
}

declare global {
  interface NexusPrismaGen extends NexusPrismaGenTypes {}

  type NexusPrisma<TypeName extends string, ModelOrCrud extends 'model' | 'crud'> = Typegen.GetNexusPrisma<
    TypeName,
    ModelOrCrud
  >;
}
