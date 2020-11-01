/** @format */

import React, { useEffect, useRef, useState } from 'react';

// Libraries
import BottomSheet from 'reanimated-bottom-sheet';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

// Components
import { Alert, FlatList } from 'react-native';
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
} from './Styled';

// Iconography
import { CameraIcon } from '&icons';

// Navigation
import { useNavigation } from '@react-navigation/native';

// GraphQL
import {
  MarkerInfoFragment,
  GetUserCartItemsDocument,
  useGetUserQuery,
  useGetStoreInfoQuery,
  useGetPopularItemsQuery,
  useGetUserCartItemsQuery,
  useClearUserCartItemsMutation,
} from '&graphql';

// Utils
import { hapticOptions } from '&utils';

// Constants
const freeSnap = [largeModalHeight - 122, smallModalHeight - 122];
const restrictSnap = [largeModalHeight - 122, largeModalHeight - 121];

interface StorePreviewProps {
  onClose: () => void;
  suggestion: boolean;
  onSelect: () => void;
  store: MarkerInfoFragment;
}

export const StorePreview = ({ store, onClose, onSelect, suggestion }: StorePreviewProps) => {
  const navigation = useNavigation();

  const { data } = useGetStoreInfoQuery({ variables: { id: store.id } });
  const storeData = data?.Store_by_pk;

  const { data: itemData } = useGetPopularItemsQuery({ variables: { id: store.id } });

  const { data: cartData } = useGetUserCartItemsQuery();

  const { data: userData } = useGetUserQuery();
  const userId = userData?.User[0].id!;

  const [clearCartMutation] = useClearUserCartItemsMutation();

  const sheetRef = useRef<BottomSheet>(null);

  const [loading, setLoading] = useState<boolean>(false);
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
      {storeData ? (
        <>
          <StoreDetailContainer>
            <StoreDetailHeaderRow>
              {storeData.StorePic && (
                <StoreDetailImageContainer>
                  <StoreDetailImage source={{ uri: storeData.StorePic.size64 }} />
                </StoreDetailImageContainer>
              )}

              <StoreDetailStoreNameText numberOfLines={1}>{storeData.name}</StoreDetailStoreNameText>
            </StoreDetailHeaderRow>

            <StoreDetailStoreCategoryText>{storeData.category}</StoreDetailStoreCategoryText>
            <StoreDetailStoreAddressText numberOfLines={2}>{storeData.address}</StoreDetailStoreAddressText>

            {storeData.description && (
              <StoreDetailStoreDescriptionText numberOfLines={4}>
                {storeData.description}
              </StoreDetailStoreDescriptionText>
            )}

            {itemData && itemData.Store_by_pk && itemData.Store_by_pk.StoreItems.length > 0 && (
              <StoreDetailPopularItemHeaderText>Popular Items</StoreDetailPopularItemHeaderText>
            )}
          </StoreDetailContainer>

          {itemData && itemData.Store_by_pk && (
            <FlatList
              bounces={false}
              showsVerticalScrollIndicator={false}
              keyExtractor={item => item.barcodeId}
              data={itemData.Store_by_pk.StoreItems}
              renderItem={({ item }) => <PopularItemCell itemData={item} />}
            />
          )}
        </>
      ) : (
        <LoadingOverlay />
      )}
    </ModalContainer>
  );

  return (
    <>
      <BottomSheet
        ref={sheetRef}
        initialSnap={1}
        enabledBottomClamp
        renderHeader={renderHeader}
        renderContent={renderContent}
        enabledBottomInitialAnimation
        enabledContentGestureInteraction={false}
        snapPoints={storeSelected ? restrictSnap : freeSnap}
      />

      {storeSelected && (
        <CameraIconContainer
          style={{ elevation: 4 }}
          onPress={() => {
            ReactNativeHapticFeedback.trigger('impactMedium', hapticOptions);
            navigation.navigate('ScanningScreen');
          }}
        >
          <CameraIcon />
        </CameraIconContainer>
      )}

      {!suggestion && (
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

              if (storeSelected && cartData && cartData.UserCartItem.length > 0) {
                Alert.alert(
                  'Items In Cart Already',
                  'Are you sure you want to stop shopping? There are items in your cart',
                  [
                    {
                      text: 'Yes',
                      style: 'destructive',
                      onPress: async () => {
                        await setLoading(true);
                        await clearCartMutation({
                          variables: { userId },
                          refetchQueries: [{ query: GetUserCartItemsDocument }],
                        });
                        await setStoreSelected(false);
                        await setLoading(false);

                        if (sheetRef) await sheetRef.current.snapTo(1);
                      },
                    },
                    { text: 'No' },
                  ]
                );
              } else {
                setStoreSelected(!storeSelected);
              }
            }}
          >
            <SelectStoreButtonText selected={storeSelected}>
              {storeSelected ? 'Stop Shopping' : 'Select Store'}
            </SelectStoreButtonText>
          </SelectStoreButton>
        </SelectStoreButtonContainer>
      )}
      {loading && <LoadingOverlay />}
    </>
  );
};
