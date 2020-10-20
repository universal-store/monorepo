/** @format */

import React from 'react';
import Svg, { Path } from 'react-native-svg';

export const BackArrowIcon = () => (
  <Svg width={32} height={12} fill="none">
    <Path
      d="M0 5.99L6.175 12l2.067-1.998-2.655-2.585L32 7.414V4.586l-26.42.003 2.677-2.585L6.197 0 0 5.99z"
      fill="#fff"
    />
  </Svg>
);

export const BackArrowIconGray = () => (
  <Svg width={32} height={12} fill="none">
    <Path
      d="M0 5.99L6.175 12l2.067-1.998-2.655-2.585L32 7.414V4.586l-26.42.003 2.677-2.585L6.197 0 0 5.99z"
      fill="#333333"
    />
  </Svg>
);
