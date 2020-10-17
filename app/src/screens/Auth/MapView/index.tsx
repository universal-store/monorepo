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
import { useGetUserQuery, useSignInQuery } from '&graphql';

type MapViewScreenProps = StackScreenProps<RootAuthTabParams, 'MapView'>;

export const MapViewScreen = ({ navigation, route }: MapViewScreenProps) => {
  const authContext = useContext(AuthContext);

  if (authContext?.token) {
    const { data: authData } = useGetUserQuery({ variables: { sessionId: authContext.token } });

    if (authData && authContext) {
      if (authData.User.length !== 1) {
        Alert.alert('Account Not Found!', `An account associated with that email does not exist`, [{ text: 'Okay' }]);

        // @ts-ignore
        navigation.navigate('OnboardingStack', { screen: 'SignInScreen' });
      } else {
        void authContext.saveToken(authData.User[0].sessionId);
      }
    }

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
          />
        )}
      </FullScreenWhite>
    );
  }

  const { email, password } = route.params;
  const { data: userData } = useSignInQuery({ variables: { email, password } });

  if (userData && authContext) {
    if (userData.User.length !== 1) {
      Alert.alert('Account Not Found!', `An account associated with ${email} does not exist`, [{ text: 'Okay' }]);

      // @ts-ignore
      navigation.navigate('OnboardingStack', { screen: 'SignInScreen' });
    } else {
      void authContext.saveToken(userData.User[0].sessionId);
    }
  }

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
        />
      )}
    </FullScreenWhite>
  );
};
