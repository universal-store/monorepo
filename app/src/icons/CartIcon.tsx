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

export const CartIconWhite = () => (
  <Svg width={20} height={20} fill="none">
    <Path
      stroke="#fff"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16.875 14.375H6.25L3.125 1.25H1.25m2.5 2.5h15l-1.875 8.125H5.625L3.75 3.75zM15.625 18.125a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5zM7.5 18.125a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z"
    />
  </Svg>
);

export const AddCartIcon = () => (
  <Svg width={32} height={32} fill="none">
    <Path
      fill="#fff"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 7a1 1 0 011 1v8a1 1 0 01-1 1H8a1 1 0 010-2h7V8a1 1 0 011-1z"
    />
    <Path
      fill="#fff"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 16a1 1 0 011-1h8a1 1 0 010 2h-7v7a1 1 0 01-2 0v-8z"
    />
  </Svg>
);

export const RemoveCartIcon = () => (
  <Svg width={32} height={32} fill="none">
    <Path fill="#fff" d="M23.111 15.111H8.89a.889.889 0 000 1.778H23.11a.889.889 0 000-1.778z" />
  </Svg>
);
