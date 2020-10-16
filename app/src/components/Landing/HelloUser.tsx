/** @format */

import React from 'react';
// Components
import { LandingScreenContainer, LandingScreenHeader } from './Styled';
import { ButtonContainer, PrimaryButton, PrimaryButtonText, SecondaryButton, SecondaryButtonText } from '../Buttons';

// GraphQL
import { UserInfoFragment } from '&graphql';

// Utils
import { renderName } from '&utils';

interface HelloUserProps {
  logOut: () => void;
  userData: UserInfoFragment;
}

export const HelloUser = ({ logOut, userData }: HelloUserProps) => (
  <LandingScreenContainer>
    {userData && (
      <>
        <LandingScreenHeader>Hello, {renderName(userData.firstName, userData.lastName)}!</LandingScreenHeader>

        <ButtonContainer>
          <SecondaryButton onPress={logOut}>
            <SecondaryButtonText>Log Out</SecondaryButtonText>
          </SecondaryButton>
        </ButtonContainer>
      </>
    )}
  </LandingScreenContainer>
);
