/** @format */

import React, { useContext } from 'react';

// Components
import { Alert } from 'react-native';
import { FullScreenWhite, HelloUser } from '&components';

// Context
import { AuthContext } from '&stores';

// Navigation
import { RootAuthTabParams } from '&navigation';
import { StackScreenProps } from '@react-navigation/stack';

// GraphQL
import { useGetUserQuery } from '&graphql';

type MapViewScreenProps = StackScreenProps<RootAuthTabParams, 'MapView'>;

export const MapViewScreen = ({ navigation }: MapViewScreenProps) => {
  const authContext = useContext(AuthContext);

  if (authContext?.token) {
    const { data: authData } = useGetUserQuery({ variables: { sessionId: authContext.token } });

    if (authData && authContext) {
      if (authData.User.length !== 1) {
        Alert.alert('Account Not Found!', `Check Your email and password to make sure they are correct`, [
          // @ts-ignore
          { text: 'Okay', onPress: () => navigation.navigate('OnboardingStack', { screen: 'SignInScreen' }) },
        ]);
      } else {
        void authContext.saveToken(authData.User[0].sessionId);
      }
    }

    return (
      <FullScreenWhite>
        {authData && authContext && (
          <HelloUser
            userData={authData.User[0]}
            logOut={() => {
              //@ts-ignore
              authContext.removeToken().then(() => navigation.navigate('OnboardingStack', { screen: 'SignInScreen' }));
            }}
          />
        )}
      </FullScreenWhite>
    );
  } else {
    //@ts-ignore
    navigation.navigate('OnboardingStack', { screen: 'SignInScreen' });
  }

  return <FullScreenWhite />;
};
