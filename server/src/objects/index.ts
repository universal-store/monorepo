/** @format */
import { asNexusMethod, inputObjectType, objectType } from '@nexus/schema';

import { GraphQLUpload } from 'apollo-server';

export const AuthPayload = objectType({
  name: 'AuthPayload',
  definition(t) {
    t.field('user', { type: User });
    t.field('sessionId', { type: 'String' });
  },
});

export const User = objectType({
  name: 'User',
  definition(t) {
    t.model.id();
    t.model.firstName();
    t.model.lastName();
    t.model.phoneNumber();
    t.model.profilePhoto();
  },
});

export const UserWhereInput = inputObjectType({
  name: 'UserWhereInput',
  definition(t) {
    t.string('id', { nullable: false });
  },
});

export const UserProfilePhoto = objectType({
  name: 'UserProfilePhoto',
  definition(t) {
    t.model.size512();
    t.model.size256();
    t.model.size128();
    t.model.size64();
  },
});

export const Upload = asNexusMethod(GraphQLUpload!, 'upload');
