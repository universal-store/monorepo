/** @format */

import React from 'react';
import Svg, { G, Path, Defs, LinearGradient, Stop } from 'react-native-svg';

export const AppIcon = () => {
  return (
    <Svg width={34} height={45} fill="none">
      <G>
        <Path
          d="M9.632 8.704a20.745 20.745 0 011.285-4.313c.63-1.498.963-2.255 1.76-2.78 1.245-.817 3.19-.85 4.313.117.24.206.7.678 1.217 3.433.308 1.64.435 3.02.495 3.992"
          stroke="url(#prefix__paint0_linear)"
          strokeMiterlimit={10}
        />
        <Path
          d="M14.822 9.514a16.78 16.78 0 011.013-5.173c.872-2.36 1.66-2.782 1.905-2.897.675-.32 1.89-.538 2.963-.055l.117.055c1.3.647 1.793 2.505 2.008 3.307.425 1.573.917 3.253 1.532 5.298"
          stroke="url(#prefix__paint1_linear)"
          strokeMiterlimit={10}
        />
        <Path d="M10.975 7.194l17.127 1.312 1.243 24.102-17.61 4.076-.76-29.49z" fill="url(#prefix__paint2_linear)" />
        <Path d="M8.902 7.954l2.073-.76.76 29.49-3.385-5.18.552-23.55z" fill="url(#prefix__paint3_linear)" />
        <Path d="M6.072 8.091l2.83-.137-.552 23.55L4 33.464 6.072 8.09z" fill="url(#prefix__paint4_linear)" />
        <Path d="M11.735 36.684l-3.385-5.18L4 33.463l7.735 3.22z" fill="url(#prefix__paint5_linear)" />
      </G>
      <Defs>
        <LinearGradient id="prefix__paint0_linear" x1={14.167} y1={1} x2={9} y2={13.5} gradientUnits="userSpaceOnUse">
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#7A7272" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint1_linear"
          x1={19.591}
          y1={1.107}
          x2={19.172}
          y2={11.903}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#C4C1C1" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint2_linear"
          x1={20.16}
          y1={7.194}
          x2={22.172}
          y2={35.404}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#E6E6E6" />
          <Stop offset={1} stopColor="#999" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint3_linear"
          x1={10.043}
          y1={7.194}
          x2={10.043}
          y2={36.684}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#F2F2F2" />
          <Stop offset={1} stopColor="#ABABAB" />
        </LinearGradient>
        <LinearGradient id="prefix__paint4_linear" x1={6} y1={29} x2={3.5} y2={19} gradientUnits="userSpaceOnUse">
          <Stop stopColor="#BBB" />
          <Stop offset={1} stopColor="#D6D6D6" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint5_linear"
          x1={7.867}
          y1={31.503}
          x2={7.867}
          y2={36.684}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#C6C5C5" />
          <Stop offset={1} stopColor="#999" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};
