/** @format */

import React, { useEffect, useRef, useState } from 'react';
import { theme } from '&theme';

// Libraries
import { Platform } from 'react-native';
import MapView, { EventUserLocation, PROVIDER_GOOGLE, Region } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { request, PERMISSIONS } from 'react-native-permissions';

// Components
import { CameraIconContainer, FullScreen, MapStyle, StoreMap } from '&components';

// Iconography
import { CameraIcon } from '&icons';

// Navigation
import { AuthStackParams } from '&navigation';
import { StackScreenProps } from '@react-navigation/stack';

type MapViewScreenProps = StackScreenProps<AuthStackParams, 'TabNavigation'>;

export const MapViewScreen = ({ navigation }: MapViewScreenProps) => {
  const mapRef = useRef<MapView>(null);

  const [currentPosition, setCurrentPosition] = useState<Region>();
  const [storeSelected, setStoreSelected] = useState<boolean>(false);

  useEffect(() => {
    void requestLocationPermission();
  }, []);

  const requestLocationPermission = async () => {
    if (Platform.OS === 'ios') {
      const response = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);

      if (response === 'granted') {
        locateCurrentPosition();
      }
    } else {
      const response = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);

      if (response === 'granted') {
        locateCurrentPosition();
      }
    }
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

  return (
    <FullScreen>
      <StoreMap
        ref={mapRef}
        loadingEnabled
        showsUserLocation
        minZoomLevel={17}
        maxZoomLevel={20}
        pitchEnabled={false}
        scrollEnabled={false}
        region={currentPosition}
        customMapStyle={MapStyle}
        provider={PROVIDER_GOOGLE}
        initialRegion={currentPosition}
        onUserLocationChange={locateCurrentPosition}
        loadingIndicatorColor={theme.colors.purple[1]}
        loadingBackgroundColor={theme.colors.white[1]}
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
    </FullScreen>
  );
};
