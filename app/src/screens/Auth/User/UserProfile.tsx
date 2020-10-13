/** @format */

import React, { useEffect, useState } from 'react';
import { Linking } from 'react-native';

// Components
import { TestButtonText } from '&components';

// Navigation
import { AuthStackParams } from '&navigation';
import { useIsFocused } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';

type UserProfileProps = StackScreenProps<AuthStackParams, 'UserProfile'>;

export const UserProfileScreen = ({ navigation }: UserProfileProps) => {
  return <TestButtonText>Hello World</TestButtonText>;
};
