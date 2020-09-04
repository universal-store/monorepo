/** @format */

import styled from 'styled-components/native';

import { OpenSansSemiBoldSmall, FuturaBoldTitle } from './text';

export const ItemDetailContainer = styled.View`
  width: 100%;
  display: flex;
  margin-top: auto;
  padding: 28px 32px 24px;
  background-color: ${({ theme }) => theme.colors.white[1]};
`;

export const ItemName = styled(FuturaBoldTitle)`
  width: 263px;
  height: 48px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.transparent.black};
`;

export const ItemSize = styled(OpenSansSemiBoldSmall)`
  width: 78px;
  height: 19px;
  margin-top: 4px;
  font-size: 14px;
  line-height: 19px;
  color: ${({ theme }) => theme.colors.transparent.black};
`;

export const ItemPrice = styled(FuturaBoldTitle)`
  margin-left: auto;
  color: ${({ theme }) => theme.colors.transparent.black};
`;

export const ProductDetailsHeader = styled(FuturaBoldTitle)`
  margin-top: 24px;
  color: ${({ theme }) => theme.colors.transparent.black};
`;

export const ProductDetailsText = styled(OpenSansSemiBoldSmall)`
  margin-top: 8px;
  color: ${({ theme }) => theme.colors.transparent.black};
`;
