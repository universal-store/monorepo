/** @format */

import React, { useState } from 'react';

// Components
import { Keyboard, View, View as OnboardingFormContainer } from 'react-native';

import {
  HeaderLargeText as OnboardingHeaderTitleText,
  KeyboardDismiss,
  OnboardingButton,
  OnboardingButtonText,
  OnboardingFormText,
  OnboardingInputContainer,
  OnboardingMainContainer,
  OnboardingRequiredText,
  OnboardingScroll,
  OnboardingSubHeaderText,
  OnboardingTextInput,
  ScannerHeaderButton,
} from '&components';

// Navigation
import { AuthStackParams } from '&navigation';
import { StackScreenProps } from '@react-navigation/stack';

// GraphQL
import {} from '&graphql';

// Utils
import { validInput } from '&utils';
import { BackArrowIcon, BackArrowIconGray } from '&icons';

type AddItemScreenProps = StackScreenProps<AuthStackParams, 'AddItemScreen'>;

export const AddItemScreen = ({ navigation, route }: AddItemScreenProps) => {
  const { barcodeId } = route.params;

  const [enableShift, setEnableShift] = useState<boolean>(true);

  // Form States
  const [price, setPrice] = useState<string>('');
  const [quantity, setQuantity] = useState<string>('');
  const [longName, setLongName] = useState<string>('');
  const [shortName, setShortName] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  // Validation
  const [validPrice, setValidPrice] = useState<validInput>('NEEDS_CHECK');
  const [validQuantity, setValidQuantity] = useState<validInput>('NEEDS_CHECK');
  const [validLongName, setValidLongName] = useState<validInput>('NEEDS_CHECK');

  // Mutation

  const validateItemInfo = () => {
    let validInput = true;

    if (price === '') {
      validInput = false;
      setValidPrice('INVALID');
    } else {
      setValidPrice('VALID');
    }

    if (quantity === '') {
      validInput = false;
      setValidQuantity('INVALID');
    } else {
      setValidQuantity('VALID');
    }

    if (longName === '') {
      validInput = false;
      setValidLongName('INVALID');
    } else {
      setValidLongName('VALID');
    }

    if (validInput) {
      // void updateUserMutation({ variables: { id, firstName: userFirstName, lastName: userLastName } }).then(() =>
      //   navigation.navigate('TabNavigation', { screen: 'MapView' })
      // );
    }
  };

  return (
    <KeyboardDismiss onPress={Keyboard.dismiss}>
      <OnboardingMainContainer enableShift={enableShift}>
        <OnboardingScroll
          bounces={false}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingTop: 32, paddingBottom: 160 }}
        >
          <View style={{ height: 24 }} />

          <ScannerHeaderButton onPress={navigation.goBack}>
            <BackArrowIconGray />
          </ScannerHeaderButton>

          <View style={{ height: 24 }} />

          <OnboardingHeaderTitleText>Add An Item</OnboardingHeaderTitleText>
          <OnboardingSubHeaderText>Fill out required fields</OnboardingSubHeaderText>

          <OnboardingFormContainer>
            <OnboardingFormText>Item Name*</OnboardingFormText>
            <OnboardingInputContainer valid={validLongName}>
              <OnboardingTextInput
                value={longName}
                placeholder="Enter item name"
                onChangeText={text => {
                  setLongName(text);
                  setValidLongName('NEEDS_CHECK');
                }}
              />
            </OnboardingInputContainer>
            {validLongName === 'INVALID' && <OnboardingRequiredText>Item Name is required</OnboardingRequiredText>}

            <OnboardingFormText>Item Name (short)</OnboardingFormText>
            <OnboardingInputContainer valid={'NEEDS_CHECK'}>
              <OnboardingTextInput
                value={shortName}
                placeholder="Enter a shorter name"
                onChangeText={text => {
                  setShortName(text);
                }}
              />
            </OnboardingInputContainer>

            <OnboardingFormText>Price*</OnboardingFormText>
            <OnboardingInputContainer valid={validPrice}>
              <OnboardingTextInput
                value={price}
                keyboardType="numeric"
                placeholder="Enter item name"
                onChangeText={text => {
                  setPrice(text);
                  setValidPrice('NEEDS_CHECK');
                }}
              />
            </OnboardingInputContainer>
            {validLongName === 'INVALID' && <OnboardingRequiredText>Item Price is required</OnboardingRequiredText>}

            <OnboardingFormText>Item Size*</OnboardingFormText>
            <OnboardingInputContainer valid={validQuantity}>
              <OnboardingTextInput
                value={quantity}
                placeholder="Enter item size"
                onChangeText={text => {
                  setQuantity(text);
                  setValidQuantity('NEEDS_CHECK');
                }}
              />
            </OnboardingInputContainer>
            {validQuantity === 'INVALID' && <OnboardingRequiredText>Item Size is required</OnboardingRequiredText>}

            <OnboardingFormText>Item Description</OnboardingFormText>
            <OnboardingInputContainer valid={'NEEDS_CHECK'}>
              <OnboardingTextInput
                multiline
                numberOfLines={4}
                value={description}
                placeholder="Enter a description"
                onChangeText={text => {
                  setDescription(text);
                }}
              />
            </OnboardingInputContainer>

            <OnboardingButton onPress={validateItemInfo}>
              <OnboardingButtonText>{`Add Item`}</OnboardingButtonText>
            </OnboardingButton>
          </OnboardingFormContainer>
        </OnboardingScroll>
      </OnboardingMainContainer>
    </KeyboardDismiss>
  );
};
