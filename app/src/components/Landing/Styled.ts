/** @format */

import styled from 'styled-components/native';

// Components
import { HeaderSmallText } from '../Text';
import { FullScreenWhite, isiPhoneX } from '../Views';

export const LandingScreenContainer = styled(FullScreenWhite)`
  padding: 32px 40px;
  margin-top: ${isiPhoneX ? 30 : 0}px;
  margin-bottom: ${isiPhoneX ? 30 : 0}px;
`;

export const LandingScreenHeader = styled(HeaderSmallText)`
  text-align: center;
`;
