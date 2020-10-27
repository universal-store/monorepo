/** @format */

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { theme } from '&theme';

// Libraries
import BottomSheet from 'reanimated-bottom-sheet';
import { FlatList, Linking, Platform } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import { request, PERMISSIONS } from 'react-native-permissions';
import MapView, { EventUserLocation, PROVIDER_GOOGLE, Region } from 'react-native-maps';

// Components
import {
  CameraSettingsButton,
  CameraSettingsText,
  FullScreen,
  largeModalHeight,
  MapStyle,
  MapViewMarker,
  MapViewMarkerText,
  MapViewStoreCategoryButton,
  MapViewStoreCategoryButtonText,
  MapViewStoreCategoryContainer,
  MapViewStoreCategoryListPadding,
  MapViewStoreCategoryPadding,
  MapViewTextInput,
  MapViewTextInputContainer,
  MapViewTextInputIconContainer,
  ModalContainer,
  ModalHeader,
  ModalHeaderTab,
  NoLocationPermissionsScreen,
  NoLocationPermissionsText,
  StoreMap,
  smallModalHeight,
  ToggleFocusButton,
} from '&components';

// Iconography
import { FindIcon, MapArrowIcon, MarkerIcon } from '&icons';

// Navigation
import { AuthStackParams } from '&navigation';
import { useFocusEffect } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';

// GraphQL
import { useGetUserQuery, useGetStoresQuery } from '&graphql';

// Store Categories
const STORE_CATEGORIES = ['Department', 'Convenience', 'Electronic', 'Pharamacy', 'Supermarket'];

type MapViewScreenProps = StackScreenProps<AuthStackParams, 'TabNavigation'>;

export const MapViewScreen = ({ navigation }: MapViewScreenProps) => {
  const mapRef = useRef<MapView>(null);

  const [currentPosition, setCurrentPosition] = useState<Region>();
  // Map State
  const [storeQuery, setStoreQuery] = useState<string>('');
  const [storeSelected, setStoreSelected] = useState<boolean>(true);
  const [focusedUserLocation, setFocusedUserLocation] = useState<boolean>(true);
  const [categoryFilter, setCategoryFilter] = useState<boolean[]>([false, false, false, false, false]);

  // Location Permissions
  const [locationPermission, setLocationPermission] = useState<boolean | undefined>();

  // Check for complete profile
  const { data: authData } = useGetUserQuery();

  // Query all Stores
  const { data: storesData } = useGetStoresQuery();

  useEffect(() => {
    if (authData && authData.User.length && !authData.User[0].firstName) navigation.navigate('UserInfoScreen');
  }, [authData]);

  useFocusEffect(
    useCallback(() => {
      if (Platform.OS === 'ios') {
        void request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE).then(res => {
          if (res === 'granted') {
            locateCurrentPosition();
            setLocationPermission(true);
          } else {
            setLocationPermission(false);
          }
        });
      } else {
        void request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION).then(res => {
          if (res === 'granted') {
            locateCurrentPosition();
            setLocationPermission(true);
          } else {
            setLocationPermission(false);
          }
        });
      }

      setFocusedUserLocation(true);
    }, [])
  );

  const togglePillFilter = (index: number) => {
    const tempCategoryFilter = [...categoryFilter];
    tempCategoryFilter[index] = !tempCategoryFilter[index];
    setCategoryFilter(tempCategoryFilter);
  };

  const locateCurrentPosition = (userLocation?: EventUserLocation) => {
    if (userLocation) {
      const region: Region = {
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
        latitude: userLocation.nativeEvent.coordinate.latitude,
        longitude: userLocation.nativeEvent.coordinate.longitude,
      };
      setCurrentPosition(region);
    } else {
      Geolocation.getCurrentPosition(
        position => {
          const region: Region = {
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          };

          setCurrentPosition(region);
        },
        error => console.log(error),
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 10000 }
      );
    }
  };

  if (locationPermission === false) {
    return (
      <NoLocationPermissionsScreen>
        <NoLocationPermissionsText>
          Make sure to grant Universal Store permissions to use your location!
        </NoLocationPermissionsText>

        <CameraSettingsButton onPress={() => Linking.openSettings()}>
          <CameraSettingsText>Go to Settings</CameraSettingsText>
        </CameraSettingsButton>
      </NoLocationPermissionsScreen>
    );
  }

  const renderHeader = () => (
    <ModalHeader>
      <ModalHeaderTab />
    </ModalHeader>
  );

  const renderContent = () => <ModalContainer></ModalContainer>;

  return (
    <FullScreen>
      <MapViewTextInputContainer>
        <MapViewTextInputIconContainer>
          <FindIcon />
        </MapViewTextInputIconContainer>
        <MapViewTextInput
          value={storeQuery}
          editable={!storeSelected}
          onChangeText={setStoreQuery}
          placeholder="Search for store"
        />
      </MapViewTextInputContainer>

      <MapViewStoreCategoryContainer>
        <FlatList
          horizontal
          data={STORE_CATEGORIES}
          keyExtractor={item => item + '_pill'}
          ItemSeparatorComponent={() => <MapViewStoreCategoryPadding />}
          ListHeaderComponent={() => <MapViewStoreCategoryListPadding />}
          ListFooterComponent={() => <MapViewStoreCategoryListPadding />}
          renderItem={({ item, index }) => (
            <MapViewStoreCategoryButton selected={categoryFilter[index]} onPress={() => togglePillFilter(index)}>
              <MapViewStoreCategoryButtonText selected={categoryFilter[index]}>{item}</MapViewStoreCategoryButtonText>
            </MapViewStoreCategoryButton>
          )}
          showsHorizontalScrollIndicator={false}
        />
      </MapViewStoreCategoryContainer>

      <StoreMap
        ref={mapRef}
        mapPadding={{
          top: 0,
          left: 15,
          right: 0,
          bottom: 65,
        }}
        loadingEnabled
        minZoomLevel={17}
        maxZoomLevel={20}
        showsUserLocation
        pitchEnabled={false}
        region={currentPosition}
        customMapStyle={MapStyle}
        provider={PROVIDER_GOOGLE}
        initialRegion={currentPosition}
        loadingIndicatorColor={theme.colors.purple[1]}
        loadingBackgroundColor={theme.colors.white[1]}
        onRegionChange={() => {
          if (focusedUserLocation) setFocusedUserLocation(false);
        }}
      >
        {storesData &&
          storesData?.Store &&
          storesData.Store.map(store => (
            <MapViewMarker
              key={store.id}
              coordinate={{
                latitude: store.location.coordinates[0],
                longitude: store.location.coordinates[1],
              }}
            >
              <MapViewMarkerText>{store.name}</MapViewMarkerText>
              <MarkerIcon />
            </MapViewMarker>
          ))}
      </StoreMap>

      {storeSelected && (
        <BottomSheet
          initialSnap={1}
          renderHeader={renderHeader}
          renderContent={renderContent}
          snapPoints={[largeModalHeight, smallModalHeight]}
        />
      )}

      <ToggleFocusButton
        focused={focusedUserLocation}
        style={{ elevation: 4 }}
        onPress={() => {
          if (!focusedUserLocation && mapRef.current) {
            locateCurrentPosition();
            setFocusedUserLocation(true);
          }
        }}
      >
        <MapArrowIcon />
      </ToggleFocusButton>
    </FullScreen>
  );
};

// <CameraIconContainer style={{ elevation: 4 }} onPress={() => navigation.navigate('ScanningScreen')}>
//   <CameraIcon />
// </CameraIconContainer>
