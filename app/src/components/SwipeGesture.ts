/** @format */

import { Animated } from 'react-native';
import styled from 'styled-components/native';

// Typography
import { TextSmall } from './Text';

const SwipeContainer = styled.TouchableOpacity`
  height: 100%;
  display: flex;
  justify-content: center;
`;

const SwipeFavoriteContainer = styled(SwipeContainer)`
  background-color: ${({ theme }) => theme.colors.purple[1]};
`;

const SwipeRemoveContainer = styled(SwipeContainer)`
  align-items: flex-end;
  background-color: ${({ theme }) => theme.colors.red};
`;

const SwipeText = styled(TextSmall)`
  padding: 0 24px;
  font-family: NunitoSans-Bold;
  color: ${({ theme }) => theme.colors.white[1]};
`;

export const AnimatedSwipeText = Animated.createAnimatedComponent(SwipeText);
export const AnimatedSwipeRemoveContainer = Animated.createAnimatedComponent(SwipeRemoveContainer);
export const AnimatedSwipeFavoriteContainer = Animated.createAnimatedComponent(SwipeFavoriteContainer);
