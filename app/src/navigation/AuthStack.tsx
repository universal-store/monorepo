/** @format */

import React from 'react';
import { theme } from '&theme';

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
import {
  CartScreenIcon,
  FavoriteScreenIcon,
  MapViewScreenIcon,
  ProfileScreenIcon,
  TabNavigationIconProps,
} from '&icons';

// Stack Navigators
import { createStackNavigator } from '@react-navigation/stack';
import { AnimatedTabBarNavigator } from 'react-native-animated-nav-tab-bar';

export type RootAuthTabParams = {
  MapView: { email: string; password: string };
  FavoritesScreen: undefined;
  CartScreen: undefined;
  ProfileScreen: undefined;
  ItemDetail: { barcodeId: string; scanned?: boolean };
};

const RootAuthTab = AnimatedTabBarNavigator<RootAuthTabParams>();

export const RootAuthTabNavigator = () => (
  <RootAuthTab.Navigator
    initialRouteName="MapView"
    appearence={{
      shadow: true,
      floating: true,
      dotSize: 'small',
    }}
    tabBarOptions={{
      showLabel: false,
      activeBackgroundColor: theme.colors.purple[1],
      labelStyle: { color: theme.colors.white[1], fontWeight: 'bold' },
      tabStyle: {
        elevation: 4,
        shadowRadius: 2.62,
        shadowOpacity: 0.23,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
      },
    }}
  >
    <RootAuthTab.Screen
      name="MapView"
      component={MapViewScreen}
      options={{
        title: 'Stores',
        tabBarIcon: ({ focused }: TabNavigationIconProps) => <MapViewScreenIcon focused={focused} />,
      }}
    />
    <RootAuthTab.Screen
      name="FavoritesScreen"
      component={FavoriteScreen}
      options={{
        title: 'Saved',
        tabBarIcon: ({ focused }: TabNavigationIconProps) => <FavoriteScreenIcon focused={focused} />,
      }}
    />
    <RootAuthTab.Screen
      name="CartScreen"
      component={CartScreen}
      options={{
        title: 'Cart',
        tabBarIcon: ({ focused }: TabNavigationIconProps) => <CartScreenIcon focused={focused} />,
      }}
    />
    <RootAuthTab.Screen
      name="ProfileScreen"
      component={ProfileScreen}
      options={{
        title: 'Profile',
        tabBarIcon: ({ focused }: TabNavigationIconProps) => <ProfileScreenIcon focused={focused} />,
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
