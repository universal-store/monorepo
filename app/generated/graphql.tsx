import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  geography: any;
  geometry: any;
  money: any;
  name: any;
  timestamptz: any;
  uuid: any;
};

export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};


export type Geography_Cast_Exp = {
  geometry?: Maybe<Geometry_Comparison_Exp>;
};

export type Geography_Comparison_Exp = {
  _cast?: Maybe<Geography_Cast_Exp>;
  _eq?: Maybe<Scalars['geography']>;
  _gt?: Maybe<Scalars['geography']>;
  _gte?: Maybe<Scalars['geography']>;
  _in?: Maybe<Array<Scalars['geography']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['geography']>;
  _lte?: Maybe<Scalars['geography']>;
  _neq?: Maybe<Scalars['geography']>;
  _nin?: Maybe<Array<Scalars['geography']>>;
  _st_d_within?: Maybe<St_D_Within_Geography_Input>;
  _st_intersects?: Maybe<Scalars['geography']>;
};


export type Geometry_Cast_Exp = {
  geography?: Maybe<Geography_Comparison_Exp>;
};

export type Geometry_Comparison_Exp = {
  _cast?: Maybe<Geometry_Cast_Exp>;
  _eq?: Maybe<Scalars['geometry']>;
  _gt?: Maybe<Scalars['geometry']>;
  _gte?: Maybe<Scalars['geometry']>;
  _in?: Maybe<Array<Scalars['geometry']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['geometry']>;
  _lte?: Maybe<Scalars['geometry']>;
  _neq?: Maybe<Scalars['geometry']>;
  _nin?: Maybe<Array<Scalars['geometry']>>;
  _st_contains?: Maybe<Scalars['geometry']>;
  _st_crosses?: Maybe<Scalars['geometry']>;
  _st_d_within?: Maybe<St_D_Within_Input>;
  _st_equals?: Maybe<Scalars['geometry']>;
  _st_intersects?: Maybe<Scalars['geometry']>;
  _st_overlaps?: Maybe<Scalars['geometry']>;
  _st_touches?: Maybe<Scalars['geometry']>;
  _st_within?: Maybe<Scalars['geometry']>;
};


export type Money_Comparison_Exp = {
  _eq?: Maybe<Scalars['money']>;
  _gt?: Maybe<Scalars['money']>;
  _gte?: Maybe<Scalars['money']>;
  _in?: Maybe<Array<Scalars['money']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['money']>;
  _lte?: Maybe<Scalars['money']>;
  _neq?: Maybe<Scalars['money']>;
  _nin?: Maybe<Array<Scalars['money']>>;
};

export type Mutation_Root = {
  __typename?: 'mutation_root';
  delete_Store?: Maybe<Store_Mutation_Response>;
  delete_StoreItem?: Maybe<StoreItem_Mutation_Response>;
  delete_StoreItemPic?: Maybe<StoreItemPic_Mutation_Response>;
  delete_StoreItemPic_by_pk?: Maybe<StoreItemPic>;
  delete_StoreItem_by_pk?: Maybe<StoreItem>;
  delete_StorePic?: Maybe<StorePic_Mutation_Response>;
  delete_StorePic_by_pk?: Maybe<StorePic>;
  delete_Store_by_pk?: Maybe<Store>;
  delete_User?: Maybe<User_Mutation_Response>;
  delete_UserCartItem?: Maybe<UserCartItem_Mutation_Response>;
  delete_UserCartItem_by_pk?: Maybe<UserCartItem>;
  delete_UserFavoriteItem?: Maybe<UserFavoriteItem_Mutation_Response>;
  delete_UserFavoriteItem_by_pk?: Maybe<UserFavoriteItem>;
  delete_UserOrder?: Maybe<UserOrder_Mutation_Response>;
  delete_UserOrder_by_pk?: Maybe<UserOrder>;
  delete_UserPaymentMethod?: Maybe<UserPaymentMethod_Mutation_Response>;
  delete_UserPaymentMethod_by_pk?: Maybe<UserPaymentMethod>;
  delete_UserShopping?: Maybe<UserShopping_Mutation_Response>;
  delete_UserShopping_by_pk?: Maybe<UserShopping>;
  delete_User_by_pk?: Maybe<User>;
  insert_Store?: Maybe<Store_Mutation_Response>;
  insert_StoreItem?: Maybe<StoreItem_Mutation_Response>;
  insert_StoreItemPic?: Maybe<StoreItemPic_Mutation_Response>;
  insert_StoreItemPic_one?: Maybe<StoreItemPic>;
  insert_StoreItem_one?: Maybe<StoreItem>;
  insert_StorePic?: Maybe<StorePic_Mutation_Response>;
  insert_StorePic_one?: Maybe<StorePic>;
  insert_Store_one?: Maybe<Store>;
  insert_User?: Maybe<User_Mutation_Response>;
  insert_UserCartItem?: Maybe<UserCartItem_Mutation_Response>;
  insert_UserCartItem_one?: Maybe<UserCartItem>;
  insert_UserFavoriteItem?: Maybe<UserFavoriteItem_Mutation_Response>;
  insert_UserFavoriteItem_one?: Maybe<UserFavoriteItem>;
  insert_UserOrder?: Maybe<UserOrder_Mutation_Response>;
  insert_UserOrder_one?: Maybe<UserOrder>;
  insert_UserPaymentMethod?: Maybe<UserPaymentMethod_Mutation_Response>;
  insert_UserPaymentMethod_one?: Maybe<UserPaymentMethod>;
  insert_UserShopping?: Maybe<UserShopping_Mutation_Response>;
  insert_UserShopping_one?: Maybe<UserShopping>;
  insert_User_one?: Maybe<User>;
  update_Store?: Maybe<Store_Mutation_Response>;
  update_StoreItem?: Maybe<StoreItem_Mutation_Response>;
  update_StoreItemPic?: Maybe<StoreItemPic_Mutation_Response>;
  update_StoreItemPic_by_pk?: Maybe<StoreItemPic>;
  update_StoreItem_by_pk?: Maybe<StoreItem>;
  update_StorePic?: Maybe<StorePic_Mutation_Response>;
  update_StorePic_by_pk?: Maybe<StorePic>;
  update_Store_by_pk?: Maybe<Store>;
  update_User?: Maybe<User_Mutation_Response>;
  update_UserCartItem?: Maybe<UserCartItem_Mutation_Response>;
  update_UserCartItem_by_pk?: Maybe<UserCartItem>;
  update_UserFavoriteItem?: Maybe<UserFavoriteItem_Mutation_Response>;
  update_UserFavoriteItem_by_pk?: Maybe<UserFavoriteItem>;
  update_UserOrder?: Maybe<UserOrder_Mutation_Response>;
  update_UserOrder_by_pk?: Maybe<UserOrder>;
  update_UserPaymentMethod?: Maybe<UserPaymentMethod_Mutation_Response>;
  update_UserPaymentMethod_by_pk?: Maybe<UserPaymentMethod>;
  update_UserShopping?: Maybe<UserShopping_Mutation_Response>;
  update_UserShopping_by_pk?: Maybe<UserShopping>;
  update_User_by_pk?: Maybe<User>;
};


export type Mutation_RootDelete_StoreArgs = {
  where: Store_Bool_Exp;
};


export type Mutation_RootDelete_StoreItemArgs = {
  where: StoreItem_Bool_Exp;
};


export type Mutation_RootDelete_StoreItemPicArgs = {
  where: StoreItemPic_Bool_Exp;
};


export type Mutation_RootDelete_StoreItemPic_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Mutation_RootDelete_StoreItem_By_PkArgs = {
  id: Scalars['String'];
};


export type Mutation_RootDelete_StorePicArgs = {
  where: StorePic_Bool_Exp;
};


export type Mutation_RootDelete_StorePic_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Mutation_RootDelete_Store_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Mutation_RootDelete_UserArgs = {
  where: User_Bool_Exp;
};


export type Mutation_RootDelete_UserCartItemArgs = {
  where: UserCartItem_Bool_Exp;
};


export type Mutation_RootDelete_UserCartItem_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Mutation_RootDelete_UserFavoriteItemArgs = {
  where: UserFavoriteItem_Bool_Exp;
};


export type Mutation_RootDelete_UserFavoriteItem_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Mutation_RootDelete_UserOrderArgs = {
  where: UserOrder_Bool_Exp;
};


export type Mutation_RootDelete_UserOrder_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Mutation_RootDelete_UserPaymentMethodArgs = {
  where: UserPaymentMethod_Bool_Exp;
};


export type Mutation_RootDelete_UserPaymentMethod_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Mutation_RootDelete_UserShoppingArgs = {
  where: UserShopping_Bool_Exp;
};


export type Mutation_RootDelete_UserShopping_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Mutation_RootDelete_User_By_PkArgs = {
  id: Scalars['String'];
};


export type Mutation_RootInsert_StoreArgs = {
  objects: Array<Store_Insert_Input>;
  on_conflict?: Maybe<Store_On_Conflict>;
};


export type Mutation_RootInsert_StoreItemArgs = {
  objects: Array<StoreItem_Insert_Input>;
  on_conflict?: Maybe<StoreItem_On_Conflict>;
};


export type Mutation_RootInsert_StoreItemPicArgs = {
  objects: Array<StoreItemPic_Insert_Input>;
  on_conflict?: Maybe<StoreItemPic_On_Conflict>;
};


export type Mutation_RootInsert_StoreItemPic_OneArgs = {
  object: StoreItemPic_Insert_Input;
  on_conflict?: Maybe<StoreItemPic_On_Conflict>;
};


export type Mutation_RootInsert_StoreItem_OneArgs = {
  object: StoreItem_Insert_Input;
  on_conflict?: Maybe<StoreItem_On_Conflict>;
};


export type Mutation_RootInsert_StorePicArgs = {
  objects: Array<StorePic_Insert_Input>;
  on_conflict?: Maybe<StorePic_On_Conflict>;
};


export type Mutation_RootInsert_StorePic_OneArgs = {
  object: StorePic_Insert_Input;
  on_conflict?: Maybe<StorePic_On_Conflict>;
};


export type Mutation_RootInsert_Store_OneArgs = {
  object: Store_Insert_Input;
  on_conflict?: Maybe<Store_On_Conflict>;
};


export type Mutation_RootInsert_UserArgs = {
  objects: Array<User_Insert_Input>;
  on_conflict?: Maybe<User_On_Conflict>;
};


export type Mutation_RootInsert_UserCartItemArgs = {
  objects: Array<UserCartItem_Insert_Input>;
  on_conflict?: Maybe<UserCartItem_On_Conflict>;
};


export type Mutation_RootInsert_UserCartItem_OneArgs = {
  object: UserCartItem_Insert_Input;
  on_conflict?: Maybe<UserCartItem_On_Conflict>;
};


export type Mutation_RootInsert_UserFavoriteItemArgs = {
  objects: Array<UserFavoriteItem_Insert_Input>;
  on_conflict?: Maybe<UserFavoriteItem_On_Conflict>;
};


export type Mutation_RootInsert_UserFavoriteItem_OneArgs = {
  object: UserFavoriteItem_Insert_Input;
  on_conflict?: Maybe<UserFavoriteItem_On_Conflict>;
};


export type Mutation_RootInsert_UserOrderArgs = {
  objects: Array<UserOrder_Insert_Input>;
  on_conflict?: Maybe<UserOrder_On_Conflict>;
};


export type Mutation_RootInsert_UserOrder_OneArgs = {
  object: UserOrder_Insert_Input;
  on_conflict?: Maybe<UserOrder_On_Conflict>;
};


export type Mutation_RootInsert_UserPaymentMethodArgs = {
  objects: Array<UserPaymentMethod_Insert_Input>;
  on_conflict?: Maybe<UserPaymentMethod_On_Conflict>;
};


export type Mutation_RootInsert_UserPaymentMethod_OneArgs = {
  object: UserPaymentMethod_Insert_Input;
  on_conflict?: Maybe<UserPaymentMethod_On_Conflict>;
};


export type Mutation_RootInsert_UserShoppingArgs = {
  objects: Array<UserShopping_Insert_Input>;
  on_conflict?: Maybe<UserShopping_On_Conflict>;
};


export type Mutation_RootInsert_UserShopping_OneArgs = {
  object: UserShopping_Insert_Input;
  on_conflict?: Maybe<UserShopping_On_Conflict>;
};


export type Mutation_RootInsert_User_OneArgs = {
  object: User_Insert_Input;
  on_conflict?: Maybe<User_On_Conflict>;
};


export type Mutation_RootUpdate_StoreArgs = {
  _set?: Maybe<Store_Set_Input>;
  where: Store_Bool_Exp;
};


export type Mutation_RootUpdate_StoreItemArgs = {
  _inc?: Maybe<StoreItem_Inc_Input>;
  _set?: Maybe<StoreItem_Set_Input>;
  where: StoreItem_Bool_Exp;
};


export type Mutation_RootUpdate_StoreItemPicArgs = {
  _set?: Maybe<StoreItemPic_Set_Input>;
  where: StoreItemPic_Bool_Exp;
};


export type Mutation_RootUpdate_StoreItemPic_By_PkArgs = {
  _set?: Maybe<StoreItemPic_Set_Input>;
  pk_columns: StoreItemPic_Pk_Columns_Input;
};


export type Mutation_RootUpdate_StoreItem_By_PkArgs = {
  _inc?: Maybe<StoreItem_Inc_Input>;
  _set?: Maybe<StoreItem_Set_Input>;
  pk_columns: StoreItem_Pk_Columns_Input;
};


export type Mutation_RootUpdate_StorePicArgs = {
  _set?: Maybe<StorePic_Set_Input>;
  where: StorePic_Bool_Exp;
};


export type Mutation_RootUpdate_StorePic_By_PkArgs = {
  _set?: Maybe<StorePic_Set_Input>;
  pk_columns: StorePic_Pk_Columns_Input;
};


export type Mutation_RootUpdate_Store_By_PkArgs = {
  _set?: Maybe<Store_Set_Input>;
  pk_columns: Store_Pk_Columns_Input;
};


export type Mutation_RootUpdate_UserArgs = {
  _set?: Maybe<User_Set_Input>;
  where: User_Bool_Exp;
};


export type Mutation_RootUpdate_UserCartItemArgs = {
  _set?: Maybe<UserCartItem_Set_Input>;
  where: UserCartItem_Bool_Exp;
};


export type Mutation_RootUpdate_UserCartItem_By_PkArgs = {
  _set?: Maybe<UserCartItem_Set_Input>;
  pk_columns: UserCartItem_Pk_Columns_Input;
};


export type Mutation_RootUpdate_UserFavoriteItemArgs = {
  _set?: Maybe<UserFavoriteItem_Set_Input>;
  where: UserFavoriteItem_Bool_Exp;
};


export type Mutation_RootUpdate_UserFavoriteItem_By_PkArgs = {
  _set?: Maybe<UserFavoriteItem_Set_Input>;
  pk_columns: UserFavoriteItem_Pk_Columns_Input;
};


export type Mutation_RootUpdate_UserOrderArgs = {
  _set?: Maybe<UserOrder_Set_Input>;
  where: UserOrder_Bool_Exp;
};


export type Mutation_RootUpdate_UserOrder_By_PkArgs = {
  _set?: Maybe<UserOrder_Set_Input>;
  pk_columns: UserOrder_Pk_Columns_Input;
};


export type Mutation_RootUpdate_UserPaymentMethodArgs = {
  _set?: Maybe<UserPaymentMethod_Set_Input>;
  where: UserPaymentMethod_Bool_Exp;
};


export type Mutation_RootUpdate_UserPaymentMethod_By_PkArgs = {
  _set?: Maybe<UserPaymentMethod_Set_Input>;
  pk_columns: UserPaymentMethod_Pk_Columns_Input;
};


export type Mutation_RootUpdate_UserShoppingArgs = {
  _set?: Maybe<UserShopping_Set_Input>;
  where: UserShopping_Bool_Exp;
};


export type Mutation_RootUpdate_UserShopping_By_PkArgs = {
  _set?: Maybe<UserShopping_Set_Input>;
  pk_columns: UserShopping_Pk_Columns_Input;
};


export type Mutation_RootUpdate_User_By_PkArgs = {
  _set?: Maybe<User_Set_Input>;
  pk_columns: User_Pk_Columns_Input;
};


export type Name_Comparison_Exp = {
  _eq?: Maybe<Scalars['name']>;
  _gt?: Maybe<Scalars['name']>;
  _gte?: Maybe<Scalars['name']>;
  _in?: Maybe<Array<Scalars['name']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['name']>;
  _lte?: Maybe<Scalars['name']>;
  _neq?: Maybe<Scalars['name']>;
  _nin?: Maybe<Array<Scalars['name']>>;
};

