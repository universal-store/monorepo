/** @format */

import React from 'react';
import Svg, { Path } from 'react-native-svg';

export const CartIcon = () => {
  return (
    <Svg width={20} height={20} fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.057 2.003c-.177 0-.348.02-.51.057a4.345 4.345 0 00-.85-1.267C2.131.224 1.237 0 0 0v2c.756 0 1.19.11 1.288.207.377.378.705 1.146.705 1.793l.01.141.976 6.86c-1.633.085-2.9 1.358-2.978 2.95L0 15c.096 1.644 1.358 2.909 2.933 2.998h.226A2.991 2.991 0 005.979 20a2.991 2.991 0 002.819-2h2.333c.41 1.165 1.517 2 2.819 2 1.65 0 2.99-1.343 2.99-3s-1.34-3-2.99-3a2.991 2.991 0 00-2.82 2H8.799a2.991 2.991 0 00-2.82-2 2.991 2.991 0 00-2.819 2h-.17c-.508-.03-.964-.488-.998-1.06l.002-.94c.027-.519.48-.973 1.046-1.001h1.967L5.02 13h10.043l.147-.047a2.62 2.62 0 001.647-1.55l.105-.209.34-.678c.354-.702.706-1.405 1.05-2.092.842-1.683 1.372-2.752 1.49-3.015.602-1.349-.618-2.387-1.866-2.409l-13.92-.997zM14.717 11H5.095a.17.17 0 01-.123-.14L3.996 4l13.834.995c-.243.495-.683 1.38-1.259 2.531l-.014.029c-.329.657-.681 1.359-1.034 2.06l-.34.677-.13.257-.048.113a.624.624 0 01-.288.338zm-.767 7c.55 0 .996-.448.996-1s-.446-1-.996-1a.998.998 0 00-.996 1c0 .552.446 1 .996 1zm-6.975-1c0 .552-.446 1-.996 1a.998.998 0 01-.997-1c0-.552.446-1 .997-1 .55 0 .996.448.996 1z"
        fill="#333"
      />
    </Svg>
  );
};
