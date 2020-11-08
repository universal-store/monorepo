/** @format */

import React from 'react';
import { CheckoutButtonContainer, CheckoutButtonText } from './Styled';

interface CheckoutButtonProps {
  text: string;
  onPress: () => void;
  isCheckoutScreen: boolean;
}

export const CheckoutButton = ({ isCheckoutScreen, text, onPress }: CheckoutButtonProps) => (
  <CheckoutButtonContainer onPress={onPress} isCheckoutScreen={isCheckoutScreen}>
    <CheckoutButtonText>{text}</CheckoutButtonText>
  </CheckoutButtonContainer>
);
