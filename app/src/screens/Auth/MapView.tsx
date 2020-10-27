/** @format */

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { theme } from '&theme';

// Libraries
import { FlatList, Linking, Platform } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import { request, PERMISSIONS } from 'react-native-permissions';
import MapView, { EventUserLocation, PROVIDER_GOOGLE, Region } from 'react-native-maps';

// Components
import {
  CameraSettingsButton,
  CameraSettingsText,
  FullScreen,
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
  MapViewTextInputRowView,
  NoLocationPermissionsScreen,
  NoLocationPermissionsText,
  StoreMap,
  StoreMapBottomPadding,
  StorePreview,
  StoreSuggestionHeader,
  ToggleFocusButton,
} from '&components';

// Iconography
import { FindIcon, MapArrowIcon, MarkerIcon } from '&icons';

// Navigation
import { AuthStackParams } from '&navigation';
import { useFocusEffect } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';

// GraphQL
import { MarkerInfoFragment, useGetUserQuery, useGetStoresQuery } from '&graphql';
import { StoreSuggestionCell } from 'components/MapView/StoreSuggestionCell';

// Store Categories
const STORE_CATEGORIES = ['Supermarket', 'Department', 'Convenience', 'Pharamacy', 'Electronic'];

type MapViewScreenProps = StackScreenProps<AuthStackParams, 'TabNavigation'>;

export const MapViewScreen = ({ navigation }: MapViewScreenProps) => {
  const mapRef = useRef<MapView>(null);

  const [currentPosition, setCurrentPosition] = useState<Region>();

  // Map State
  const [storeQuery, setStoreQuery] = useState<string>('');
  // const [storeSelected, setStoreSelected] = useState<boolean>(false);
  const [storePreview, setStorePreview] = useState<MarkerInfoFragment>();
  const [filteredStores, setFilteredStores] = useState<MarkerInfoFragment[]>();
  const [categoryFilter, setCategoryFilter] = useState<boolean[]>([false, false, false, false, false]);

  // Location Permissions
  const [locationPermission, setLocationPermission] = useState<boolean | undefined>();

  // Check for complete profile
  const { data: authData } = useGetUserQuery();

  // Query all Stores
  const { data: storesData } = useGetStoresQuery();

  useEffect(() => {
    if (storesData) {
      setFilteredStores(storesData.Store);
    }
  });

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

  // const filterStoresByCategory = () => {
  //   const selectedCategories = [];

  //   if (categoryFilter[0]) selectedCategories.push('Supermarket');
  //   if (categoryFilter[1]) selectedCategories.push('Department');
  //   if (categoryFilter[2]) selectedCategories.push('Convenience');
  //   if (categoryFilter[3]) selectedCategories.push('Pharmacy');
  //   if (categoryFilter[4]) selectedCategories.push('Electronic');

  //   // const tempFilteredStores = storesData?.Store.filter(store => ???
  // };

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

  return (
    <FullScreen>
      <MapViewTextInputContainer empty={storeQuery === ''}>
        <MapViewTextInputRowView>
          <MapViewTextInputIconContainer>
            <FindIcon />
          </MapViewTextInputIconContainer>
          <MapViewTextInput
            value={storeQuery}
            editable={!storePreview}
            onChangeText={setStoreQuery}
            placeholder="Search for store"
          />
        </MapViewTextInputRowView>
        {storeQuery !== '' && (
          <>
            <StoreSuggestionHeader />
            <StoreSuggestionCell />
            <StoreSuggestionCell />
            <StoreSuggestionCell />
            <StoreSuggestionCell />
            <StoreSuggestionCell />
          </>
        )}
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
          right: 0,
          left: storePreview ? 0 : 15,
          bottom: storePreview ? 12 : 65,
        }}
        loadingEnabled
        minZoomLevel={17}
        maxZoomLevel={20}
        showsUserLocation
        pitchEnabled={false}
        region={currentPosition}
        customMapStyle={MapStyle}
        provider={PROVIDER_GOOGLE}
        zoomEnabled={!storePreview}
        scrollEnabled={!storePreview}
        initialRegion={currentPosition}
        loadingIndicatorColor={theme.colors.purple[1]}
        loadingBackgroundColor={theme.colors.white[1]}
      >
        {filteredStores &&
          filteredStores.map(store => (
            <MapViewMarker
              key={store.id}
              coordinate={{
                latitude: store.location.coordinates[0],
                longitude: store.location.coordinates[1],
              }}
              onPress={() => {
                if (storePreview !== undefined && storePreview.id === store.id) {
                  setStoreQuery('');
                  setStorePreview(undefined);
                } else {
                  setStorePreview(store);
                  setStoreQuery(store.name);
                }
              }}
            >
              <MapViewMarkerText>{store.name}</MapViewMarkerText>
              <MarkerIcon selected={storePreview !== undefined && storePreview.id === store.id} />
            </MapViewMarker>
          ))}
      </StoreMap>

      {storePreview && (
        <>
          <StoreMapBottomPadding />
          <StorePreview
            store={storePreview}
            onSelect={() =>
              mapRef.current &&
              mapRef.current.animateToRegion(
                {
                  latitudeDelta: 0.0015,
                  longitudeDelta: 0.0015,
                  latitude: storePreview.location.coordinates[0],
                  longitude: storePreview.location.coordinates[1],
                },
                200
              )
            }
          />
        </>
      )}

      <ToggleFocusButton style={{ elevation: 4 }} onPress={() => locateCurrentPosition()}>
        <MapArrowIcon />
      </ToggleFocusButton>
    </FullScreen>
  );
};

// <CameraIconContainer style={{ elevation: 4 }} onPress={() => navigation.navigate('ScanningScreen')}>
//   <CameraIcon />
// </CameraIconContainer>
