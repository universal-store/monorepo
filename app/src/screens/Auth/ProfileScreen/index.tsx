/** @format */

import React, { useContext } from 'react';

// Components
import {
  UserProfileMainContainer,
  UserProfileHeaderRow,
  UserProfileProfilePictureContainer,
  UserProfileHeaderText,
  UserProfileSubHeaderText,
  UserProfileEmailContainer,
  UserProfileEmailText,
  UserProfilePaymentInfoContainer,
  UserProfilePaymentInfoText,
  UserPaymentInfoNameRow,
  UserProfileCheckMarkLogoContainer,
  UserProfileHeaderNameText,
} from '&components';

// Iconography
import { PersonIcon } from '&icons';

// User Store
import { AuthContext } from '&stores';

// Queries
import { useGetUserQuery } from '&graphql';

// Utils
import { renderName } from '&utils';

export const ProfileScreen = () => {
  const authContext = useContext(AuthContext);
  const { data } = useGetUserQuery({ variables: { sessionId: authContext?.token! } });

  // User Data
  const userData = data ? data.User[0] : undefined;

  return (
    <UserProfileMainContainer>
      <UserProfileHeaderRow>
        <UserProfileProfilePictureContainer />
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
      <UserProfilePaymentInfoContainer>
        <UserProfilePaymentInfoText>VISA Debit (1834)</UserProfilePaymentInfoText>
        <UserPaymentInfoNameRow>
          {userData && (
            <UserProfilePaymentInfoText>{renderName(userData.firstName, userData.lastName)}</UserProfilePaymentInfoText>
          )}
          <UserProfileCheckMarkLogoContainer>
            <PersonIcon />
          </UserProfileCheckMarkLogoContainer>
        </UserPaymentInfoNameRow>
        <UserProfilePaymentInfoText>Exp: 07/24</UserProfilePaymentInfoText>
      </UserProfilePaymentInfoContainer>

      <UserProfileSubHeaderText>My Orders</UserProfileSubHeaderText>
    </UserProfileMainContainer>
  );
};
