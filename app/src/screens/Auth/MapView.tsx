/** @format */

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { theme } from '&theme';
import { FlatList, Linking, Platform, TextInput } from 'react-native';

// Libraries
import { getDistance } from 'geolib';
import Geolocation from '@react-native-community/geolocation';
import { request, PERMISSIONS } from 'react-native-permissions';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import MapView, { EventUserLocation, PROVIDER_GOOGLE, Region } from 'react-native-maps';

// Components
import {
  CameraSettingsButton,
  CameraSettingsText,
  FullScreenLightPurple,
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
  NoLocationPermissionsScreen,
  NoLocationPermissionsText,
  StoreMap,
  StoreMapBottomPadding,
  StorePreview,
  StoreSuggestionCell,
  StoreSuggestionContainer,
  ToggleFocusButton,
} from '&components';

// Iconography
import { FindIcon, MapArrowIcon, MarkerIcon } from '&icons';

// Navigation
import { useFocusEffect } from '@react-navigation/native';

// GraphQL
import { MarkerInfoFragment, useGetStoresQuery } from '&graphql';

// Utils
import { hapticOptions } from '&utils';

// Store Categories
const STORE_CATEGORIES = ['Supermarket', 'Department', 'Convenience', 'Pharmacy', 'Electronic'];

