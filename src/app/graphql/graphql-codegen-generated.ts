import { gql } from "apollo-angular";
import { Injectable } from "@angular/core";
import * as Apollo from "apollo-angular";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  DateTime: { input: any; output: any };
  ObjectId: { input: any; output: any };
};

export type Application = {
  __typename?: "Application";
  _id: Scalars["ObjectId"]["output"];
  anzsco_code: Scalars["String"]["output"];
  comment?: Maybe<Scalars["String"]["output"]>;
  days: Scalars["Int"]["output"];
  location: Scalars["String"]["output"];
  outcome: Scalars["Boolean"]["output"];
  received_on: Scalars["DateTime"]["output"];
  stream: Scalars["String"]["output"];
  submitted_on: Scalars["DateTime"]["output"];
};

export type ApplicationInsertInput = {
  _id?: InputMaybe<Scalars["ObjectId"]["input"]>;
  anzsco_code: Scalars["String"]["input"];
  comment?: InputMaybe<Scalars["String"]["input"]>;
  days: Scalars["Int"]["input"];
  location: Scalars["String"]["input"];
  outcome: Scalars["Boolean"]["input"];
  received_on: Scalars["DateTime"]["input"];
  stream: Scalars["String"]["input"];
  submitted_on: Scalars["DateTime"]["input"];
};

export type ApplicationQueryInput = {
  AND?: InputMaybe<Array<ApplicationQueryInput>>;
  OR?: InputMaybe<Array<ApplicationQueryInput>>;
  _id?: InputMaybe<Scalars["ObjectId"]["input"]>;
  _id_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  _id_gt?: InputMaybe<Scalars["ObjectId"]["input"]>;
  _id_gte?: InputMaybe<Scalars["ObjectId"]["input"]>;
  _id_in?: InputMaybe<Array<InputMaybe<Scalars["ObjectId"]["input"]>>>;
  _id_lt?: InputMaybe<Scalars["ObjectId"]["input"]>;
  _id_lte?: InputMaybe<Scalars["ObjectId"]["input"]>;
  _id_ne?: InputMaybe<Scalars["ObjectId"]["input"]>;
  _id_nin?: InputMaybe<Array<InputMaybe<Scalars["ObjectId"]["input"]>>>;
  anzsco_code?: InputMaybe<Scalars["String"]["input"]>;
  anzsco_code_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  anzsco_code_gt?: InputMaybe<Scalars["String"]["input"]>;
  anzsco_code_gte?: InputMaybe<Scalars["String"]["input"]>;
  anzsco_code_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  anzsco_code_lt?: InputMaybe<Scalars["String"]["input"]>;
  anzsco_code_lte?: InputMaybe<Scalars["String"]["input"]>;
  anzsco_code_ne?: InputMaybe<Scalars["String"]["input"]>;
  anzsco_code_nin?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  comment?: InputMaybe<Scalars["String"]["input"]>;
  comment_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  comment_gt?: InputMaybe<Scalars["String"]["input"]>;
  comment_gte?: InputMaybe<Scalars["String"]["input"]>;
  comment_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  comment_lt?: InputMaybe<Scalars["String"]["input"]>;
  comment_lte?: InputMaybe<Scalars["String"]["input"]>;
  comment_ne?: InputMaybe<Scalars["String"]["input"]>;
  comment_nin?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  days?: InputMaybe<Scalars["Int"]["input"]>;
  days_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  days_gt?: InputMaybe<Scalars["Int"]["input"]>;
  days_gte?: InputMaybe<Scalars["Int"]["input"]>;
  days_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  days_lt?: InputMaybe<Scalars["Int"]["input"]>;
  days_lte?: InputMaybe<Scalars["Int"]["input"]>;
  days_ne?: InputMaybe<Scalars["Int"]["input"]>;
  days_nin?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  location?: InputMaybe<Scalars["String"]["input"]>;
  location_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  location_gt?: InputMaybe<Scalars["String"]["input"]>;
  location_gte?: InputMaybe<Scalars["String"]["input"]>;
  location_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  location_lt?: InputMaybe<Scalars["String"]["input"]>;
  location_lte?: InputMaybe<Scalars["String"]["input"]>;
  location_ne?: InputMaybe<Scalars["String"]["input"]>;
  location_nin?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  outcome?: InputMaybe<Scalars["Boolean"]["input"]>;
  outcome_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  outcome_ne?: InputMaybe<Scalars["Boolean"]["input"]>;
  received_on?: InputMaybe<Scalars["DateTime"]["input"]>;
  received_on_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  received_on_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  received_on_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  received_on_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  received_on_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  received_on_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  received_on_ne?: InputMaybe<Scalars["DateTime"]["input"]>;
  received_on_nin?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  stream?: InputMaybe<Scalars["String"]["input"]>;
  stream_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  stream_gt?: InputMaybe<Scalars["String"]["input"]>;
  stream_gte?: InputMaybe<Scalars["String"]["input"]>;
  stream_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  stream_lt?: InputMaybe<Scalars["String"]["input"]>;
  stream_lte?: InputMaybe<Scalars["String"]["input"]>;
  stream_ne?: InputMaybe<Scalars["String"]["input"]>;
  stream_nin?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  submitted_on?: InputMaybe<Scalars["DateTime"]["input"]>;
  submitted_on_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  submitted_on_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  submitted_on_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  submitted_on_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  submitted_on_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  submitted_on_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  submitted_on_ne?: InputMaybe<Scalars["DateTime"]["input"]>;
  submitted_on_nin?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
};

