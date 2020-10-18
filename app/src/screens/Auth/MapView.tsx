/** @format */

import React from 'react';

// Components
import { FullScreenWhite, HelloUser } from '&components';

// Navigation
import { RootAuthParams } from '&navigation';
import { StackScreenProps } from '@react-navigation/stack';

// GraphQL
import { useGetUserQuery } from '&graphql';

type MapViewScreenProps = StackScreenProps<RootAuthParams, 'TabNavigation'>;

export const MapViewScreen = ({ navigation }: MapViewScreenProps) => {
  const { data: authData } = useGetUserQuery();

  if (!authData?.User[0].firstName) {
    navigation.navigate('UserInfoScreen');
  }

  return <FullScreenWhite>{authData && <HelloUser userData={authData.User[0]} />}</FullScreenWhite>;
};
