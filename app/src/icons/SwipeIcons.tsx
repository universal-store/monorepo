/** @format */

import React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';

export const SwipeTrashIcon = () => (
  <Svg width={32} height={32} fill="none">
    <G clipPath="url(#prefix__clip0)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 2a2 2 0 00-2 2v2a2 2 0 002 2h1v18a4 4 0 004 4h12a4 4 0 004-4V8h1a2 2 0 002-2V4a2 2 0 00-2-2h-7a2 2 0 00-2-2h-4a2 2 0 00-2 2H5zm6 8a1 1 0 011 1v14a1 1 0 01-2 0V11a1 1 0 011-1zm5 0a1 1 0 011 1v14a1 1 0 01-2 0V11a1 1 0 011-1zm6 1a1 1 0 00-2 0v14a1 1 0 002 0V11z"
        fill="#fff"
      />
    </G>
    <Defs>
      <ClipPath id="prefix__clip0">
        <Path fill="#fff" d="M0 0h32v32H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export const SwipeFavoriteIcon = (
  <Svg width={32} height={32} fill="none">
    <Path
      d="M28.844 8.863a8.126 8.126 0 00-1.778-2.588 8.292 8.292 0 00-5.825-2.369A8.346 8.346 0 0016 5.753a8.346 8.346 0 00-5.24-1.847 8.292 8.292 0 00-5.826 2.369A8.076 8.076 0 002.5 12.047c0 1.04.212 2.125.634 3.228.353.922.86 1.878 1.507 2.844 1.025 1.528 2.434 3.122 4.184 4.737 2.9 2.678 5.772 4.528 5.894 4.603l.74.475c.329.21.75.21 1.079 0l.74-.475c.122-.078 2.99-1.925 5.894-4.603 1.75-1.615 3.16-3.21 4.184-4.737.647-.966 1.156-1.922 1.506-2.844.422-1.103.635-2.188.635-3.228a7.958 7.958 0 00-.653-3.184z"
      fill="#fff"
    />
  </Svg>
);
