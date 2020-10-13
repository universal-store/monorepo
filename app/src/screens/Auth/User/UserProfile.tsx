/** @format */

import React, { useEffect, useState } from 'react';
import { Linking } from 'react-native';

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
} from '&components';

// Iconography
import { PersonIcon } from '&icons';

// Navigation
import { AuthStackParams } from '&navigation';
import { useIsFocused } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';

type UserProfileProps = StackScreenProps<AuthStackParams, 'UserProfile'>;

export const UserProfileScreen = ({ navigation }: UserProfileProps) => {
  return (
    <UserProfileMainContainer>
      <UserProfileHeaderRow>
        <UserProfileProfilePictureContainer></UserProfileProfilePictureContainer>
        <UserProfileHeaderText>Hi, Daniel Keehn</UserProfileHeaderText>
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
            <PersonIcon></PersonIcon>
          </UserProfileCheckMarkLogoContainer>
        </UserPaymentInfoNameRow>
        <UserProfilePaymentInfoText>Exp: 07/24</UserProfilePaymentInfoText>
      </UserProfilePaymentInfoContainer>
      <UserProfileSubHeaderText>My Orders</UserProfileSubHeaderText>
    </UserProfileMainContainer>
  );
};