export const MapViewScreen = () => {
  const mapRef = useRef<MapView>(null);
  const inputRef = useRef<TextInput>(null);

  const [currentPosition, setCurrentPosition] = useState<Region>();

  // Map State
  const [storeQuery, setStoreQuery] = useState<string>('');
  const [suggestion, setSuggestion] = useState<boolean>(false);

  const [storePreview, setStorePreview] = useState<MarkerInfoFragment>();
  const [queriedStores, setQueriedStores] = useState<MarkerInfoFragment[]>();
  const [filteredStores, setFilteredStores] = useState<MarkerInfoFragment[]>();
  const [categoryFilter, setCategoryFilter] = useState<boolean[]>([false, false, false, false, false]);

  // Location Permissions
  const [locationPermission, setLocationPermission] = useState<boolean | undefined>();

  // Query all Stores
  const { data: storesData } = useGetStoresQuery();

  useEffect(() => {
    filterStoresByCategory();
  }, [categoryFilter]);

  useEffect(() => {
    if (storesData) {
      setQueriedStores(storesData.Store);
      setFilteredStores(storesData.Store);
    }
  }, [storesData]);

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

  const filterStoresByQuery = (query: string) => {
    if (!storesData) return;

    const tempFilteredStores = storesData.Store.filter(store => store.name.toLowerCase().includes(query.toLowerCase()));
    setQueriedStores(tempFilteredStores);
  };

  const filterStoresByCategory = () => {
    if (!storesData) return;

    let selectedCategories: string[] = [];
    if (categoryFilter[0]) selectedCategories.push('Supermarket');
    if (categoryFilter[1]) selectedCategories.push('Department');
    if (categoryFilter[2]) selectedCategories.push('Convenience');
    if (categoryFilter[3]) selectedCategories.push('Pharmacy');
    if (categoryFilter[4]) selectedCategories.push('Electronic');

    if (categoryFilter.every(category => !category)) {
      selectedCategories = [...STORE_CATEGORIES];
    }

    const tempFilteredStores = storesData.Store.filter(store => {
      if (store.category) {
        return selectedCategories.includes(store.category);
      }
      return true;
    });

    setFilteredStores(tempFilteredStores);
  };

  const togglePillFilter = (index: number) => {
    const tempCategoryFilter = [...categoryFilter];
    tempCategoryFilter[index] = !tempCategoryFilter[index];
    setCategoryFilter(tempCategoryFilter);
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

  return (
    <FullScreenLightPurple>
      <MapViewTextInputContainer>
        <MapViewTextInputIconContainer>
          <FindIcon />
        </MapViewTextInputIconContainer>
        <MapViewTextInput
          ref={inputRef}
          value={storeQuery}
          editable={!storePreview}
          onChangeText={text => {
            setStoreQuery(text);
            filterStoresByQuery(text);
          }}
          placeholder="Search for store"
        />
      </MapViewTextInputContainer>

      {storeQuery !== '' && !storePreview && inputRef.current && inputRef.current.isFocused() && (
        <StoreSuggestionContainer>
          {queriedStores &&
            queriedStores.slice(0, 5).map(store => (
              <StoreSuggestionCell
                key={store.id + '_suggestion'}
                storeData={store}
                onPress={async () => {
                  if (mapRef.current && currentPosition) {
                    ReactNativeHapticFeedback.trigger('selection', hapticOptions);

                    const storeLocation = {
                      latitude: store.location.coordinates[0],
                      longitude: store.location.coordinates[1],
                    };

                    await mapRef.current.animateToRegion(
                      {
                        ...storeLocation,
                        latitudeDelta: 0.0015,
                        longitudeDelta: 0.0015,
                      },
                      200
                    );

                    const curLocation = {
                      latitude: currentPosition.latitude,
                      longitude: currentPosition.longitude,
                    };

                    const distance = getDistance(storeLocation, curLocation);

                    await setSuggestion(distance > 350);
                    await setStorePreview(store);
                  }
                }}
              />
            ))}
        </StoreSuggestionContainer>
      )}

      <MapViewStoreCategoryContainer>
        <FlatList
          horizontal
          data={STORE_CATEGORIES}
          keyExtractor={item => item + '_pill'}
          ItemSeparatorComponent={() => <MapViewStoreCategoryPadding />}
          ListHeaderComponent={() => <MapViewStoreCategoryListPadding />}
          ListFooterComponent={() => <MapViewStoreCategoryListPadding />}
          renderItem={({ item, index }) => (
            <MapViewStoreCategoryButton
              selected={categoryFilter[index]}
              onPress={() => {
                togglePillFilter(index);
                ReactNativeHapticFeedback.trigger('selection', hapticOptions);
              }}
            >
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
          left: 12,
          bottom: 12,
        }}
        loadingEnabled
        minZoomLevel={17}
        maxZoomLevel={20}
        showsUserLocation
        pitchEnabled={false}
        showsCompass={false}
        showsIndoors={false}
        region={currentPosition}
        customMapStyle={MapStyle}
        provider={PROVIDER_GOOGLE}
        zoomEnabled={!storePreview}
        scrollEnabled={!storePreview}
        showsMyLocationButton={false}
        initialRegion={currentPosition}
        loadingIndicatorColor={theme.colors.purple[1]}
        loadingBackgroundColor={theme.colors.white[1]}
        onRegionChange={() => inputRef.current && inputRef.current.blur()}
      >
        {filteredStores &&
          filteredStores.map(store => (
            <MapViewMarker
              key={store.id}
              coordinate={{
                latitude: store.location.coordinates[0],
                longitude: store.location.coordinates[1],
              }}
              onPress={async () => {
                if (currentPosition) {
                  ReactNativeHapticFeedback.trigger('impactHeavy', hapticOptions);

                  const storeLocation = {
                    latitude: store.location.coordinates[0],
                    longitude: store.location.coordinates[1],
                  };

                  const curLocation = {
                    latitude: currentPosition.latitude,
                    longitude: currentPosition.longitude,
                  };

                  const distance = getDistance(storeLocation, curLocation);

                  await setSuggestion(distance > 350);

                  if (storePreview !== undefined && storePreview.id === store.id) {
                    await setStoreQuery('');
                    await setStorePreview(undefined);
                  } else {
                    await setStorePreview(store);
                    await setStoreQuery(store.name);
                  }
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
            suggestion={suggestion}
            onClose={() => {
              setSuggestion(false);
              setStoreQuery('');
              setStorePreview(undefined);
            }}
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

      <ToggleFocusButton
        style={{ elevation: 4 }}
        onPress={() => {
          ReactNativeHapticFeedback.trigger('impactLight', hapticOptions);
          locateCurrentPosition();
        }}
      >
        <MapArrowIcon />
      </ToggleFocusButton>
    </FullScreenLightPurple>
  );
};
