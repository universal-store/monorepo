/** @format */

import styled from 'styled-components/native';

// Library
import MapView, { MapStyleElement } from 'react-native-maps';

// Components
import { HeaderLargeText, HeaderSmallText, TextSmall2 } from '../Text';
import { FullScreenCenter, RowView, screenWidth, isiPhoneX } from '../Views';

// Styled Components
export const NoLocationPermissionsScreen = styled(FullScreenCenter)`
  background-color: ${({ theme }) => theme.colors.gray[1]};
`;

export const NoLocationPermissionsText = styled(HeaderLargeText)`
  text-align: center;
  color: ${({ theme }) => theme.colors.white[1]};
`;

export const MapMarkerText = styled(HeaderSmallText)`
  text-align: center;
  color: ${({ theme }) => theme.colors.gray[2]};
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

// Baseline for a ScrollView from how I saw it should look like from online sources,
// but it wasn't working yet. I commented it and made a RowView with the same name temporarily.

// export const PillFilterScrollView = styled.ScrollView.attrs(() => ({
//   contentContainerStyle: {
//     horizontal: "true",
//     height: 28,
//     alignItems: 'center',
//     justifyContent: 'center'
//   }
// }))``;

export const PillFilterScrollView = styled(RowView)`
  width: 100%;
  height: 28px;
  padding: 8px 24px;
  align-items: center;
  justify-content: center;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.gray[5]};
`;

export const PillFilterButtonContainer = styled.View`
  position: absolute;
  bottom: 0;
  width: 106px;
  z-index: 100;
  padding: 16px 32px ${isiPhoneX ? 54 : 24}px;
  background-color: ${({ theme }) => theme.colors.white[1]};
`;

interface PillFilterProp {
  selected: boolean;
}

export const PillFilterButton = styled.TouchableOpacity<PillFilterProp>`
  position: absolute;
  left: 12px;
  top: 3px;
  display: flex;
  margin-left: 22px;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  shadow-opacity: 0.23;
  shadow-radius: 2.62px;
  shadow-offset: 0px 2px;
  shadow-color: ${({ theme }) => theme.colors.gray[1]};
  border: 2px solid ${({ theme, selected }) => (selected ? theme.colors.purple[1] : theme.colors.white[1])};
  background-color: ${({ theme, selected }) => (selected ? theme.colors.purple[1] : theme.colors.white[1])};
`;

export const PillFilterButtonText = styled(TextSmall2)<PillFilterProp>`
  color: ${({ theme, selected }) => (selected ? theme.colors.white[1] : theme.colors.purple[1])};
`;
