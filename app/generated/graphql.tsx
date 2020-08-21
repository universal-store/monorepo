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
  uuid: any;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
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

/** columns and relationships of "User" */
export type User = {
  __typename?: 'User';
  /** An object relationship */
  UserProfilePic?: Maybe<UserProfilePic>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['uuid'];
  lastName?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  profilePic?: Maybe<Scalars['uuid']>;
  sessionId: Scalars['uuid'];
};

/** columns and relationships of "UserProfilePic" */
export type UserProfilePic = {
  __typename?: 'UserProfilePic';
  id: Scalars['uuid'];
  size128: Scalars['String'];
  size256: Scalars['String'];
  size512: Scalars['String'];
  size64: Scalars['String'];
};

/** aggregated selection of "UserProfilePic" */
export type UserProfilePic_Aggregate = {
  __typename?: 'UserProfilePic_aggregate';
  aggregate?: Maybe<UserProfilePic_Aggregate_Fields>;
  nodes: Array<UserProfilePic>;
};

/** aggregate fields of "UserProfilePic" */
export type UserProfilePic_Aggregate_Fields = {
  __typename?: 'UserProfilePic_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<UserProfilePic_Max_Fields>;
  min?: Maybe<UserProfilePic_Min_Fields>;
};


/** aggregate fields of "UserProfilePic" */
export type UserProfilePic_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<UserProfilePic_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "UserProfilePic" */
export type UserProfilePic_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<UserProfilePic_Max_Order_By>;
  min?: Maybe<UserProfilePic_Min_Order_By>;
};

/** input type for inserting array relation for remote table "UserProfilePic" */
export type UserProfilePic_Arr_Rel_Insert_Input = {
  data: Array<UserProfilePic_Insert_Input>;
  on_conflict?: Maybe<UserProfilePic_On_Conflict>;
};

