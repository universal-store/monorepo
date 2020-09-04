/** @format */

import * as React from 'react';
import Svg, { Rect, Path } from 'react-native-svg';

export const CloseIcon = () => {
  return (
    <Svg width={40} height={40} fill="none">
      <Rect width={40} height={40} rx={8} fill="#fff" fillOpacity={0.8} />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30 12.014L27.986 10 20 17.986 12.014 10 10 12.014 17.986 20 10 27.986 12.014 30 20 22.014 27.986 30 30 27.986 22.014 20 30 12.014z"
        fill="#333"
      />
    </Svg>
  );
};
