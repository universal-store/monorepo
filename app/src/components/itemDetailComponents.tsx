/** @format */

import React from 'react';
import styled from 'styled-components/native';

import { OpenSansSemiBoldSmall, FuturaBoldTitle } from './text';

const ItemDetailBackground = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.purple[3]};
`;

const ExitButton = styled.TouchableOpacity`
  width: 41px;
  height: 41px;
  margin-left: 24px;
  margin-top: 36px;
  background-color: ${({ theme }) => theme.colors.white[1]};
`;

const ViewCartButton = styled.TouchableOpacity`
  width: 41px;
  height: 41px;
  margin-left: 311px;
  background-color: ${({ theme }) => theme.colors.white[1]};
`;

const ItemDetailContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.white[1]};
  width: 100%;
  height: 353px;
  display: flex;
  margin: auto 0px 0px;
  padding-top: 28px;
  padding-right: 32px;
  padding-bottom: 24px;
  padding-left: 32px;
`;

const ItemName = styled(FuturaBoldTitle)`
  width: 263px;
  height: 48px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.transparent.black};
`;

const ItemSize = styled(OpenSansSemiBoldSmall)`
  width: 78px;
  height: 19px;
  margin-top: 4px;
  font-size: 14px;
  line-height: 19px;
  color: ${({ theme }) => theme.colors.transparent.black};
`;

const ItemPrice = styled(FuturaBoldTitle)`
  width: 53px;
  height: 24px;
  margin-left: auto;
  font-size: 18px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.transparent.black};
`;

const ProductDetailsHeader = styled(FuturaBoldTitle)`
  width: 113px;
  height: 19px;
  margin-top: 24px;
  font-size: 14px;
  line-height: 19px;
  color: ${({ theme }) => theme.colors.transparent.black};
`;

const ProductDetailsText = styled(OpenSansSemiBoldSmall)`
  width: 311px;
  height: 96px;
  margin-top: 8px;
  font-size: 12px;
  line-height: 16px;
  color: ${({ theme }) => theme.colors.transparent.black};
`;

export const ItemDetailsComponents = () => (
  <ItemDetailBackground>
    <ExitButton></ExitButton>
    <ViewCartButton></ViewCartButton>
    <ItemDetailContainer>
      <ItemName>Gatorade Thirst Quencher Sports Drink, Orange</ItemName>
      <ItemSize>28 oz Bottle</ItemSize>
      <ItemPrice>$3.19</ItemPrice>
      <ProductDetailsHeader>Product Details</ProductDetailsHeader>
      <ProductDetailsText>
        When you sweat, you lose more than water. You also lose critical electrolytes, like sodium and potassium, which
        help the brain communicate with muscles and regulate fluid balance throughout the body. Significant losses in
        fluid and electrolytes can negatively impact performance...
      </ProductDetailsText>
    </ItemDetailContainer>
  </ItemDetailBackground>
);
