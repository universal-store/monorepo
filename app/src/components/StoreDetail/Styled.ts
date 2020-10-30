/** @format */

import styled from 'styled-components/native';
import { RowView } from '../Views';
import { Pressable } from 'react-native';

// Typography
import { HeaderMediumText, TextMedium2, TextSmall } from './../Text';

// Constants
import { isiPhoneX, screenWidth } from './../Views';

// Select Store Button
export const SelectStoreButtonContainer = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  z-index: 100;
  padding: 16px 32px ${isiPhoneX ? 106 : 76}px;
  background-color: ${({ theme }) => theme.colors.white[1]};
`;

interface SelectStoreButtonProps {
  selected: boolean;
}

export const SelectStoreButton = styled.TouchableOpacity<SelectStoreButtonProps>`
  height: 48px;
  display: flex;
  margin-top: auto;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  width: ${screenWidth - 64}px;
  border: 2px solid ${({ theme }) => theme.colors.purple[1]};
  background-color: ${({ theme, selected }) => (selected ? theme.colors.purple[1] : theme.colors.white[1])};
`;

export const SelectStoreButtonText = styled(HeaderMediumText)<SelectStoreButtonProps>`
  color: ${({ theme, selected }) => (selected ? theme.colors.white[1] : theme.colors.purple[1])};
`;

export const PopularItemCellContainer = styled(Pressable)`
  flex: 1;
  margin-right: 64px;
`;

export const PopularItemCellContainerSmall = styled(RowView)`
  flex: 1;
  align-items: center;
`;

export const PopularItemImageContainer = styled.View`
  width: 32px;
  height: 32px;
  border-radius: 4px;
  margin-right: 12px;
  background-color: ${({ theme }) => theme.colors.gray[5]};
`;

export const PopularItemCellTextContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const PopularItemNameText = styled(TextMedium2)``;

export const PopularItemPriceText = styled(TextSmall)`
  color: ${({ theme }) => theme.colors.purple[1]};
`;
