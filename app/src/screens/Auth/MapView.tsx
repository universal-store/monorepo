/** @format */

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { theme } from '&theme';

// Libraries
import { FlatList, Linking, Platform } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import { request, PERMISSIONS } from 'react-native-permissions';
import MapView, { EventUserLocation, PROVIDER_GOOGLE, Region, Marker } from 'react-native-maps';

// Components
import {
  CameraIconContainer,
  CameraSettingsButton,
  CameraSettingsText,
  MapMarkerText,
  FullScreen,
  MapStyle,
  NoLocationPermissionsScreen,
  NoLocationPermissionsText,
  StoreMap,
  ToggleFocusButton,
  MapViewStoreCategoryButton,
  MapViewStoreCategoryButtonText,
  MapViewStoreCategoryContainer,
  MapViewStoreCategoryListPadding,
  MapViewStoreCategoryPadding,
} from '&components';

// Iconography
import { CameraIcon, MapArrowIcon, MarkerIcon } from '&icons';

// Navigation
import { AuthStackParams } from '&navigation';
import { useFocusEffect } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';

// GraphQL
import { useGetUserQuery } from '&graphql';

// Store Categories
const STORE_CATEGORIES = ['Department', 'Convenience', 'Electronic', 'Pharamacy', 'Supermarket'];

type MapViewScreenProps = StackScreenProps<AuthStackParams, 'TabNavigation'>;

export const MapViewScreen = ({ navigation }: MapViewScreenProps) => {
  const mapRef = useRef<MapView>(null);

  const [currentPosition, setCurrentPosition] = useState<Region>();
  // Map State
  const [storeSelected, setStoreSelected] = useState<boolean>(true);
  const [focusedUserLocation, setFocusedUserLocation] = useState<boolean>(true);

  // Location Permissions
  const [locationPermission, setLocationPermission] = useState<boolean | undefined>();

  // Pill Filter State
  const [pillFilterState, setFilterState] = useState<boolean[]>([false, false, false]);

  // Check for complete profile
  const { data: authData } = useGetUserQuery();

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
    const tempPillFilter = [...pillFilterState];
    tempPillFilter[index] = !tempPillFilter[index];
    setFilterState(tempPillFilter);
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

  return (
    <FullScreen>
      <MapViewStoreCategoryContainer>
        <FlatList
          horizontal
          data={STORE_CATEGORIES}
          keyExtractor={item => item + '_pill'}
          ItemSeparatorComponent={() => <MapViewStoreCategoryPadding />}
          ListHeaderComponent={() => <MapViewStoreCategoryListPadding />}
          ListFooterComponent={() => <MapViewStoreCategoryListPadding />}
          renderItem={({ item, index }) => (
            <MapViewStoreCategoryButton selected={pillFilterState[index]} onPress={() => togglePillFilter(index)}>
              <MapViewStoreCategoryButtonText selected={pillFilterState[index]}>{item}</MapViewStoreCategoryButtonText>
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
        {currentPosition && (
          <Marker
            coordinate={{
              latitude: currentPosition.latitude,
              longitude: currentPosition.longitude,
            }}
          >
            <MapMarkerText>Publix</MapMarkerText>
            <MarkerIcon />
          </Marker>
        )}
      </StoreMap>

      {storeSelected && (
        <CameraIconContainer style={{ elevation: 4 }} onPress={() => navigation.navigate('ScanningScreen')}>
          <CameraIcon />
        </CameraIconContainer>
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
