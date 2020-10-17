/** @format */

import React from 'react';

// Components
import { LandingScreenContainer, LandingScreenHeader } from './Styled';
import { ButtonContainer, PrimaryButton, PrimaryButtonText } from '../Buttons';

// Navigation
import { useNavigation } from '@react-navigation/native';

// GraphQL
import { UserInfoFragment } from '&graphql';

// Utils
import { renderName } from '&utils';

interface HelloUserProps {
  userData: UserInfoFragment;
}

export const HelloUser = ({ userData }: HelloUserProps) => {
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
          </ButtonContainer>
        </>
      )}
    </LandingScreenContainer>
  );
};