export enum Order_By {
  asc = 'asc',
  asc_nulls_first = 'asc_nulls_first',
  asc_nulls_last = 'asc_nulls_last',
  desc = 'desc',
  desc_nulls_first = 'desc_nulls_first',
  desc_nulls_last = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  Store: Array<Store>;
  StoreItem: Array<StoreItem>;
  StoreItemPic: Array<StoreItemPic>;
  StoreItemPic_aggregate: StoreItemPic_Aggregate;
  StoreItemPic_by_pk?: Maybe<StoreItemPic>;
  StoreItem_aggregate: StoreItem_Aggregate;
  StoreItem_by_pk?: Maybe<StoreItem>;
  StorePic: Array<StorePic>;
  StorePic_aggregate: StorePic_Aggregate;
  StorePic_by_pk?: Maybe<StorePic>;
  Store_aggregate: Store_Aggregate;
  Store_by_pk?: Maybe<Store>;
  User: Array<User>;
  UserCartItem: Array<UserCartItem>;
  UserCartItem_aggregate: UserCartItem_Aggregate;
  UserCartItem_by_pk?: Maybe<UserCartItem>;
  UserFavoriteItem: Array<UserFavoriteItem>;
  UserFavoriteItem_aggregate: UserFavoriteItem_Aggregate;
  UserFavoriteItem_by_pk?: Maybe<UserFavoriteItem>;
  UserOrder: Array<UserOrder>;
  UserOrder_aggregate: UserOrder_Aggregate;
  UserOrder_by_pk?: Maybe<UserOrder>;
  UserPaymentMethod: Array<UserPaymentMethod>;
  UserPaymentMethod_aggregate: UserPaymentMethod_Aggregate;
  UserPaymentMethod_by_pk?: Maybe<UserPaymentMethod>;
  UserShopping: Array<UserShopping>;
  UserShopping_aggregate: UserShopping_Aggregate;
  UserShopping_by_pk?: Maybe<UserShopping>;
  User_aggregate: User_Aggregate;
  User_by_pk?: Maybe<User>;
};


export type Query_RootStoreArgs = {
  distinct_on?: Maybe<Array<Store_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Store_Order_By>>;
  where?: Maybe<Store_Bool_Exp>;
};


export type Query_RootStoreItemArgs = {
  distinct_on?: Maybe<Array<StoreItem_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<StoreItem_Order_By>>;
  where?: Maybe<StoreItem_Bool_Exp>;
};


export type Query_RootStoreItemPicArgs = {
  distinct_on?: Maybe<Array<StoreItemPic_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<StoreItemPic_Order_By>>;
  where?: Maybe<StoreItemPic_Bool_Exp>;
};


export type Query_RootStoreItemPic_AggregateArgs = {
  distinct_on?: Maybe<Array<StoreItemPic_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<StoreItemPic_Order_By>>;
  where?: Maybe<StoreItemPic_Bool_Exp>;
};


export type Query_RootStoreItemPic_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootStoreItem_AggregateArgs = {
  distinct_on?: Maybe<Array<StoreItem_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<StoreItem_Order_By>>;
  where?: Maybe<StoreItem_Bool_Exp>;
};


export type Query_RootStoreItem_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootStorePicArgs = {
  distinct_on?: Maybe<Array<StorePic_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<StorePic_Order_By>>;
  where?: Maybe<StorePic_Bool_Exp>;
};


export type Query_RootStorePic_AggregateArgs = {
  distinct_on?: Maybe<Array<StorePic_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<StorePic_Order_By>>;
  where?: Maybe<StorePic_Bool_Exp>;
};


export type Query_RootStorePic_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootStore_AggregateArgs = {
  distinct_on?: Maybe<Array<Store_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Store_Order_By>>;
  where?: Maybe<Store_Bool_Exp>;
};


export type Query_RootStore_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUserArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


export type Query_RootUserCartItemArgs = {
  distinct_on?: Maybe<Array<UserCartItem_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UserCartItem_Order_By>>;
  where?: Maybe<UserCartItem_Bool_Exp>;
};


export type Query_RootUserCartItem_AggregateArgs = {
  distinct_on?: Maybe<Array<UserCartItem_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UserCartItem_Order_By>>;
  where?: Maybe<UserCartItem_Bool_Exp>;
};


export type Query_RootUserCartItem_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUserFavoriteItemArgs = {
  distinct_on?: Maybe<Array<UserFavoriteItem_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UserFavoriteItem_Order_By>>;
  where?: Maybe<UserFavoriteItem_Bool_Exp>;
};


export type Query_RootUserFavoriteItem_AggregateArgs = {
  distinct_on?: Maybe<Array<UserFavoriteItem_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UserFavoriteItem_Order_By>>;
  where?: Maybe<UserFavoriteItem_Bool_Exp>;
};


export type Query_RootUserFavoriteItem_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUserOrderArgs = {
  distinct_on?: Maybe<Array<UserOrder_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UserOrder_Order_By>>;
  where?: Maybe<UserOrder_Bool_Exp>;
};


export type Query_RootUserOrder_AggregateArgs = {
  distinct_on?: Maybe<Array<UserOrder_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UserOrder_Order_By>>;
  where?: Maybe<UserOrder_Bool_Exp>;
};


export type Query_RootUserOrder_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUserPaymentMethodArgs = {
  distinct_on?: Maybe<Array<UserPaymentMethod_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UserPaymentMethod_Order_By>>;
  where?: Maybe<UserPaymentMethod_Bool_Exp>;
};


export type Query_RootUserPaymentMethod_AggregateArgs = {
  distinct_on?: Maybe<Array<UserPaymentMethod_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UserPaymentMethod_Order_By>>;
  where?: Maybe<UserPaymentMethod_Bool_Exp>;
};


export type Query_RootUserPaymentMethod_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUserShoppingArgs = {
  distinct_on?: Maybe<Array<UserShopping_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UserShopping_Order_By>>;
  where?: Maybe<UserShopping_Bool_Exp>;
};


export type Query_RootUserShopping_AggregateArgs = {
  distinct_on?: Maybe<Array<UserShopping_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UserShopping_Order_By>>;
  where?: Maybe<UserShopping_Bool_Exp>;
};


export type Query_RootUserShopping_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUser_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


export type Query_RootUser_By_PkArgs = {
  id: Scalars['String'];
};

export type St_D_Within_Geography_Input = {
  distance: Scalars['Float'];
  from: Scalars['geography'];
  use_spheroid?: Maybe<Scalars['Boolean']>;
};

export type St_D_Within_Input = {
  distance: Scalars['Float'];
  from: Scalars['geometry'];
};

export type Store = {
  __typename?: 'Store';
  StoreItems: Array<StoreItem>;
  StoreItems_aggregate: StoreItem_Aggregate;
  StorePic?: Maybe<StorePic>;
  UserShoppings: Array<UserShopping>;
  UserShoppings_aggregate: UserShopping_Aggregate;
  address: Scalars['String'];
  category?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  location: Scalars['geography'];
  name: Scalars['String'];
  storePicId?: Maybe<Scalars['uuid']>;
};


export type StoreStoreItemsArgs = {
  distinct_on?: Maybe<Array<StoreItem_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<StoreItem_Order_By>>;
  where?: Maybe<StoreItem_Bool_Exp>;
};


export type StoreStoreItems_AggregateArgs = {
  distinct_on?: Maybe<Array<StoreItem_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<StoreItem_Order_By>>;
  where?: Maybe<StoreItem_Bool_Exp>;
};


export type StoreUserShoppingsArgs = {
  distinct_on?: Maybe<Array<UserShopping_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UserShopping_Order_By>>;
  where?: Maybe<UserShopping_Bool_Exp>;
};


export type StoreUserShoppings_AggregateArgs = {
  distinct_on?: Maybe<Array<UserShopping_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UserShopping_Order_By>>;
  where?: Maybe<UserShopping_Bool_Exp>;
};

export type Store_Aggregate = {
  __typename?: 'Store_aggregate';
  aggregate?: Maybe<Store_Aggregate_Fields>;
  nodes: Array<Store>;
};

export type Store_Aggregate_Fields = {
  __typename?: 'Store_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Store_Max_Fields>;
  min?: Maybe<Store_Min_Fields>;
};


export type Store_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Store_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Store_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Store_Max_Order_By>;
  min?: Maybe<Store_Min_Order_By>;
};

export type Store_Arr_Rel_Insert_Input = {
  data: Array<Store_Insert_Input>;
  on_conflict?: Maybe<Store_On_Conflict>;
};

export type Store_Bool_Exp = {
  StoreItems?: Maybe<StoreItem_Bool_Exp>;
  StorePic?: Maybe<StorePic_Bool_Exp>;
  UserShoppings?: Maybe<UserShopping_Bool_Exp>;
  _and?: Maybe<Array<Maybe<Store_Bool_Exp>>>;
  _not?: Maybe<Store_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Store_Bool_Exp>>>;
  address?: Maybe<String_Comparison_Exp>;
  category?: Maybe<String_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  location?: Maybe<Geography_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  storePicId?: Maybe<Uuid_Comparison_Exp>;
};

export enum Store_Constraint {
  Store_pkey = 'Store_pkey',
  Store_storePicId_key = 'Store_storePicId_key'
}

export type Store_Insert_Input = {
  StoreItems?: Maybe<StoreItem_Arr_Rel_Insert_Input>;
  StorePic?: Maybe<StorePic_Obj_Rel_Insert_Input>;
  UserShoppings?: Maybe<UserShopping_Arr_Rel_Insert_Input>;
  address?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  location?: Maybe<Scalars['geography']>;
  name?: Maybe<Scalars['String']>;
  storePicId?: Maybe<Scalars['uuid']>;
};

export type Store_Max_Fields = {
  __typename?: 'Store_max_fields';
  address?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  storePicId?: Maybe<Scalars['uuid']>;
};

export type Store_Max_Order_By = {
  address?: Maybe<Order_By>;
  category?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  storePicId?: Maybe<Order_By>;
};

export type Store_Min_Fields = {
  __typename?: 'Store_min_fields';
  address?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  storePicId?: Maybe<Scalars['uuid']>;
};

export type Store_Min_Order_By = {
  address?: Maybe<Order_By>;
  category?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  storePicId?: Maybe<Order_By>;
};

export type Store_Mutation_Response = {
  __typename?: 'Store_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Store>;
};

export type Store_Obj_Rel_Insert_Input = {
  data: Store_Insert_Input;
  on_conflict?: Maybe<Store_On_Conflict>;
};

export type Store_On_Conflict = {
  constraint: Store_Constraint;
  update_columns: Array<Store_Update_Column>;
  where?: Maybe<Store_Bool_Exp>;
};

export type Store_Order_By = {
  StoreItems_aggregate?: Maybe<StoreItem_Aggregate_Order_By>;
  StorePic?: Maybe<StorePic_Order_By>;
  UserShoppings_aggregate?: Maybe<UserShopping_Aggregate_Order_By>;
  address?: Maybe<Order_By>;
  category?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  location?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  storePicId?: Maybe<Order_By>;
};

export type Store_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

export enum Store_Select_Column {
  address = 'address',
  category = 'category',
  description = 'description',
  id = 'id',
  location = 'location',
  name = 'name',
  storePicId = 'storePicId'
}

export type Store_Set_Input = {
  address?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  location?: Maybe<Scalars['geography']>;
  name?: Maybe<Scalars['String']>;
  storePicId?: Maybe<Scalars['uuid']>;
};

export enum Store_Update_Column {
  address = 'address',
  category = 'category',
  description = 'description',
  id = 'id',
  location = 'location',
  name = 'name',
  storePicId = 'storePicId'
}

export type StoreItem = {
  __typename?: 'StoreItem';
  Store: Store;
  StoreItemPic?: Maybe<StoreItemPic>;
  UserCartItem?: Maybe<UserCartItem>;
  UserFavoriteItem?: Maybe<UserFavoriteItem>;
  UserOrder?: Maybe<UserOrder>;
  UserShoppings: Array<UserShopping>;
  UserShoppings_aggregate: UserShopping_Aggregate;
  barcodeId: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  itemImageId?: Maybe<Scalars['uuid']>;
  longName: Scalars['String'];
  orderId?: Maybe<Scalars['uuid']>;
  price: Scalars['money'];
  purchased: Scalars['Boolean'];
  quantity: Scalars['String'];
  shortName?: Maybe<Scalars['String']>;
  storeId: Scalars['uuid'];
};


export type StoreItemUserShoppingsArgs = {
  distinct_on?: Maybe<Array<UserShopping_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UserShopping_Order_By>>;
  where?: Maybe<UserShopping_Bool_Exp>;
};


export type StoreItemUserShoppings_AggregateArgs = {
  distinct_on?: Maybe<Array<UserShopping_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UserShopping_Order_By>>;
  where?: Maybe<UserShopping_Bool_Exp>;
};

export type StoreItem_Aggregate = {
  __typename?: 'StoreItem_aggregate';
  aggregate?: Maybe<StoreItem_Aggregate_Fields>;
  nodes: Array<StoreItem>;
};

export type StoreItem_Aggregate_Fields = {
  __typename?: 'StoreItem_aggregate_fields';
  avg?: Maybe<StoreItem_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<StoreItem_Max_Fields>;
  min?: Maybe<StoreItem_Min_Fields>;
  stddev?: Maybe<StoreItem_Stddev_Fields>;
  stddev_pop?: Maybe<StoreItem_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<StoreItem_Stddev_Samp_Fields>;
  sum?: Maybe<StoreItem_Sum_Fields>;
  var_pop?: Maybe<StoreItem_Var_Pop_Fields>;
  var_samp?: Maybe<StoreItem_Var_Samp_Fields>;
  variance?: Maybe<StoreItem_Variance_Fields>;
};


export type StoreItem_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<StoreItem_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type StoreItem_Aggregate_Order_By = {
  avg?: Maybe<StoreItem_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<StoreItem_Max_Order_By>;
  min?: Maybe<StoreItem_Min_Order_By>;
  stddev?: Maybe<StoreItem_Stddev_Order_By>;
  stddev_pop?: Maybe<StoreItem_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<StoreItem_Stddev_Samp_Order_By>;
  sum?: Maybe<StoreItem_Sum_Order_By>;
  var_pop?: Maybe<StoreItem_Var_Pop_Order_By>;
  var_samp?: Maybe<StoreItem_Var_Samp_Order_By>;
  variance?: Maybe<StoreItem_Variance_Order_By>;
};

export type StoreItem_Arr_Rel_Insert_Input = {
  data: Array<StoreItem_Insert_Input>;
  on_conflict?: Maybe<StoreItem_On_Conflict>;
};

export type StoreItem_Avg_Fields = {
  __typename?: 'StoreItem_avg_fields';
  price?: Maybe<Scalars['Float']>;
};

export type StoreItem_Avg_Order_By = {
  price?: Maybe<Order_By>;
};

export type StoreItem_Bool_Exp = {
  Store?: Maybe<Store_Bool_Exp>;
  StoreItemPic?: Maybe<StoreItemPic_Bool_Exp>;
  UserCartItem?: Maybe<UserCartItem_Bool_Exp>;
  UserFavoriteItem?: Maybe<UserFavoriteItem_Bool_Exp>;
  UserOrder?: Maybe<UserOrder_Bool_Exp>;
  UserShoppings?: Maybe<UserShopping_Bool_Exp>;
  _and?: Maybe<Array<Maybe<StoreItem_Bool_Exp>>>;
  _not?: Maybe<StoreItem_Bool_Exp>;
  _or?: Maybe<Array<Maybe<StoreItem_Bool_Exp>>>;
  barcodeId?: Maybe<String_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<String_Comparison_Exp>;
  itemImageId?: Maybe<Uuid_Comparison_Exp>;
  longName?: Maybe<String_Comparison_Exp>;
  orderId?: Maybe<Uuid_Comparison_Exp>;
  price?: Maybe<Money_Comparison_Exp>;
  purchased?: Maybe<Boolean_Comparison_Exp>;
  quantity?: Maybe<String_Comparison_Exp>;
  shortName?: Maybe<String_Comparison_Exp>;
  storeId?: Maybe<Uuid_Comparison_Exp>;
};

export enum StoreItem_Constraint {
  StoreItem_barcodeId_key = 'StoreItem_barcodeId_key',
  StoreItem_id_key = 'StoreItem_id_key',
  StoreItem_pkey = 'StoreItem_pkey'
}

export type StoreItem_Inc_Input = {
  price?: Maybe<Scalars['money']>;
};

