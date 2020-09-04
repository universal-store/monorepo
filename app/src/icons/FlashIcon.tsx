/** @format */

import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';

export const FlashIcon = () => {
  return (
    <Svg width={24} height={24} fill="none">
      <G clipPath="url(#prefix__clip0)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.877.102a.75.75 0 01.34.87L14.516 9.75H19.5a.75.75 0 01.546 1.264l-12 12.75a.75.75 0 01-1.263-.735l2.701-8.779H4.5a.75.75 0 01-.546-1.264l12-12.75A.75.75 0 0116.876.1v.001zM6.235 12.75H10.5a.75.75 0 01.717.97l-2.052 6.665 8.598-9.135H13.5a.75.75 0 01-.717-.97l2.052-6.665-8.6 9.135z"
          fill="#fff"
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
