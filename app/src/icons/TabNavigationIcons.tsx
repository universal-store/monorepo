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
        fillRule="evenodd"
        clipRule="evenodd"
        fill={focused ? '#FFFFFF' : '#BDBDBD'}
        d="M2 19.72l7.108 2.37 6.969-3.982L22 20.477V4.323l-6.077-2.43-7.03 4.017L2 3.613V19.72zm12-2.729l-4 2.286V7.58l4-2.285V16.99zm2-1.068l4 1.6V5.677l-3.923-1.57-.077.045v11.771zM4 18.279l4 1.334V7.72L4 6.387V18.28z"
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
        d="M16.782 1.5c-1.575 0-2.611.182-3.796.735-.35.163-.683.352-.999.568a7.16 7.16 0 00-.945-.535C9.835 1.699 8.748 1.5 7.227 1.5 3.057 1.5 0 4.82 0 9.12c0 3.222 1.855 6.282 5.268 9.206 1.767 1.514 4.018 3.008 5.642 3.809l1.09.537 1.09-.537c1.623-.8 3.875-2.296 5.642-3.81C22.145 15.403 24 12.343 24 9.12c0-4.257-3.084-7.604-7.218-7.62zM21 9.12c0 2.196-1.408 4.52-4.22 6.927-1.492 1.278-3.397 2.56-4.78 3.277-1.383-.718-3.288-1.999-4.78-3.277C4.407 13.64 3 11.316 3 9.12 3 6.425 4.772 4.5 7.227 4.5c1.11 0 1.771.121 2.536.481.442.209.83.481 1.164.821l1.078 1.095 1.069-1.104a3.94 3.94 0 011.18-.84c.74-.344 1.357-.453 2.522-.453C19.198 4.51 21 6.466 21 9.12z"
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
