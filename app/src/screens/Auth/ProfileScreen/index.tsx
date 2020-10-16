/** @format */

import React from 'react';

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

export const ProfileScreen = () => (
  <UserProfileMainContainer>
    <UserProfileHeaderRow>
      <UserProfileProfilePictureContainer />
      <UserProfileHeaderText numberOfLines={1}>
        Hi, <UserProfileHeaderNameText>Daniel Keehn</UserProfileHeaderNameText>
      </UserProfileHeaderText>
    </UserProfileHeaderRow>

    <UserProfileSubHeaderText>Email Address</UserProfileSubHeaderText>
    <UserProfileEmailContainer>
      <UserProfileEmailText>dkeehn6@gatech.edu</UserProfileEmailText>
    </UserProfileEmailContainer>

    <UserProfileSubHeaderText>Payment Method</UserProfileSubHeaderText>
    <UserProfilePaymentInfoContainer>
      <UserProfilePaymentInfoText>VISA Debit (1834)</UserProfilePaymentInfoText>
      <UserPaymentInfoNameRow>
        <UserProfilePaymentInfoText>Daniel Keehn</UserProfilePaymentInfoText>
        <UserProfileCheckMarkLogoContainer>
          <PersonIcon />
        </UserProfileCheckMarkLogoContainer>
      </UserPaymentInfoNameRow>
      <UserProfilePaymentInfoText>Exp: 07/24</UserProfilePaymentInfoText>
    </UserProfilePaymentInfoContainer>

    <UserProfileSubHeaderText>My Orders</UserProfileSubHeaderText>
  </UserProfileMainContainer>
);
