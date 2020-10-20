/** @format */

import React, { useCallback, useState } from 'react';

// Components
import {
  FullScreenCenter,
  UserProfileMainContainer,
  UserProfileHeaderRow,
  UserProfileHeaderText,
  UserProfileSubHeaderText,
  UserProfileEmailContainer,
  UserProfileEmailText,
  UserProfilePaymentInfoContainer,
  UserProfilePaymentInfoText,
  UserPaymentInfoNameRow,
  UserProfileCheckMarkLogoContainer,
  UserProfileHeaderNameText,
  SecondaryButton,
  ButtonContainer,
  SecondaryButtonText,
  LoadingOverlay,
} from '&components';

// Iconography
import { CheckIcon } from '&icons';

// Context
import { useApolloClient } from '@apollo/client';
import AsyncStorage from '@react-native-community/async-storage';

// Navigation
import { useFocusEffect } from '@react-navigation/native';

// Firebase Authentication
import { Firebase } from '&lib';

// Queries
import { useGetUserQuery } from '&graphql';

// Utils
import { renderName } from '&utils';

export const ProfileScreen = () => {
  const client = useApolloClient();

  const [signOutLoad, setSignOutLoad] = useState<boolean>(false);

  const { data, loading, refetch } = useGetUserQuery();

  useFocusEffect(
    useCallback(() => {
      void refetch();
    }, [])
  );

  if (loading || signOutLoad)
    return (
      <FullScreenCenter>
        <LoadingOverlay />
      </FullScreenCenter>
    );

  // User Data
  const userData = data ? data.User[0] : undefined;

  return (
    <UserProfileMainContainer>
      <UserProfileHeaderRow>
        <UserProfileHeaderText numberOfLines={1}>
          Hi,{' '}
          {userData && (
            <UserProfileHeaderNameText>{renderName(userData.firstName, userData.lastName)}</UserProfileHeaderNameText>
          )}
        </UserProfileHeaderText>
      </UserProfileHeaderRow>

      <UserProfileSubHeaderText>Email Address</UserProfileSubHeaderText>
      <UserProfileEmailContainer>
        {userData && <UserProfileEmailText>{userData.email}</UserProfileEmailText>}
      </UserProfileEmailContainer>

      <UserProfileSubHeaderText>Payment Method</UserProfileSubHeaderText>
      <UserProfilePaymentInfoContainer onPress={() => console.log('Payment Method Selected')}>
        <UserProfilePaymentInfoText>VISA Debit (1834)</UserProfilePaymentInfoText>
        <UserPaymentInfoNameRow>
          {userData && (
            <UserProfilePaymentInfoText>{renderName(userData.firstName, userData.lastName)}</UserProfilePaymentInfoText>
          )}
          <UserProfileCheckMarkLogoContainer>
            <CheckIcon />
          </UserProfileCheckMarkLogoContainer>
        </UserPaymentInfoNameRow>
        <UserProfilePaymentInfoText>Exp: 07/24</UserProfilePaymentInfoText>
      </UserProfilePaymentInfoContainer>

      <UserProfileSubHeaderText>My Orders</UserProfileSubHeaderText>

      <ButtonContainer>
        <SecondaryButton
          onPress={async () => {
            setSignOutLoad(true);
            await AsyncStorage.removeItem('userToken');
            await Firebase.auth()
              .signOut()
              .then(() => client.clearStore());
          }}
        >
          <SecondaryButtonText>Log Out</SecondaryButtonText>
        </SecondaryButton>
      </ButtonContainer>
    </UserProfileMainContainer>
  );
};