/** Boolean expression to filter rows from the table "UserProfilePic". All fields are combined with a logical 'AND'. */
export type UserProfilePic_Bool_Exp = {
  _and?: Maybe<Array<Maybe<UserProfilePic_Bool_Exp>>>;
  _not?: Maybe<UserProfilePic_Bool_Exp>;
  _or?: Maybe<Array<Maybe<UserProfilePic_Bool_Exp>>>;
  id?: Maybe<Uuid_Comparison_Exp>;
  size128?: Maybe<String_Comparison_Exp>;
  size256?: Maybe<String_Comparison_Exp>;
  size512?: Maybe<String_Comparison_Exp>;
  size64?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "UserProfilePic" */
export enum UserProfilePic_Constraint {
  /** unique or primary key constraint */
  UserProfilePic_pkey = 'UserProfilePic_pkey'
}

/** input type for inserting data into table "UserProfilePic" */
export type UserProfilePic_Insert_Input = {
  id?: Maybe<Scalars['uuid']>;
  size128?: Maybe<Scalars['String']>;
  size256?: Maybe<Scalars['String']>;
  size512?: Maybe<Scalars['String']>;
  size64?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type UserProfilePic_Max_Fields = {
  __typename?: 'UserProfilePic_max_fields';
  id?: Maybe<Scalars['uuid']>;
  size128?: Maybe<Scalars['String']>;
  size256?: Maybe<Scalars['String']>;
  size512?: Maybe<Scalars['String']>;
  size64?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "UserProfilePic" */
export type UserProfilePic_Max_Order_By = {
  id?: Maybe<Order_By>;
  size128?: Maybe<Order_By>;
  size256?: Maybe<Order_By>;
  size512?: Maybe<Order_By>;
  size64?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type UserProfilePic_Min_Fields = {
  __typename?: 'UserProfilePic_min_fields';
  id?: Maybe<Scalars['uuid']>;
  size128?: Maybe<Scalars['String']>;
  size256?: Maybe<Scalars['String']>;
  size512?: Maybe<Scalars['String']>;
  size64?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "UserProfilePic" */
export type UserProfilePic_Min_Order_By = {
  id?: Maybe<Order_By>;
  size128?: Maybe<Order_By>;
  size256?: Maybe<Order_By>;
  size512?: Maybe<Order_By>;
  size64?: Maybe<Order_By>;
};

/** response of any mutation on the table "UserProfilePic" */
export type UserProfilePic_Mutation_Response = {
  __typename?: 'UserProfilePic_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<UserProfilePic>;
};

/** input type for inserting object relation for remote table "UserProfilePic" */
export type UserProfilePic_Obj_Rel_Insert_Input = {
  data: UserProfilePic_Insert_Input;
  on_conflict?: Maybe<UserProfilePic_On_Conflict>;
};

/** on conflict condition type for table "UserProfilePic" */
export type UserProfilePic_On_Conflict = {
  constraint: UserProfilePic_Constraint;
  update_columns: Array<UserProfilePic_Update_Column>;
  where?: Maybe<UserProfilePic_Bool_Exp>;
};

/** ordering options when selecting data from "UserProfilePic" */
export type UserProfilePic_Order_By = {
  id?: Maybe<Order_By>;
  size128?: Maybe<Order_By>;
  size256?: Maybe<Order_By>;
  size512?: Maybe<Order_By>;
  size64?: Maybe<Order_By>;
};

/** primary key columns input for table: "UserProfilePic" */
export type UserProfilePic_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "UserProfilePic" */
export enum UserProfilePic_Select_Column {
  /** column name */
  id = 'id',
  /** column name */
  size128 = 'size128',
  /** column name */
  size256 = 'size256',
  /** column name */
  size512 = 'size512',
  /** column name */
  size64 = 'size64'
}

/** input type for updating data in table "UserProfilePic" */
export type UserProfilePic_Set_Input = {
  id?: Maybe<Scalars['uuid']>;
  size128?: Maybe<Scalars['String']>;
  size256?: Maybe<Scalars['String']>;
  size512?: Maybe<Scalars['String']>;
  size64?: Maybe<Scalars['String']>;
};

/** update columns of table "UserProfilePic" */
export enum UserProfilePic_Update_Column {
  /** column name */
  id = 'id',
  /** column name */
  size128 = 'size128',
  /** column name */
  size256 = 'size256',
  /** column name */
  size512 = 'size512',
  /** column name */
  size64 = 'size64'
}

/** aggregated selection of "User" */
export type User_Aggregate = {
  __typename?: 'User_aggregate';
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

/** aggregate fields of "User" */
export type User_Aggregate_Fields = {
  __typename?: 'User_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<User_Max_Fields>;
  min?: Maybe<User_Min_Fields>;
};


/** aggregate fields of "User" */
export type User_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "User" */
export type User_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<User_Max_Order_By>;
  min?: Maybe<User_Min_Order_By>;
};

/** input type for inserting array relation for remote table "User" */
export type User_Arr_Rel_Insert_Input = {
  data: Array<User_Insert_Input>;
  on_conflict?: Maybe<User_On_Conflict>;
};

/** Boolean expression to filter rows from the table "User". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  UserProfilePic?: Maybe<UserProfilePic_Bool_Exp>;
  _and?: Maybe<Array<Maybe<User_Bool_Exp>>>;
  _not?: Maybe<User_Bool_Exp>;
  _or?: Maybe<Array<Maybe<User_Bool_Exp>>>;
  email?: Maybe<String_Comparison_Exp>;
  firstName?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  lastName?: Maybe<String_Comparison_Exp>;
  password?: Maybe<String_Comparison_Exp>;
  profilePic?: Maybe<Uuid_Comparison_Exp>;
  sessionId?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "User" */
export enum User_Constraint {
  /** unique or primary key constraint */
  User_email_key = 'User_email_key',
  /** unique or primary key constraint */
  User_pkey = 'User_pkey',
  /** unique or primary key constraint */
  User_sessionId_key = 'User_sessionId_key'
}

/** input type for inserting data into table "User" */
export type User_Insert_Input = {
  UserProfilePic?: Maybe<UserProfilePic_Obj_Rel_Insert_Input>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  lastName?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  profilePic?: Maybe<Scalars['uuid']>;
  sessionId?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
  __typename?: 'User_max_fields';
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  lastName?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  profilePic?: Maybe<Scalars['uuid']>;
  sessionId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "User" */
export type User_Max_Order_By = {
  email?: Maybe<Order_By>;
  firstName?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lastName?: Maybe<Order_By>;
  password?: Maybe<Order_By>;
  profilePic?: Maybe<Order_By>;
  sessionId?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  __typename?: 'User_min_fields';
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  lastName?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  profilePic?: Maybe<Scalars['uuid']>;
  sessionId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "User" */
export type User_Min_Order_By = {
  email?: Maybe<Order_By>;
  firstName?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lastName?: Maybe<Order_By>;
  password?: Maybe<Order_By>;
  profilePic?: Maybe<Order_By>;
  sessionId?: Maybe<Order_By>;
};

/** response of any mutation on the table "User" */
export type User_Mutation_Response = {
  __typename?: 'User_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<User>;
};

/** input type for inserting object relation for remote table "User" */
export type User_Obj_Rel_Insert_Input = {
  data: User_Insert_Input;
  on_conflict?: Maybe<User_On_Conflict>;
};

/** on conflict condition type for table "User" */
export type User_On_Conflict = {
  constraint: User_Constraint;
  update_columns: Array<User_Update_Column>;
  where?: Maybe<User_Bool_Exp>;
};

/** ordering options when selecting data from "User" */
export type User_Order_By = {
  UserProfilePic?: Maybe<UserProfilePic_Order_By>;
  email?: Maybe<Order_By>;
  firstName?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lastName?: Maybe<Order_By>;
  password?: Maybe<Order_By>;
  profilePic?: Maybe<Order_By>;
  sessionId?: Maybe<Order_By>;
};

/** primary key columns input for table: "User" */
export type User_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "User" */
export enum User_Select_Column {
  /** column name */
  email = 'email',
  /** column name */
  firstName = 'firstName',
  /** column name */
  id = 'id',
  /** column name */
  lastName = 'lastName',
  /** column name */
  password = 'password',
  /** column name */
  profilePic = 'profilePic',
  /** column name */
  sessionId = 'sessionId'
}

/** input type for updating data in table "User" */
export type User_Set_Input = {
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  lastName?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  profilePic?: Maybe<Scalars['uuid']>;
  sessionId?: Maybe<Scalars['uuid']>;
};

/** update columns of table "User" */
export enum User_Update_Column {
  /** column name */
  email = 'email',
  /** column name */
  firstName = 'firstName',
  /** column name */
  id = 'id',
  /** column name */
  lastName = 'lastName',
  /** column name */
  password = 'password',
  /** column name */
  profilePic = 'profilePic',
  /** column name */
  sessionId = 'sessionId'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "User" */
  delete_User?: Maybe<User_Mutation_Response>;
  /** delete data from the table: "UserProfilePic" */
  delete_UserProfilePic?: Maybe<UserProfilePic_Mutation_Response>;
  /** delete single row from the table: "UserProfilePic" */
  delete_UserProfilePic_by_pk?: Maybe<UserProfilePic>;
  /** delete single row from the table: "User" */
  delete_User_by_pk?: Maybe<User>;
  /** insert data into the table: "User" */
  insert_User?: Maybe<User_Mutation_Response>;
  /** insert data into the table: "UserProfilePic" */
  insert_UserProfilePic?: Maybe<UserProfilePic_Mutation_Response>;
  /** insert a single row into the table: "UserProfilePic" */
  insert_UserProfilePic_one?: Maybe<UserProfilePic>;
  /** insert a single row into the table: "User" */
  insert_User_one?: Maybe<User>;
  /** update data of the table: "User" */
  update_User?: Maybe<User_Mutation_Response>;
  /** update data of the table: "UserProfilePic" */
  update_UserProfilePic?: Maybe<UserProfilePic_Mutation_Response>;
  /** update single row of the table: "UserProfilePic" */
  update_UserProfilePic_by_pk?: Maybe<UserProfilePic>;
  /** update single row of the table: "User" */
  update_User_by_pk?: Maybe<User>;
};


/** mutation root */
export type Mutation_RootDelete_UserArgs = {
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_UserProfilePicArgs = {
  where: UserProfilePic_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_UserProfilePic_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_User_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_UserArgs = {
  objects: Array<User_Insert_Input>;
  on_conflict?: Maybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UserProfilePicArgs = {
  objects: Array<UserProfilePic_Insert_Input>;
  on_conflict?: Maybe<UserProfilePic_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UserProfilePic_OneArgs = {
  object: UserProfilePic_Insert_Input;
  on_conflict?: Maybe<UserProfilePic_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_OneArgs = {
  object: User_Insert_Input;
  on_conflict?: Maybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_UserArgs = {
  _set?: Maybe<User_Set_Input>;
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_UserProfilePicArgs = {
  _set?: Maybe<UserProfilePic_Set_Input>;
  where: UserProfilePic_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_UserProfilePic_By_PkArgs = {
  _set?: Maybe<UserProfilePic_Set_Input>;
  pk_columns: UserProfilePic_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_By_PkArgs = {
  _set?: Maybe<User_Set_Input>;
  pk_columns: User_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  asc = 'asc',
  /** in the ascending order, nulls first */
  asc_nulls_first = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  asc_nulls_last = 'asc_nulls_last',
  /** in the descending order, nulls first */
  desc = 'desc',
  /** in the descending order, nulls first */
  desc_nulls_first = 'desc_nulls_first',
  /** in the descending order, nulls last */
  desc_nulls_last = 'desc_nulls_last'
}

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "User" */
  User: Array<User>;
  /** fetch data from the table: "UserProfilePic" */
  UserProfilePic: Array<UserProfilePic>;
  /** fetch aggregated fields from the table: "UserProfilePic" */
  UserProfilePic_aggregate: UserProfilePic_Aggregate;
  /** fetch data from the table: "UserProfilePic" using primary key columns */
  UserProfilePic_by_pk?: Maybe<UserProfilePic>;
  /** fetch aggregated fields from the table: "User" */
  User_aggregate: User_Aggregate;
  /** fetch data from the table: "User" using primary key columns */
  User_by_pk?: Maybe<User>;
};


/** query root */
export type Query_RootUserArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


/** query root */
export type Query_RootUserProfilePicArgs = {
  distinct_on?: Maybe<Array<UserProfilePic_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UserProfilePic_Order_By>>;
  where?: Maybe<UserProfilePic_Bool_Exp>;
};


/** query root */
export type Query_RootUserProfilePic_AggregateArgs = {
  distinct_on?: Maybe<Array<UserProfilePic_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UserProfilePic_Order_By>>;
  where?: Maybe<UserProfilePic_Bool_Exp>;
};


/** query root */
export type Query_RootUserProfilePic_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootUser_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


/** query root */
export type Query_RootUser_By_PkArgs = {
  id: Scalars['uuid'];
};

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "User" */
  User: Array<User>;
  /** fetch data from the table: "UserProfilePic" */
  UserProfilePic: Array<UserProfilePic>;
  /** fetch aggregated fields from the table: "UserProfilePic" */
  UserProfilePic_aggregate: UserProfilePic_Aggregate;
  /** fetch data from the table: "UserProfilePic" using primary key columns */
  UserProfilePic_by_pk?: Maybe<UserProfilePic>;
  /** fetch aggregated fields from the table: "User" */
  User_aggregate: User_Aggregate;
  /** fetch data from the table: "User" using primary key columns */
  User_by_pk?: Maybe<User>;
};


/** subscription root */
export type Subscription_RootUserArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUserProfilePicArgs = {
  distinct_on?: Maybe<Array<UserProfilePic_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UserProfilePic_Order_By>>;
  where?: Maybe<UserProfilePic_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUserProfilePic_AggregateArgs = {
  distinct_on?: Maybe<Array<UserProfilePic_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UserProfilePic_Order_By>>;
  where?: Maybe<UserProfilePic_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUserProfilePic_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootUser_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUser_By_PkArgs = {
  id: Scalars['uuid'];
};


/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
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

export type UserInfoFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'email' | 'firstName' | 'lastName'>
  & { UserProfilePic?: Maybe<(
    { __typename?: 'UserProfilePic' }
    & Pick<UserProfilePic, 'size64' | 'size128' | 'size256' | 'size512'>
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

export const UserInfoFragmentDoc = gql`
    fragment UserInfo on User {
  id
  email
  firstName
  lastName
  UserProfilePic {
    size64
    size128
    size256
    size512
  }
}
    `;
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