/** @format */

import styled from 'styled-components/native';

// Components
import { HeaderSmallText } from '../Text';
import { FullScreenWhite, isiPhoneX } from '../Views';

export const LandingScreenContainer = styled(FullScreenWhite)`
  padding: 32px 40px ${isiPhoneX ? 106 : 76}px;
`;

export const LandingScreenHeader = styled(HeaderSmallText)`
  text-align: center;
`;
