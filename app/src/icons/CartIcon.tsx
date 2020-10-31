/** @format */

import React from 'react';
import Svg, { Path } from 'react-native-svg';

export const CartIcon = () => (
  <Svg width={20} height={20} fill="none">
    <Path
      d="M5 1.667L2.5 5v11.667a1.666 1.666 0 001.667 1.666h11.666a1.666 1.666 0 001.667-1.666V5L15 1.667H5zM2.5 5h15M13.333 8.333a3.333 3.333 0 01-6.666 0"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
