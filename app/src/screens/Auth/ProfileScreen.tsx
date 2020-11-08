/** @format */

import React, { useState } from 'react';
import { DevSettings } from 'react-native';

// Libraries
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

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

// Firebase Authentication
import { Firebase } from '&lib';

// Queries
import { useGetUserOrdersQuery, useGetUserQuery } from '&graphql';

// Utils
import { hapticOptions, renderName } from '&utils';

export const ProfileScreen = () => {
  const client = useApolloClient();

  const [signOutLoad, setSignOutLoad] = useState<boolean>(false);

  // User Data
  const { data, loading } = useGetUserQuery();
  const userData = data ? data.User[0] : undefined;

  // User Order Data
  const { data: ordersData } = useGetUserOrdersQuery();
  const orderData = ordersData ? ordersData.UserOrder : undefined;

  if (loading || signOutLoad)
    return (
      <FullScreenCenter>
        <LoadingOverlay />
      </FullScreenCenter>
    );

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
            ReactNativeHapticFeedback.trigger('impactMedium', hapticOptions);

            setSignOutLoad(true);
            await AsyncStorage.removeItem('userToken');
            await Firebase.auth()
              .signOut()
              .then(async () => {
                await client.clearStore();
              });

            await DevSettings.reload();

            setSignOutLoad(false);
          }}
        >
          <SecondaryButtonText>Log Out</SecondaryButtonText>
        </SecondaryButton>
      </ButtonContainer>
    </UserProfileMainContainer>
  );
};
