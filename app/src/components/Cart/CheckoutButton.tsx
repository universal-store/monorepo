/** @format */

import React from 'react';
import { CheckoutButtonContainer, CheckoutButtonText } from './Styled';

interface CheckoutButtonProps {
  text: string;
  onPress: () => void;
}

export const CheckoutButton = ({ text, onPress }: CheckoutButtonProps) => (
  <CheckoutButtonContainer onPress={onPress}>
    <CheckoutButtonText>{text}</CheckoutButtonText>
  </CheckoutButtonContainer>
);
