/** @format */

import React from 'react';
import { CheckoutButtonContainer, CheckoutButtonText } from './Styled';

interface CheckoutButtonProps {
  text: string;
  onPress: () => void;
  isCheckoutScreen: boolean;
}

/**
 *
 * @param isCheckoutScreen Tells us whether or not we are on a second screen
 * @param text Text to display in button
 * @param onPress Button Action
 * @constructor
 */
export const CheckoutButton = ({ isCheckoutScreen, text, onPress }: CheckoutButtonProps) => (
  <CheckoutButtonContainer onPress={onPress} isCheckoutScreen={isCheckoutScreen}>
    <CheckoutButtonText>{text}</CheckoutButtonText>
  </CheckoutButtonContainer>
);