export enum ApplicationSortByInput {
  AnzscoCodeAsc = "ANZSCO_CODE_ASC",
  AnzscoCodeDesc = "ANZSCO_CODE_DESC",
  CommentAsc = "COMMENT_ASC",
  CommentDesc = "COMMENT_DESC",
  DaysAsc = "DAYS_ASC",
  DaysDesc = "DAYS_DESC",
  LocationAsc = "LOCATION_ASC",
  LocationDesc = "LOCATION_DESC",
  ReceivedOnAsc = "RECEIVED_ON_ASC",
  ReceivedOnDesc = "RECEIVED_ON_DESC",
  StreamAsc = "STREAM_ASC",
  StreamDesc = "STREAM_DESC",
  SubmittedOnAsc = "SUBMITTED_ON_ASC",
  SubmittedOnDesc = "SUBMITTED_ON_DESC",
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
}

export type ApplicationUpdateInput = {
  _id?: InputMaybe<Scalars["ObjectId"]["input"]>;
  _id_unset?: InputMaybe<Scalars["Boolean"]["input"]>;
  anzsco_code?: InputMaybe<Scalars["String"]["input"]>;
  anzsco_code_unset?: InputMaybe<Scalars["Boolean"]["input"]>;
  comment?: InputMaybe<Scalars["String"]["input"]>;
  comment_unset?: InputMaybe<Scalars["Boolean"]["input"]>;
  days?: InputMaybe<Scalars["Int"]["input"]>;
  days_inc?: InputMaybe<Scalars["Int"]["input"]>;
  days_unset?: InputMaybe<Scalars["Boolean"]["input"]>;
  location?: InputMaybe<Scalars["String"]["input"]>;
  location_unset?: InputMaybe<Scalars["Boolean"]["input"]>;
  outcome?: InputMaybe<Scalars["Boolean"]["input"]>;
  outcome_unset?: InputMaybe<Scalars["Boolean"]["input"]>;
  received_on?: InputMaybe<Scalars["DateTime"]["input"]>;
  received_on_unset?: InputMaybe<Scalars["Boolean"]["input"]>;
  stream?: InputMaybe<Scalars["String"]["input"]>;
  stream_unset?: InputMaybe<Scalars["Boolean"]["input"]>;
  submitted_on?: InputMaybe<Scalars["DateTime"]["input"]>;
  submitted_on_unset?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type DeleteManyPayload = {
  __typename?: "DeleteManyPayload";
  deletedCount: Scalars["Int"]["output"];
};

export type InsertManyPayload = {
  __typename?: "InsertManyPayload";
  insertedIds: Array<Maybe<Scalars["ObjectId"]["output"]>>;
};

export type Mutation = {
  __typename?: "Mutation";
  deleteManyApplications?: Maybe<DeleteManyPayload>;
  deleteOneApplication?: Maybe<Application>;
  insertManyApplications?: Maybe<InsertManyPayload>;
  insertOneApplication?: Maybe<Application>;
  replaceOneApplication?: Maybe<Application>;
  updateManyApplications?: Maybe<UpdateManyPayload>;
  updateOneApplication?: Maybe<Application>;
  upsertOneApplication?: Maybe<Application>;
};

export type MutationDeleteManyApplicationsArgs = {
  query?: InputMaybe<ApplicationQueryInput>;
};

export type MutationDeleteOneApplicationArgs = {
  query: ApplicationQueryInput;
};

export type MutationInsertManyApplicationsArgs = {
  data: Array<ApplicationInsertInput>;
};

export type MutationInsertOneApplicationArgs = {
  data: ApplicationInsertInput;
};

export type MutationReplaceOneApplicationArgs = {
  data: ApplicationInsertInput;
  query?: InputMaybe<ApplicationQueryInput>;
};

export type MutationUpdateManyApplicationsArgs = {
  query?: InputMaybe<ApplicationQueryInput>;
  set: ApplicationUpdateInput;
};

export type MutationUpdateOneApplicationArgs = {
  query?: InputMaybe<ApplicationQueryInput>;
  set: ApplicationUpdateInput;
};

export type MutationUpsertOneApplicationArgs = {
  data: ApplicationInsertInput;
  query?: InputMaybe<ApplicationQueryInput>;
};

export type Query = {
  __typename?: "Query";
  application?: Maybe<Application>;
  applications: Array<Maybe<Application>>;
};

export type QueryApplicationArgs = {
  query?: InputMaybe<ApplicationQueryInput>;
};

export type QueryApplicationsArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  query?: InputMaybe<ApplicationQueryInput>;
  sortBy?: InputMaybe<ApplicationSortByInput>;
};

