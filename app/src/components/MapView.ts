/** @format */

import styled from 'styled-components/native';

// Library
import MapView, { MapStyleElement } from 'react-native-maps';

export const StoreMap = styled(MapView)`
  flex: 1;
`;

export const CameraIconContainer = styled.TouchableOpacity`
  z-index: 1;
  width: 64px;
  height: 64px;
  display: flex;
  border-radius: 64px;
  align-items: center;
  shadow-opacity: 0.23;
  shadow-radius: 2.62px;
  shadow-offset: 0px 2px;
  justify-content: center;
  margin: auto auto 106px;
  shadow-color: ${({ theme }) => theme.colors.gray[1]};
  background-color: ${({ theme }) => theme.colors.purple[1]};
`;

export const MapStyle: MapStyleElement[] = [
  {
    featureType: 'road',
    stylers: [
      {
        hue: '#5e00ff',
      },
      {
        saturation: -79,
      },
    ],
  },
  {
    featureType: 'poi',
    stylers: [
      {
        saturation: -78,
      },
      {
        hue: '#6600ff',
      },
      {
        lightness: -47,
      },
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'road.local',
    stylers: [
      {
        lightness: 22,
      },
    ],
  },
  {
    featureType: 'landscape',
    stylers: [
      {
        hue: '#6600ff',
      },
      {
        saturation: -11,
      },
    ],
  },
  {
    featureType: 'water',
    stylers: [
      {
        saturation: -65,
      },
      {
        hue: '#1900ff',
      },
      {
        lightness: 8,
      },
    ],
  },
  {
    featureType: 'road.local',
    stylers: [
      {
        weight: 1.3,
      },
      {
        lightness: 30,
      },
    ],
  },
  {
    featureType: 'transit',
    stylers: [
      {
        visibility: 'simplified',
      },
      {
        hue: '#5e00ff',
      },
      {
        saturation: -16,
      },
    ],
  },
  {
    featureType: 'transit.line',
    stylers: [
      {
        saturation: -72,
      },
    ],
  },
];
