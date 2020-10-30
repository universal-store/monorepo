/** @format */

import React from 'react';
import Svg, { Path } from 'react-native-svg';

export interface TabNavigationIconProps {
  focused: boolean;
}

export const MapViewScreenIcon = ({ focused }: TabNavigationIconProps) => {
  return (
    <Svg width={24} height={24} fill="none">
      <Path
        fill={focused ? '#FFFFFF' : '#BDBDBD'}
        d="M18.36 9l.6 3H5.04l.6-3h12.72zM20 4H4v2h16V4zm0 3H4l-1 5v2h1v6h10v-6h4v6h2v-6h1v-2l-1-5zM6 18v-4h6v4H6z"
      />
    </Svg>
  );
};

export const FavoriteScreenIcon = ({ focused }: TabNavigationIconProps) => {
  return (
    <Svg width={24} height={24} fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        fill={focused ? '#FFFFFF' : '#BDBDBD'}
        d="M12 4.528a6 6 0 00-8.243 8.715l6.829 6.828a2 2 0 002.828 0l6.829-6.828A6 6 0 0012 4.528zm-1.172 1.644l.465.464a1 1 0 001.414 0l.465-.464a4 4 0 115.656 5.656L12 18.657l-6.828-6.829a4 4 0 015.656-5.656z"
      />
    </Svg>
  );
};

export const CartScreenIcon = ({ focused }: TabNavigationIconProps) => {
  return (
    <Svg width={24} height={24} fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        fill={focused ? '#FFFFFF' : '#BDBDBD'}
        d="M7.034 6C7.328 3.815 9.51 2 12 2c2.489 0 4.672 1.815 4.966 4h2.881a2 2 0 011.98 2.283l-1.714 12A2 2 0 0118.133 22H5.867a2 2 0 01-1.98-1.717l-1.714-12A2 2 0 014.153 6h2.88zm7.894 0c-.304-1.062-1.53-2-2.928-2s-2.624.938-2.928 2h5.856zM4.153 8H7v2h2V8h6v2h2V8h2.847l-1.714 12H5.867L4.153 8z"
      />
    </Svg>
  );
};

export const ProfileScreenIcon = ({ focused }: TabNavigationIconProps) => {
  return (
    <Svg width={24} height={24} fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        fill={focused ? '#FFFFFF' : '#BDBDBD'}
        d="M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11-4.925 11-11 11zm7.4-5.875a9 9 0 10-14.799 0C5.726 15.638 8.37 15 12 15c3.63 0 6.274.638 7.4 2.125zm-1.435 1.615C17.672 17.687 15.569 17 12 17c-3.57 0-5.672.687-5.965 1.74A8.966 8.966 0 0012 21a8.966 8.966 0 005.965-2.26zM12 15c-2.24 0-4-1.573-4-5 0-2.244 1.58-4 4-4 2.414 0 4 1.922 4 4.2 0 3.28-1.782 4.8-4 4.8zm-2-5c0 2.27.818 3 2 3 1.178 0 2-.702 2-2.8 0-1.25-.784-2.2-2-2.2-1.266 0-2 .816-2 2z"
      />
    </Svg>
  );
};
