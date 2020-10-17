/** @format */

import React, { useContext } from 'react';

// Components
import { FullScreenWhite, HelloUser } from '&components';

// Context
import { AuthContext } from '&stores';

// GraphQL
import { useGetUserQuery } from '&graphql';

export const MapViewScreen = () => {
  const authContext = useContext(AuthContext);

  const { data: authData } = useGetUserQuery({ variables: { sessionId: authContext?.token! } });

  return <FullScreenWhite>{authData && authContext && <HelloUser userData={authData.User[0]} />}</FullScreenWhite>;
};
