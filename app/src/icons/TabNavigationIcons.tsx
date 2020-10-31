/** @format */

import React from 'react';
import Svg, { Circle, CircleProps, G, Path, PathProps } from 'react-native-svg';
import Animated from 'react-native-reanimated';

const AnimatedPath = (Animated.createAnimatedComponent(Path) as any) as React.ComponentClass<
  Animated.AnimateProps<{}, PathProps & { style?: any }>
>;

const AnimatedCircle = (Animated.createAnimatedComponent(Circle) as any) as React.ComponentClass<
  Animated.AnimateProps<{}, CircleProps & { style?: any }>
>;

Animated.addWhitelistedNativeProps({
  stroke: true,
});

export interface TabNavigationIconProps {
  color: Animated.Node<string>;
}

export const MapViewScreenIcon = ({ color }: TabNavigationIconProps) => {
  return (
    <Svg width={24} height={24} fill="none">
      <AnimatedPath
        stroke={color}
        strokeWidth={2}
        d="M18.36 9l.6 3H5.04l.6-3h12.72zM20 4H4v2h16V4zm0 3H4l-1 5v2h1v6h10v-6h4v6h2v-6h1v-2l-1-5zM6 18v-4h6v4H6z"
      />
    </Svg>
  );
};

export const FavoriteScreenIcon = ({ color }: TabNavigationIconProps) => {
  return (
    <Svg width={24} height={24} fill="none">
      <AnimatedPath
        fill="none"
        stroke={color}
        strokeWidth={2}
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.84 2.61a5.5 5.5 0 00-7.78 0L12 3.67l-1.06-1.06a5.501 5.501 0 00-7.78 7.78l1.06 1.06L12 19.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
      />
    </Svg>
  );
};

export const CartScreenIcon = ({ color }: TabNavigationIconProps) => {
  return (
    <Svg width={24} height={24} fill="none">
      <AnimatedPath
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4H6zM3 6h18M16 10a4 4 0 11-8 0"
      />
    </Svg>
  );
};

export const ProfileScreenIcon = ({ color }: TabNavigationIconProps) => {
  return (
    <Svg width={24} height={24} fill="none">
      <G
        transform="translate(1 1)"
        strokeWidth={2}
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <AnimatedPath d="M16 18v-2a4 4 0 00-4-4H4a4 4 0 00-4 4v2" stroke={color} />
        <AnimatedCircle cx={8} cy={4} r={4} stroke={color} />
      </G>
    </Svg>
  );
};
