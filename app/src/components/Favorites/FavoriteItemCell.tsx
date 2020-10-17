/** @format */

import React, { useEffect, useState } from 'react';

// Components
import {
  FavoriteItemCellContainer,
  FavoritesItemCellContainerSmall,
  FavoritesItemCellTextContainer,
  FavoritesItemHeartContainer,
  FavoritesItemNameText,
  FavoritesItemPriceText,
  FavoriteItemImageContainer,
  FavoriteItemImage,
} from './Styled';

// Iconography
import { HeartIconOff, HeartIconOn } from '&icons';

// Navigation
import { useNavigation } from '@react-navigation/native';

// GraphQL
import {
  CheckItemInFavoritesDocument,
  StoreItemInfoFragment,
  useCheckItemInFavoritesQuery,
  useAddUserFavoriteItemMutation,
  useRemoveUserFavoriteItemMutation,
  useGetUserQuery,
  GetUserFavoriteItemsDocument,
} from '&graphql';
import { CartItemCellContainer } from '../Cart';

// Props
interface FavoriteItemCellProps {
  sessionId: string;
  favItem: StoreItemInfoFragment;
}
export const FavoriteItemCell = ({ favItem, sessionId }: FavoriteItemCellProps) => {
  const { StoreItemPic, longName, price, barcodeId } = favItem;

  // Navigation
  const navigation = useNavigation();

  // Mutations
  const [addToFavoritesMutation] = useAddUserFavoriteItemMutation();
  const [removeFromFavoritesMutation] = useRemoveUserFavoriteItemMutation();

  // Get User Data
  const { data: userData } = useGetUserQuery({ variables: { sessionId } });
  const userId = userData?.User[0].id;

  // Check if in favorites
  const { data: userFavorites } = useCheckItemInFavoritesQuery({ variables: { barcodeId, sessionId } });
  const [favorite, setFavorite] = useState<boolean>(true);

  useEffect(() => {
    if (userFavorites) {
      setFavorite(userFavorites.StoreItem_by_pk?.UserFavoriteItems.length !== 0);
    }
  }, [favorite, userFavorites]);

  const addOrRemoveFromFavorites = () => {
    if (favorite) {
      void removeFromFavoritesMutation({
        variables: { userId, itemBarcodeId: barcodeId },
        refetchQueries: [
          { query: GetUserFavoriteItemsDocument, variables: { sessionId } },
          { query: CheckItemInFavoritesDocument, variables: { barcodeId, sessionId } },
        ],
      }).then(() => setFavorite(false));
    } else {
      void addToFavoritesMutation({
        variables: { userId, itemBarcodeId: barcodeId },
        refetchQueries: [
          { query: GetUserFavoriteItemsDocument, variables: { sessionId } },
          { query: CheckItemInFavoritesDocument, variables: { barcodeId, sessionId } },
        ],
      }).then(() => setFavorite(true));
    }
  };

  return (
    <FavoriteItemCellContainer onPress={() => navigation.navigate('ItemDetail', { barcodeId })}>
      <FavoritesItemCellContainerSmall>
        <FavoriteItemImageContainer>
          {StoreItemPic && (
            <FavoriteItemImage
              source={{
                uri: StoreItemPic.size64,
              }}
            />
          )}
        </FavoriteItemImageContainer>

        <FavoritesItemCellTextContainer>
          <FavoritesItemNameText numberOfLines={1}>{longName}</FavoritesItemNameText>
          <FavoritesItemPriceText>{price}</FavoritesItemPriceText>
        </FavoritesItemCellTextContainer>
      </FavoritesItemCellContainerSmall>

      <FavoritesItemHeartContainer onPress={addOrRemoveFromFavorites}>
        {favorite ? <HeartIconOn /> : <HeartIconOff />}
      </FavoritesItemHeartContainer>
    </FavoriteItemCellContainer>
  );
};
