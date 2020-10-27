/** @format */

import React, { useState } from 'react';

// Components
import { Keyboard, KeyboardAvoidingView, View as OnboardingFormContainer } from 'react-native';

import {
  HeaderLargeText as OnboardingHeaderTitleText,
  KeyboardDismiss,
  LogoContainer,
  OnboardingButton,
  OnboardingButtonText,
  OnboardingFormContainerHalf,
  OnboardingFormHalfRow,
  OnboardingFormText,
  OnboardingHeaderContainer,
  OnboardingHeaderTextContainer,
  OnboardingInputContainer,
  OnboardingInputIconContainer,
  OnboardingMainContainer,
  OnboardingRequiredText,
  OnboardingSubHeaderText,
  OnboardingTextInput,
} from '&components';

// Iconography
import { PersonIcon } from '&icons';

// Navigation
import { AuthStackParams } from '&navigation';
import { StackScreenProps } from '@react-navigation/stack';

// GraphQL
import { useGetUserQuery, useUpdateUserNameMutation } from '&graphql';

// Utils
import { validInput } from '&utils';

type UserInfoScreenProps = StackScreenProps<AuthStackParams, 'UserInfoScreen'>;

export const UserInfoScreen = ({ navigation }: UserInfoScreenProps) => {
  // Form States
  const [userFirstName, setUserFirstName] = useState<string>('');
  const [userLastName, setUserLastName] = useState<string>('');

  // Validation
  const [validFirstname, setValidFirstname] = useState<validInput>('NEEDS_CHECK');

  // Get User
  const { data } = useGetUserQuery();
  const id = data?.User[0].id;

  // Mutation
  const [updateUserMutation] = useUpdateUserNameMutation();

  const validateUserInfo = () => {
    let validInput = true;

    if (userFirstName === '') {
      validInput = false;
      setValidFirstname('INVALID');
    } else {
      setValidFirstname('VALID');
    }

    if (validInput && id) {
      void updateUserMutation({ variables: { id, firstName: userFirstName, lastName: userLastName } }).then(() =>
        navigation.navigate('TabNavigation', { screen: 'MapView' })
      );
    }
  };

  return (
    <KeyboardAvoidingView enabled behavior="padding" style={{ flex: 1 }}>
      <KeyboardDismiss onPress={Keyboard.dismiss}>
        <OnboardingMainContainer>
          <OnboardingHeaderContainer>
            <LogoContainer />
            <OnboardingHeaderTextContainer>
              <OnboardingHeaderTitleText>Universal Store</OnboardingHeaderTitleText>
              <OnboardingSubHeaderText>Redefining express checkout.</OnboardingSubHeaderText>
            </OnboardingHeaderTextContainer>
          </OnboardingHeaderContainer>

          <OnboardingHeaderTitleText>Almost There!</OnboardingHeaderTitleText>
          <OnboardingSubHeaderText>Tell us about yourself</OnboardingSubHeaderText>

          <OnboardingFormContainer>
            <OnboardingInputContainer valid={validFirstname}>
              <OnboardingFormContainerHalf>
                <OnboardingFormText>First Name*</OnboardingFormText>

                <OnboardingFormHalfRow>
                  <OnboardingInputIconContainer>
                    <PersonIcon />
                  </OnboardingInputIconContainer>

                  <OnboardingTextInput
                    value={userFirstName}
                    textContentType="name"
                    autoCompleteType="name"
                    placeholder="First Name"
                    onChangeText={text => {
                      setUserFirstName(text);
                      setValidFirstname('NEEDS_CHECK');
                    }}
                  />
                </OnboardingFormHalfRow>
              </OnboardingFormContainerHalf>

              <OnboardingFormContainerHalf>
                <OnboardingFormText>Last Name</OnboardingFormText>

                <OnboardingTextInput
                  value={userLastName}
                  autoCompleteType="name"
                  placeholder="Last Name"
                  textContentType="familyName"
                  onChangeText={setUserLastName}
                />
              </OnboardingFormContainerHalf>
            </OnboardingInputContainer>
            {validFirstname === 'INVALID' && <OnboardingRequiredText>First Name is required</OnboardingRequiredText>}
          </OnboardingFormContainer>

          <OnboardingButton onPress={validateUserInfo}>
            <OnboardingButtonText>{`Let's Go!`}</OnboardingButtonText>
          </OnboardingButton>
        </OnboardingMainContainer>
      </KeyboardDismiss>
    </KeyboardAvoidingView>
  );
};
