/** @format */

import React from 'react';
// Components
import { LandingScreenContainer, LandingScreenHeader } from './Styled';
import { ButtonContainer, PrimaryButton, PrimaryButtonText, SecondaryButton, SecondaryButtonText } from '../Buttons';

// Navigation
import { useNavigation } from '@react-navigation/native';

// GraphQL
import { UserInfoFragment } from '&graphql';

// Utils
import { renderName } from '&utils';

interface HelloUserProps {
  logOut: () => void;
  userData: UserInfoFragment;
}

export const HelloUser = ({ logOut, userData }: HelloUserProps) => {
  // Navigation
  const navigation = useNavigation();

  return (
    <LandingScreenContainer>
      {userData && (
        <>
          <LandingScreenHeader>Hello, {renderName(userData.firstName, userData.lastName)}!</LandingScreenHeader>

          <ButtonContainer>
            <PrimaryButton onPress={() => navigation.navigate('ScanningScreen')}>
              <PrimaryButtonText>Go To Scanning</PrimaryButtonText>
            </PrimaryButton>

            <SecondaryButton onPress={logOut}>
              <SecondaryButtonText>Log Out</SecondaryButtonText>
            </SecondaryButton>
          </ButtonContainer>
        </>
      )}
    </LandingScreenContainer>
  );
};
