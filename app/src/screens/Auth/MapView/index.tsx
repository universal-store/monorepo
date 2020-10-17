/** @format */

import React, { useContext } from 'react';

// Components
import { FullScreenWhite, HelloUser } from '&components';

// Context
import { AuthContext } from '&stores';

// Firebase Authentication
import auth from '@react-native-firebase/auth';

// GraphQL
import { useGetUserQuery } from '&graphql';

export const MapViewScreen = () => {
  const authContext = useContext(AuthContext);

  const { data: authData } = useGetUserQuery({ variables: { sessionId: authContext?.token! } });

  return (
    <FullScreenWhite>
      {authData && authContext && (
        <HelloUser
          userData={authData.User[0]}
          logOut={() => {
            void auth()
              .signOut()
              .then(
                async () =>
                  // @ts-ignore
                  await authContext.removeToken()
              );
          }}
        />
      )}
    </FullScreenWhite>
  );
};
