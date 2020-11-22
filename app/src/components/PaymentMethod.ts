/** @format */

import styled from 'styled-components/native';

export const PaymentMethodBackContainer = styled.TouchableOpacity`
  margin-right: 16px;
`;

export const PaymentMethodContainer = styled.View`
  padding: 0 24px;
  background-color: ${({ theme }) => theme.colors.white[1]};
`;
