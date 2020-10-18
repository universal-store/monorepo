/** @format */

import React, { useState } from 'react';
import { Keyboard, View as OnboardingFormContainer } from 'react-native';

// Components
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
  OnboardingScroll,
  OnboardingSubHeaderText,
  OnboardingTextInput,
} from '&components';

// Iconography
import { PersonIcon } from '&icons';

// Utils
import { validInput } from '&utils';

export const UserInfoScreen = () => {
  const [userFirstName, setUserFirstName] = useState<string>('');
  const [userLastName, setUserLastName] = useState<string>('');

  const [validFirstname, setValidFirstname] = useState<validInput>('NEEDS_CHECK');

  const validateUserInfo = () => {
    let validInput = true;

    if (userFirstName === '') {
      validInput = false;
      setValidFirstname('INVALID');
    } else {
      setValidFirstname('VALID');
    }
  };

  return (
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
          <OnboardingButtonText>Let's Go!</OnboardingButtonText>
        </OnboardingButton>
      </OnboardingMainContainer>
    </KeyboardDismiss>
  );
};
