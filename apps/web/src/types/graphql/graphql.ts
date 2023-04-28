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
export type CountryAggregate = {
  __typename?: 'Country_aggregate';
  aggregate?: Maybe<CountryAggregateFields>;
  nodes: Array<Country>;
};

/** aggregate fields of "Country" */
export type CountryAggregateFields = {
  __typename?: 'Country_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<CountryMaxFields>;
  min?: Maybe<CountryMinFields>;
};


/** aggregate fields of "Country" */
export type CountryAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<CountrySelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "Country". All fields are combined with a logical 'AND'. */
export type CountryBoolExp = {
  _and?: InputMaybe<Array<CountryBoolExp>>;
  _not?: InputMaybe<CountryBoolExp>;
  _or?: InputMaybe<Array<CountryBoolExp>>;
  code?: InputMaybe<StringComparisonExp>;
  emoji?: InputMaybe<StringComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "Country" */
export enum CountryConstraint {
  /** unique or primary key constraint on columns "code" */
  CountryPkey = 'Country_pkey'
}

/** input type for inserting data into table "Country" */
export type CountryInsertInput = {
  code?: InputMaybe<Scalars['String']>;
  emoji?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type CountryMaxFields = {
  __typename?: 'Country_max_fields';
  code?: Maybe<Scalars['String']>;
  emoji?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type CountryMinFields = {
  __typename?: 'Country_min_fields';
  code?: Maybe<Scalars['String']>;
  emoji?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "Country" */
export type CountryMutationResponse = {
  __typename?: 'Country_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Country>;
};

/** on_conflict condition type for table "Country" */
export type CountryOnConflict = {
  constraint: CountryConstraint;
  update_columns?: Array<CountryUpdateColumn>;
  where?: InputMaybe<CountryBoolExp>;
};

/** Ordering options when selecting data from "Country". */
export type CountryOrderBy = {
  code?: InputMaybe<OrderBy>;
  emoji?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: Country */
export type CountryPkColumnsInput = {
  code: Scalars['String'];
};

/** select columns of table "Country" */
export enum CountrySelectColumn {
  /** column name */
  Code = 'code',
  /** column name */
  Emoji = 'emoji',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "Country" */
export type CountrySetInput = {
  code?: InputMaybe<Scalars['String']>;
  emoji?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "Country" */
export type CountryStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: CountryStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type CountryStreamCursorValueInput = {
  code?: InputMaybe<Scalars['String']>;
  emoji?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "Country" */
export enum CountryUpdateColumn {
  /** column name */
  Code = 'code',
  /** column name */
  Emoji = 'emoji',
  /** column name */
  Name = 'name'
}

export type CountryUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<CountrySetInput>;
  /** filter the rows which have to be updated */
  where: CountryBoolExp;
};

/** columns and relationships of "Example" */
export type Example = {
  __typename?: 'Example';
  createdAt: Scalars['timestamp'];
  id: Scalars['String'];
  updatedAt: Scalars['timestamp'];
};

/** aggregated selection of "Example" */
export type ExampleAggregate = {
  __typename?: 'Example_aggregate';
  aggregate?: Maybe<ExampleAggregateFields>;
  nodes: Array<Example>;
};

/** aggregate fields of "Example" */
export type ExampleAggregateFields = {
  __typename?: 'Example_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<ExampleMaxFields>;
  min?: Maybe<ExampleMinFields>;
};


/** aggregate fields of "Example" */
export type ExampleAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<ExampleSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "Example". All fields are combined with a logical 'AND'. */
export type ExampleBoolExp = {
  _and?: InputMaybe<Array<ExampleBoolExp>>;
  _not?: InputMaybe<ExampleBoolExp>;
  _or?: InputMaybe<Array<ExampleBoolExp>>;
  createdAt?: InputMaybe<TimestampComparisonExp>;
  id?: InputMaybe<StringComparisonExp>;
  updatedAt?: InputMaybe<TimestampComparisonExp>;
};

/** unique or primary key constraints on table "Example" */
export enum ExampleConstraint {
  /** unique or primary key constraint on columns "id" */
  ExamplePkey = 'Example_pkey'
}

/** input type for inserting data into table "Example" */
export type ExampleInsertInput = {
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate max on columns */
export type ExampleMaxFields = {
  __typename?: 'Example_max_fields';
  createdAt?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
};

/** aggregate min on columns */
export type ExampleMinFields = {
  __typename?: 'Example_min_fields';
  createdAt?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
};

/** response of any mutation on the table "Example" */
export type ExampleMutationResponse = {
  __typename?: 'Example_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Example>;
};

/** on_conflict condition type for table "Example" */
export type ExampleOnConflict = {
  constraint: ExampleConstraint;
  update_columns?: Array<ExampleUpdateColumn>;
  where?: InputMaybe<ExampleBoolExp>;
};

/** Ordering options when selecting data from "Example". */
export type ExampleOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: Example */
export type ExamplePkColumnsInput = {
  id: Scalars['String'];
};

/** select columns of table "Example" */
export enum ExampleSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "Example" */
export type ExampleSetInput = {
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** Streaming cursor of the table "Example" */
export type ExampleStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: ExampleStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type ExampleStreamCursorValueInput = {
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** update columns of table "Example" */
export enum ExampleUpdateColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type ExampleUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ExampleSetInput>;
  /** filter the rows which have to be updated */
  where: ExampleBoolExp;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type StringComparisonExp = {
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
export enum CursorOrdering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** mutation root */
export type MutationRoot = {
  __typename?: 'mutation_root';
  /** delete data from the table: "Country" */
  delete_Country?: Maybe<CountryMutationResponse>;
  /** delete single row from the table: "Country" */
  delete_Country_by_pk?: Maybe<Country>;
  /** delete data from the table: "Example" */
  delete_Example?: Maybe<ExampleMutationResponse>;
  /** delete single row from the table: "Example" */
  delete_Example_by_pk?: Maybe<Example>;
  /** insert data into the table: "Country" */
  insert_Country?: Maybe<CountryMutationResponse>;
  /** insert a single row into the table: "Country" */
  insert_Country_one?: Maybe<Country>;
  /** insert data into the table: "Example" */
  insert_Example?: Maybe<ExampleMutationResponse>;
  /** insert a single row into the table: "Example" */
  insert_Example_one?: Maybe<Example>;
  /** update data of the table: "Country" */
  update_Country?: Maybe<CountryMutationResponse>;
  /** update single row of the table: "Country" */
  update_Country_by_pk?: Maybe<Country>;
  /** update multiples rows of table: "Country" */
  update_Country_many?: Maybe<Array<Maybe<CountryMutationResponse>>>;
  /** update data of the table: "Example" */
  update_Example?: Maybe<ExampleMutationResponse>;
  /** update single row of the table: "Example" */
  update_Example_by_pk?: Maybe<Example>;
  /** update multiples rows of table: "Example" */
  update_Example_many?: Maybe<Array<Maybe<ExampleMutationResponse>>>;
};


/** mutation root */
export type MutationRootDeleteCountryArgs = {
  where: CountryBoolExp;
};


/** mutation root */
export type MutationRootDeleteCountryByPkArgs = {
  code: Scalars['String'];
};


/** mutation root */
export type MutationRootDeleteExampleArgs = {
  where: ExampleBoolExp;
};


/** mutation root */
export type MutationRootDeleteExampleByPkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type MutationRootInsertCountryArgs = {
  objects: Array<CountryInsertInput>;
  on_conflict?: InputMaybe<CountryOnConflict>;
};


/** mutation root */
export type MutationRootInsertCountryOneArgs = {
  object: CountryInsertInput;
  on_conflict?: InputMaybe<CountryOnConflict>;
};


/** mutation root */
export type MutationRootInsertExampleArgs = {
  objects: Array<ExampleInsertInput>;
  on_conflict?: InputMaybe<ExampleOnConflict>;
};


/** mutation root */
export type MutationRootInsertExampleOneArgs = {
  object: ExampleInsertInput;
  on_conflict?: InputMaybe<ExampleOnConflict>;
};


/** mutation root */
export type MutationRootUpdateCountryArgs = {
  _set?: InputMaybe<CountrySetInput>;
  where: CountryBoolExp;
};


/** mutation root */
export type MutationRootUpdateCountryByPkArgs = {
  _set?: InputMaybe<CountrySetInput>;
  pk_columns: CountryPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateCountryManyArgs = {
  updates: Array<CountryUpdates>;
};


/** mutation root */
export type MutationRootUpdateExampleArgs = {
  _set?: InputMaybe<ExampleSetInput>;
  where: ExampleBoolExp;
};


/** mutation root */
export type MutationRootUpdateExampleByPkArgs = {
  _set?: InputMaybe<ExampleSetInput>;
  pk_columns: ExamplePkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateExampleManyArgs = {
  updates: Array<ExampleUpdates>;
};

/** column ordering options */
export enum OrderBy {
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

export type QueryRoot = {
  __typename?: 'query_root';
  /** fetch data from the table: "Country" */
  Country: Array<Country>;
  /** fetch aggregated fields from the table: "Country" */
  Country_aggregate: CountryAggregate;
  /** fetch data from the table: "Country" using primary key columns */
  Country_by_pk?: Maybe<Country>;
  /** fetch data from the table: "Example" */
  Example: Array<Example>;
  /** fetch aggregated fields from the table: "Example" */
  Example_aggregate: ExampleAggregate;
  /** fetch data from the table: "Example" using primary key columns */
  Example_by_pk?: Maybe<Example>;
};


export type QueryRootCountryArgs = {
  distinct_on?: InputMaybe<Array<CountrySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CountryOrderBy>>;
  where?: InputMaybe<CountryBoolExp>;
};


export type QueryRootCountryAggregateArgs = {
  distinct_on?: InputMaybe<Array<CountrySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CountryOrderBy>>;
  where?: InputMaybe<CountryBoolExp>;
};


export type QueryRootCountryByPkArgs = {
  code: Scalars['String'];
};


export type QueryRootExampleArgs = {
  distinct_on?: InputMaybe<Array<ExampleSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ExampleOrderBy>>;
  where?: InputMaybe<ExampleBoolExp>;
};


export type QueryRootExampleAggregateArgs = {
  distinct_on?: InputMaybe<Array<ExampleSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ExampleOrderBy>>;
  where?: InputMaybe<ExampleBoolExp>;
};


export type QueryRootExampleByPkArgs = {
  id: Scalars['String'];
};

export type SubscriptionRoot = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "Country" */
  Country: Array<Country>;
  /** fetch aggregated fields from the table: "Country" */
  Country_aggregate: CountryAggregate;
  /** fetch data from the table: "Country" using primary key columns */
  Country_by_pk?: Maybe<Country>;
  /** fetch data from the table in a streaming manner: "Country" */
  Country_stream: Array<Country>;
  /** fetch data from the table: "Example" */
  Example: Array<Example>;
  /** fetch aggregated fields from the table: "Example" */
  Example_aggregate: ExampleAggregate;
  /** fetch data from the table: "Example" using primary key columns */
  Example_by_pk?: Maybe<Example>;
  /** fetch data from the table in a streaming manner: "Example" */
  Example_stream: Array<Example>;
};


export type SubscriptionRootCountryArgs = {
  distinct_on?: InputMaybe<Array<CountrySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CountryOrderBy>>;
  where?: InputMaybe<CountryBoolExp>;
};


export type SubscriptionRootCountryAggregateArgs = {
  distinct_on?: InputMaybe<Array<CountrySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CountryOrderBy>>;
  where?: InputMaybe<CountryBoolExp>;
};


export type SubscriptionRootCountryByPkArgs = {
  code: Scalars['String'];
};


export type SubscriptionRootCountryStreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<CountryStreamCursorInput>>;
  where?: InputMaybe<CountryBoolExp>;
};


export type SubscriptionRootExampleArgs = {
  distinct_on?: InputMaybe<Array<ExampleSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ExampleOrderBy>>;
  where?: InputMaybe<ExampleBoolExp>;
};


export type SubscriptionRootExampleAggregateArgs = {
  distinct_on?: InputMaybe<Array<ExampleSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ExampleOrderBy>>;
  where?: InputMaybe<ExampleBoolExp>;
};


export type SubscriptionRootExampleByPkArgs = {
  id: Scalars['String'];
};


export type SubscriptionRootExampleStreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<ExampleStreamCursorInput>>;
  where?: InputMaybe<ExampleBoolExp>;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type TimestampComparisonExp = {
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


export const GetCountriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCountries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Country"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"emoji"}}]}}]}}]} as unknown as DocumentNode<GetCountriesQuery, GetCountriesQueryVariables>;