/** @format */

import React, { useContext, useEffect } from 'react';
// Components
import { FullScreenWhite, HelloUser } from '&components';

// Context
import { AuthContext } from '&stores';

// Navigation
import { AuthStackParams } from '&navigation';
import { StackScreenProps } from '@react-navigation/stack';

// GraphQL
import { useGetUserQuery, useSignInQuery } from '&graphql';

type LandingScreenProps = StackScreenProps<AuthStackParams, 'LandingScreen'>;

export const LandingScreen = ({ navigation, route }: LandingScreenProps) => {
  const authContext = useContext(AuthContext);

  if (authContext?.token) {
    const { data: authData } = useGetUserQuery({ variables: { sessionId: authContext.token } });

    return (
      <FullScreenWhite>
        {authData && (
          <HelloUser
            userData={authData.User[0]}
            logOut={() => {
              authContext?.removeToken();

              // @ts-ignore
              navigation.navigate('OnboardingStack', { screen: 'SignInScreen' });
            }}
            goToScan={() => navigation.navigate('ScanningScreen')}
          />
        )}
      </FullScreenWhite>
    );
  }

  const { email, password } = route.params;
  const { data: userData } = useSignInQuery({ variables: { email, password } });

  useEffect(() => {
    if (userData && authContext) void authContext.saveToken(userData.User[0].sessionId);
  }, [userData]);

  return (
    <FullScreenWhite>
      {userData && (
        <HelloUser
          userData={userData.User[0]}
          logOut={() => {
            authContext?.removeToken();

            // @ts-ignore
            navigation.navigate('OnboardingStack', { screen: 'SignInScreen' });
          }}
          goToScan={() => navigation.navigate('ScanningScreen')}
        />
      )}
    </FullScreenWhite>
  );
};
