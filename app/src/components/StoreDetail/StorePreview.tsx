/** @format */

import React, { useEffect, useRef, useState } from 'react';

// Libraries
import BottomSheet from 'reanimated-bottom-sheet';

// Components
import { LoadingOverlay } from '../LoadingOverlay';
import { PopularItemCell } from './PopularItemCell';
import { largeModalHeight, ModalContainer, ModalHeader, ModalHeaderTab, smallModalHeight } from '../Modal';
import { SelectStoreButton, SelectStoreButtonContainer, SelectStoreButtonText } from './Styled';

// GraphQL
import { MarkerInfoFragment, useGetStoreInfoQuery } from '&graphql';

// TODO: Remove
import { Text } from 'react-native';

// Constants
const freeSnap = [largeModalHeight - 10, smallModalHeight];
const restrictSnap = [largeModalHeight - 10, largeModalHeight - 11];

interface StorePreviewProps {
  onSelect: () => void;
  store: MarkerInfoFragment;
}

export const StorePreview = ({ store, onSelect }: StorePreviewProps) => {
  const { data } = useGetStoreInfoQuery({ variables: { id: store.id } });
  const storeData = data?.Store_by_pk;

  const sheetRef = useRef<BottomSheet>(null);

  const [storeSelected, setStoreSelected] = useState<boolean>(false);

  useEffect(() => {
    onSelect();
  }, []);

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
          <PopularItemCell />
          <PopularItemCell />
          <PopularItemCell />
          <PopularItemCell />
          <PopularItemCell />
        </>
      )}
    </ModalContainer>
  );

  return (
    <>
      {storeData ? (
        <>
          <BottomSheet
            ref={sheetRef}
            initialSnap={1}
            enabledBottomClamp
            renderHeader={renderHeader}
            renderContent={renderContent}
            enabledBottomInitialAnimation
            snapPoints={storeSelected ? restrictSnap : freeSnap}
          />

          <SelectStoreButtonContainer>
            <SelectStoreButton
              selected={storeSelected}
              onPress={() => {
                if (sheetRef.current) {
                  if (!storeSelected) sheetRef.current.snapTo(0);
                  else {
                    sheetRef.current.snapTo(1);
                  }
                }
                setStoreSelected(!storeSelected);
              }}
            >
              <SelectStoreButtonText selected={storeSelected}>
                {storeSelected ? 'Stop Shopping' : 'Select Store'}
              </SelectStoreButtonText>
            </SelectStoreButton>
          </SelectStoreButtonContainer>
        </>
      ) : (
        <LoadingOverlay />
      )}
    </>
  );
};
