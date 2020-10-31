/** @format */

import React from 'react';
import { theme } from '&theme';

// Libraries
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

// Screens
import {
  AddItemScreen,
  CartScreen,
  FavoriteScreen,
  ItemDetail,
  MapViewScreen,
  ProfileScreen,
  ScanningScreen,
} from '&screens';

// Tab Icons
import { CartScreenIcon, FavoriteScreenIcon, MapViewScreenIcon, ProfileScreenIcon } from '&icons';

// Stack Navigators
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AnimatedTabBar, { TabsConfig, BubbleTabBarItemConfig } from '@gorhom/animated-tabbar';

// Utils
import { hapticOptions } from '&utils';

const tabs: TabsConfig<BubbleTabBarItemConfig> = {
  MapView: {
    labelStyle: { color: theme.colors.white[1], fontWeight: 'bold' },
    icon: {
      component: MapViewScreenIcon,
      activeColor: theme.colors.white[1],
      inactiveColor: theme.colors.gray[3],
    },
    background: {
      activeColor: theme.colors.purple[1],
      inactiveColor: theme.colors.white[1],
    },
  },
  FavoritesScreen: {
    labelStyle: { color: theme.colors.white[1], fontWeight: 'bold' },
    icon: {
      component: FavoriteScreenIcon,
      activeColor: theme.colors.white[1],
      inactiveColor: theme.colors.gray[3],
    },
    background: {
      activeColor: theme.colors.purple[1],
      inactiveColor: theme.colors.white[1],
    },
  },
  CartScreen: {
    labelStyle: { color: theme.colors.white[1], fontWeight: 'bold' },
    icon: {
      component: CartScreenIcon,
      activeColor: theme.colors.white[1],
      inactiveColor: theme.colors.gray[3],
    },
    background: {
      activeColor: theme.colors.purple[1],
      inactiveColor: theme.colors.white[1],
    },
  },
  ProfileScreen: {
    labelStyle: { color: theme.colors.white[1], fontWeight: 'bold' },
    icon: {
      component: ProfileScreenIcon,
      activeColor: theme.colors.white[1],
      inactiveColor: theme.colors.gray[3],
    },
    background: {
      activeColor: theme.colors.purple[1],
      inactiveColor: theme.colors.white[1],
    },
  },
};

// Utils
import { hapticOptions } from '&utils';

export type RootAuthTabParams = {
  MapView: { email: string; password: string };
  FavoritesScreen: undefined;
  CartScreen: undefined;
  ProfileScreen: undefined;
  ItemDetail: { barcodeId: string; scanned?: boolean };
};

const RootAuthTab = createBottomTabNavigator<RootAuthTabParams>();

export const RootAuthTabNavigator = () => (
  <RootAuthTab.Navigator initialRouteName="MapView" tabBar={props => <AnimatedTabBar tabs={tabs} {...props} />}>
    <RootAuthTab.Screen
      name="MapView"
      component={MapViewScreen}
      listeners={{
        tabPress: () => ReactNativeHapticFeedback.trigger('selection', hapticOptions),
      }}
      options={{
        title: 'Stores',
      }}
      listeners={{
        tabPress: () => ReactNativeHapticFeedback.trigger('selection', hapticOptions),
      }}
    />
    <RootAuthTab.Screen
      name="FavoritesScreen"
      component={FavoriteScreen}
      listeners={{
        tabPress: () => ReactNativeHapticFeedback.trigger('selection', hapticOptions),
      }}
      options={{
        title: 'Saved',
      }}
    />
    <RootAuthTab.Screen
      name="CartScreen"
      component={CartScreen}
      listeners={{
        tabPress: () => ReactNativeHapticFeedback.trigger('selection', hapticOptions),
      }}
      options={{
        title: 'Cart',
      }}
    />
    <RootAuthTab.Screen
      name="ProfileScreen"
      component={ProfileScreen}
      listeners={{
        tabPress: () => ReactNativeHapticFeedback.trigger('selection', hapticOptions),
      }}
      options={{
        title: 'Profile',
      }}
    />
  </RootAuthTab.Navigator>
);

export type AuthStackParams = {
  TabNavigation: { screen: string };
  ScanningScreen: undefined;
  ItemDetail: { barcodeId: string; scanned?: boolean };
  AddItemScreen: { barcodeId: string };
};

export const AuthStack = createStackNavigator<AuthStackParams>();

export const AuthNavigator = () => (
  <AuthStack.Navigator initialRouteName="TabNavigation" screenOptions={{ headerShown: false, gestureEnabled: false }}>
    <AuthStack.Screen name="TabNavigation" component={RootAuthTabNavigator} />
    <AuthStack.Screen name="ScanningScreen" component={ScanningScreen} />
    <AuthStack.Screen name="ItemDetail" component={ItemDetail} />
    <AuthStack.Screen name="AddItemScreen" component={AddItemScreen} options={{ gestureEnabled: true }} />
  </AuthStack.Navigator>
);
