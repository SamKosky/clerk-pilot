/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamp: any;
};

/** columns and relationships of "Country" */
export type Country = {
  __typename?: 'Country';
  code: Scalars['String'];
  emoji: Scalars['String'];
  name: Scalars['String'];
};

/** aggregated selection of "Country" */
export type Country_Aggregate = {
  __typename?: 'Country_aggregate';
  aggregate?: Maybe<Country_Aggregate_Fields>;
  nodes: Array<Country>;
};

/** aggregate fields of "Country" */
export type Country_Aggregate_Fields = {
  __typename?: 'Country_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Country_Max_Fields>;
  min?: Maybe<Country_Min_Fields>;
};


/** aggregate fields of "Country" */
export type Country_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Country_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "Country". All fields are combined with a logical 'AND'. */
export type Country_Bool_Exp = {
  _and?: InputMaybe<Array<Country_Bool_Exp>>;
  _not?: InputMaybe<Country_Bool_Exp>;
  _or?: InputMaybe<Array<Country_Bool_Exp>>;
  code?: InputMaybe<String_Comparison_Exp>;
  emoji?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "Country" */
export enum Country_Constraint {
  /** unique or primary key constraint on columns "code" */
  CountryPkey = 'Country_pkey'
}

/** input type for inserting data into table "Country" */
export type Country_Insert_Input = {
  code?: InputMaybe<Scalars['String']>;
  emoji?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Country_Max_Fields = {
  __typename?: 'Country_max_fields';
  code?: Maybe<Scalars['String']>;
  emoji?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Country_Min_Fields = {
  __typename?: 'Country_min_fields';
  code?: Maybe<Scalars['String']>;
  emoji?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "Country" */
export type Country_Mutation_Response = {
  __typename?: 'Country_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Country>;
};

/** on_conflict condition type for table "Country" */
export type Country_On_Conflict = {
  constraint: Country_Constraint;
  update_columns?: Array<Country_Update_Column>;
  where?: InputMaybe<Country_Bool_Exp>;
};

/** Ordering options when selecting data from "Country". */
export type Country_Order_By = {
  code?: InputMaybe<Order_By>;
  emoji?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Country */
export type Country_Pk_Columns_Input = {
  code: Scalars['String'];
};

/** select columns of table "Country" */
export enum Country_Select_Column {
  /** column name */
  Code = 'code',
  /** column name */
  Emoji = 'emoji',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "Country" */
export type Country_Set_Input = {
  code?: InputMaybe<Scalars['String']>;
  emoji?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "Country" */
export type Country_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Country_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Country_Stream_Cursor_Value_Input = {
  code?: InputMaybe<Scalars['String']>;
  emoji?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "Country" */
export enum Country_Update_Column {
  /** column name */
  Code = 'code',
  /** column name */
  Emoji = 'emoji',
  /** column name */
  Name = 'name'
}

export type Country_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Country_Set_Input>;
  /** filter the rows which have to be updated */
  where: Country_Bool_Exp;
};

/** columns and relationships of "Example" */
export type Example = {
  __typename?: 'Example';
  createdAt: Scalars['timestamp'];
  id: Scalars['String'];
  updatedAt: Scalars['timestamp'];
};

/** aggregated selection of "Example" */
export type Example_Aggregate = {
  __typename?: 'Example_aggregate';
  aggregate?: Maybe<Example_Aggregate_Fields>;
  nodes: Array<Example>;
};

/** aggregate fields of "Example" */
export type Example_Aggregate_Fields = {
  __typename?: 'Example_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Example_Max_Fields>;
  min?: Maybe<Example_Min_Fields>;
};


/** aggregate fields of "Example" */
export type Example_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Example_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "Example". All fields are combined with a logical 'AND'. */
export type Example_Bool_Exp = {
  _and?: InputMaybe<Array<Example_Bool_Exp>>;
  _not?: InputMaybe<Example_Bool_Exp>;
  _or?: InputMaybe<Array<Example_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "Example" */
export enum Example_Constraint {
  /** unique or primary key constraint on columns "id" */
  ExamplePkey = 'Example_pkey'
}

/** input type for inserting data into table "Example" */
export type Example_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate max on columns */
export type Example_Max_Fields = {
  __typename?: 'Example_max_fields';
  createdAt?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
};

/** aggregate min on columns */
export type Example_Min_Fields = {
  __typename?: 'Example_min_fields';
  createdAt?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
};

/** response of any mutation on the table "Example" */
export type Example_Mutation_Response = {
  __typename?: 'Example_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Example>;
};

/** on_conflict condition type for table "Example" */
export type Example_On_Conflict = {
  constraint: Example_Constraint;
  update_columns?: Array<Example_Update_Column>;
  where?: InputMaybe<Example_Bool_Exp>;
};

/** Ordering options when selecting data from "Example". */
export type Example_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Example */
export type Example_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "Example" */
export enum Example_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "Example" */
export type Example_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** Streaming cursor of the table "Example" */
export type Example_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Example_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Example_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** update columns of table "Example" */
export enum Example_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type Example_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Example_Set_Input>;
  /** filter the rows which have to be updated */
  where: Example_Bool_Exp;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "Country" */
  delete_Country?: Maybe<Country_Mutation_Response>;
  /** delete single row from the table: "Country" */
  delete_Country_by_pk?: Maybe<Country>;
  /** delete data from the table: "Example" */
  delete_Example?: Maybe<Example_Mutation_Response>;
  /** delete single row from the table: "Example" */
  delete_Example_by_pk?: Maybe<Example>;
  /** insert data into the table: "Country" */
  insert_Country?: Maybe<Country_Mutation_Response>;
  /** insert a single row into the table: "Country" */
  insert_Country_one?: Maybe<Country>;
  /** insert data into the table: "Example" */
  insert_Example?: Maybe<Example_Mutation_Response>;
  /** insert a single row into the table: "Example" */
  insert_Example_one?: Maybe<Example>;
  /** update data of the table: "Country" */
  update_Country?: Maybe<Country_Mutation_Response>;
  /** update single row of the table: "Country" */
  update_Country_by_pk?: Maybe<Country>;
  /** update multiples rows of table: "Country" */
  update_Country_many?: Maybe<Array<Maybe<Country_Mutation_Response>>>;
  /** update data of the table: "Example" */
  update_Example?: Maybe<Example_Mutation_Response>;
  /** update single row of the table: "Example" */
  update_Example_by_pk?: Maybe<Example>;
  /** update multiples rows of table: "Example" */
  update_Example_many?: Maybe<Array<Maybe<Example_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_CountryArgs = {
  where: Country_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Country_By_PkArgs = {
  code: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_ExampleArgs = {
  where: Example_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Example_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootInsert_CountryArgs = {
  objects: Array<Country_Insert_Input>;
  on_conflict?: InputMaybe<Country_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Country_OneArgs = {
  object: Country_Insert_Input;
  on_conflict?: InputMaybe<Country_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ExampleArgs = {
  objects: Array<Example_Insert_Input>;
  on_conflict?: InputMaybe<Example_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Example_OneArgs = {
  object: Example_Insert_Input;
  on_conflict?: InputMaybe<Example_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_CountryArgs = {
  _set?: InputMaybe<Country_Set_Input>;
  where: Country_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Country_By_PkArgs = {
  _set?: InputMaybe<Country_Set_Input>;
  pk_columns: Country_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Country_ManyArgs = {
  updates: Array<Country_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ExampleArgs = {
  _set?: InputMaybe<Example_Set_Input>;
  where: Example_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Example_By_PkArgs = {
  _set?: InputMaybe<Example_Set_Input>;
  pk_columns: Example_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Example_ManyArgs = {
  updates: Array<Example_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "Country" */
  Country: Array<Country>;
  /** fetch aggregated fields from the table: "Country" */
  Country_aggregate: Country_Aggregate;
  /** fetch data from the table: "Country" using primary key columns */
  Country_by_pk?: Maybe<Country>;
  /** fetch data from the table: "Example" */
  Example: Array<Example>;
  /** fetch aggregated fields from the table: "Example" */
  Example_aggregate: Example_Aggregate;
  /** fetch data from the table: "Example" using primary key columns */
  Example_by_pk?: Maybe<Example>;
};


export type Query_RootCountryArgs = {
  distinct_on?: InputMaybe<Array<Country_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Country_Order_By>>;
  where?: InputMaybe<Country_Bool_Exp>;
};


export type Query_RootCountry_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Country_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Country_Order_By>>;
  where?: InputMaybe<Country_Bool_Exp>;
};


export type Query_RootCountry_By_PkArgs = {
  code: Scalars['String'];
};


export type Query_RootExampleArgs = {
  distinct_on?: InputMaybe<Array<Example_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Example_Order_By>>;
  where?: InputMaybe<Example_Bool_Exp>;
};


export type Query_RootExample_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Example_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Example_Order_By>>;
  where?: InputMaybe<Example_Bool_Exp>;
};


export type Query_RootExample_By_PkArgs = {
  id: Scalars['String'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "Country" */
  Country: Array<Country>;
  /** fetch aggregated fields from the table: "Country" */
  Country_aggregate: Country_Aggregate;
  /** fetch data from the table: "Country" using primary key columns */
  Country_by_pk?: Maybe<Country>;
  /** fetch data from the table in a streaming manner: "Country" */
  Country_stream: Array<Country>;
  /** fetch data from the table: "Example" */
  Example: Array<Example>;
  /** fetch aggregated fields from the table: "Example" */
  Example_aggregate: Example_Aggregate;
  /** fetch data from the table: "Example" using primary key columns */
  Example_by_pk?: Maybe<Example>;
  /** fetch data from the table in a streaming manner: "Example" */
  Example_stream: Array<Example>;
};


export type Subscription_RootCountryArgs = {
  distinct_on?: InputMaybe<Array<Country_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Country_Order_By>>;
  where?: InputMaybe<Country_Bool_Exp>;
};


export type Subscription_RootCountry_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Country_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Country_Order_By>>;
  where?: InputMaybe<Country_Bool_Exp>;
};


export type Subscription_RootCountry_By_PkArgs = {
  code: Scalars['String'];
};


export type Subscription_RootCountry_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Country_Stream_Cursor_Input>>;
  where?: InputMaybe<Country_Bool_Exp>;
};


export type Subscription_RootExampleArgs = {
  distinct_on?: InputMaybe<Array<Example_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Example_Order_By>>;
  where?: InputMaybe<Example_Bool_Exp>;
};


export type Subscription_RootExample_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Example_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Example_Order_By>>;
  where?: InputMaybe<Example_Bool_Exp>;
};


export type Subscription_RootExample_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootExample_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Example_Stream_Cursor_Input>>;
  where?: InputMaybe<Example_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamp']>;
  _gt?: InputMaybe<Scalars['timestamp']>;
  _gte?: InputMaybe<Scalars['timestamp']>;
  _in?: InputMaybe<Array<Scalars['timestamp']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamp']>;
  _lte?: InputMaybe<Scalars['timestamp']>;
  _neq?: InputMaybe<Scalars['timestamp']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']>>;
};

export type GetCountriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCountriesQuery = { __typename?: 'query_root', Country: Array<{ __typename?: 'Country', code: string, name: string, emoji: string }> };

export type CountriesQueryVariables = Exact<{ [key: string]: never; }>;


export type CountriesQuery = { __typename?: 'query_root', Country: Array<{ __typename?: 'Country', code: string, name: string, emoji: string }> };


export const GetCountriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCountries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Country"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"emoji"}}]}}]}}]} as unknown as DocumentNode<GetCountriesQuery, GetCountriesQueryVariables>;
export const CountriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Countries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Country"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"emoji"}}]}}]}}]} as unknown as DocumentNode<CountriesQuery, CountriesQueryVariables>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamp: any;
};

/** columns and relationships of "Country" */
export type Country = {
  __typename?: 'Country';
  code: Scalars['String'];
  emoji: Scalars['String'];
  name: Scalars['String'];
};

/** aggregated selection of "Country" */
export type Country_Aggregate = {
  __typename?: 'Country_aggregate';
  aggregate?: Maybe<Country_Aggregate_Fields>;
  nodes: Array<Country>;
};

/** aggregate fields of "Country" */
export type Country_Aggregate_Fields = {
  __typename?: 'Country_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Country_Max_Fields>;
  min?: Maybe<Country_Min_Fields>;
};


/** aggregate fields of "Country" */
export type Country_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Country_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "Country". All fields are combined with a logical 'AND'. */
export type Country_Bool_Exp = {
  _and?: InputMaybe<Array<Country_Bool_Exp>>;
  _not?: InputMaybe<Country_Bool_Exp>;
  _or?: InputMaybe<Array<Country_Bool_Exp>>;
  code?: InputMaybe<String_Comparison_Exp>;
  emoji?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "Country" */
export enum Country_Constraint {
  /** unique or primary key constraint on columns "code" */
  CountryPkey = 'Country_pkey'
}

/** input type for inserting data into table "Country" */
export type Country_Insert_Input = {
  code?: InputMaybe<Scalars['String']>;
  emoji?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Country_Max_Fields = {
  __typename?: 'Country_max_fields';
  code?: Maybe<Scalars['String']>;
  emoji?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Country_Min_Fields = {
  __typename?: 'Country_min_fields';
  code?: Maybe<Scalars['String']>;
  emoji?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "Country" */
export type Country_Mutation_Response = {
  __typename?: 'Country_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Country>;
};

/** on_conflict condition type for table "Country" */
export type Country_On_Conflict = {
  constraint: Country_Constraint;
  update_columns?: Array<Country_Update_Column>;
  where?: InputMaybe<Country_Bool_Exp>;
};

/** Ordering options when selecting data from "Country". */
export type Country_Order_By = {
  code?: InputMaybe<Order_By>;
  emoji?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Country */
export type Country_Pk_Columns_Input = {
  code: Scalars['String'];
};

/** select columns of table "Country" */
export enum Country_Select_Column {
  /** column name */
  Code = 'code',
  /** column name */
  Emoji = 'emoji',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "Country" */
export type Country_Set_Input = {
  code?: InputMaybe<Scalars['String']>;
  emoji?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "Country" */
export type Country_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Country_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Country_Stream_Cursor_Value_Input = {
  code?: InputMaybe<Scalars['String']>;
  emoji?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "Country" */
export enum Country_Update_Column {
  /** column name */
  Code = 'code',
  /** column name */
  Emoji = 'emoji',
  /** column name */
  Name = 'name'
}

export type Country_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Country_Set_Input>;
  /** filter the rows which have to be updated */
  where: Country_Bool_Exp;
};

/** columns and relationships of "Example" */
export type Example = {
  __typename?: 'Example';
  createdAt: Scalars['timestamp'];
  id: Scalars['String'];
  updatedAt: Scalars['timestamp'];
};

/** aggregated selection of "Example" */
export type Example_Aggregate = {
  __typename?: 'Example_aggregate';
  aggregate?: Maybe<Example_Aggregate_Fields>;
  nodes: Array<Example>;
};

/** aggregate fields of "Example" */
export type Example_Aggregate_Fields = {
  __typename?: 'Example_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Example_Max_Fields>;
  min?: Maybe<Example_Min_Fields>;
};


/** aggregate fields of "Example" */
export type Example_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Example_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "Example". All fields are combined with a logical 'AND'. */
export type Example_Bool_Exp = {
  _and?: InputMaybe<Array<Example_Bool_Exp>>;
  _not?: InputMaybe<Example_Bool_Exp>;
  _or?: InputMaybe<Array<Example_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "Example" */
export enum Example_Constraint {
  /** unique or primary key constraint on columns "id" */
  ExamplePkey = 'Example_pkey'
}

/** input type for inserting data into table "Example" */
export type Example_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate max on columns */
export type Example_Max_Fields = {
  __typename?: 'Example_max_fields';
  createdAt?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
};

/** aggregate min on columns */
export type Example_Min_Fields = {
  __typename?: 'Example_min_fields';
  createdAt?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
};

/** response of any mutation on the table "Example" */
export type Example_Mutation_Response = {
  __typename?: 'Example_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Example>;
};

/** on_conflict condition type for table "Example" */
export type Example_On_Conflict = {
  constraint: Example_Constraint;
  update_columns?: Array<Example_Update_Column>;
  where?: InputMaybe<Example_Bool_Exp>;
};

/** Ordering options when selecting data from "Example". */
export type Example_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Example */
export type Example_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "Example" */
export enum Example_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "Example" */
export type Example_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** Streaming cursor of the table "Example" */
export type Example_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Example_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Example_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** update columns of table "Example" */
export enum Example_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type Example_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Example_Set_Input>;
  /** filter the rows which have to be updated */
  where: Example_Bool_Exp;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "Country" */
  delete_Country?: Maybe<Country_Mutation_Response>;
  /** delete single row from the table: "Country" */
  delete_Country_by_pk?: Maybe<Country>;
  /** delete data from the table: "Example" */
  delete_Example?: Maybe<Example_Mutation_Response>;
  /** delete single row from the table: "Example" */
  delete_Example_by_pk?: Maybe<Example>;
  /** insert data into the table: "Country" */
  insert_Country?: Maybe<Country_Mutation_Response>;
  /** insert a single row into the table: "Country" */
  insert_Country_one?: Maybe<Country>;
  /** insert data into the table: "Example" */
  insert_Example?: Maybe<Example_Mutation_Response>;
  /** insert a single row into the table: "Example" */
  insert_Example_one?: Maybe<Example>;
  /** update data of the table: "Country" */
  update_Country?: Maybe<Country_Mutation_Response>;
  /** update single row of the table: "Country" */
  update_Country_by_pk?: Maybe<Country>;
  /** update multiples rows of table: "Country" */
  update_Country_many?: Maybe<Array<Maybe<Country_Mutation_Response>>>;
  /** update data of the table: "Example" */
  update_Example?: Maybe<Example_Mutation_Response>;
  /** update single row of the table: "Example" */
  update_Example_by_pk?: Maybe<Example>;
  /** update multiples rows of table: "Example" */
  update_Example_many?: Maybe<Array<Maybe<Example_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_CountryArgs = {
  where: Country_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Country_By_PkArgs = {
  code: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_ExampleArgs = {
  where: Example_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Example_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootInsert_CountryArgs = {
  objects: Array<Country_Insert_Input>;
  on_conflict?: InputMaybe<Country_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Country_OneArgs = {
  object: Country_Insert_Input;
  on_conflict?: InputMaybe<Country_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ExampleArgs = {
  objects: Array<Example_Insert_Input>;
  on_conflict?: InputMaybe<Example_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Example_OneArgs = {
  object: Example_Insert_Input;
  on_conflict?: InputMaybe<Example_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_CountryArgs = {
  _set?: InputMaybe<Country_Set_Input>;
  where: Country_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Country_By_PkArgs = {
  _set?: InputMaybe<Country_Set_Input>;
  pk_columns: Country_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Country_ManyArgs = {
  updates: Array<Country_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ExampleArgs = {
  _set?: InputMaybe<Example_Set_Input>;
  where: Example_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Example_By_PkArgs = {
  _set?: InputMaybe<Example_Set_Input>;
  pk_columns: Example_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Example_ManyArgs = {
  updates: Array<Example_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "Country" */
  Country: Array<Country>;
  /** fetch aggregated fields from the table: "Country" */
  Country_aggregate: Country_Aggregate;
  /** fetch data from the table: "Country" using primary key columns */
  Country_by_pk?: Maybe<Country>;
  /** fetch data from the table: "Example" */
  Example: Array<Example>;
  /** fetch aggregated fields from the table: "Example" */
  Example_aggregate: Example_Aggregate;
  /** fetch data from the table: "Example" using primary key columns */
  Example_by_pk?: Maybe<Example>;
};


export type Query_RootCountryArgs = {
  distinct_on?: InputMaybe<Array<Country_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Country_Order_By>>;
  where?: InputMaybe<Country_Bool_Exp>;
};


export type Query_RootCountry_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Country_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Country_Order_By>>;
  where?: InputMaybe<Country_Bool_Exp>;
};


export type Query_RootCountry_By_PkArgs = {
  code: Scalars['String'];
};


export type Query_RootExampleArgs = {
  distinct_on?: InputMaybe<Array<Example_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Example_Order_By>>;
  where?: InputMaybe<Example_Bool_Exp>;
};


export type Query_RootExample_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Example_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Example_Order_By>>;
  where?: InputMaybe<Example_Bool_Exp>;
};


export type Query_RootExample_By_PkArgs = {
  id: Scalars['String'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "Country" */
  Country: Array<Country>;
  /** fetch aggregated fields from the table: "Country" */
  Country_aggregate: Country_Aggregate;
  /** fetch data from the table: "Country" using primary key columns */
  Country_by_pk?: Maybe<Country>;
  /** fetch data from the table in a streaming manner: "Country" */
  Country_stream: Array<Country>;
  /** fetch data from the table: "Example" */
  Example: Array<Example>;
  /** fetch aggregated fields from the table: "Example" */
  Example_aggregate: Example_Aggregate;
  /** fetch data from the table: "Example" using primary key columns */
  Example_by_pk?: Maybe<Example>;
  /** fetch data from the table in a streaming manner: "Example" */
  Example_stream: Array<Example>;
};


export type Subscription_RootCountryArgs = {
  distinct_on?: InputMaybe<Array<Country_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Country_Order_By>>;
  where?: InputMaybe<Country_Bool_Exp>;
};


export type Subscription_RootCountry_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Country_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Country_Order_By>>;
  where?: InputMaybe<Country_Bool_Exp>;
};


export type Subscription_RootCountry_By_PkArgs = {
  code: Scalars['String'];
};


export type Subscription_RootCountry_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Country_Stream_Cursor_Input>>;
  where?: InputMaybe<Country_Bool_Exp>;
};


export type Subscription_RootExampleArgs = {
  distinct_on?: InputMaybe<Array<Example_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Example_Order_By>>;
  where?: InputMaybe<Example_Bool_Exp>;
};


export type Subscription_RootExample_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Example_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Example_Order_By>>;
  where?: InputMaybe<Example_Bool_Exp>;
};


export type Subscription_RootExample_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootExample_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Example_Stream_Cursor_Input>>;
  where?: InputMaybe<Example_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamp']>;
  _gt?: InputMaybe<Scalars['timestamp']>;
  _gte?: InputMaybe<Scalars['timestamp']>;
  _in?: InputMaybe<Array<Scalars['timestamp']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamp']>;
  _lte?: InputMaybe<Scalars['timestamp']>;
  _neq?: InputMaybe<Scalars['timestamp']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']>>;
};


export const GetCountriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCountries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Country"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"emoji"}}]}}]}}]} as unknown as DocumentNode<GetCountriesQuery, GetCountriesQueryVariables>;
export const CountriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Countries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Country"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"emoji"}}]}}]}}]} as unknown as DocumentNode<CountriesQuery, CountriesQueryVariables>;