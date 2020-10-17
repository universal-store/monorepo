/** @format */

import React, { useContext, useEffect } from 'react';

// Components
import { FullScreenCenter } from '&components';
import { ActivityIndicator, Alert } from 'react-native';

// Navigation
import { OnboardingStackParams } from '&navigation';
import { StackScreenProps } from '@react-navigation/stack';

// User Store
import { AuthContext } from '&stores';

// GraphQL
import { useSignInQuery } from '&graphql';

type ValidateUserScreenProps = StackScreenProps<OnboardingStackParams, 'ValidateUserScreen'>;

export const ValidateUserScreen = ({ route, navigation }: ValidateUserScreenProps) => {
  const { email, password } = route.params;

  const authContext = useContext(AuthContext);
  const { data: userData, loading } = useSignInQuery({ variables: { email, password } });

  useEffect(() => {
    if (userData && authContext) {
      if (userData.User.length !== 1) {
        Alert.alert('Account Not Found!', `An account associated with ${email} does not exist`, [
          { text: 'Okay', onPress: () => navigation.navigate('SignInScreen') },
        ]);
      } else {
        void authContext
          .saveToken(userData.User[0].sessionId)
          .then(() => navigation.navigate('AuthStack', { screen: 'RootAuthStack' }));
      }
    }
  }, [userData]);

  return <FullScreenCenter>{loading && <ActivityIndicator />}</FullScreenCenter>;
};
