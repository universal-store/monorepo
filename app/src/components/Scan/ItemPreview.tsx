/** @format */

import React from 'react';
import { Text } from 'react-native';

// Components
import { ItemPreviewContainer, ItemPreviewImageContainer } from './Styled';

// Mock Data
// import { MockItem } from '&data';

// export const ItemPreview = ({ shortName, price }: MockItem) => {
export const ItemPreview = () => {
  return (
    <ItemPreviewContainer>
      <ItemPreviewImageContainer />
      <Text>Gatorade Orange 28oz</Text>
      <Text>$3.19</Text>
    </ItemPreviewContainer>
  );
};
