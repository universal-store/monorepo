/** @format */

import React, { useCallback, useRef, useState } from 'react';
import { theme } from '&theme';

// Libraries
import { Linking, Platform } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import { request, PERMISSIONS } from 'react-native-permissions';
import MapView, { EventUserLocation, PROVIDER_GOOGLE, Region } from 'react-native-maps';

// Components
import {
  CameraIconContainer,
  CameraSettingsButton,
  CameraSettingsText,
  FullScreen,
  MapStyle,
  NoLocationPermissionsScreen,
  NoLocationPermissionsText,
  StoreMap,
  ToggleFocusButton,
} from '&components';

// Iconography
import { CameraIcon, MapArrowIcon } from '&icons';

// Navigation
import { AuthStackParams } from '&navigation';
import { useFocusEffect } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';

type MapViewScreenProps = StackScreenProps<AuthStackParams, 'TabNavigation'>;

export const MapViewScreen = ({ navigation }: MapViewScreenProps) => {
  const mapRef = useRef<MapView>(null);

  const [currentPosition, setCurrentPosition] = useState<Region>();

  // Map State
  const [storeSelected, setStoreSelected] = useState<boolean>(true);
  const [focusedUserLocation, setFocusedUserLocation] = useState<boolean>(true);

  // Location Permissions
  const [locationPermission, setLocationPermission] = useState<boolean | undefined>();

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
      <StoreMap
        ref={mapRef}
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
        mapPadding={{
          top: 0,
          left: 15,
          right: 0,
          bottom: 65,
        }}
      />

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