export type StoreItem_Insert_Input = {
  Store?: Maybe<Store_Obj_Rel_Insert_Input>;
  StoreItemPic?: Maybe<StoreItemPic_Obj_Rel_Insert_Input>;
  UserCartItem?: Maybe<UserCartItem_Obj_Rel_Insert_Input>;
  UserFavoriteItem?: Maybe<UserFavoriteItem_Obj_Rel_Insert_Input>;
  UserOrder?: Maybe<UserOrder_Obj_Rel_Insert_Input>;
  UserShoppings?: Maybe<UserShopping_Arr_Rel_Insert_Input>;
  barcodeId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  itemImageId?: Maybe<Scalars['uuid']>;
  longName?: Maybe<Scalars['String']>;
  orderId?: Maybe<Scalars['uuid']>;
  price?: Maybe<Scalars['money']>;
  purchased?: Maybe<Scalars['Boolean']>;
  quantity?: Maybe<Scalars['String']>;
  shortName?: Maybe<Scalars['String']>;
  storeId?: Maybe<Scalars['uuid']>;
};

export type StoreItem_Max_Fields = {
  __typename?: 'StoreItem_max_fields';
  barcodeId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  itemImageId?: Maybe<Scalars['uuid']>;
  longName?: Maybe<Scalars['String']>;
  orderId?: Maybe<Scalars['uuid']>;
  price?: Maybe<Scalars['money']>;
  quantity?: Maybe<Scalars['String']>;
  shortName?: Maybe<Scalars['String']>;
  storeId?: Maybe<Scalars['uuid']>;
};

export type StoreItem_Max_Order_By = {
  barcodeId?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  itemImageId?: Maybe<Order_By>;
  longName?: Maybe<Order_By>;
  orderId?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  shortName?: Maybe<Order_By>;
  storeId?: Maybe<Order_By>;
};

export type StoreItem_Min_Fields = {
  __typename?: 'StoreItem_min_fields';
  barcodeId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  itemImageId?: Maybe<Scalars['uuid']>;
  longName?: Maybe<Scalars['String']>;
  orderId?: Maybe<Scalars['uuid']>;
  price?: Maybe<Scalars['money']>;
  quantity?: Maybe<Scalars['String']>;
  shortName?: Maybe<Scalars['String']>;
  storeId?: Maybe<Scalars['uuid']>;
};

export type StoreItem_Min_Order_By = {
  barcodeId?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  itemImageId?: Maybe<Order_By>;
  longName?: Maybe<Order_By>;
  orderId?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  shortName?: Maybe<Order_By>;
  storeId?: Maybe<Order_By>;
};

export type StoreItem_Mutation_Response = {
  __typename?: 'StoreItem_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<StoreItem>;
};

export type StoreItem_Obj_Rel_Insert_Input = {
  data: StoreItem_Insert_Input;
  on_conflict?: Maybe<StoreItem_On_Conflict>;
};

export type StoreItem_On_Conflict = {
  constraint: StoreItem_Constraint;
  update_columns: Array<StoreItem_Update_Column>;
  where?: Maybe<StoreItem_Bool_Exp>;
};

export type StoreItem_Order_By = {
  Store?: Maybe<Store_Order_By>;
  StoreItemPic?: Maybe<StoreItemPic_Order_By>;
  UserCartItem?: Maybe<UserCartItem_Order_By>;
  UserFavoriteItem?: Maybe<UserFavoriteItem_Order_By>;
  UserOrder?: Maybe<UserOrder_Order_By>;
  UserShoppings_aggregate?: Maybe<UserShopping_Aggregate_Order_By>;
  barcodeId?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  itemImageId?: Maybe<Order_By>;
  longName?: Maybe<Order_By>;
  orderId?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  purchased?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  shortName?: Maybe<Order_By>;
  storeId?: Maybe<Order_By>;
};

export type StoreItem_Pk_Columns_Input = {
  id: Scalars['String'];
};

export enum StoreItem_Select_Column {
  barcodeId = 'barcodeId',
  description = 'description',
  id = 'id',
  itemImageId = 'itemImageId',
  longName = 'longName',
  orderId = 'orderId',
  price = 'price',
  purchased = 'purchased',
  quantity = 'quantity',
  shortName = 'shortName',
  storeId = 'storeId'
}

export type StoreItem_Set_Input = {
  barcodeId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  itemImageId?: Maybe<Scalars['uuid']>;
  longName?: Maybe<Scalars['String']>;
  orderId?: Maybe<Scalars['uuid']>;
  price?: Maybe<Scalars['money']>;
  purchased?: Maybe<Scalars['Boolean']>;
  quantity?: Maybe<Scalars['String']>;
  shortName?: Maybe<Scalars['String']>;
  storeId?: Maybe<Scalars['uuid']>;
};

export type StoreItem_Stddev_Fields = {
  __typename?: 'StoreItem_stddev_fields';
  price?: Maybe<Scalars['Float']>;
};

export type StoreItem_Stddev_Order_By = {
  price?: Maybe<Order_By>;
};

export type StoreItem_Stddev_Pop_Fields = {
  __typename?: 'StoreItem_stddev_pop_fields';
  price?: Maybe<Scalars['Float']>;
};

export type StoreItem_Stddev_Pop_Order_By = {
  price?: Maybe<Order_By>;
};

export type StoreItem_Stddev_Samp_Fields = {
  __typename?: 'StoreItem_stddev_samp_fields';
  price?: Maybe<Scalars['Float']>;
};

export type StoreItem_Stddev_Samp_Order_By = {
  price?: Maybe<Order_By>;
};

export type StoreItem_Sum_Fields = {
  __typename?: 'StoreItem_sum_fields';
  price?: Maybe<Scalars['money']>;
};

export type StoreItem_Sum_Order_By = {
  price?: Maybe<Order_By>;
};

export enum StoreItem_Update_Column {
  barcodeId = 'barcodeId',
  description = 'description',
  id = 'id',
  itemImageId = 'itemImageId',
  longName = 'longName',
  orderId = 'orderId',
  price = 'price',
  purchased = 'purchased',
  quantity = 'quantity',
  shortName = 'shortName',
  storeId = 'storeId'
}

export type StoreItem_Var_Pop_Fields = {
  __typename?: 'StoreItem_var_pop_fields';
  price?: Maybe<Scalars['Float']>;
};

export type StoreItem_Var_Pop_Order_By = {
  price?: Maybe<Order_By>;
};

export type StoreItem_Var_Samp_Fields = {
  __typename?: 'StoreItem_var_samp_fields';
  price?: Maybe<Scalars['Float']>;
};

export type StoreItem_Var_Samp_Order_By = {
  price?: Maybe<Order_By>;
};

export type StoreItem_Variance_Fields = {
  __typename?: 'StoreItem_variance_fields';
  price?: Maybe<Scalars['Float']>;
};

export type StoreItem_Variance_Order_By = {
  price?: Maybe<Order_By>;
};

export type StoreItemPic = {
  __typename?: 'StoreItemPic';
  StoreItem?: Maybe<StoreItem>;
  StoreItems: Array<StoreItem>;
  StoreItems_aggregate: StoreItem_Aggregate;
  id: Scalars['uuid'];
  size128: Scalars['String'];
  size256: Scalars['String'];
  size64: Scalars['String'];
};


export type StoreItemPicStoreItemsArgs = {
  distinct_on?: Maybe<Array<StoreItem_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<StoreItem_Order_By>>;
  where?: Maybe<StoreItem_Bool_Exp>;
};


export type StoreItemPicStoreItems_AggregateArgs = {
  distinct_on?: Maybe<Array<StoreItem_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<StoreItem_Order_By>>;
  where?: Maybe<StoreItem_Bool_Exp>;
};

export type StoreItemPic_Aggregate = {
  __typename?: 'StoreItemPic_aggregate';
  aggregate?: Maybe<StoreItemPic_Aggregate_Fields>;
  nodes: Array<StoreItemPic>;
};

export type StoreItemPic_Aggregate_Fields = {
  __typename?: 'StoreItemPic_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<StoreItemPic_Max_Fields>;
  min?: Maybe<StoreItemPic_Min_Fields>;
};


export type StoreItemPic_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<StoreItemPic_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type StoreItemPic_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<StoreItemPic_Max_Order_By>;
  min?: Maybe<StoreItemPic_Min_Order_By>;
};

export type StoreItemPic_Arr_Rel_Insert_Input = {
  data: Array<StoreItemPic_Insert_Input>;
  on_conflict?: Maybe<StoreItemPic_On_Conflict>;
};

export type StoreItemPic_Bool_Exp = {
  StoreItem?: Maybe<StoreItem_Bool_Exp>;
  StoreItems?: Maybe<StoreItem_Bool_Exp>;
  _and?: Maybe<Array<Maybe<StoreItemPic_Bool_Exp>>>;
  _not?: Maybe<StoreItemPic_Bool_Exp>;
  _or?: Maybe<Array<Maybe<StoreItemPic_Bool_Exp>>>;
  id?: Maybe<Uuid_Comparison_Exp>;
  size128?: Maybe<String_Comparison_Exp>;
  size256?: Maybe<String_Comparison_Exp>;
  size64?: Maybe<String_Comparison_Exp>;
};

export enum StoreItemPic_Constraint {
  StoreItemPic_pkey = 'StoreItemPic_pkey'
}

export type StoreItemPic_Insert_Input = {
  StoreItem?: Maybe<StoreItem_Obj_Rel_Insert_Input>;
  StoreItems?: Maybe<StoreItem_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars['uuid']>;
  size128?: Maybe<Scalars['String']>;
  size256?: Maybe<Scalars['String']>;
  size64?: Maybe<Scalars['String']>;
};

export type StoreItemPic_Max_Fields = {
  __typename?: 'StoreItemPic_max_fields';
  id?: Maybe<Scalars['uuid']>;
  size128?: Maybe<Scalars['String']>;
  size256?: Maybe<Scalars['String']>;
  size64?: Maybe<Scalars['String']>;
};

export type StoreItemPic_Max_Order_By = {
  id?: Maybe<Order_By>;
  size128?: Maybe<Order_By>;
  size256?: Maybe<Order_By>;
  size64?: Maybe<Order_By>;
};

export type StoreItemPic_Min_Fields = {
  __typename?: 'StoreItemPic_min_fields';
  id?: Maybe<Scalars['uuid']>;
  size128?: Maybe<Scalars['String']>;
  size256?: Maybe<Scalars['String']>;
  size64?: Maybe<Scalars['String']>;
};

export type StoreItemPic_Min_Order_By = {
  id?: Maybe<Order_By>;
  size128?: Maybe<Order_By>;
  size256?: Maybe<Order_By>;
  size64?: Maybe<Order_By>;
};

export type StoreItemPic_Mutation_Response = {
  __typename?: 'StoreItemPic_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<StoreItemPic>;
};

export type StoreItemPic_Obj_Rel_Insert_Input = {
  data: StoreItemPic_Insert_Input;
  on_conflict?: Maybe<StoreItemPic_On_Conflict>;
};

export type StoreItemPic_On_Conflict = {
  constraint: StoreItemPic_Constraint;
  update_columns: Array<StoreItemPic_Update_Column>;
  where?: Maybe<StoreItemPic_Bool_Exp>;
};

export type StoreItemPic_Order_By = {
  StoreItem?: Maybe<StoreItem_Order_By>;
  StoreItems_aggregate?: Maybe<StoreItem_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  size128?: Maybe<Order_By>;
  size256?: Maybe<Order_By>;
  size64?: Maybe<Order_By>;
};

export type StoreItemPic_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

export enum StoreItemPic_Select_Column {
  id = 'id',
  size128 = 'size128',
  size256 = 'size256',
  size64 = 'size64'
}

export type StoreItemPic_Set_Input = {
  id?: Maybe<Scalars['uuid']>;
  size128?: Maybe<Scalars['String']>;
  size256?: Maybe<Scalars['String']>;
  size64?: Maybe<Scalars['String']>;
};

export enum StoreItemPic_Update_Column {
  id = 'id',
  size128 = 'size128',
  size256 = 'size256',
  size64 = 'size64'
}

export type StorePic = {
  __typename?: 'StorePic';
  Store?: Maybe<Store>;
  id: Scalars['uuid'];
  size128: Scalars['String'];
  size256: Scalars['String'];
  size64: Scalars['String'];
};

export type StorePic_Aggregate = {
  __typename?: 'StorePic_aggregate';
  aggregate?: Maybe<StorePic_Aggregate_Fields>;
  nodes: Array<StorePic>;
};

export type StorePic_Aggregate_Fields = {
  __typename?: 'StorePic_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<StorePic_Max_Fields>;
  min?: Maybe<StorePic_Min_Fields>;
};


export type StorePic_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<StorePic_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type StorePic_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<StorePic_Max_Order_By>;
  min?: Maybe<StorePic_Min_Order_By>;
};

export type StorePic_Arr_Rel_Insert_Input = {
  data: Array<StorePic_Insert_Input>;
  on_conflict?: Maybe<StorePic_On_Conflict>;
};

export type StorePic_Bool_Exp = {
  Store?: Maybe<Store_Bool_Exp>;
  _and?: Maybe<Array<Maybe<StorePic_Bool_Exp>>>;
  _not?: Maybe<StorePic_Bool_Exp>;
  _or?: Maybe<Array<Maybe<StorePic_Bool_Exp>>>;
  id?: Maybe<Uuid_Comparison_Exp>;
  size128?: Maybe<String_Comparison_Exp>;
  size256?: Maybe<String_Comparison_Exp>;
  size64?: Maybe<String_Comparison_Exp>;
};

export enum StorePic_Constraint {
  StorePic_pkey = 'StorePic_pkey'
}

export type StorePic_Insert_Input = {
  Store?: Maybe<Store_Obj_Rel_Insert_Input>;
  id?: Maybe<Scalars['uuid']>;
  size128?: Maybe<Scalars['String']>;
  size256?: Maybe<Scalars['String']>;
  size64?: Maybe<Scalars['String']>;
};

export type StorePic_Max_Fields = {
  __typename?: 'StorePic_max_fields';
  id?: Maybe<Scalars['uuid']>;
  size128?: Maybe<Scalars['String']>;
  size256?: Maybe<Scalars['String']>;
  size64?: Maybe<Scalars['String']>;
};

export type StorePic_Max_Order_By = {
  id?: Maybe<Order_By>;
  size128?: Maybe<Order_By>;
  size256?: Maybe<Order_By>;
  size64?: Maybe<Order_By>;
};

export type StorePic_Min_Fields = {
  __typename?: 'StorePic_min_fields';
  id?: Maybe<Scalars['uuid']>;
  size128?: Maybe<Scalars['String']>;
  size256?: Maybe<Scalars['String']>;
  size64?: Maybe<Scalars['String']>;
};

export type StorePic_Min_Order_By = {
  id?: Maybe<Order_By>;
  size128?: Maybe<Order_By>;
  size256?: Maybe<Order_By>;
  size64?: Maybe<Order_By>;
};

export type StorePic_Mutation_Response = {
  __typename?: 'StorePic_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<StorePic>;
};

export type StorePic_Obj_Rel_Insert_Input = {
  data: StorePic_Insert_Input;
  on_conflict?: Maybe<StorePic_On_Conflict>;
};

export type StorePic_On_Conflict = {
  constraint: StorePic_Constraint;
  update_columns: Array<StorePic_Update_Column>;
  where?: Maybe<StorePic_Bool_Exp>;
};

export type StorePic_Order_By = {
  Store?: Maybe<Store_Order_By>;
  id?: Maybe<Order_By>;
  size128?: Maybe<Order_By>;
  size256?: Maybe<Order_By>;
  size64?: Maybe<Order_By>;
};

export type StorePic_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

export enum StorePic_Select_Column {
  id = 'id',
  size128 = 'size128',
  size256 = 'size256',
  size64 = 'size64'
}

export type StorePic_Set_Input = {
  id?: Maybe<Scalars['uuid']>;
  size128?: Maybe<Scalars['String']>;
  size256?: Maybe<Scalars['String']>;
  size64?: Maybe<Scalars['String']>;
};

export enum StorePic_Update_Column {
  id = 'id',
  size128 = 'size128',
  size256 = 'size256',
  size64 = 'size64'
}

