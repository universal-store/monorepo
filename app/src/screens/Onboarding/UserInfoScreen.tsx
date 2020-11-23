/** @format */

import React, { useState } from 'react';
import { Keyboard, KeyboardAvoidingView, View as OnboardingFormContainer } from 'react-native';

// Libraries
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

// Components
import {
  HeaderLargeText as OnboardingHeaderTitleText,
  KeyboardDismiss,
  LoadingOverlay,
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
  OnboardingScroll,
  OnboardingSubHeaderText,
  OnboardingTextInput,
} from '&components';

// Iconography
import { AppIcon, PersonIcon } from '&icons';

// Navigation
import { OnboardingStackParams } from '&navigation';
import { StackScreenProps } from '@react-navigation/stack';

// Context
import { Firebase } from '&lib';
import AsyncStorage from '@react-native-community/async-storage';

// GraphQL
import { useUpdateUserNameMutation } from '&graphql';

// Utils
import { hapticOptions, validInput } from '&utils';

type UserInfoScreenProps = StackScreenProps<OnboardingStackParams, 'UserInfoScreen'>;

export const UserInfoScreen = ({ route }: UserInfoScreenProps) => {
  const { id, token } = route.params;

  // Form States
  const [userFirstName, setUserFirstName] = useState<string>('');
  const [userLastName, setUserLastName] = useState<string>('');

  // Validation States
  const [validFirstname, setValidFirstname] = useState<validInput>('NEEDS_CHECK');

  const [loading, setLoading] = useState(false);

  // Mutation
  const [updateUserMutation] = useUpdateUserNameMutation();

  const validateUserInfo = async () => {
    let validInput = true;

    if (userFirstName === '') {
      validInput = false;
      setValidFirstname('INVALID');
    } else {
      setValidFirstname('VALID');
    }

    if (validInput) {
      setLoading(true);

      await Firebase.auth().currentUser?.updateProfile({
        displayName: userLastName ? `${userFirstName} ${userLastName}` : userFirstName,
      });

      await updateUserMutation({ variables: { id, firstName: userFirstName, lastName: userLastName } });
      await AsyncStorage.setItem('userToken', token);

      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView enabled behavior="padding" style={{ flex: 1 }}>
      <KeyboardDismiss onPress={Keyboard.dismiss}>
        <OnboardingMainContainer>
          <OnboardingScroll bounces={false} keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
            <OnboardingHeaderContainer>
              <LogoContainer>
                <AppIcon />
              </LogoContainer>
              <OnboardingHeaderTextContainer>
                <OnboardingHeaderTitleText>Universal Store</OnboardingHeaderTitleText>
                <OnboardingSubHeaderText>Redefining express checkout.</OnboardingSubHeaderText>
              </OnboardingHeaderTextContainer>
            </OnboardingHeaderContainer>

            <OnboardingHeaderTitleText>Getting Started</OnboardingHeaderTitleText>
            <OnboardingSubHeaderText>Create an account to continue</OnboardingSubHeaderText>

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

            <OnboardingButton
              onPress={() => {
                ReactNativeHapticFeedback.trigger('impactMedium', hapticOptions);
                void validateUserInfo();
              }}
            >
              <OnboardingButtonText>{`Let's Go!`}</OnboardingButtonText>
            </OnboardingButton>
          </OnboardingScroll>

          {loading && <LoadingOverlay />}
        </OnboardingMainContainer>
      </KeyboardDismiss>
    </KeyboardAvoidingView>
  );
};
