/** @format */

import React, { useState } from 'react';

// Components
import {
  OnboardingFormContainerHalf,
  OnboardingFormHalfRow,
  OnboardingFormText,
  OnboardingInputContainer,
  OnboardingTextInput,
  PaymentMethodBackContainer,
  PaymentMethodContainer,
  UserProfileHeaderNameText,
  UserProfileHeaderRow,
  UserProfileHeaderText,
  UserProfileMainContainer,
} from '&components';

// Iconography
import { CloseIcon } from '&icons';

// Navigation
import { useNavigation } from '@react-navigation/native';

export const PaymentMethodScreen = () => {
  const navigation = useNavigation();

  const [cardNumber, setCardNumber] = useState('');
  const [cardMonth, setCardMonth] = useState('');
  const [cardYear, setCardYear] = useState('');
  const [cardName, setCardName] = useState('');

  return (
    <UserProfileMainContainer>
      <UserProfileHeaderRow>
        <PaymentMethodBackContainer hitSlop={{ left: 8, right: 8 }} onPress={navigation.goBack}>
          <CloseIcon />
        </PaymentMethodBackContainer>

        <UserProfileHeaderText>
          <UserProfileHeaderNameText>Add a Payment Method</UserProfileHeaderNameText>
        </UserProfileHeaderText>
      </UserProfileHeaderRow>

      <PaymentMethodContainer>
        <OnboardingFormText>Card Number</OnboardingFormText>
        <OnboardingInputContainer valid="NEEDS_CHECK">
          <OnboardingTextInput
            value={cardNumber}
            keyboardType="number-pad"
            onChangeText={setCardNumber}
            placeholder="Enter Card Number"
          />
        </OnboardingInputContainer>

        <OnboardingInputContainer valid="NEEDS_CHECK">
          <OnboardingFormContainerHalf>
            <OnboardingFormText>Expiry Month</OnboardingFormText>

            <OnboardingFormHalfRow>
              <OnboardingTextInput
                maxLength={2}
                placeholder="MM"
                value={cardMonth}
                keyboardType="number-pad"
                onChangeText={setCardMonth}
              />
            </OnboardingFormHalfRow>
          </OnboardingFormContainerHalf>

          <OnboardingFormContainerHalf>
            <OnboardingFormText>Expiry Year</OnboardingFormText>

            <OnboardingTextInput
              maxLength={2}
              value={cardYear}
              placeholder="YY"
              keyboardType="number-pad"
              onChangeText={setCardYear}
            />
          </OnboardingFormContainerHalf>
        </OnboardingInputContainer>

        <OnboardingFormText>Cardholder Name</OnboardingFormText>
        <OnboardingInputContainer valid="NEEDS_CHECK">
          <OnboardingTextInput value={cardName} placeholder="Enter Name on Card" onChangeText={setCardName} />
        </OnboardingInputContainer>
      </PaymentMethodContainer>
    </UserProfileMainContainer>
  );
};
