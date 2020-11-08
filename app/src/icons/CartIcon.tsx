/** @format */

import React from 'react';
import Svg, { Path } from 'react-native-svg';

export const CartIcon = () => (
  <Svg width={20} height={20} fill="none">
    <Path
      stroke="#333"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16.875 14.375H6.25L3.125 1.25H1.25m2.5 2.5h15l-1.875 8.125H5.625L3.75 3.75zM15.625 18.125a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5zM7.5 18.125a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z"
    />
  </Svg>
);
