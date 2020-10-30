/** @format */

import React, { useEffect, useRef, useState } from 'react';

// Libraries
import BottomSheet from 'reanimated-bottom-sheet';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

// Components
import { LoadingOverlay } from '../LoadingOverlay';
import { PopularItemCell } from './PopularItemCell';
import { largeModalHeight, ModalContainer, ModalHeader, ModalHeaderTab, smallModalHeight } from '../Modal';

import {
  CameraIconContainer,
  SelectStoreButton,
  SelectStoreButtonContainer,
  SelectStoreButtonText,
  StoreDetailContainer,
  StoreDetailHeaderRow,
  StoreDetailImage,
  StoreDetailImageContainer,
  StoreDetailStoreNameText,
  StoreDetailStoreCategoryText,
  StoreDetailStoreAddressText,
  StoreDetailStoreDescriptionText,
  StoreDetailPopularItemHeaderText,
  StoreDetailCloseIconContainer,
} from './Styled';

// Iconography
import { CameraIcon, CloseIcon } from '&icons';

// Navigation
import { useNavigation } from '@react-navigation/native';

// GraphQL
import { MarkerInfoFragment, useGetStoreInfoQuery } from '&graphql';

// Utils
import { hapticOptions } from '&utils';

// Constants
const freeSnap = [largeModalHeight - 10, smallModalHeight];
const restrictSnap = [largeModalHeight - 10, largeModalHeight - 11];

interface StorePreviewProps {
  onClose: () => void;
  onSelect: () => void;
  store: MarkerInfoFragment;
}

export const StorePreview = ({ store, onClose, onSelect }: StorePreviewProps) => {
  const navigation = useNavigation();

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
          <StoreDetailContainer>
            <StoreDetailHeaderRow>
              {storeData.StorePic && (
                <StoreDetailImageContainer>
                  <StoreDetailImage source={{ uri: storeData.StorePic.size64 }} />
                </StoreDetailImageContainer>
              )}

              <StoreDetailStoreNameText numberOfLines={1}>{storeData.name}</StoreDetailStoreNameText>

              <StoreDetailCloseIconContainer onPress={onClose}>
                <CloseIcon />
              </StoreDetailCloseIconContainer>
            </StoreDetailHeaderRow>

            <StoreDetailStoreCategoryText>{storeData.category}</StoreDetailStoreCategoryText>
            <StoreDetailStoreAddressText numberOfLines={2}>{storeData.address} </StoreDetailStoreAddressText>

            {storeData.description && (
              <StoreDetailStoreDescriptionText numberOfLines={2}>
                {storeData.description}
              </StoreDetailStoreDescriptionText>
            )}

            <StoreDetailPopularItemHeaderText>Popular Items</StoreDetailPopularItemHeaderText>
          </StoreDetailContainer>

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

          {storeSelected && (
            <CameraIconContainer style={{ elevation: 4 }} onPress={() => navigation.navigate('ScanningScreen')}>
              <CameraIcon />
            </CameraIconContainer>
          )}

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

                ReactNativeHapticFeedback.trigger('impactMedium', hapticOptions);
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