export type UpdateManyPayload = {
  __typename?: "UpdateManyPayload";
  matchedCount: Scalars["Int"]["output"];
  modifiedCount: Scalars["Int"]["output"];
};

export type AddEntryMutationVariables = Exact<{
  object: ApplicationInsertInput;
}>;

export type AddEntryMutation = {
  __typename?: "Mutation";
  insertOneApplication?: {
    __typename?: "Application";
    _id: any;
    anzsco_code: string;
    submitted_on: any;
    received_on: any;
    days: number;
    outcome: boolean;
    stream: string;
    location: string;
    comment?: string | null;
  } | null;
};

export type GetAllEntriesQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllEntriesQuery = {
  __typename?: "Query";
  applications: Array<{
    __typename?: "Application";
    _id: any;
    anzsco_code: string;
    days: number;
    location: string;
    outcome: boolean;
    received_on: any;
    stream: string;
    submitted_on: any;
  } | null>;
};

export const AddEntryDocument = gql`
  mutation AddEntry($object: ApplicationInsertInput!) {
    insertOneApplication(data: $object) {
      _id
      anzsco_code
      submitted_on
      received_on
      days
      outcome
      stream
      location
      comment
    }
  }
`;

@Injectable({
  providedIn: "root",
})
export class AddEntryGQL extends Apollo.Mutation<
  AddEntryMutation,
  AddEntryMutationVariables
> {
  override document = AddEntryDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const GetAllEntriesDocument = gql`
  query GetAllEntries {
    applications {
      _id
      anzsco_code
      days
      location
      outcome
      received_on
      stream
      submitted_on
    }
  }
`;

@Injectable({
  providedIn: "root",
})
export class GetAllEntriesGQL extends Apollo.Query<
  GetAllEntriesQuery,
  GetAllEntriesQueryVariables
> {
  override document = GetAllEntriesDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
