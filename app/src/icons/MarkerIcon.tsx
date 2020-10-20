/** @format */

import React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

export const MarkerIcon = () => {
  return (
    <Svg width={32} height={32} fill="none">
      <Circle cx={16} cy={16} r={16} fill="#fff" fillOpacity={0.6} />
      <Path
        fill="#8560FF"
        d="M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16S24.837 0 16 0zm0 5.42a7.977 7.977 0 017.977 7.976c0 1.335-.366 3.096-1.118 4.092L16 26.58l-6.86-9.092c-.827-1.096-1.117-2.618-1.117-4.091A7.977 7.977 0 0116 5.42zm0 4.621a3.355 3.355 0 100 6.71 3.355 3.355 0 000-6.71z"
      />
    </Svg>
  );
};
