/** @format */

import React, { useState } from 'react';
import { theme } from '&theme';

// Libraries
import { MaterialIndicator } from 'react-native-indicators';

// Components
import {
  FullScreenCenter,
  UserProfileMainContainer,
  UserProfileHeaderRow,
  UserProfilePicture,
  UserProfilePictureContainer,
  UserProfileHeaderText,
  UserProfileSubHeaderText,
  UserProfileEmailContainer,
  UserProfileEmailText,
  UserProfilePaymentInfoContainer,
  UserProfilePaymentInfoText,
  UserPaymentInfoNameRow,
  UserProfileCheckMarkLogoContainer,
  UserProfileHeaderNameText,
  UserProfileInitialText,
  SecondaryButton,
  ButtonContainer,
  SecondaryButtonText,
} from '&components';

// Iconography
import { CheckIcon } from '&icons';

// Context
import { useApolloClient } from '@apollo/client';
import AsyncStorage from '@react-native-community/async-storage';

// Firebase Authentication
import { Firebase } from '&lib';

// Queries
import { useGetUserQuery } from '&graphql';

// Utils
import { renderName } from '&utils';

export const ProfileScreen = () => {
  const client = useApolloClient();

  const [signOutLoad, setSignOutLoad] = useState<boolean>(false);

  const { data, loading } = useGetUserQuery();

  if (loading || signOutLoad)
    return (
      <FullScreenCenter>
        <MaterialIndicator color={theme.colors.purple[1]} />
      </FullScreenCenter>
    );

  // User Data
  const userData = data ? data.User[0] : undefined;

  let userInitials = '';

  if (userData)
    userInitials = userData.lastName
      ? userData.firstName.charAt(0) + userData.lastName.charAt(0)
      : userData.firstName.charAt(0);

  return (
    <UserProfileMainContainer>
      <UserProfileHeaderRow>
        <UserProfilePictureContainer>
          {userData && userData.UserProfilePic ? (
            <UserProfilePicture source={{ uri: userData.UserProfilePic.size128 }} />
          ) : (
            <UserProfileInitialText>{userInitials}</UserProfileInitialText>
          )}
        </UserProfilePictureContainer>

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
