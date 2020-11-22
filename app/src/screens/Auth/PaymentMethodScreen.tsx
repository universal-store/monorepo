/** @format */

import React, { useState } from 'react';

// Libraries
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

// Components
import {
  ButtonContainer,
  CartHeaderTextBold,
  CartHeaderTextRegular,
  CheckoutHeaderBackButton,
  CheckoutHeaderContainer,
  CheckoutHeaderPadding,
  FullScreenWhite,
  OnboardingFormContainerHalf,
  OnboardingFormHalfRow,
  OnboardingFormText,
  OnboardingInputContainer,
  OnboardingTextInput,
  PaymentMethodContainer,
  SecondaryButton,
  SecondaryButtonText,
} from '&components';

// Iconography
import { CloseIcon } from '&icons';

// Navigation
import { AuthStackParams } from '&navigation';
import { StackScreenProps } from '@react-navigation/stack';

// GraphQL
import {
  GetUserDocument,
  PaymentInfoFragment,
  useCreatePaymentMethodMutation,
  useEditPaymentMethodMutation,
  useGetUserQuery,
} from '&graphql';

// Utils
import { hapticOptions, validInput } from '&utils';

type PaymentMethodScreenProps = StackScreenProps<AuthStackParams, 'PaymentMethodScreen'>;

export const PaymentMethodScreen = ({ route, navigation }: PaymentMethodScreenProps) => {
  const { paymentMethod } = route.params;

  // User Data
  const { data } = useGetUserQuery();
  const userData = data ? data.User[0] : undefined;

  // Payment Method Mutations
  const [addPaymentMethod] = useCreatePaymentMethodMutation();
  const [editPaymentMethod] = useEditPaymentMethodMutation();

  // Form State
  const [cardNumber, setCardNumber] = useState(paymentMethod ? paymentMethod.cardNumber : '');
  const [expiryMonth, setExpiryMonth] = useState(paymentMethod ? paymentMethod.expiryMonth : '');
  const [expiryYear, setExpiryYear] = useState(paymentMethod ? paymentMethod.expiryYear : '');
  const [cardName, setCardName] = useState(paymentMethod ? paymentMethod.cardName : '');

  // Form Validation
  const [validCardNumber, setValidCardNumber] = useState<validInput>('NEEDS_CHECK');
  const [validExpiryDate, setValidExpiryDate] = useState<validInput>('NEEDS_CHECK');
  const [validCardName, setValidCardName] = useState<validInput>('NEEDS_CHECK');

  const validateCardData = async () => {
    let validInput = true;

    if (cardNumber.length < 6) {
      validInput = false;
      setValidCardNumber('INVALID');
    } else {
      setValidCardNumber('VALID');
    }

    if (cardName === '') {
      validInput = false;
      setValidCardName('INVALID');
    } else {
      setValidCardName('VALID');
    }

    const curDate = new Date();
    const curMonth = curDate.getMonth() + 1;
    const curYear = parseInt(curDate.getFullYear().toString().slice(2));

    if (
      expiryMonth === '' ||
      expiryYear === '' ||
      parseInt(expiryYear) < curYear ||
      (parseInt(expiryYear) === curYear && parseInt(expiryMonth) < curMonth)
    ) {
      validInput = false;
      setValidExpiryDate('INVALID');
    } else {
      setValidExpiryDate('VALID');
    }

    if (userData && validInput) {
      if (paymentMethod) {
        await editPaymentMethod({
          variables: { userId: userData.id, cardName, cardNumber, expiryMonth, expiryYear },
          refetchQueries: [{ query: GetUserDocument }],
        }).then(navigation.goBack);
      } else {
        await addPaymentMethod({
          variables: { userId: userData.id, cardName, cardNumber, expiryMonth, expiryYear },
          refetchQueries: [{ query: GetUserDocument }],
        }).then(navigation.goBack);
      }
    }
  };

  return (
    <FullScreenWhite>
      <CheckoutHeaderContainer>
        <CheckoutHeaderBackButton
          onPress={() => {
            ReactNativeHapticFeedback.trigger('selection', hapticOptions);
            navigation.goBack();
          }}
        >
          <CloseIcon />
        </CheckoutHeaderBackButton>
        <CartHeaderTextBold>
          Payment <CartHeaderTextRegular>Method</CartHeaderTextRegular>
        </CartHeaderTextBold>
        <CheckoutHeaderPadding />
      </CheckoutHeaderContainer>

      <PaymentMethodContainer>
        <OnboardingFormText>Card Number</OnboardingFormText>
        <OnboardingInputContainer valid={validCardNumber}>
          <OnboardingTextInput
            value={cardNumber}
            keyboardType="number-pad"
            onChangeText={setCardNumber}
            placeholder="Enter Card Number"
          />
        </OnboardingInputContainer>

        <OnboardingInputContainer valid={validExpiryDate}>
          <OnboardingFormContainerHalf>
            <OnboardingFormText>Expiry Month</OnboardingFormText>

            <OnboardingFormHalfRow>
              <OnboardingTextInput
                maxLength={2}
                placeholder="MM"
                value={expiryMonth}
                keyboardType="number-pad"
                onChangeText={setExpiryMonth}
              />
            </OnboardingFormHalfRow>
          </OnboardingFormContainerHalf>

          <OnboardingFormContainerHalf>
            <OnboardingFormText>Expiry Year</OnboardingFormText>

            <OnboardingTextInput
              maxLength={2}
              value={expiryYear}
              placeholder="YY"
              keyboardType="number-pad"
              onChangeText={setExpiryYear}
            />
          </OnboardingFormContainerHalf>
        </OnboardingInputContainer>

        <OnboardingFormText>Cardholder Name</OnboardingFormText>
        <OnboardingInputContainer valid={validCardName}>
          <OnboardingTextInput value={cardName} placeholder="Enter Name on Card" onChangeText={setCardName} />
        </OnboardingInputContainer>

        <ButtonContainer>
          <SecondaryButton
            onPress={() => {
              ReactNativeHapticFeedback.trigger('impactMedium', hapticOptions);
              void validateCardData();
            }}
          >
            <SecondaryButtonText>{paymentMethod ? 'Edit' : 'Add'} Payment Method</SecondaryButtonText>
          </SecondaryButton>
        </ButtonContainer>
      </PaymentMethodContainer>
    </FullScreenWhite>
  );
};
