/** @format */

import React from 'react';
import Svg, { Path } from 'react-native-svg';

export const PersonIcon = () => {
  return (
    <Svg width={16} height={16} fill="none">
      <Path
        d="M15.372 13.057a7.509 7.509 0 00-1.715-2.402 8.034 8.034 0 00-2.542-1.62l-.026-.01c1.326-.904 2.188-2.378 2.188-4.04C13.277 2.23 10.915 0 8 0S2.723 2.231 2.723 4.985c0 1.662.862 3.136 2.188 4.042l-.026.01a7.963 7.963 0 00-2.542 1.62A7.542 7.542 0 00.628 13.06 7.121 7.121 0 000 15.835a.153.153 0 00.048.116A.17.17 0 00.17 16h1.277c.093 0 .168-.07.17-.157.043-1.552.702-3.005 1.868-4.106C4.692 10.597 6.294 9.97 8 9.97c1.706 0 3.309.627 4.515 1.767 1.166 1.101 1.825 2.554 1.868 4.106.002.089.077.157.17.157h1.277a.18.18 0 00.122-.049.16.16 0 00.048-.116 7.138 7.138 0 00-.628-2.778zM8 8.442c-.977 0-1.896-.36-2.587-1.013A3.342 3.342 0 014.34 4.985c0-.923.381-1.791 1.073-2.444A3.746 3.746 0 018 1.528c.977 0 1.896.36 2.587 1.013a3.342 3.342 0 011.072 2.444c0 .923-.38 1.79-1.072 2.444A3.746 3.746 0 018 8.442z"
        fill="#333"
      />
    </Svg>
  );
};