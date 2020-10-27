/** @format */

import React from 'react';

// Libraries
import BottomSheet from 'reanimated-bottom-sheet';

// Components
import { LoadingOverlay } from '../LoadingOverlay';
import { largeModalHeight, ModalContainer, ModalHeader, ModalHeaderTab, smallModalHeight } from '../Modal';

// GraphQL
import { MarkerInfoFragment, useGetStoreInfoQuery } from '&graphql';

// TODO: Remove
import { Text } from 'react-native';

interface StorePreviewProps {
  store: MarkerInfoFragment;
}

export const StorePreview = ({ store }: StorePreviewProps) => {
  const { data } = useGetStoreInfoQuery({ variables: { id: store.id } });
  const storeData = data?.Store_by_pk;

  const renderHeader = () => (
    <ModalHeader>
      <ModalHeaderTab />
    </ModalHeader>
  );

  const renderContent = () => (
    <ModalContainer>
      {storeData && (
        <>
          <Text>{storeData.name}</Text>
          <Text>{storeData.category}</Text>
          <Text>{storeData.address}</Text>
          <Text>{storeData.description}</Text>
          <Text>Popular Items</Text>
        </>
      )}
    </ModalContainer>
  );

  return (
    <>
      {storeData ? (
        <BottomSheet
          initialSnap={1}
          enabledBottomClamp
          renderHeader={renderHeader}
          renderContent={renderContent}
          snapPoints={[largeModalHeight, smallModalHeight]}
        />
      ) : (
        <LoadingOverlay />
      )}
    </>
  );
};
