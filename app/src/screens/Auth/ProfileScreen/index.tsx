/** @format */

import React, { useContext } from 'react';

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
} from '&components';

// Iconography
import { CheckIcon } from '&icons';

// User Store
import { AuthContext } from '&stores';

// Queries
import { useGetUserQuery } from '&graphql';

// Utils
import { renderName } from '&utils';
import { ActivityIndicator } from 'react-native';

export const ProfileScreen = () => {
  const authContext = useContext(AuthContext);
  const { data, loading } = useGetUserQuery({ variables: { sessionId: authContext?.token! } });

  if (loading)
    return (
      <FullScreenCenter>
        <ActivityIndicator />
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
    </UserProfileMainContainer>
  );
};
