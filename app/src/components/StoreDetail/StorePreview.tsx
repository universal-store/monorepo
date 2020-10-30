/** @format */

import React, { useEffect, useRef, useState } from 'react';

// Libraries
import BottomSheet from 'reanimated-bottom-sheet';

// Components
import { LoadingOverlay } from '../LoadingOverlay';
import { PopularItemCell } from './PopularItemCell';
import { largeModalHeight, ModalContainer, ModalHeader, ModalHeaderTab, smallModalHeight } from '../Modal';

import {
  SelectStoreButton,
  SelectStoreButtonContainer,
  SelectStoreButtonText,
  StoreDetailHeaderRow,
  StoreDetailImage,
  StoreDetailImageContainer,
  StoreDetailStoreNameText,
  StoreDetailStoreCategoryText,
  StoreDetailStoreAddressText,
  StoreDetailStoreDescriptionText,
  StoreDetailPopularItemHeaderText,
} from './Styled';

// GraphQL
import { MarkerInfoFragment, useGetStoreInfoQuery } from '&graphql';

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
          <StoreDetailHeaderRow>
            {storeData.StorePic && (
              <StoreDetailImageContainer>
                <StoreDetailImage source={{ uri: storeData.StorePic.size64 }} />
              </StoreDetailImageContainer>
            )}

            <StoreDetailStoreNameText>{storeData.name}</StoreDetailStoreNameText>
          </StoreDetailHeaderRow>

          <StoreDetailStoreCategoryText>{storeData.category}</StoreDetailStoreCategoryText>
          <StoreDetailStoreAddressText>{storeData.address}</StoreDetailStoreAddressText>

          {storeData.description && (
            <StoreDetailStoreDescriptionText>{storeData.description}</StoreDetailStoreDescriptionText>
          )}

          <StoreDetailPopularItemHeaderText>Popular Items</StoreDetailPopularItemHeaderText>
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
