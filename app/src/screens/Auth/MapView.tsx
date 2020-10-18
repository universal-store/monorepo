/** @format */

import React, { useCallback, useEffect } from 'react';

// Components
import { FullScreenWhite, HelloUser } from '&components';

// Navigation
import { AuthStackParams } from '&navigation';
import { useFocusEffect } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';

// GraphQL
import { useGetUserQuery } from '&graphql';

type MapViewScreenProps = StackScreenProps<AuthStackParams, 'TabNavigation'>;

export const MapViewScreen = ({ navigation }: MapViewScreenProps) => {
  const { data: authData, refetch } = useGetUserQuery();

  useFocusEffect(
    useCallback(() => {
      void refetch();
    }, [])
  );

  useEffect(() => {
    if (authData && authData.User.length && !authData.User[0].firstName) navigation.navigate('UserInfoScreen');
  }, [authData]);

  return <FullScreenWhite>{authData && <HelloUser userData={authData.User[0]} />}</FullScreenWhite>;
};
