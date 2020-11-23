/** @format */

import React from 'react';

// Libraries
import Swipeable from 'react-native-gesture-handler/Swipeable';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

// Components
import {
  FavoriteItemCellContainer,
  FavoritesItemCellContainerSmall,
  FavoritesItemCellTextContainer,
  FavoritesItemNameText,
  FavoritesItemPriceText,
  FavoriteItemImageContainer,
  FavoriteItemImage,
} from './Styled';

import { AnimatedSwipeRemoveContainer, AnimatedSwipeText } from '../SwipeGesture';

// Navigation
import { useNavigation } from '@react-navigation/native';

// GraphQL
import {
  useGetUserQuery,
  StoreItemInfoFragment,
  GetUserFavoriteItemsDocument,
  useRemoveUserFavoriteItemMutation,
} from '&graphql';

// Utils
import { hapticOptions } from '&utils';
import { ItemPreviewImage } from '../Scan';

// Props
interface FavoriteItemCellProps {
  favItem: StoreItemInfoFragment;
}
export const FavoriteItemCell = ({ favItem }: FavoriteItemCellProps) => {
  const { StoreItemPic, longName, price, barcodeId, shortName, id: itemId } = favItem;

  // Navigation
  const navigation = useNavigation();

  // Mutations
  const [removeFromFavoritesMutation] = useRemoveUserFavoriteItemMutation();

  // Get User Data
  const { data } = useGetUserQuery();
  const userId = data?.User[0].id!;

  const renderRightActions = () => (
    <AnimatedSwipeRemoveContainer
      onPress={() => {
        void removeFromFavoritesMutation({
          variables: { userId, itemId },
          refetchQueries: [{ query: GetUserFavoriteItemsDocument }],
        });

        ReactNativeHapticFeedback.trigger('impactMedium', hapticOptions);
      }}
    >
      <AnimatedSwipeText>Remove</AnimatedSwipeText>
    </AnimatedSwipeRemoveContainer>
  );

  return (
    <Swipeable friction={2} renderRightActions={renderRightActions}>
      <FavoriteItemCellContainer
        onPress={() => {
          ReactNativeHapticFeedback.trigger('selection', hapticOptions);
          navigation.navigate('ItemDetail', { barcodeId });
        }}
      >
        <FavoritesItemCellContainerSmall>
          {StoreItemPic && (
            <FavoriteItemImageContainer>
              <FavoriteItemImage
                resizeMode="contain"
                source={{
                  uri: StoreItemPic.size64,
                }}
              />
            </FavoriteItemImageContainer>
          )}

          <FavoritesItemCellTextContainer>
            <FavoritesItemNameText numberOfLines={1}>{shortName ? shortName : longName}</FavoritesItemNameText>
            <FavoritesItemPriceText>{price}</FavoritesItemPriceText>
          </FavoritesItemCellTextContainer>
        </FavoritesItemCellContainerSmall>
      </FavoriteItemCellContainer>
    </Swipeable>
  );
};
