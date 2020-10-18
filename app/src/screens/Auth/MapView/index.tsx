/** @format */

import React from 'react';

// Components
import { FullScreenWhite, HelloUser } from '&components';

// GraphQL
import { useGetUserQuery } from '&graphql';

export const MapViewScreen = () => {
  const { data: authData } = useGetUserQuery();

  return <FullScreenWhite>{authData && <HelloUser userData={authData.User[0]} />}</FullScreenWhite>;
};