export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  Store: Array<Store>;
  StoreItem: Array<StoreItem>;
  StoreItemPic: Array<StoreItemPic>;
  StoreItemPic_aggregate: StoreItemPic_Aggregate;
  StoreItemPic_by_pk?: Maybe<StoreItemPic>;
  StoreItem_aggregate: StoreItem_Aggregate;
  StoreItem_by_pk?: Maybe<StoreItem>;
  StorePic: Array<StorePic>;
  StorePic_aggregate: StorePic_Aggregate;
  StorePic_by_pk?: Maybe<StorePic>;
  Store_aggregate: Store_Aggregate;
  Store_by_pk?: Maybe<Store>;
  User: Array<User>;
  UserCartItem: Array<UserCartItem>;
  UserCartItem_aggregate: UserCartItem_Aggregate;
  UserCartItem_by_pk?: Maybe<UserCartItem>;
  UserFavoriteItem: Array<UserFavoriteItem>;
  UserFavoriteItem_aggregate: UserFavoriteItem_Aggregate;
  UserFavoriteItem_by_pk?: Maybe<UserFavoriteItem>;
  UserOrder: Array<UserOrder>;
  UserOrder_aggregate: UserOrder_Aggregate;
  UserOrder_by_pk?: Maybe<UserOrder>;
  UserPaymentMethod: Array<UserPaymentMethod>;
  UserPaymentMethod_aggregate: UserPaymentMethod_Aggregate;
  UserPaymentMethod_by_pk?: Maybe<UserPaymentMethod>;
  UserShopping: Array<UserShopping>;
  UserShopping_aggregate: UserShopping_Aggregate;
  UserShopping_by_pk?: Maybe<UserShopping>;
  User_aggregate: User_Aggregate;
  User_by_pk?: Maybe<User>;
};


export type Subscription_RootStoreArgs = {
  distinct_on?: Maybe<Array<Store_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Store_Order_By>>;
  where?: Maybe<Store_Bool_Exp>;
};


export type Subscription_RootStoreItemArgs = {
  distinct_on?: Maybe<Array<StoreItem_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<StoreItem_Order_By>>;
  where?: Maybe<StoreItem_Bool_Exp>;
};


export type Subscription_RootStoreItemPicArgs = {
  distinct_on?: Maybe<Array<StoreItemPic_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<StoreItemPic_Order_By>>;
  where?: Maybe<StoreItemPic_Bool_Exp>;
};


export type Subscription_RootStoreItemPic_AggregateArgs = {
  distinct_on?: Maybe<Array<StoreItemPic_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<StoreItemPic_Order_By>>;
  where?: Maybe<StoreItemPic_Bool_Exp>;
};


export type Subscription_RootStoreItemPic_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootStoreItem_AggregateArgs = {
  distinct_on?: Maybe<Array<StoreItem_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<StoreItem_Order_By>>;
  where?: Maybe<StoreItem_Bool_Exp>;
};


export type Subscription_RootStoreItem_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootStorePicArgs = {
  distinct_on?: Maybe<Array<StorePic_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<StorePic_Order_By>>;
  where?: Maybe<StorePic_Bool_Exp>;
};


export type Subscription_RootStorePic_AggregateArgs = {
  distinct_on?: Maybe<Array<StorePic_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<StorePic_Order_By>>;
  where?: Maybe<StorePic_Bool_Exp>;
};


export type Subscription_RootStorePic_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootStore_AggregateArgs = {
  distinct_on?: Maybe<Array<Store_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Store_Order_By>>;
  where?: Maybe<Store_Bool_Exp>;
};


export type Subscription_RootStore_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUserArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


export type Subscription_RootUserCartItemArgs = {
  distinct_on?: Maybe<Array<UserCartItem_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UserCartItem_Order_By>>;
  where?: Maybe<UserCartItem_Bool_Exp>;
};


export type Subscription_RootUserCartItem_AggregateArgs = {
  distinct_on?: Maybe<Array<UserCartItem_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UserCartItem_Order_By>>;
  where?: Maybe<UserCartItem_Bool_Exp>;
};


export type Subscription_RootUserCartItem_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUserFavoriteItemArgs = {
  distinct_on?: Maybe<Array<UserFavoriteItem_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UserFavoriteItem_Order_By>>;
  where?: Maybe<UserFavoriteItem_Bool_Exp>;
};


export type Subscription_RootUserFavoriteItem_AggregateArgs = {
  distinct_on?: Maybe<Array<UserFavoriteItem_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UserFavoriteItem_Order_By>>;
  where?: Maybe<UserFavoriteItem_Bool_Exp>;
};


export type Subscription_RootUserFavoriteItem_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUserOrderArgs = {
  distinct_on?: Maybe<Array<UserOrder_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UserOrder_Order_By>>;
  where?: Maybe<UserOrder_Bool_Exp>;
};


export type Subscription_RootUserOrder_AggregateArgs = {
  distinct_on?: Maybe<Array<UserOrder_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UserOrder_Order_By>>;
  where?: Maybe<UserOrder_Bool_Exp>;
};


export type Subscription_RootUserOrder_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUserPaymentMethodArgs = {
  distinct_on?: Maybe<Array<UserPaymentMethod_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UserPaymentMethod_Order_By>>;
  where?: Maybe<UserPaymentMethod_Bool_Exp>;
};


export type Subscription_RootUserPaymentMethod_AggregateArgs = {
  distinct_on?: Maybe<Array<UserPaymentMethod_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UserPaymentMethod_Order_By>>;
  where?: Maybe<UserPaymentMethod_Bool_Exp>;
};


export type Subscription_RootUserPaymentMethod_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUserShoppingArgs = {
  distinct_on?: Maybe<Array<UserShopping_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UserShopping_Order_By>>;
  where?: Maybe<UserShopping_Bool_Exp>;
};


export type Subscription_RootUserShopping_AggregateArgs = {
  distinct_on?: Maybe<Array<UserShopping_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UserShopping_Order_By>>;
  where?: Maybe<UserShopping_Bool_Exp>;
};


export type Subscription_RootUserShopping_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUser_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


export type Subscription_RootUser_By_PkArgs = {
  id: Scalars['String'];
};


export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

export type User = {
  __typename?: 'User';
  UserCartItems: Array<UserCartItem>;
  UserCartItems_aggregate: UserCartItem_Aggregate;
  UserFavoriteItems: Array<UserFavoriteItem>;
  UserFavoriteItems_aggregate: UserFavoriteItem_Aggregate;
  UserOrders: Array<UserOrder>;
  UserOrders_aggregate: UserOrder_Aggregate;
  UserPaymentMethod?: Maybe<UserPaymentMethod>;
  UserShopping?: Maybe<UserShopping>;
  email: Scalars['String'];
  firstName?: Maybe<Scalars['name']>;
  id: Scalars['String'];
  lastName?: Maybe<Scalars['name']>;
};


export type UserUserCartItemsArgs = {
  distinct_on?: Maybe<Array<UserCartItem_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UserCartItem_Order_By>>;
  where?: Maybe<UserCartItem_Bool_Exp>;
};


export type UserUserCartItems_AggregateArgs = {
  distinct_on?: Maybe<Array<UserCartItem_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UserCartItem_Order_By>>;
  where?: Maybe<UserCartItem_Bool_Exp>;
};


export type UserUserFavoriteItemsArgs = {
  distinct_on?: Maybe<Array<UserFavoriteItem_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UserFavoriteItem_Order_By>>;
  where?: Maybe<UserFavoriteItem_Bool_Exp>;
};


export type UserUserFavoriteItems_AggregateArgs = {
  distinct_on?: Maybe<Array<UserFavoriteItem_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UserFavoriteItem_Order_By>>;
  where?: Maybe<UserFavoriteItem_Bool_Exp>;
};


export type UserUserOrdersArgs = {
  distinct_on?: Maybe<Array<UserOrder_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UserOrder_Order_By>>;
  where?: Maybe<UserOrder_Bool_Exp>;
};


export type UserUserOrders_AggregateArgs = {
  distinct_on?: Maybe<Array<UserOrder_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UserOrder_Order_By>>;
  where?: Maybe<UserOrder_Bool_Exp>;
};

export type User_Aggregate = {
  __typename?: 'User_aggregate';
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

export type User_Aggregate_Fields = {
  __typename?: 'User_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<User_Max_Fields>;
  min?: Maybe<User_Min_Fields>;
};


export type User_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type User_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<User_Max_Order_By>;
  min?: Maybe<User_Min_Order_By>;
};

export type User_Arr_Rel_Insert_Input = {
  data: Array<User_Insert_Input>;
  on_conflict?: Maybe<User_On_Conflict>;
};

export type User_Bool_Exp = {
  UserCartItems?: Maybe<UserCartItem_Bool_Exp>;
  UserFavoriteItems?: Maybe<UserFavoriteItem_Bool_Exp>;
  UserOrders?: Maybe<UserOrder_Bool_Exp>;
  UserPaymentMethod?: Maybe<UserPaymentMethod_Bool_Exp>;
  UserShopping?: Maybe<UserShopping_Bool_Exp>;
  _and?: Maybe<Array<Maybe<User_Bool_Exp>>>;
  _not?: Maybe<User_Bool_Exp>;
  _or?: Maybe<Array<Maybe<User_Bool_Exp>>>;
  email?: Maybe<String_Comparison_Exp>;
  firstName?: Maybe<Name_Comparison_Exp>;
  id?: Maybe<String_Comparison_Exp>;
  lastName?: Maybe<Name_Comparison_Exp>;
};

export enum User_Constraint {
  User_email_key = 'User_email_key',
  User_pkey = 'User_pkey'
}

export type User_Insert_Input = {
  UserCartItems?: Maybe<UserCartItem_Arr_Rel_Insert_Input>;
  UserFavoriteItems?: Maybe<UserFavoriteItem_Arr_Rel_Insert_Input>;
  UserOrders?: Maybe<UserOrder_Arr_Rel_Insert_Input>;
  UserPaymentMethod?: Maybe<UserPaymentMethod_Obj_Rel_Insert_Input>;
  UserShopping?: Maybe<UserShopping_Obj_Rel_Insert_Input>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['name']>;
  id?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['name']>;
};

