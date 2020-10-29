/** @format */

import styled from 'styled-components/native';

// Library
import MapView, { MapStyleElement, Marker } from 'react-native-maps';

// Components
import { Pressable } from 'react-native';
import { smallModalHeight } from '../Modal';
import { HeaderLargeText, HeaderSmallText, TextMedium2, TextSmall2 } from '../Text';
import { FullScreenCenter, isiPhoneX, RowView, screenWidth } from '../Views';

// Styled Components
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

export const StoreMapBottomPadding = styled.View`
  height: ${smallModalHeight - 12}px;
  background-color: ${({ theme }) => theme.colors.purple[3]};
`;

export const MapViewMarker = styled(Marker)`
  display: flex;
  align-items: center;
`;

export const MapViewMarkerText = styled(HeaderSmallText)`
  text-align: center;
  color: ${({ theme }) => theme.colors.gray[2]};
`;

export const MapViewTextInputContainer = styled(RowView)`
  position: absolute;
  flex: 1;
  left: 24px;
  z-index: 2;
  display: flex;
  padding: 8px 16px;
  align-items: center;
  border-radius: 40px;
  margin-bottom: 24px;
  shadow-opacity: 0.23;
  shadow-radius: 2.62px;
  shadow-offset: 0px 2px;
  width: ${screenWidth - 48}px;
  top: ${isiPhoneX ? 54 : 24}px;
  shadow-color: ${({ theme }) => theme.colors.gray[1]};
  background-color: ${({ theme }) => theme.colors.white[1]};
`;

export const MapViewTextInputIconContainer = styled.View`
  width: 16px;
  height: 16px;
  display: flex;
  margin-right: 12px;
  align-items: center;
  justify-content: center;
`;

export const MapViewTextInput = styled.TextInput.attrs(({ theme }) => ({
  selectionColor: theme.colors.gray[3],
  placeholderTextColor: theme.colors.gray[4],
}))`
  flex: 1;
  font-size: 15px;
  font-family: NunitoSans-Regular;
  color: ${({ theme }) => theme.colors.gray[1]};
`;

export const MapViewStoreCategoryContainer = styled.View`
  position: absolute;
  flex: 1;
  left: 0;
  z-index: 1;
  width: 100%;
  top: ${isiPhoneX ? 94 : 64}px;
`;

export const MapViewStoreCategoryPadding = styled.View`
  width: 10px;
`;

export const MapViewStoreCategoryListPadding = styled.View`
  width: 24px;
`;

interface MapViewStoreCategoryProp {
  selected: boolean;
}

export const MapViewStoreCategoryButton = styled(Pressable)<MapViewStoreCategoryProp>`
  width: auto;
  height: 28px;
  display: flex;
  margin: 10px 0;
  padding: 0 12px;
  border-radius: 15px;
  align-items: center;
  shadow-opacity: 0.23;
  shadow-radius: 2.62px;
  shadow-offset: 0px 2px;
  justify-content: center;
  shadow-color: ${({ theme }) => theme.colors.gray[1]};
  background-color: ${({ theme, selected }) => (selected ? theme.colors.purple[1] : theme.colors.purple[3])};
`;

export const MapViewStoreCategoryButtonText = styled(TextMedium2)<MapViewStoreCategoryProp>`
  color: ${({ theme, selected }) => (selected ? theme.colors.white[1] : theme.colors.purple[1])};
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

export const ToggleFocusButton = styled.TouchableOpacity`
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
  background-color: ${({ theme }) => theme.colors.gray[1]};
`;

// --------------------------------- Store Suggestion --------------------------------

export const StoreSuggestionContainer = styled.View`
  position: absolute;
  flex: 1;
  left: 24px;
  z-index: 2;
  border-radius: 8px;
  shadow-opacity: 0.23;
  shadow-radius: 2.62px;
  shadow-offset: 0px 2px;
  width: ${screenWidth - 48}px;
  top: ${isiPhoneX ? 96 : 66}px;
  shadow-color: ${({ theme }) => theme.colors.gray[1]};
  background-color: ${({ theme }) => theme.colors.white[1]};
`;

export const StoreSuggestionCellContainer = styled(RowView)`
  padding: 8px 12px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.gray[5]};
  justify-content: space-between;
`;

export const StoreSuggestionNameText = styled(TextSmall2)`
  font-size: 13px;
`;

export const StoreSuggestionAddressText = styled(TextSmall2)`
  font-size: 11px;
  color: ${({ theme }) => theme.colors.gray[4]};
`;
// ----------------------------------- Map Styling -----------------------------------

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
