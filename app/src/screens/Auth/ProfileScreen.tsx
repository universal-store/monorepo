/** @format */

import React, { useState } from 'react';
import { DevSettings } from 'react-native';

// Libraries
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

// Components
import {
  ButtonContainer,
  FullScreenCenter,
  LoadingOverlay,
  OrderCell,
  SecondaryButton,
  SecondaryButtonText,
  UserProfileMainContainer,
  UserProfileHeaderRow,
  UserProfileHeaderText,
  UserProfileSubHeaderText,
  UserProfileEmailContainer,
  UserProfileEmailText,
  UserProfilePaymentContainer,
  UserProfilePaymentInfoContainer,
  UserProfilePaymentInfoText,
  UserPaymentInfoNameRow,
  UserProfileCheckMarkLogoContainer,
  UserProfileHeaderNameText,
  UserProfilePaymentInfoAddText,
  UserProfilePaymentInfoAddContainer,
} from '&components';

// Iconography
import { CheckIcon } from '&icons';

// Context
import { useApolloClient } from '@apollo/client';
import AsyncStorage from '@react-native-community/async-storage';

// Firebase Authentication
import { Firebase } from '&lib';

// Navigation
import { AuthStackParams } from '&navigation';
import { StackScreenProps } from '@react-navigation/stack';

// Queries
import { useGetUserOrdersQuery, useGetUserQuery } from '&graphql';

// Utils
import { hapticOptions, renderName } from '&utils';

type ProfileScreenProps = StackScreenProps<AuthStackParams, 'TabNavigation'>;

export const ProfileScreen = ({ navigation }: ProfileScreenProps) => {
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

      <UserProfilePaymentContainer>
        <UserProfileSubHeaderText>Payment Method</UserProfileSubHeaderText>

        <UserProfilePaymentInfoContainer onPress={() => console.log('Payment Method Selected')}>
          <UserProfilePaymentInfoText>VISA Debit (1834)</UserProfilePaymentInfoText>
          <UserPaymentInfoNameRow>
            {userData && (
              <UserProfilePaymentInfoText>
                {renderName(userData.firstName, userData.lastName)}
              </UserProfilePaymentInfoText>
            )}
            <UserProfileCheckMarkLogoContainer>
              <CheckIcon />
            </UserProfileCheckMarkLogoContainer>
          </UserPaymentInfoNameRow>
          <UserProfilePaymentInfoText>Exp: 07/24</UserProfilePaymentInfoText>
        </UserProfilePaymentInfoContainer>

        <UserProfilePaymentInfoAddContainer onPress={() => navigation.navigate('PaymentMethodScreen')}>
          <UserProfilePaymentInfoAddText>Add a Payment Method</UserProfilePaymentInfoAddText>
        </UserProfilePaymentInfoAddContainer>
      </UserProfilePaymentContainer>

      {orderData && orderData.length > 0 && (
        <>
          <UserProfileSubHeaderText>My Purchases</UserProfileSubHeaderText>
          {orderData.slice(0, 3).map(order => (
            <OrderCell key={order.id} orderData={order} />
          ))}
        </>
      )}

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
