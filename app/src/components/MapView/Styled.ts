/** @format */

import styled from 'styled-components/native';

// Library
import MapView, { MapStyleElement } from 'react-native-maps';

// Components
import { HeaderLargeText } from '../Text';
import { FullScreenCenter, RowView, screenWidth } from '../Views';

// Styled Components
export const FindIconContainer = styled.View`
  width: 16px;
  height: 16px;
  margin-left: 16px;
  margin-right: 12px;
`;

export const MapHeaderContainer = styled(RowView)`
  margin: 24px 24px 0px 24px;
  align-items: center;
  background: #ffffff;
  border-radius: 40px;
  height: 34px;
  width: 100%;
`;

export const MapHeaderInputContainer = styled(RowView)`
  align-items: center;
`;

export const MapHeaderTextInput = styled.TextInput.attrs(({ theme }) => ({
  selectionColor: theme.colors.gray[3],
  placeholderTextColor: theme.colors.gray[4],
}))`
  flex: 1;
  padding-top: 8px;
  padding-right: 16px;
  font-family: NunitoSansRegular;
`;

export const NoLocationPermissionsScreen = styled(FullScreenCenter)`
  background-color: ${({ theme }) => theme.colors.gray[1]};
`;

export const NoLocationPermissionsText = styled(HeaderLargeText)`
  text-align: center;
  color: ${({ theme }) => theme.colors.white[1]};
`;

export const StoreMap = styled(MapView)`
  flex: 1;
`;

export const CameraIconContainer = styled.TouchableOpacity`
  position: absolute;
  width: 64px;
  height: 64px;
  bottom: 108px;
  display: flex;
  margin: 0 auto;
  border-radius: 64px;
  align-items: center;
  shadow-opacity: 0.23;
  shadow-radius: 2.62px;
  shadow-offset: 0px 2px;
  justify-content: center;
  left: ${screenWidth / 2 - 32}px;
  shadow-color: ${({ theme }) => theme.colors.gray[1]};
  background-color: ${({ theme }) => theme.colors.purple[1]};
`;

interface ToggleFocusButtonProps {
  focused: boolean;
}

export const ToggleFocusButton = styled.TouchableOpacity<ToggleFocusButtonProps>`
  position: absolute;
  right: 24px;
  width: 48px;
  height: 48px;
  display: flex;
  bottom: 114px;
  margin-left: auto;
  border-radius: 64px;
  align-items: center;
  shadow-opacity: 0.23;
  shadow-radius: 2.62px;
  shadow-offset: 0px 2px;
  justify-content: center;
  shadow-color: ${({ theme }) => theme.colors.gray[1]};
  background-color: ${({ theme, focused }) => (focused ? theme.colors.purple[1] : theme.colors.gray[1])};
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