export type User_Max_Fields = {
  __typename?: 'User_max_fields';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type User_Max_Order_By = {
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type User_Min_Fields = {
  __typename?: 'User_min_fields';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type User_Min_Order_By = {
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type User_Mutation_Response = {
  __typename?: 'User_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<User>;
};

export type User_Obj_Rel_Insert_Input = {
  data: User_Insert_Input;
  on_conflict?: Maybe<User_On_Conflict>;
};

export type User_On_Conflict = {
  constraint: User_Constraint;
  update_columns: Array<User_Update_Column>;
  where?: Maybe<User_Bool_Exp>;
};

export type User_Order_By = {
  UserCartItems_aggregate?: Maybe<UserCartItem_Aggregate_Order_By>;
  UserFavoriteItems_aggregate?: Maybe<UserFavoriteItem_Aggregate_Order_By>;
  UserOrders_aggregate?: Maybe<UserOrder_Aggregate_Order_By>;
  UserPaymentMethod?: Maybe<UserPaymentMethod_Order_By>;
  UserShopping?: Maybe<UserShopping_Order_By>;
  email?: Maybe<Order_By>;
  firstName?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lastName?: Maybe<Order_By>;
};

export type User_Pk_Columns_Input = {
  id: Scalars['String'];
};

export enum User_Select_Column {
  email = 'email',
  firstName = 'firstName',
  id = 'id',
  lastName = 'lastName'
}

export type User_Set_Input = {
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['name']>;
  id?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['name']>;
};

export enum User_Update_Column {
  email = 'email',
  firstName = 'firstName',
  id = 'id',
  lastName = 'lastName'
}

export type UserCartItem = {
  __typename?: 'UserCartItem';
  StoreItem: StoreItem;
  User: User;
  id: Scalars['uuid'];
  itemId: Scalars['String'];
  userId: Scalars['String'];
};

export type UserCartItem_Aggregate = {
  __typename?: 'UserCartItem_aggregate';
  aggregate?: Maybe<UserCartItem_Aggregate_Fields>;
  nodes: Array<UserCartItem>;
};

export type UserCartItem_Aggregate_Fields = {
  __typename?: 'UserCartItem_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<UserCartItem_Max_Fields>;
  min?: Maybe<UserCartItem_Min_Fields>;
};


export type UserCartItem_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<UserCartItem_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type UserCartItem_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<UserCartItem_Max_Order_By>;
  min?: Maybe<UserCartItem_Min_Order_By>;
};

export type UserCartItem_Arr_Rel_Insert_Input = {
  data: Array<UserCartItem_Insert_Input>;
  on_conflict?: Maybe<UserCartItem_On_Conflict>;
};

export type UserCartItem_Bool_Exp = {
  StoreItem?: Maybe<StoreItem_Bool_Exp>;
  User?: Maybe<User_Bool_Exp>;
  _and?: Maybe<Array<Maybe<UserCartItem_Bool_Exp>>>;
  _not?: Maybe<UserCartItem_Bool_Exp>;
  _or?: Maybe<Array<Maybe<UserCartItem_Bool_Exp>>>;
  id?: Maybe<Uuid_Comparison_Exp>;
  itemId?: Maybe<String_Comparison_Exp>;
  userId?: Maybe<String_Comparison_Exp>;
};

export enum UserCartItem_Constraint {
  UserCartItem_itemBarcodeId_key = 'UserCartItem_itemBarcodeId_key',
  UserCartItem_pkey = 'UserCartItem_pkey'
}

export type UserCartItem_Insert_Input = {
  StoreItem?: Maybe<StoreItem_Obj_Rel_Insert_Input>;
  User?: Maybe<User_Obj_Rel_Insert_Input>;
  id?: Maybe<Scalars['uuid']>;
  itemId?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type UserCartItem_Max_Fields = {
  __typename?: 'UserCartItem_max_fields';
  id?: Maybe<Scalars['uuid']>;
  itemId?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type UserCartItem_Max_Order_By = {
  id?: Maybe<Order_By>;
  itemId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

export type UserCartItem_Min_Fields = {
  __typename?: 'UserCartItem_min_fields';
  id?: Maybe<Scalars['uuid']>;
  itemId?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type UserCartItem_Min_Order_By = {
  id?: Maybe<Order_By>;
  itemId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

export type UserCartItem_Mutation_Response = {
  __typename?: 'UserCartItem_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<UserCartItem>;
};

export type UserCartItem_Obj_Rel_Insert_Input = {
  data: UserCartItem_Insert_Input;
  on_conflict?: Maybe<UserCartItem_On_Conflict>;
};

export type UserCartItem_On_Conflict = {
  constraint: UserCartItem_Constraint;
  update_columns: Array<UserCartItem_Update_Column>;
  where?: Maybe<UserCartItem_Bool_Exp>;
};

export type UserCartItem_Order_By = {
  StoreItem?: Maybe<StoreItem_Order_By>;
  User?: Maybe<User_Order_By>;
  id?: Maybe<Order_By>;
  itemId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

export type UserCartItem_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

export enum UserCartItem_Select_Column {
  id = 'id',
  itemId = 'itemId',
  userId = 'userId'
}

export type UserCartItem_Set_Input = {
  id?: Maybe<Scalars['uuid']>;
  itemId?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export enum UserCartItem_Update_Column {
  id = 'id',
  itemId = 'itemId',
  userId = 'userId'
}

export type UserFavoriteItem = {
  __typename?: 'UserFavoriteItem';
  StoreItem: StoreItem;
  User: User;
  id: Scalars['uuid'];
  itemId: Scalars['String'];
  userId: Scalars['String'];
};

export type UserFavoriteItem_Aggregate = {
  __typename?: 'UserFavoriteItem_aggregate';
  aggregate?: Maybe<UserFavoriteItem_Aggregate_Fields>;
  nodes: Array<UserFavoriteItem>;
};

export type UserFavoriteItem_Aggregate_Fields = {
  __typename?: 'UserFavoriteItem_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<UserFavoriteItem_Max_Fields>;
  min?: Maybe<UserFavoriteItem_Min_Fields>;
};


export type UserFavoriteItem_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<UserFavoriteItem_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type UserFavoriteItem_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<UserFavoriteItem_Max_Order_By>;
  min?: Maybe<UserFavoriteItem_Min_Order_By>;
};

export type UserFavoriteItem_Arr_Rel_Insert_Input = {
  data: Array<UserFavoriteItem_Insert_Input>;
  on_conflict?: Maybe<UserFavoriteItem_On_Conflict>;
};

export type UserFavoriteItem_Bool_Exp = {
  StoreItem?: Maybe<StoreItem_Bool_Exp>;
  User?: Maybe<User_Bool_Exp>;
  _and?: Maybe<Array<Maybe<UserFavoriteItem_Bool_Exp>>>;
  _not?: Maybe<UserFavoriteItem_Bool_Exp>;
  _or?: Maybe<Array<Maybe<UserFavoriteItem_Bool_Exp>>>;
  id?: Maybe<Uuid_Comparison_Exp>;
  itemId?: Maybe<String_Comparison_Exp>;
  userId?: Maybe<String_Comparison_Exp>;
};

export enum UserFavoriteItem_Constraint {
  UserFavoriteItem_itemId_key = 'UserFavoriteItem_itemId_key',
  UserFavoriteItem_pkey = 'UserFavoriteItem_pkey'
}

export type UserFavoriteItem_Insert_Input = {
  StoreItem?: Maybe<StoreItem_Obj_Rel_Insert_Input>;
  User?: Maybe<User_Obj_Rel_Insert_Input>;
  id?: Maybe<Scalars['uuid']>;
  itemId?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type UserFavoriteItem_Max_Fields = {
  __typename?: 'UserFavoriteItem_max_fields';
  id?: Maybe<Scalars['uuid']>;
  itemId?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type UserFavoriteItem_Max_Order_By = {
  id?: Maybe<Order_By>;
  itemId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

export type UserFavoriteItem_Min_Fields = {
  __typename?: 'UserFavoriteItem_min_fields';
  id?: Maybe<Scalars['uuid']>;
  itemId?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type UserFavoriteItem_Min_Order_By = {
  id?: Maybe<Order_By>;
  itemId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

export type UserFavoriteItem_Mutation_Response = {
  __typename?: 'UserFavoriteItem_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<UserFavoriteItem>;
};

export type UserFavoriteItem_Obj_Rel_Insert_Input = {
  data: UserFavoriteItem_Insert_Input;
  on_conflict?: Maybe<UserFavoriteItem_On_Conflict>;
};

export type UserFavoriteItem_On_Conflict = {
  constraint: UserFavoriteItem_Constraint;
  update_columns: Array<UserFavoriteItem_Update_Column>;
  where?: Maybe<UserFavoriteItem_Bool_Exp>;
};

export type UserFavoriteItem_Order_By = {
  StoreItem?: Maybe<StoreItem_Order_By>;
  User?: Maybe<User_Order_By>;
  id?: Maybe<Order_By>;
  itemId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

export type UserFavoriteItem_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

export enum UserFavoriteItem_Select_Column {
  id = 'id',
  itemId = 'itemId',
  userId = 'userId'
}

export type UserFavoriteItem_Set_Input = {
  id?: Maybe<Scalars['uuid']>;
  itemId?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export enum UserFavoriteItem_Update_Column {
  id = 'id',
  itemId = 'itemId',
  userId = 'userId'
}

export type UserOrder = {
  __typename?: 'UserOrder';
  StoreItems: Array<StoreItem>;
  StoreItems_aggregate: StoreItem_Aggregate;
  User: User;
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  userId: Scalars['String'];
};


export type UserOrderStoreItemsArgs = {
  distinct_on?: Maybe<Array<StoreItem_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<StoreItem_Order_By>>;
  where?: Maybe<StoreItem_Bool_Exp>;
};


export type UserOrderStoreItems_AggregateArgs = {
  distinct_on?: Maybe<Array<StoreItem_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<StoreItem_Order_By>>;
  where?: Maybe<StoreItem_Bool_Exp>;
};

export type UserOrder_Aggregate = {
  __typename?: 'UserOrder_aggregate';
  aggregate?: Maybe<UserOrder_Aggregate_Fields>;
  nodes: Array<UserOrder>;
};

export type UserOrder_Aggregate_Fields = {
  __typename?: 'UserOrder_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<UserOrder_Max_Fields>;
  min?: Maybe<UserOrder_Min_Fields>;
};


export type UserOrder_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<UserOrder_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type UserOrder_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<UserOrder_Max_Order_By>;
  min?: Maybe<UserOrder_Min_Order_By>;
};

export type UserOrder_Arr_Rel_Insert_Input = {
  data: Array<UserOrder_Insert_Input>;
  on_conflict?: Maybe<UserOrder_On_Conflict>;
};

export type UserOrder_Bool_Exp = {
  StoreItems?: Maybe<StoreItem_Bool_Exp>;
  User?: Maybe<User_Bool_Exp>;
  _and?: Maybe<Array<Maybe<UserOrder_Bool_Exp>>>;
  _not?: Maybe<UserOrder_Bool_Exp>;
  _or?: Maybe<Array<Maybe<UserOrder_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  userId?: Maybe<String_Comparison_Exp>;
};

export enum UserOrder_Constraint {
  UserOrder_pkey = 'UserOrder_pkey'
}

export type UserOrder_Insert_Input = {
  StoreItems?: Maybe<StoreItem_Arr_Rel_Insert_Input>;
  User?: Maybe<User_Obj_Rel_Insert_Input>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  userId?: Maybe<Scalars['String']>;
};

export type UserOrder_Max_Fields = {
  __typename?: 'UserOrder_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  userId?: Maybe<Scalars['String']>;
};

export type UserOrder_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

export type UserOrder_Min_Fields = {
  __typename?: 'UserOrder_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  userId?: Maybe<Scalars['String']>;
};

export type UserOrder_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

export type UserOrder_Mutation_Response = {
  __typename?: 'UserOrder_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<UserOrder>;
};

export type UserOrder_Obj_Rel_Insert_Input = {
  data: UserOrder_Insert_Input;
  on_conflict?: Maybe<UserOrder_On_Conflict>;
};

export type UserOrder_On_Conflict = {
  constraint: UserOrder_Constraint;
  update_columns: Array<UserOrder_Update_Column>;
  where?: Maybe<UserOrder_Bool_Exp>;
};

export type UserOrder_Order_By = {
  StoreItems_aggregate?: Maybe<StoreItem_Aggregate_Order_By>;
  User?: Maybe<User_Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

export type UserOrder_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

export enum UserOrder_Select_Column {
  created_at = 'created_at',
  id = 'id',
  userId = 'userId'
}

export type UserOrder_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  userId?: Maybe<Scalars['String']>;
};

export enum UserOrder_Update_Column {
  created_at = 'created_at',
  id = 'id',
  userId = 'userId'
}

export type UserPaymentMethod = {
  __typename?: 'UserPaymentMethod';
  User: User;
  cardName: Scalars['String'];
  cardNumber: Scalars['String'];
  expiryMonth: Scalars['String'];
  expiryYear: Scalars['String'];
  id: Scalars['uuid'];
  userId: Scalars['String'];
};

export type UserPaymentMethod_Aggregate = {
  __typename?: 'UserPaymentMethod_aggregate';
  aggregate?: Maybe<UserPaymentMethod_Aggregate_Fields>;
  nodes: Array<UserPaymentMethod>;
};

export type UserPaymentMethod_Aggregate_Fields = {
  __typename?: 'UserPaymentMethod_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<UserPaymentMethod_Max_Fields>;
  min?: Maybe<UserPaymentMethod_Min_Fields>;
};


export type UserPaymentMethod_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<UserPaymentMethod_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type UserPaymentMethod_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<UserPaymentMethod_Max_Order_By>;
  min?: Maybe<UserPaymentMethod_Min_Order_By>;
};

export type UserPaymentMethod_Arr_Rel_Insert_Input = {
  data: Array<UserPaymentMethod_Insert_Input>;
  on_conflict?: Maybe<UserPaymentMethod_On_Conflict>;
};

export type UserPaymentMethod_Bool_Exp = {
  User?: Maybe<User_Bool_Exp>;
  _and?: Maybe<Array<Maybe<UserPaymentMethod_Bool_Exp>>>;
  _not?: Maybe<UserPaymentMethod_Bool_Exp>;
  _or?: Maybe<Array<Maybe<UserPaymentMethod_Bool_Exp>>>;
  cardName?: Maybe<String_Comparison_Exp>;
  cardNumber?: Maybe<String_Comparison_Exp>;
  expiryMonth?: Maybe<String_Comparison_Exp>;
  expiryYear?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  userId?: Maybe<String_Comparison_Exp>;
};

export enum UserPaymentMethod_Constraint {
  UserPaymentMethod_pkey = 'UserPaymentMethod_pkey',
  UserPaymentMethod_userId_key = 'UserPaymentMethod_userId_key'
}

export type UserPaymentMethod_Insert_Input = {
  User?: Maybe<User_Obj_Rel_Insert_Input>;
  cardName?: Maybe<Scalars['String']>;
  cardNumber?: Maybe<Scalars['String']>;
  expiryMonth?: Maybe<Scalars['String']>;
  expiryYear?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  userId?: Maybe<Scalars['String']>;
};

export type UserPaymentMethod_Max_Fields = {
  __typename?: 'UserPaymentMethod_max_fields';
  cardName?: Maybe<Scalars['String']>;
  cardNumber?: Maybe<Scalars['String']>;
  expiryMonth?: Maybe<Scalars['String']>;
  expiryYear?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  userId?: Maybe<Scalars['String']>;
};

export type UserPaymentMethod_Max_Order_By = {
  cardName?: Maybe<Order_By>;
  cardNumber?: Maybe<Order_By>;
  expiryMonth?: Maybe<Order_By>;
  expiryYear?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

export type UserPaymentMethod_Min_Fields = {
  __typename?: 'UserPaymentMethod_min_fields';
  cardName?: Maybe<Scalars['String']>;
  cardNumber?: Maybe<Scalars['String']>;
  expiryMonth?: Maybe<Scalars['String']>;
  expiryYear?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  userId?: Maybe<Scalars['String']>;
};

export type UserPaymentMethod_Min_Order_By = {
  cardName?: Maybe<Order_By>;
  cardNumber?: Maybe<Order_By>;
  expiryMonth?: Maybe<Order_By>;
  expiryYear?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

export type UserPaymentMethod_Mutation_Response = {
  __typename?: 'UserPaymentMethod_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<UserPaymentMethod>;
};

export type UserPaymentMethod_Obj_Rel_Insert_Input = {
  data: UserPaymentMethod_Insert_Input;
  on_conflict?: Maybe<UserPaymentMethod_On_Conflict>;
};

export type UserPaymentMethod_On_Conflict = {
  constraint: UserPaymentMethod_Constraint;
  update_columns: Array<UserPaymentMethod_Update_Column>;
  where?: Maybe<UserPaymentMethod_Bool_Exp>;
};

export type UserPaymentMethod_Order_By = {
  User?: Maybe<User_Order_By>;
  cardName?: Maybe<Order_By>;
  cardNumber?: Maybe<Order_By>;
  expiryMonth?: Maybe<Order_By>;
  expiryYear?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

export type UserPaymentMethod_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

export enum UserPaymentMethod_Select_Column {
  cardName = 'cardName',
  cardNumber = 'cardNumber',
  expiryMonth = 'expiryMonth',
  expiryYear = 'expiryYear',
  id = 'id',
  userId = 'userId'
}

export type UserPaymentMethod_Set_Input = {
  cardName?: Maybe<Scalars['String']>;
  cardNumber?: Maybe<Scalars['String']>;
  expiryMonth?: Maybe<Scalars['String']>;
  expiryYear?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  userId?: Maybe<Scalars['String']>;
};

export enum UserPaymentMethod_Update_Column {
  cardName = 'cardName',
  cardNumber = 'cardNumber',
  expiryMonth = 'expiryMonth',
  expiryYear = 'expiryYear',
  id = 'id',
  userId = 'userId'
}

export type UserShopping = {
  __typename?: 'UserShopping';
  Store: Store;
  StoreItem?: Maybe<StoreItem>;
  User: User;
  id: Scalars['uuid'];
  lastItem?: Maybe<Scalars['String']>;
  storeId: Scalars['uuid'];
  updated_at?: Maybe<Scalars['timestamptz']>;
  userId: Scalars['String'];
};

export type UserShopping_Aggregate = {
  __typename?: 'UserShopping_aggregate';
  aggregate?: Maybe<UserShopping_Aggregate_Fields>;
  nodes: Array<UserShopping>;
};

export type UserShopping_Aggregate_Fields = {
  __typename?: 'UserShopping_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<UserShopping_Max_Fields>;
  min?: Maybe<UserShopping_Min_Fields>;
};


export type UserShopping_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<UserShopping_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type UserShopping_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<UserShopping_Max_Order_By>;
  min?: Maybe<UserShopping_Min_Order_By>;
};

export type UserShopping_Arr_Rel_Insert_Input = {
  data: Array<UserShopping_Insert_Input>;
  on_conflict?: Maybe<UserShopping_On_Conflict>;
};

export type UserShopping_Bool_Exp = {
  Store?: Maybe<Store_Bool_Exp>;
  StoreItem?: Maybe<StoreItem_Bool_Exp>;
  User?: Maybe<User_Bool_Exp>;
  _and?: Maybe<Array<Maybe<UserShopping_Bool_Exp>>>;
  _not?: Maybe<UserShopping_Bool_Exp>;
  _or?: Maybe<Array<Maybe<UserShopping_Bool_Exp>>>;
  id?: Maybe<Uuid_Comparison_Exp>;
  lastItem?: Maybe<String_Comparison_Exp>;
  storeId?: Maybe<Uuid_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  userId?: Maybe<String_Comparison_Exp>;
};

export enum UserShopping_Constraint {
  UserShopping_pkey = 'UserShopping_pkey',
  UserShopping_userId_key = 'UserShopping_userId_key'
}

export type UserShopping_Insert_Input = {
  Store?: Maybe<Store_Obj_Rel_Insert_Input>;
  StoreItem?: Maybe<StoreItem_Obj_Rel_Insert_Input>;
  User?: Maybe<User_Obj_Rel_Insert_Input>;
  id?: Maybe<Scalars['uuid']>;
  lastItem?: Maybe<Scalars['String']>;
  storeId?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['String']>;
};

export type UserShopping_Max_Fields = {
  __typename?: 'UserShopping_max_fields';
  id?: Maybe<Scalars['uuid']>;
  lastItem?: Maybe<Scalars['String']>;
  storeId?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['String']>;
};

export type UserShopping_Max_Order_By = {
  id?: Maybe<Order_By>;
  lastItem?: Maybe<Order_By>;
  storeId?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

export type UserShopping_Min_Fields = {
  __typename?: 'UserShopping_min_fields';
  id?: Maybe<Scalars['uuid']>;
  lastItem?: Maybe<Scalars['String']>;
  storeId?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['String']>;
};

export type UserShopping_Min_Order_By = {
  id?: Maybe<Order_By>;
  lastItem?: Maybe<Order_By>;
  storeId?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

export type UserShopping_Mutation_Response = {
  __typename?: 'UserShopping_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<UserShopping>;
};

export type UserShopping_Obj_Rel_Insert_Input = {
  data: UserShopping_Insert_Input;
  on_conflict?: Maybe<UserShopping_On_Conflict>;
};

export type UserShopping_On_Conflict = {
  constraint: UserShopping_Constraint;
  update_columns: Array<UserShopping_Update_Column>;
  where?: Maybe<UserShopping_Bool_Exp>;
};

export type UserShopping_Order_By = {
  Store?: Maybe<Store_Order_By>;
  StoreItem?: Maybe<StoreItem_Order_By>;
  User?: Maybe<User_Order_By>;
  id?: Maybe<Order_By>;
  lastItem?: Maybe<Order_By>;
  storeId?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

export type UserShopping_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

export enum UserShopping_Select_Column {
  id = 'id',
  lastItem = 'lastItem',
  storeId = 'storeId',
  updated_at = 'updated_at',
  userId = 'userId'
}

export type UserShopping_Set_Input = {
  id?: Maybe<Scalars['uuid']>;
  lastItem?: Maybe<Scalars['String']>;
  storeId?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['String']>;
};

export enum UserShopping_Update_Column {
  id = 'id',
  lastItem = 'lastItem',
  storeId = 'storeId',
  updated_at = 'updated_at',
  userId = 'userId'
}


export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};

export type PaymentInfoFragment = (
  { __typename?: 'UserPaymentMethod' }
  & Pick<UserPaymentMethod, 'id' | 'cardName' | 'cardNumber' | 'expiryYear' | 'expiryMonth'>
);

export type StorePreviewFragment = (
  { __typename?: 'Store' }
  & Pick<Store, 'id' | 'name'>
  & { StorePic?: Maybe<(
    { __typename?: 'StorePic' }
    & Pick<StorePic, 'size64'>
  )> }
);

export type MarkerInfoFragment = (
  { __typename?: 'Store' }
  & Pick<Store, 'address' | 'category' | 'location'>
  & StorePreviewFragment
);

export type StoreInfoFragment = (
  { __typename?: 'Store' }
  & Pick<Store, 'description'>
  & { StorePic?: Maybe<(
    { __typename?: 'StorePic' }
    & Pick<StorePic, 'size128'>
  )> }
  & MarkerInfoFragment
);

export type PopularItemInfoFragment = (
  { __typename?: 'StoreItem' }
  & Pick<StoreItem, 'id' | 'price' | 'longName' | 'barcodeId' | 'shortName'>
  & { StoreItemPic?: Maybe<(
    { __typename?: 'StoreItemPic' }
    & Pick<StoreItemPic, 'size64'>
  )>, Store: (
    { __typename?: 'Store' }
    & StorePreviewFragment
  ) }
);

export type StoreItemInfoFragment = (
  { __typename?: 'StoreItem' }
  & Pick<StoreItem, 'quantity' | 'description'>
  & { StoreItemPic?: Maybe<(
    { __typename?: 'StoreItemPic' }
    & Pick<StoreItemPic, 'size256'>
  )> }
  & PopularItemInfoFragment
);

export type UserInfoFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'email' | 'lastName' | 'firstName'>
  & { UserPaymentMethod?: Maybe<(
    { __typename?: 'UserPaymentMethod' }
    & PaymentInfoFragment
  )> }
);

export type UserCartItemInfoFragment = (
  { __typename?: 'UserCartItem' }
  & Pick<UserCartItem, 'id'>
  & { StoreItem: (
    { __typename?: 'StoreItem' }
    & StoreItemInfoFragment
  ) }
);

export type UserFavoriteItemInfoFragment = (
  { __typename?: 'UserFavoriteItem' }
  & Pick<UserFavoriteItem, 'id'>
  & { StoreItem: (
    { __typename?: 'StoreItem' }
    & StoreItemInfoFragment
  ) }
);

export type UserOrderInfoFragment = (
  { __typename?: 'UserOrder' }
  & Pick<UserOrder, 'id' | 'created_at'>
  & { StoreItems: Array<(
    { __typename?: 'StoreItem' }
    & PopularItemInfoFragment
  )> }
);

export type AddUserCartItemMutationVariables = Exact<{
  itemId: Scalars['String'];
  userId: Scalars['String'];
}>;


export type AddUserCartItemMutation = (
  { __typename?: 'mutation_root' }
  & { insert_UserCartItem_one?: Maybe<(
    { __typename?: 'UserCartItem' }
    & { StoreItem: (
      { __typename?: 'StoreItem' }
      & StoreItemInfoFragment
    ) }
  )> }
);

export type AddUserFavoriteItemMutationVariables = Exact<{
  itemId: Scalars['String'];
  userId: Scalars['String'];
}>;


export type AddUserFavoriteItemMutation = (
  { __typename?: 'mutation_root' }
  & { insert_UserFavoriteItem_one?: Maybe<(
    { __typename?: 'UserFavoriteItem' }
    & { StoreItem: (
      { __typename?: 'StoreItem' }
      & StoreItemInfoFragment
    ) }
  )> }
);

export type ClearUserCartItemsMutationVariables = Exact<{
  userId: Scalars['String'];
}>;


export type ClearUserCartItemsMutation = (
  { __typename?: 'mutation_root' }
  & { delete_UserCartItem?: Maybe<(
    { __typename?: 'UserCartItem_mutation_response' }
    & Pick<UserCartItem_Mutation_Response, 'affected_rows'>
  )> }
);

export type CreatePaymentMethodMutationVariables = Exact<{
  cardNumber: Scalars['String'];
  cardName: Scalars['String'];
  expiryMonth: Scalars['String'];
  expiryYear: Scalars['String'];
  userId: Scalars['String'];
}>;


export type CreatePaymentMethodMutation = (
  { __typename?: 'mutation_root' }
  & { insert_UserPaymentMethod_one?: Maybe<(
    { __typename?: 'UserPaymentMethod' }
    & Pick<UserPaymentMethod, 'id'>
  )> }
);

export type CreateUserMutationVariables = Exact<{
  id: Scalars['String'];
  email: Scalars['String'];
}>;


export type CreateUserMutation = (
  { __typename?: 'mutation_root' }
  & { insert_User_one?: Maybe<(
    { __typename?: 'User' }
    & UserInfoFragment
  )> }
);

export type CreateUserOrderMutationVariables = Exact<{
  userId: Scalars['String'];
}>;


export type CreateUserOrderMutation = (
  { __typename?: 'mutation_root' }
  & { insert_UserOrder_one?: Maybe<(
    { __typename?: 'UserOrder' }
    & UserOrderInfoFragment
  )> }
);

export type CreateUserShoppingMutationVariables = Exact<{
  userId: Scalars['String'];
  storeId: Scalars['uuid'];
}>;


export type CreateUserShoppingMutation = (
  { __typename?: 'mutation_root' }
  & { insert_UserShopping_one?: Maybe<(
    { __typename?: 'UserShopping' }
    & Pick<UserShopping, 'updated_at'>
  )> }
);

export type EditPaymentMethodMutationVariables = Exact<{
  cardNumber: Scalars['String'];
  cardName: Scalars['String'];
  expiryMonth: Scalars['String'];
  expiryYear: Scalars['String'];
  userId: Scalars['String'];
}>;


export type EditPaymentMethodMutation = (
  { __typename?: 'mutation_root' }
  & { update_UserPaymentMethod?: Maybe<(
    { __typename?: 'UserPaymentMethod_mutation_response' }
    & Pick<UserPaymentMethod_Mutation_Response, 'affected_rows'>
  )> }
);

export type InsertStoreItemMutationVariables = Exact<{
  shortName?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['String']>;
  price: Scalars['money'];
  longName: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  barcodeId: Scalars['String'];
}>;


export type InsertStoreItemMutation = (
  { __typename?: 'mutation_root' }
  & { insert_StoreItem_one?: Maybe<(
    { __typename?: 'StoreItem' }
    & StoreItemInfoFragment
  )> }
);

export type PurchaseStoreItemsMutationVariables = Exact<{
  itemBarcodes: Array<Scalars['String']>;
  orderId: Scalars['uuid'];
}>;


export type PurchaseStoreItemsMutation = (
  { __typename?: 'mutation_root' }
  & { update_StoreItem?: Maybe<(
    { __typename?: 'StoreItem_mutation_response' }
    & Pick<StoreItem_Mutation_Response, 'affected_rows'>
  )> }
);

export type RemoveUserCartItemMutationVariables = Exact<{
  itemId: Scalars['String'];
  userId: Scalars['String'];
}>;


export type RemoveUserCartItemMutation = (
  { __typename?: 'mutation_root' }
  & { delete_UserCartItem?: Maybe<(
    { __typename?: 'UserCartItem_mutation_response' }
    & Pick<UserCartItem_Mutation_Response, 'affected_rows'>
  )> }
);

export type RemoveUserFavoriteItemMutationVariables = Exact<{
  itemId: Scalars['String'];
  userId: Scalars['String'];
}>;


export type RemoveUserFavoriteItemMutation = (
  { __typename?: 'mutation_root' }
  & { delete_UserFavoriteItem?: Maybe<(
    { __typename?: 'UserFavoriteItem_mutation_response' }
    & Pick<UserFavoriteItem_Mutation_Response, 'affected_rows'>
  )> }
);

export type RemoveUserShoppingMutationVariables = Exact<{
  userId: Scalars['String'];
}>;


export type RemoveUserShoppingMutation = (
  { __typename?: 'mutation_root' }
  & { delete_UserShopping?: Maybe<(
    { __typename?: 'UserShopping_mutation_response' }
    & Pick<UserShopping_Mutation_Response, 'affected_rows'>
  )> }
);

export type UpdateUserNameMutationVariables = Exact<{
  id: Scalars['String'];
  firstName?: Maybe<Scalars['name']>;
  lastName?: Maybe<Scalars['name']>;
}>;


export type UpdateUserNameMutation = (
  { __typename?: 'mutation_root' }
  & { update_User?: Maybe<(
    { __typename?: 'User_mutation_response' }
    & Pick<User_Mutation_Response, 'affected_rows'>
  )> }
);

export type UpdateUserShoppingMutationVariables = Exact<{
  userId: Scalars['String'];
  lastItem: Scalars['String'];
}>;


export type UpdateUserShoppingMutation = (
  { __typename?: 'mutation_root' }
  & { update_UserShopping?: Maybe<(
    { __typename?: 'UserShopping_mutation_response' }
    & Pick<UserShopping_Mutation_Response, 'affected_rows'>
  )> }
);

export type CheckItemInCartQueryVariables = Exact<{
  itemId: Scalars['String'];
}>;


export type CheckItemInCartQuery = (
  { __typename?: 'query_root' }
  & { UserCartItem: Array<(
    { __typename?: 'UserCartItem' }
    & Pick<UserCartItem, 'id'>
    & { StoreItem: (
      { __typename?: 'StoreItem' }
      & StoreItemInfoFragment
    ) }
  )> }
);

export type CheckItemInFavoritesQueryVariables = Exact<{
  itemId: Scalars['String'];
}>;


export type CheckItemInFavoritesQuery = (
  { __typename?: 'query_root' }
  & { UserFavoriteItem: Array<(
    { __typename?: 'UserFavoriteItem' }
    & Pick<UserFavoriteItem, 'id'>
    & { StoreItem: (
      { __typename?: 'StoreItem' }
      & StoreItemInfoFragment
    ) }
  )> }
);

export type GetPopularItemsQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type GetPopularItemsQuery = (
  { __typename?: 'query_root' }
  & { Store_by_pk?: Maybe<(
    { __typename?: 'Store' }
    & { StoreItems: Array<(
      { __typename?: 'StoreItem' }
      & PopularItemInfoFragment
    )> }
  )> }
);

export type GetStoreInfoQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type GetStoreInfoQuery = (
  { __typename?: 'query_root' }
  & { Store_by_pk?: Maybe<(
    { __typename?: 'Store' }
    & StoreInfoFragment
  )> }
);

export type GetStoreItemQueryVariables = Exact<{
  barcodeId: Scalars['String'];
}>;


export type GetStoreItemQuery = (
  { __typename?: 'query_root' }
  & { StoreItem: Array<(
    { __typename?: 'StoreItem' }
    & StoreItemInfoFragment
  )> }
);

export type GetStoresQueryVariables = Exact<{ [key: string]: never; }>;


export type GetStoresQuery = (
  { __typename?: 'query_root' }
  & { Store: Array<(
    { __typename?: 'Store' }
    & MarkerInfoFragment
  )> }
);

export type GetUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserQuery = (
  { __typename?: 'query_root' }
  & { User: Array<(
    { __typename?: 'User' }
    & UserInfoFragment
  )> }
);

export type GetUserCartItemsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserCartItemsQuery = (
  { __typename?: 'query_root' }
  & { UserCartItem: Array<(
    { __typename?: 'UserCartItem' }
    & UserCartItemInfoFragment
  )> }
);

export type GetUserFavoriteItemsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserFavoriteItemsQuery = (
  { __typename?: 'query_root' }
  & { UserFavoriteItem: Array<(
    { __typename?: 'UserFavoriteItem' }
    & UserFavoriteItemInfoFragment
  )> }
);

export type GetUserOrdersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserOrdersQuery = (
  { __typename?: 'query_root' }
  & { UserOrder: Array<(
    { __typename?: 'UserOrder' }
    & UserOrderInfoFragment
  )> }
);

export type GetUserShoppingQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserShoppingQuery = (
  { __typename?: 'query_root' }
  & { UserShopping: Array<(
    { __typename?: 'UserShopping' }
    & Pick<UserShopping, 'storeId' | 'updated_at'>
  )> }
);

export const StorePreviewFragmentDoc = gql`
    fragment StorePreview on Store {
  id
  name
  StorePic {
    size64
  }
}
    `;
export const MarkerInfoFragmentDoc = gql`
    fragment MarkerInfo on Store {
  address
  category
  location
  ...StorePreview
}
    ${StorePreviewFragmentDoc}`;
export const StoreInfoFragmentDoc = gql`
    fragment StoreInfo on Store {
  description
  StorePic {
    size128
  }
  ...MarkerInfo
}
    ${MarkerInfoFragmentDoc}`;
export const PaymentInfoFragmentDoc = gql`
    fragment PaymentInfo on UserPaymentMethod {
  id
  cardName
  cardNumber
  expiryYear
  expiryMonth
}
    `;
export const UserInfoFragmentDoc = gql`
    fragment UserInfo on User {
  id
  email
  lastName
  firstName
  UserPaymentMethod {
    ...PaymentInfo
  }
}
    ${PaymentInfoFragmentDoc}`;
export const PopularItemInfoFragmentDoc = gql`
    fragment PopularItemInfo on StoreItem {
  id
  price
  longName
  barcodeId
  shortName
  StoreItemPic {
    size64
  }
  Store {
    ...StorePreview
  }
}
    ${StorePreviewFragmentDoc}`;
export const StoreItemInfoFragmentDoc = gql`
    fragment StoreItemInfo on StoreItem {
  quantity
  description
  StoreItemPic {
    size256
  }
  ...PopularItemInfo
}
    ${PopularItemInfoFragmentDoc}`;
export const UserCartItemInfoFragmentDoc = gql`
    fragment UserCartItemInfo on UserCartItem {
  id
  StoreItem {
    ...StoreItemInfo
  }
}
    ${StoreItemInfoFragmentDoc}`;
export const UserFavoriteItemInfoFragmentDoc = gql`
    fragment UserFavoriteItemInfo on UserFavoriteItem {
  id
  StoreItem {
    ...StoreItemInfo
  }
}
    ${StoreItemInfoFragmentDoc}`;
export const UserOrderInfoFragmentDoc = gql`
    fragment UserOrderInfo on UserOrder {
  id
  created_at
  StoreItems {
    ...PopularItemInfo
  }
}
    ${PopularItemInfoFragmentDoc}`;
export const AddUserCartItemDocument = gql`
    mutation AddUserCartItem($itemId: String!, $userId: String!) {
  insert_UserCartItem_one(object: {itemId: $itemId, userId: $userId}) {
    StoreItem {
      ...StoreItemInfo
    }
  }
}
    ${StoreItemInfoFragmentDoc}`;
export type AddUserCartItemMutationFn = Apollo.MutationFunction<AddUserCartItemMutation, AddUserCartItemMutationVariables>;

/**
 * __useAddUserCartItemMutation__
 *
 * To run a mutation, you first call `useAddUserCartItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddUserCartItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addUserCartItemMutation, { data, loading, error }] = useAddUserCartItemMutation({
 *   variables: {
 *      itemId: // value for 'itemId'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useAddUserCartItemMutation(baseOptions?: Apollo.MutationHookOptions<AddUserCartItemMutation, AddUserCartItemMutationVariables>) {
        return Apollo.useMutation<AddUserCartItemMutation, AddUserCartItemMutationVariables>(AddUserCartItemDocument, baseOptions);
      }
export type AddUserCartItemMutationHookResult = ReturnType<typeof useAddUserCartItemMutation>;
export type AddUserCartItemMutationResult = Apollo.MutationResult<AddUserCartItemMutation>;
export type AddUserCartItemMutationOptions = Apollo.BaseMutationOptions<AddUserCartItemMutation, AddUserCartItemMutationVariables>;
export const AddUserFavoriteItemDocument = gql`
    mutation AddUserFavoriteItem($itemId: String!, $userId: String!) {
  insert_UserFavoriteItem_one(object: {itemId: $itemId, userId: $userId}) {
    StoreItem {
      ...StoreItemInfo
    }
  }
}
    ${StoreItemInfoFragmentDoc}`;
export type AddUserFavoriteItemMutationFn = Apollo.MutationFunction<AddUserFavoriteItemMutation, AddUserFavoriteItemMutationVariables>;

/**
 * __useAddUserFavoriteItemMutation__
 *
 * To run a mutation, you first call `useAddUserFavoriteItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddUserFavoriteItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addUserFavoriteItemMutation, { data, loading, error }] = useAddUserFavoriteItemMutation({
 *   variables: {
 *      itemId: // value for 'itemId'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useAddUserFavoriteItemMutation(baseOptions?: Apollo.MutationHookOptions<AddUserFavoriteItemMutation, AddUserFavoriteItemMutationVariables>) {
        return Apollo.useMutation<AddUserFavoriteItemMutation, AddUserFavoriteItemMutationVariables>(AddUserFavoriteItemDocument, baseOptions);
      }
export type AddUserFavoriteItemMutationHookResult = ReturnType<typeof useAddUserFavoriteItemMutation>;
export type AddUserFavoriteItemMutationResult = Apollo.MutationResult<AddUserFavoriteItemMutation>;
export type AddUserFavoriteItemMutationOptions = Apollo.BaseMutationOptions<AddUserFavoriteItemMutation, AddUserFavoriteItemMutationVariables>;
export const ClearUserCartItemsDocument = gql`
    mutation ClearUserCartItems($userId: String!) {
  delete_UserCartItem(where: {userId: {_eq: $userId}}) {
    affected_rows
  }
}
    `;
export type ClearUserCartItemsMutationFn = Apollo.MutationFunction<ClearUserCartItemsMutation, ClearUserCartItemsMutationVariables>;

/**
 * __useClearUserCartItemsMutation__
 *
 * To run a mutation, you first call `useClearUserCartItemsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useClearUserCartItemsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [clearUserCartItemsMutation, { data, loading, error }] = useClearUserCartItemsMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useClearUserCartItemsMutation(baseOptions?: Apollo.MutationHookOptions<ClearUserCartItemsMutation, ClearUserCartItemsMutationVariables>) {
        return Apollo.useMutation<ClearUserCartItemsMutation, ClearUserCartItemsMutationVariables>(ClearUserCartItemsDocument, baseOptions);
      }
export type ClearUserCartItemsMutationHookResult = ReturnType<typeof useClearUserCartItemsMutation>;
export type ClearUserCartItemsMutationResult = Apollo.MutationResult<ClearUserCartItemsMutation>;
export type ClearUserCartItemsMutationOptions = Apollo.BaseMutationOptions<ClearUserCartItemsMutation, ClearUserCartItemsMutationVariables>;
export const CreatePaymentMethodDocument = gql`
    mutation CreatePaymentMethod($cardNumber: String!, $cardName: String!, $expiryMonth: String!, $expiryYear: String!, $userId: String!) {
  insert_UserPaymentMethod_one(
    object: {cardNumber: $cardNumber, cardName: $cardName, expiryMonth: $expiryMonth, expiryYear: $expiryYear, userId: $userId}
  ) {
    id
  }
}
    `;
export type CreatePaymentMethodMutationFn = Apollo.MutationFunction<CreatePaymentMethodMutation, CreatePaymentMethodMutationVariables>;

/**
 * __useCreatePaymentMethodMutation__
 *
 * To run a mutation, you first call `useCreatePaymentMethodMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePaymentMethodMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPaymentMethodMutation, { data, loading, error }] = useCreatePaymentMethodMutation({
 *   variables: {
 *      cardNumber: // value for 'cardNumber'
 *      cardName: // value for 'cardName'
 *      expiryMonth: // value for 'expiryMonth'
 *      expiryYear: // value for 'expiryYear'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useCreatePaymentMethodMutation(baseOptions?: Apollo.MutationHookOptions<CreatePaymentMethodMutation, CreatePaymentMethodMutationVariables>) {
        return Apollo.useMutation<CreatePaymentMethodMutation, CreatePaymentMethodMutationVariables>(CreatePaymentMethodDocument, baseOptions);
      }
export type CreatePaymentMethodMutationHookResult = ReturnType<typeof useCreatePaymentMethodMutation>;
export type CreatePaymentMethodMutationResult = Apollo.MutationResult<CreatePaymentMethodMutation>;
export type CreatePaymentMethodMutationOptions = Apollo.BaseMutationOptions<CreatePaymentMethodMutation, CreatePaymentMethodMutationVariables>;
export const CreateUserDocument = gql`
    mutation CreateUser($id: String!, $email: String!) {
  insert_User_one(object: {id: $id, email: $email}) {
    ...UserInfo
  }
}
    ${UserInfoFragmentDoc}`;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, baseOptions);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const CreateUserOrderDocument = gql`
    mutation CreateUserOrder($userId: String!) {
  insert_UserOrder_one(object: {userId: $userId}) {
    ...UserOrderInfo
  }
}
    ${UserOrderInfoFragmentDoc}`;
export type CreateUserOrderMutationFn = Apollo.MutationFunction<CreateUserOrderMutation, CreateUserOrderMutationVariables>;

/**
 * __useCreateUserOrderMutation__
 *
 * To run a mutation, you first call `useCreateUserOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserOrderMutation, { data, loading, error }] = useCreateUserOrderMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useCreateUserOrderMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserOrderMutation, CreateUserOrderMutationVariables>) {
        return Apollo.useMutation<CreateUserOrderMutation, CreateUserOrderMutationVariables>(CreateUserOrderDocument, baseOptions);
      }
export type CreateUserOrderMutationHookResult = ReturnType<typeof useCreateUserOrderMutation>;
export type CreateUserOrderMutationResult = Apollo.MutationResult<CreateUserOrderMutation>;
export type CreateUserOrderMutationOptions = Apollo.BaseMutationOptions<CreateUserOrderMutation, CreateUserOrderMutationVariables>;
export const CreateUserShoppingDocument = gql`
    mutation CreateUserShopping($userId: String!, $storeId: uuid!) {
  insert_UserShopping_one(object: {userId: $userId, storeId: $storeId}) {
    updated_at
  }
}
    `;
export type CreateUserShoppingMutationFn = Apollo.MutationFunction<CreateUserShoppingMutation, CreateUserShoppingMutationVariables>;

/**
 * __useCreateUserShoppingMutation__
 *
 * To run a mutation, you first call `useCreateUserShoppingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserShoppingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserShoppingMutation, { data, loading, error }] = useCreateUserShoppingMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      storeId: // value for 'storeId'
 *   },
 * });
 */
export function useCreateUserShoppingMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserShoppingMutation, CreateUserShoppingMutationVariables>) {
        return Apollo.useMutation<CreateUserShoppingMutation, CreateUserShoppingMutationVariables>(CreateUserShoppingDocument, baseOptions);
      }
export type CreateUserShoppingMutationHookResult = ReturnType<typeof useCreateUserShoppingMutation>;
export type CreateUserShoppingMutationResult = Apollo.MutationResult<CreateUserShoppingMutation>;
export type CreateUserShoppingMutationOptions = Apollo.BaseMutationOptions<CreateUserShoppingMutation, CreateUserShoppingMutationVariables>;
export const EditPaymentMethodDocument = gql`
    mutation EditPaymentMethod($cardNumber: String!, $cardName: String!, $expiryMonth: String!, $expiryYear: String!, $userId: String!) {
  update_UserPaymentMethod(
    _set: {expiryYear: $expiryYear, expiryMonth: $expiryMonth, cardNumber: $cardNumber, cardName: $cardName}
    where: {userId: {_eq: $userId}}
  ) {
    affected_rows
  }
}
    `;
export type EditPaymentMethodMutationFn = Apollo.MutationFunction<EditPaymentMethodMutation, EditPaymentMethodMutationVariables>;

/**
 * __useEditPaymentMethodMutation__
 *
 * To run a mutation, you first call `useEditPaymentMethodMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditPaymentMethodMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editPaymentMethodMutation, { data, loading, error }] = useEditPaymentMethodMutation({
 *   variables: {
 *      cardNumber: // value for 'cardNumber'
 *      cardName: // value for 'cardName'
 *      expiryMonth: // value for 'expiryMonth'
 *      expiryYear: // value for 'expiryYear'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useEditPaymentMethodMutation(baseOptions?: Apollo.MutationHookOptions<EditPaymentMethodMutation, EditPaymentMethodMutationVariables>) {
        return Apollo.useMutation<EditPaymentMethodMutation, EditPaymentMethodMutationVariables>(EditPaymentMethodDocument, baseOptions);
      }
export type EditPaymentMethodMutationHookResult = ReturnType<typeof useEditPaymentMethodMutation>;
export type EditPaymentMethodMutationResult = Apollo.MutationResult<EditPaymentMethodMutation>;
export type EditPaymentMethodMutationOptions = Apollo.BaseMutationOptions<EditPaymentMethodMutation, EditPaymentMethodMutationVariables>;
export const InsertStoreItemDocument = gql`
    mutation InsertStoreItem($shortName: String, $quantity: String, $price: money!, $longName: String!, $description: String, $barcodeId: String!) {
  insert_StoreItem_one(
    object: {shortName: $shortName, quantity: $quantity, price: $price, longName: $longName, description: $description, barcodeId: $barcodeId, storeId: "3aa81470-9fad-4ca7-b3b6-676ee0b1a42c"}
  ) {
    ...StoreItemInfo
  }
}
    ${StoreItemInfoFragmentDoc}`;
export type InsertStoreItemMutationFn = Apollo.MutationFunction<InsertStoreItemMutation, InsertStoreItemMutationVariables>;

/**
 * __useInsertStoreItemMutation__
 *
 * To run a mutation, you first call `useInsertStoreItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertStoreItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertStoreItemMutation, { data, loading, error }] = useInsertStoreItemMutation({
 *   variables: {
 *      shortName: // value for 'shortName'
 *      quantity: // value for 'quantity'
 *      price: // value for 'price'
 *      longName: // value for 'longName'
 *      description: // value for 'description'
 *      barcodeId: // value for 'barcodeId'
 *   },
 * });
 */
export function useInsertStoreItemMutation(baseOptions?: Apollo.MutationHookOptions<InsertStoreItemMutation, InsertStoreItemMutationVariables>) {
        return Apollo.useMutation<InsertStoreItemMutation, InsertStoreItemMutationVariables>(InsertStoreItemDocument, baseOptions);
      }
export type InsertStoreItemMutationHookResult = ReturnType<typeof useInsertStoreItemMutation>;
export type InsertStoreItemMutationResult = Apollo.MutationResult<InsertStoreItemMutation>;
export type InsertStoreItemMutationOptions = Apollo.BaseMutationOptions<InsertStoreItemMutation, InsertStoreItemMutationVariables>;
export const PurchaseStoreItemsDocument = gql`
    mutation PurchaseStoreItems($itemBarcodes: [String!]!, $orderId: uuid!) {
  update_StoreItem(
    where: {barcodeId: {_in: $itemBarcodes}}
    _set: {purchased: true, orderId: $orderId}
  ) {
    affected_rows
  }
}
    `;
export type PurchaseStoreItemsMutationFn = Apollo.MutationFunction<PurchaseStoreItemsMutation, PurchaseStoreItemsMutationVariables>;

/**
 * __usePurchaseStoreItemsMutation__
 *
 * To run a mutation, you first call `usePurchaseStoreItemsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePurchaseStoreItemsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [purchaseStoreItemsMutation, { data, loading, error }] = usePurchaseStoreItemsMutation({
 *   variables: {
 *      itemBarcodes: // value for 'itemBarcodes'
 *      orderId: // value for 'orderId'
 *   },
 * });
 */
export function usePurchaseStoreItemsMutation(baseOptions?: Apollo.MutationHookOptions<PurchaseStoreItemsMutation, PurchaseStoreItemsMutationVariables>) {
        return Apollo.useMutation<PurchaseStoreItemsMutation, PurchaseStoreItemsMutationVariables>(PurchaseStoreItemsDocument, baseOptions);
      }
export type PurchaseStoreItemsMutationHookResult = ReturnType<typeof usePurchaseStoreItemsMutation>;
export type PurchaseStoreItemsMutationResult = Apollo.MutationResult<PurchaseStoreItemsMutation>;
export type PurchaseStoreItemsMutationOptions = Apollo.BaseMutationOptions<PurchaseStoreItemsMutation, PurchaseStoreItemsMutationVariables>;
export const RemoveUserCartItemDocument = gql`
    mutation RemoveUserCartItem($itemId: String!, $userId: String!) {
  delete_UserCartItem(where: {itemId: {_eq: $itemId}, userId: {_eq: $userId}}) {
    affected_rows
  }
}
    `;
export type RemoveUserCartItemMutationFn = Apollo.MutationFunction<RemoveUserCartItemMutation, RemoveUserCartItemMutationVariables>;

/**
 * __useRemoveUserCartItemMutation__
 *
 * To run a mutation, you first call `useRemoveUserCartItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveUserCartItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeUserCartItemMutation, { data, loading, error }] = useRemoveUserCartItemMutation({
 *   variables: {
 *      itemId: // value for 'itemId'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useRemoveUserCartItemMutation(baseOptions?: Apollo.MutationHookOptions<RemoveUserCartItemMutation, RemoveUserCartItemMutationVariables>) {
        return Apollo.useMutation<RemoveUserCartItemMutation, RemoveUserCartItemMutationVariables>(RemoveUserCartItemDocument, baseOptions);
      }
export type RemoveUserCartItemMutationHookResult = ReturnType<typeof useRemoveUserCartItemMutation>;
export type RemoveUserCartItemMutationResult = Apollo.MutationResult<RemoveUserCartItemMutation>;
export type RemoveUserCartItemMutationOptions = Apollo.BaseMutationOptions<RemoveUserCartItemMutation, RemoveUserCartItemMutationVariables>;
export const RemoveUserFavoriteItemDocument = gql`
    mutation RemoveUserFavoriteItem($itemId: String!, $userId: String!) {
  delete_UserFavoriteItem(where: {itemId: {_eq: $itemId}, userId: {_eq: $userId}}) {
    affected_rows
  }
}
    `;
export type RemoveUserFavoriteItemMutationFn = Apollo.MutationFunction<RemoveUserFavoriteItemMutation, RemoveUserFavoriteItemMutationVariables>;

/**
 * __useRemoveUserFavoriteItemMutation__
 *
 * To run a mutation, you first call `useRemoveUserFavoriteItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveUserFavoriteItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeUserFavoriteItemMutation, { data, loading, error }] = useRemoveUserFavoriteItemMutation({
 *   variables: {
 *      itemId: // value for 'itemId'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useRemoveUserFavoriteItemMutation(baseOptions?: Apollo.MutationHookOptions<RemoveUserFavoriteItemMutation, RemoveUserFavoriteItemMutationVariables>) {
        return Apollo.useMutation<RemoveUserFavoriteItemMutation, RemoveUserFavoriteItemMutationVariables>(RemoveUserFavoriteItemDocument, baseOptions);
      }
export type RemoveUserFavoriteItemMutationHookResult = ReturnType<typeof useRemoveUserFavoriteItemMutation>;
export type RemoveUserFavoriteItemMutationResult = Apollo.MutationResult<RemoveUserFavoriteItemMutation>;
export type RemoveUserFavoriteItemMutationOptions = Apollo.BaseMutationOptions<RemoveUserFavoriteItemMutation, RemoveUserFavoriteItemMutationVariables>;
export const RemoveUserShoppingDocument = gql`
    mutation RemoveUserShopping($userId: String!) {
  delete_UserShopping(where: {userId: {_eq: $userId}}) {
    affected_rows
  }
}
    `;
export type RemoveUserShoppingMutationFn = Apollo.MutationFunction<RemoveUserShoppingMutation, RemoveUserShoppingMutationVariables>;

/**
 * __useRemoveUserShoppingMutation__
 *
 * To run a mutation, you first call `useRemoveUserShoppingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveUserShoppingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeUserShoppingMutation, { data, loading, error }] = useRemoveUserShoppingMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useRemoveUserShoppingMutation(baseOptions?: Apollo.MutationHookOptions<RemoveUserShoppingMutation, RemoveUserShoppingMutationVariables>) {
        return Apollo.useMutation<RemoveUserShoppingMutation, RemoveUserShoppingMutationVariables>(RemoveUserShoppingDocument, baseOptions);
      }
export type RemoveUserShoppingMutationHookResult = ReturnType<typeof useRemoveUserShoppingMutation>;
export type RemoveUserShoppingMutationResult = Apollo.MutationResult<RemoveUserShoppingMutation>;
export type RemoveUserShoppingMutationOptions = Apollo.BaseMutationOptions<RemoveUserShoppingMutation, RemoveUserShoppingMutationVariables>;
export const UpdateUserNameDocument = gql`
    mutation UpdateUserName($id: String!, $firstName: name, $lastName: name) {
  update_User(
    where: {id: {_eq: $id}}
    _set: {firstName: $firstName, lastName: $lastName}
  ) {
    affected_rows
  }
}
    `;
export type UpdateUserNameMutationFn = Apollo.MutationFunction<UpdateUserNameMutation, UpdateUserNameMutationVariables>;

/**
 * __useUpdateUserNameMutation__
 *
 * To run a mutation, you first call `useUpdateUserNameMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserNameMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserNameMutation, { data, loading, error }] = useUpdateUserNameMutation({
 *   variables: {
 *      id: // value for 'id'
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *   },
 * });
 */
export function useUpdateUserNameMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserNameMutation, UpdateUserNameMutationVariables>) {
        return Apollo.useMutation<UpdateUserNameMutation, UpdateUserNameMutationVariables>(UpdateUserNameDocument, baseOptions);
      }
export type UpdateUserNameMutationHookResult = ReturnType<typeof useUpdateUserNameMutation>;
export type UpdateUserNameMutationResult = Apollo.MutationResult<UpdateUserNameMutation>;
export type UpdateUserNameMutationOptions = Apollo.BaseMutationOptions<UpdateUserNameMutation, UpdateUserNameMutationVariables>;
export const UpdateUserShoppingDocument = gql`
    mutation UpdateUserShopping($userId: String!, $lastItem: String!) {
  update_UserShopping(
    _set: {lastItem: $lastItem}
    where: {userId: {_eq: $userId}}
  ) {
    affected_rows
  }
}
    `;
export type UpdateUserShoppingMutationFn = Apollo.MutationFunction<UpdateUserShoppingMutation, UpdateUserShoppingMutationVariables>;

/**
 * __useUpdateUserShoppingMutation__
 *
 * To run a mutation, you first call `useUpdateUserShoppingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserShoppingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserShoppingMutation, { data, loading, error }] = useUpdateUserShoppingMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      lastItem: // value for 'lastItem'
 *   },
 * });
 */
export function useUpdateUserShoppingMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserShoppingMutation, UpdateUserShoppingMutationVariables>) {
        return Apollo.useMutation<UpdateUserShoppingMutation, UpdateUserShoppingMutationVariables>(UpdateUserShoppingDocument, baseOptions);
      }
export type UpdateUserShoppingMutationHookResult = ReturnType<typeof useUpdateUserShoppingMutation>;
export type UpdateUserShoppingMutationResult = Apollo.MutationResult<UpdateUserShoppingMutation>;
export type UpdateUserShoppingMutationOptions = Apollo.BaseMutationOptions<UpdateUserShoppingMutation, UpdateUserShoppingMutationVariables>;
export const CheckItemInCartDocument = gql`
    query CheckItemInCart($itemId: String!) {
  UserCartItem(where: {itemId: {_eq: $itemId}}) {
    id
    StoreItem {
      ...StoreItemInfo
    }
  }
}
    ${StoreItemInfoFragmentDoc}`;

/**
 * __useCheckItemInCartQuery__
 *
 * To run a query within a React component, call `useCheckItemInCartQuery` and pass it any options that fit your needs.
 * When your component renders, `useCheckItemInCartQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCheckItemInCartQuery({
 *   variables: {
 *      itemId: // value for 'itemId'
 *   },
 * });
 */
export function useCheckItemInCartQuery(baseOptions?: Apollo.QueryHookOptions<CheckItemInCartQuery, CheckItemInCartQueryVariables>) {
        return Apollo.useQuery<CheckItemInCartQuery, CheckItemInCartQueryVariables>(CheckItemInCartDocument, baseOptions);
      }
export function useCheckItemInCartLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CheckItemInCartQuery, CheckItemInCartQueryVariables>) {
          return Apollo.useLazyQuery<CheckItemInCartQuery, CheckItemInCartQueryVariables>(CheckItemInCartDocument, baseOptions);
        }
export type CheckItemInCartQueryHookResult = ReturnType<typeof useCheckItemInCartQuery>;
export type CheckItemInCartLazyQueryHookResult = ReturnType<typeof useCheckItemInCartLazyQuery>;
export type CheckItemInCartQueryResult = Apollo.QueryResult<CheckItemInCartQuery, CheckItemInCartQueryVariables>;
export function refetchCheckItemInCartQuery(variables?: CheckItemInCartQueryVariables) {
      return { query: CheckItemInCartDocument, variables: variables }
    }
export const CheckItemInFavoritesDocument = gql`
    query CheckItemInFavorites($itemId: String!) {
  UserFavoriteItem(where: {itemId: {_eq: $itemId}}) {
    id
    StoreItem {
      ...StoreItemInfo
    }
  }
}
    ${StoreItemInfoFragmentDoc}`;

/**
 * __useCheckItemInFavoritesQuery__
 *
 * To run a query within a React component, call `useCheckItemInFavoritesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCheckItemInFavoritesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCheckItemInFavoritesQuery({
 *   variables: {
 *      itemId: // value for 'itemId'
 *   },
 * });
 */
export function useCheckItemInFavoritesQuery(baseOptions?: Apollo.QueryHookOptions<CheckItemInFavoritesQuery, CheckItemInFavoritesQueryVariables>) {
        return Apollo.useQuery<CheckItemInFavoritesQuery, CheckItemInFavoritesQueryVariables>(CheckItemInFavoritesDocument, baseOptions);
      }
export function useCheckItemInFavoritesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CheckItemInFavoritesQuery, CheckItemInFavoritesQueryVariables>) {
          return Apollo.useLazyQuery<CheckItemInFavoritesQuery, CheckItemInFavoritesQueryVariables>(CheckItemInFavoritesDocument, baseOptions);
        }
export type CheckItemInFavoritesQueryHookResult = ReturnType<typeof useCheckItemInFavoritesQuery>;
export type CheckItemInFavoritesLazyQueryHookResult = ReturnType<typeof useCheckItemInFavoritesLazyQuery>;
export type CheckItemInFavoritesQueryResult = Apollo.QueryResult<CheckItemInFavoritesQuery, CheckItemInFavoritesQueryVariables>;
export function refetchCheckItemInFavoritesQuery(variables?: CheckItemInFavoritesQueryVariables) {
      return { query: CheckItemInFavoritesDocument, variables: variables }
    }
export const GetPopularItemsDocument = gql`
    query GetPopularItems($id: uuid!) {
  Store_by_pk(id: $id) {
    StoreItems(order_by: {longName: asc}, where: {purchased: {_eq: true}}) {
      ...PopularItemInfo
    }
  }
}
    ${PopularItemInfoFragmentDoc}`;

/**
 * __useGetPopularItemsQuery__
 *
 * To run a query within a React component, call `useGetPopularItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPopularItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPopularItemsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPopularItemsQuery(baseOptions?: Apollo.QueryHookOptions<GetPopularItemsQuery, GetPopularItemsQueryVariables>) {
        return Apollo.useQuery<GetPopularItemsQuery, GetPopularItemsQueryVariables>(GetPopularItemsDocument, baseOptions);
      }
export function useGetPopularItemsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPopularItemsQuery, GetPopularItemsQueryVariables>) {
          return Apollo.useLazyQuery<GetPopularItemsQuery, GetPopularItemsQueryVariables>(GetPopularItemsDocument, baseOptions);
        }
export type GetPopularItemsQueryHookResult = ReturnType<typeof useGetPopularItemsQuery>;
export type GetPopularItemsLazyQueryHookResult = ReturnType<typeof useGetPopularItemsLazyQuery>;
export type GetPopularItemsQueryResult = Apollo.QueryResult<GetPopularItemsQuery, GetPopularItemsQueryVariables>;
export function refetchGetPopularItemsQuery(variables?: GetPopularItemsQueryVariables) {
      return { query: GetPopularItemsDocument, variables: variables }
    }
export const GetStoreInfoDocument = gql`
    query GetStoreInfo($id: uuid!) {
  Store_by_pk(id: $id) {
    ...StoreInfo
  }
}
    ${StoreInfoFragmentDoc}`;

/**
 * __useGetStoreInfoQuery__
 *
 * To run a query within a React component, call `useGetStoreInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStoreInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStoreInfoQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetStoreInfoQuery(baseOptions?: Apollo.QueryHookOptions<GetStoreInfoQuery, GetStoreInfoQueryVariables>) {
        return Apollo.useQuery<GetStoreInfoQuery, GetStoreInfoQueryVariables>(GetStoreInfoDocument, baseOptions);
      }
export function useGetStoreInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStoreInfoQuery, GetStoreInfoQueryVariables>) {
          return Apollo.useLazyQuery<GetStoreInfoQuery, GetStoreInfoQueryVariables>(GetStoreInfoDocument, baseOptions);
        }
export type GetStoreInfoQueryHookResult = ReturnType<typeof useGetStoreInfoQuery>;
export type GetStoreInfoLazyQueryHookResult = ReturnType<typeof useGetStoreInfoLazyQuery>;
export type GetStoreInfoQueryResult = Apollo.QueryResult<GetStoreInfoQuery, GetStoreInfoQueryVariables>;
export function refetchGetStoreInfoQuery(variables?: GetStoreInfoQueryVariables) {
      return { query: GetStoreInfoDocument, variables: variables }
    }
export const GetStoreItemDocument = gql`
    query GetStoreItem($barcodeId: String!) {
  StoreItem(where: {barcodeId: {_eq: $barcodeId}}, order_by: {purchased: desc}) {
    ...StoreItemInfo
  }
}
    ${StoreItemInfoFragmentDoc}`;

/**
 * __useGetStoreItemQuery__
 *
 * To run a query within a React component, call `useGetStoreItemQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStoreItemQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStoreItemQuery({
 *   variables: {
 *      barcodeId: // value for 'barcodeId'
 *   },
 * });
 */
export function useGetStoreItemQuery(baseOptions?: Apollo.QueryHookOptions<GetStoreItemQuery, GetStoreItemQueryVariables>) {
        return Apollo.useQuery<GetStoreItemQuery, GetStoreItemQueryVariables>(GetStoreItemDocument, baseOptions);
      }
export function useGetStoreItemLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStoreItemQuery, GetStoreItemQueryVariables>) {
          return Apollo.useLazyQuery<GetStoreItemQuery, GetStoreItemQueryVariables>(GetStoreItemDocument, baseOptions);
        }
export type GetStoreItemQueryHookResult = ReturnType<typeof useGetStoreItemQuery>;
export type GetStoreItemLazyQueryHookResult = ReturnType<typeof useGetStoreItemLazyQuery>;
export type GetStoreItemQueryResult = Apollo.QueryResult<GetStoreItemQuery, GetStoreItemQueryVariables>;
export function refetchGetStoreItemQuery(variables?: GetStoreItemQueryVariables) {
      return { query: GetStoreItemDocument, variables: variables }
    }
export const GetStoresDocument = gql`
    query GetStores {
  Store {
    ...MarkerInfo
  }
}
    ${MarkerInfoFragmentDoc}`;

/**
 * __useGetStoresQuery__
 *
 * To run a query within a React component, call `useGetStoresQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStoresQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStoresQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetStoresQuery(baseOptions?: Apollo.QueryHookOptions<GetStoresQuery, GetStoresQueryVariables>) {
        return Apollo.useQuery<GetStoresQuery, GetStoresQueryVariables>(GetStoresDocument, baseOptions);
      }
export function useGetStoresLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStoresQuery, GetStoresQueryVariables>) {
          return Apollo.useLazyQuery<GetStoresQuery, GetStoresQueryVariables>(GetStoresDocument, baseOptions);
        }
export type GetStoresQueryHookResult = ReturnType<typeof useGetStoresQuery>;
export type GetStoresLazyQueryHookResult = ReturnType<typeof useGetStoresLazyQuery>;
export type GetStoresQueryResult = Apollo.QueryResult<GetStoresQuery, GetStoresQueryVariables>;
export function refetchGetStoresQuery(variables?: GetStoresQueryVariables) {
      return { query: GetStoresDocument, variables: variables }
    }
export const GetUserDocument = gql`
    query GetUser {
  User {
    ...UserInfo
  }
}
    ${UserInfoFragmentDoc}`;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserQuery(baseOptions?: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
        return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, baseOptions);
      }
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, baseOptions);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;
export function refetchGetUserQuery(variables?: GetUserQueryVariables) {
      return { query: GetUserDocument, variables: variables }
    }
export const GetUserCartItemsDocument = gql`
    query GetUserCartItems {
  UserCartItem {
    ...UserCartItemInfo
  }
}
    ${UserCartItemInfoFragmentDoc}`;

/**
 * __useGetUserCartItemsQuery__
 *
 * To run a query within a React component, call `useGetUserCartItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserCartItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserCartItemsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserCartItemsQuery(baseOptions?: Apollo.QueryHookOptions<GetUserCartItemsQuery, GetUserCartItemsQueryVariables>) {
        return Apollo.useQuery<GetUserCartItemsQuery, GetUserCartItemsQueryVariables>(GetUserCartItemsDocument, baseOptions);
      }
export function useGetUserCartItemsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserCartItemsQuery, GetUserCartItemsQueryVariables>) {
          return Apollo.useLazyQuery<GetUserCartItemsQuery, GetUserCartItemsQueryVariables>(GetUserCartItemsDocument, baseOptions);
        }
export type GetUserCartItemsQueryHookResult = ReturnType<typeof useGetUserCartItemsQuery>;
export type GetUserCartItemsLazyQueryHookResult = ReturnType<typeof useGetUserCartItemsLazyQuery>;
export type GetUserCartItemsQueryResult = Apollo.QueryResult<GetUserCartItemsQuery, GetUserCartItemsQueryVariables>;
export function refetchGetUserCartItemsQuery(variables?: GetUserCartItemsQueryVariables) {
      return { query: GetUserCartItemsDocument, variables: variables }
    }
export const GetUserFavoriteItemsDocument = gql`
    query GetUserFavoriteItems {
  UserFavoriteItem {
    ...UserFavoriteItemInfo
  }
}
    ${UserFavoriteItemInfoFragmentDoc}`;

/**
 * __useGetUserFavoriteItemsQuery__
 *
 * To run a query within a React component, call `useGetUserFavoriteItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserFavoriteItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserFavoriteItemsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserFavoriteItemsQuery(baseOptions?: Apollo.QueryHookOptions<GetUserFavoriteItemsQuery, GetUserFavoriteItemsQueryVariables>) {
        return Apollo.useQuery<GetUserFavoriteItemsQuery, GetUserFavoriteItemsQueryVariables>(GetUserFavoriteItemsDocument, baseOptions);
      }
export function useGetUserFavoriteItemsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserFavoriteItemsQuery, GetUserFavoriteItemsQueryVariables>) {
          return Apollo.useLazyQuery<GetUserFavoriteItemsQuery, GetUserFavoriteItemsQueryVariables>(GetUserFavoriteItemsDocument, baseOptions);
        }
export type GetUserFavoriteItemsQueryHookResult = ReturnType<typeof useGetUserFavoriteItemsQuery>;
export type GetUserFavoriteItemsLazyQueryHookResult = ReturnType<typeof useGetUserFavoriteItemsLazyQuery>;
export type GetUserFavoriteItemsQueryResult = Apollo.QueryResult<GetUserFavoriteItemsQuery, GetUserFavoriteItemsQueryVariables>;
export function refetchGetUserFavoriteItemsQuery(variables?: GetUserFavoriteItemsQueryVariables) {
      return { query: GetUserFavoriteItemsDocument, variables: variables }
    }
export const GetUserOrdersDocument = gql`
    query GetUserOrders {
  UserOrder(order_by: {created_at: desc}) {
    ...UserOrderInfo
  }
}
    ${UserOrderInfoFragmentDoc}`;

/**
 * __useGetUserOrdersQuery__
 *
 * To run a query within a React component, call `useGetUserOrdersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserOrdersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserOrdersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserOrdersQuery(baseOptions?: Apollo.QueryHookOptions<GetUserOrdersQuery, GetUserOrdersQueryVariables>) {
        return Apollo.useQuery<GetUserOrdersQuery, GetUserOrdersQueryVariables>(GetUserOrdersDocument, baseOptions);
      }
export function useGetUserOrdersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserOrdersQuery, GetUserOrdersQueryVariables>) {
          return Apollo.useLazyQuery<GetUserOrdersQuery, GetUserOrdersQueryVariables>(GetUserOrdersDocument, baseOptions);
        }
export type GetUserOrdersQueryHookResult = ReturnType<typeof useGetUserOrdersQuery>;
export type GetUserOrdersLazyQueryHookResult = ReturnType<typeof useGetUserOrdersLazyQuery>;
export type GetUserOrdersQueryResult = Apollo.QueryResult<GetUserOrdersQuery, GetUserOrdersQueryVariables>;
export function refetchGetUserOrdersQuery(variables?: GetUserOrdersQueryVariables) {
      return { query: GetUserOrdersDocument, variables: variables }
    }
export const GetUserShoppingDocument = gql`
    query GetUserShopping {
  UserShopping {
    storeId
    updated_at
  }
}
    `;

/**
 * __useGetUserShoppingQuery__
 *
 * To run a query within a React component, call `useGetUserShoppingQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserShoppingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserShoppingQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserShoppingQuery(baseOptions?: Apollo.QueryHookOptions<GetUserShoppingQuery, GetUserShoppingQueryVariables>) {
        return Apollo.useQuery<GetUserShoppingQuery, GetUserShoppingQueryVariables>(GetUserShoppingDocument, baseOptions);
      }
export function useGetUserShoppingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserShoppingQuery, GetUserShoppingQueryVariables>) {
          return Apollo.useLazyQuery<GetUserShoppingQuery, GetUserShoppingQueryVariables>(GetUserShoppingDocument, baseOptions);
        }
export type GetUserShoppingQueryHookResult = ReturnType<typeof useGetUserShoppingQuery>;
export type GetUserShoppingLazyQueryHookResult = ReturnType<typeof useGetUserShoppingLazyQuery>;
export type GetUserShoppingQueryResult = Apollo.QueryResult<GetUserShoppingQuery, GetUserShoppingQueryVariables>;
export function refetchGetUserShoppingQuery(variables?: GetUserShoppingQueryVariables) {
      return { query: GetUserShoppingDocument, variables: variables }
    }