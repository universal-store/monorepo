/** @format */

import styled from 'styled-components/native';
import { isiPhoneX } from './Views';

export const PaymentMethodBackContainer = styled.TouchableOpacity`
  margin-right: 16px;
`;

export const PaymentMethodContainer = styled.View`
  flex: 1;
  padding: 0 24px ${isiPhoneX ? 58 : 24}px;
  background-color: ${({ theme }) => theme.colors.white[1]};
`;
