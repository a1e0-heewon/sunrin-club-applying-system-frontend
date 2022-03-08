// THIS IS A GENERATED FILE, use `yarn codegen` to regenerate
/* tslint:disable */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `BigInt` scalar type represents non-fractional signed whole numeric values. */
  BigInt: any;
  /** The `Byte` scalar type represents byte value as a Buffer */
  Byte: any;
  /** A field whose value is a Currency: https://en.wikipedia.org/wiki/ISO_4217. */
  Currency: any;
  /** A field whose value conforms to the standard DID format as specified in did-core: https://www.w3.org/TR/did-core/. */
  DID: any;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /**
   *
   *     A string representing a duration conforming to the ISO8601 standard,
   *     such as: P1W1DT13H23M34S
   *     P is the duration designator (for period) placed at the start of the duration representation.
   *     Y is the year designator that follows the value for the number of years.
   *     M is the month designator that follows the value for the number of months.
   *     W is the week designator that follows the value for the number of weeks.
   *     D is the day designator that follows the value for the number of days.
   *     T is the time designator that precedes the time components of the representation.
   *     H is the hour designator that follows the value for the number of hours.
   *     M is the minute designator that follows the value for the number of minutes.
   *     S is the second designator that follows the value for the number of seconds.
   *
   *     Note the time designator, T, that precedes the time value.
   *
   *     Matches moment.js, Luxon and DateFns implementations
   *     ,/. is valid for decimal places and +/- is a valid prefix
   *
   */
  Duration: any;
  /** A field whose value conforms to the standard internet email address format as specified in RFC822: https://www.w3.org/Protocols/rfc822/. */
  EmailAddress: any;
  /** A field whose value is a generic Universally Unique Identifier: https://en.wikipedia.org/wiki/Universally_unique_identifier. */
  GUID: any;
  /** A field whose value is a CSS HSL color: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#hsl()_and_hsla(). */
  HSL: any;
  /** A field whose value is a CSS HSLA color: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#hsl()_and_hsla(). */
  HSLA: any;
  /** A field whose value is a hex color code: https://en.wikipedia.org/wiki/Web_colors. */
  HexColorCode: any;
  /** A field whose value is a hexadecimal: https://en.wikipedia.org/wiki/Hexadecimal. */
  Hexadecimal: any;
  /** A field whose value is an International Bank Account Number (IBAN): https://en.wikipedia.org/wiki/International_Bank_Account_Number. */
  IBAN: any;
  /** IPv4 혹은 IPv6 */
  IP: any;
  /** A field whose value is a IPv4 address: https://en.wikipedia.org/wiki/IPv4. */
  IPv4: any;
  /** A field whose value is a IPv6 address: https://en.wikipedia.org/wiki/IPv6. */
  IPv6: any;
  /** A field whose value is a ISBN-10 or ISBN-13 number: https://en.wikipedia.org/wiki/International_Standard_Book_Number. */
  ISBN: any;
  /**
   *
   *     A string representing a duration conforming to the ISO8601 standard,
   *     such as: P1W1DT13H23M34S
   *     P is the duration designator (for period) placed at the start of the duration representation.
   *     Y is the year designator that follows the value for the number of years.
   *     M is the month designator that follows the value for the number of months.
   *     W is the week designator that follows the value for the number of weeks.
   *     D is the day designator that follows the value for the number of days.
   *     T is the time designator that precedes the time components of the representation.
   *     H is the hour designator that follows the value for the number of hours.
   *     M is the minute designator that follows the value for the number of minutes.
   *     S is the second designator that follows the value for the number of seconds.
   *
   *     Note the time designator, T, that precedes the time value.
   *
   *     Matches moment.js, Luxon and DateFns implementations
   *     ,/. is valid for decimal places and +/- is a valid prefix
   *
   */
  ISO8601Duration: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: any;
  /** A field whose value is a JSON Web Token (JWT): https://jwt.io/introduction. */
  JWT: any;
  /** A field whose value is a valid decimal degrees latitude number (53.471): https://en.wikipedia.org/wiki/Latitude */
  Latitude: any;
  /** A local date string (i.e., with no associated timezone) in `YYYY-MM-DD` format, e.g. `2020-01-01`. */
  LocalDate: any;
  /** A local time string (i.e., with no associated timezone) in 24-hr `HH:mm[:ss[.SSS]]` format, e.g. `14:25` or `14:25:06` or `14:25:06.123`.  This scalar is very similar to the `LocalTime`, with the only difference being that `LocalEndTime` also allows `24:00` as a valid value to indicate midnight of the following day.  This is useful when using the scalar to represent the exclusive upper bound of a time block. */
  LocalEndTime: any;
  /** A local time string (i.e., with no associated timezone) in 24-hr `HH:mm[:ss[.SSS]]` format, e.g. `14:25` or `14:25:06` or `14:25:06.123`. */
  LocalTime: any;
  /** The `BigInt` scalar type represents non-fractional signed whole numeric values. */
  Long: any;
  /** A field whose value is a valid decimal degrees longitude number (53.471): https://en.wikipedia.org/wiki/Longitude */
  Longitude: any;
  /** A field whose value is a IEEE 802 48-bit MAC address: https://en.wikipedia.org/wiki/MAC_address. */
  MAC: any;
  /** Floats that will have a value less than 0. */
  NegativeFloat: any;
  /** Integers that will have a value less than 0. */
  NegativeInt: any;
  /** A string that cannot be passed as an empty value */
  NonEmptyString: any;
  /** Floats that will have a value of 0 or more. */
  NonNegativeFloat: any;
  /** Integers that will have a value of 0 or more. */
  NonNegativeInt: any;
  /** Floats that will have a value of 0 or less. */
  NonPositiveFloat: any;
  /** Integers that will have a value of 0 or less. */
  NonPositiveInt: any;
  /** A field whose value conforms with the standard mongodb object ID as described here: https://docs.mongodb.com/manual/reference/method/ObjectId/#ObjectId. Example: 5e5677d71bdc2ae76344968c */
  ObjectID: any;
  /** A field whose value conforms to the standard E.164 format as specified in: https://en.wikipedia.org/wiki/E.164. Basically this is +17895551234. */
  PhoneNumber: any;
  /** A field whose value is a valid TCP port within the range of 0 to 65535: https://en.wikipedia.org/wiki/Transmission_Control_Protocol#TCP_ports */
  Port: any;
  /** Floats that will have a value greater than 0. */
  PositiveFloat: any;
  /** Integers that will have a value greater than 0. */
  PositiveInt: any;
  /** A field whose value conforms to the standard postal code formats for United States, United Kingdom, Germany, Canada, France, Italy, Australia, Netherlands, Spain, Denmark, Sweden, Belgium, India, Austria, Portugal, Switzerland or Luxembourg. */
  PostalCode: any;
  /** A field whose value is a CSS RGB color: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba(). */
  RGB: any;
  /** A field whose value is a CSS RGBA color: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba(). */
  RGBA: any;
  /** The `SafeInt` scalar type represents non-fractional signed whole numeric values that are considered safe as defined by the ECMAScript specification. */
  SafeInt: any;
  /** 학번 eg) 10311 이는 1학년 3반 11번을 나타냅니다 */
  StudentID: any;
  /** A time string at UTC, such as 10:15:30Z, compliant with the `full-time` format outlined in section 5.6 of the RFC 3339profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Time: any;
  /** The javascript `Date` as integer. Type represents date and time as number of milliseconds from start of UNIX epoch. */
  Timestamp: any;
  /** A field whose value conforms to the standard URL format as specified in RFC3986: https://www.ietf.org/rfc/rfc3986.txt. */
  URL: any;
  /** A currency string, such as $21.25 */
  USCurrency: any;
  /** A field whose value is a generic Universally Unique Identifier: https://en.wikipedia.org/wiki/Universally_unique_identifier. */
  UUID: any;
  /** Floats that will have a value of 0 or more. */
  UnsignedFloat: any;
  /** Integers that will have a value of 0 or more. */
  UnsignedInt: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
  /** A field whose value is a UTC Offset: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones */
  UtcOffset: any;
  /** Represents NULL values */
  Void: any;
  data_String_NotNull_pattern_ping: any;
  id_String_NotNull_pattern_unifoxlayer7teamlognefusemotionteacher: any;
  introduce_String_NotNull_maxLength_400: any;
  introduce_String_maxLength_400: any;
  message_String_NotNull_maxLength_80: any;
  message_String_NotNull_maxLength_400: any;
  name_String_NotNull_maxLength_5: any;
  password_String_NotNull_maxLength_30: any;
  phoneNumberList_List_ListNotNull_String_NotNull_pattern_010098: any;
  phoneNumber_String_NotNull_pattern_010098: any;
};

export type Answer = StudentInfo & {
  __typename?: 'Answer';
  answerId: Scalars['ObjectID'];
  answerList: Array<Maybe<Scalars['String']>>;
  club: Club;
  date: Scalars['DateTime'];
  name: Scalars['name_String_NotNull_maxLength_5'];
  otherURLs: Array<Maybe<Scalars['URL']>>;
  phoneNumber: Scalars['phoneNumber_String_NotNull_pattern_010098'];
  portfolioURL?: Maybe<Scalars['URL']>;
  studentId: Scalars['StudentID'];
};

export type AnswerConnection = {
  __typename?: 'AnswerConnection';
  edges: Array<AnswerEdge>;
  pageInfo: CursorPageInfo;
  totalCount: Scalars['UnsignedInt'];
};

export type AnswerEdge = {
  __typename?: 'AnswerEdge';
  cursor: Scalars['ObjectID'];
  node: Answer;
};

export type AnswerStatus = {
  __typename?: 'AnswerStatus';
  answerCount: Scalars['UnsignedInt'];
  club: Club;
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export enum Club {
  Emotion = 'EMOTION',
  Layer7 = 'LAYER7',
  Nefus = 'NEFUS',
  Teamlog = 'TEAMLOG',
  Unifox = 'UNIFOX'
}

export type CreateAnswerInput = {
  answerList: Array<Scalars['String']>;
  club: Club;
  name: Scalars['name_String_NotNull_maxLength_5'];
  otherURLs: Array<InputMaybe<Scalars['URL']>>;
  phoneNumber: Scalars['phoneNumber_String_NotNull_pattern_010098'];
  portfolioURL?: InputMaybe<Scalars['URL']>;
  studentId: Scalars['StudentID'];
};

export type CreateAnswerInvalidInputError = Error & {
  __typename?: 'CreateAnswerInvalidInputError';
  message: Scalars['String'];
  path: Scalars['String'];
  suggestion: Scalars['String'];
};

export type CreateAnswerResult = Answer | CreateAnswerInvalidInputError | InvalidFormError | RateLimitError;

export type CursorPageInfo = {
  __typename?: 'CursorPageInfo';
  endCursor?: Maybe<Scalars['ObjectID']>;
  hasNextPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['ObjectID']>;
};

export type Error = {
  message: Scalars['String'];
  path: Scalars['String'];
  suggestion: Scalars['String'];
};

export type File = {
  __typename?: 'File';
  encoding: Scalars['String'];
  filename: Scalars['String'];
  mimetype: Scalars['String'];
};

export type Form = {
  __typename?: 'Form';
  club: Club;
  formId: Scalars['ObjectID'];
  introduce: Scalars['introduce_String_NotNull_maxLength_400'];
  latestUpdatedAt: Scalars['DateTime'];
  question: Array<QuestionList>;
};

export type GetFormByClubResult = Form | InvalidFormError;

export type HealthCheckInput = {
  data: Scalars['data_String_NotNull_pattern_ping'];
};

export type InvalidAccountError = Error & {
  __typename?: 'InvalidAccountError';
  message: Scalars['String'];
  path: Scalars['String'];
  suggestion: Scalars['String'];
};

export type InvalidFormError = Error & {
  __typename?: 'InvalidFormError';
  message: Scalars['String'];
  path: Scalars['String'];
  suggestion: Scalars['String'];
};

export enum KeyType {
  Ip = 'IP',
  Role = 'ROLE'
}

export type Log = {
  __typename?: 'Log';
  date: Scalars['DateTime'];
  ip: Scalars['IP'];
  logId: Scalars['ObjectID'];
  message: Scalars['String'];
  role: Club;
  status: Scalars['Boolean'];
};

export type LogConnection = {
  __typename?: 'LogConnection';
  edges: Array<Log>;
  pageInfo: OffsetPageInfo;
  totalCount: Scalars['UnsignedInt'];
};

export type LoginInput = {
  id: Scalars['id_String_NotNull_pattern_unifoxlayer7teamlognefusemotionteacher'];
  password: Scalars['password_String_NotNull_maxLength_30'];
};

export type LoginResult = InvalidAccountError | User;

export type Mutation = {
  __typename?: 'Mutation';
  createAnswer: CreateAnswerResult;
  healthCheck: Scalars['String'];
  login: LoginResult;
  sendMessage: SendMessageResult;
  upsertForm: Form;
};


export type MutationCreateAnswerArgs = {
  input: CreateAnswerInput;
};


export type MutationHealthCheckArgs = {
  input?: InputMaybe<HealthCheckInput>;
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationSendMessageArgs = {
  input: SendMessageInput;
};


export type MutationUpsertFormArgs = {
  input: UpsertFormInput;
};

export type OffsetPageInfo = {
  __typename?: 'OffsetPageInfo';
  maxPage: Scalars['UnsignedInt'];
  nowPage: Scalars['UnsignedInt'];
};

export type Query = {
  __typename?: 'Query';
  getAnswerByClub: AnswerConnection;
  getAnswerByStudentId: AnswerConnection;
  getFormByClub: GetFormByClubResult;
  getLiveAnswerStatus: Array<AnswerStatus>;
  getLogByKeyword: LogConnection;
  healthLive: Scalars['DateTime'];
};


export type QueryGetAnswerByClubArgs = {
  club: Club;
  cursor?: InputMaybe<Scalars['ObjectID']>;
  limit?: InputMaybe<Scalars['UnsignedInt']>;
};


export type QueryGetAnswerByStudentIdArgs = {
  cursor?: InputMaybe<Scalars['ObjectID']>;
  limit?: InputMaybe<Scalars['UnsignedInt']>;
  studentId: Scalars['StudentID'];
};


export type QueryGetFormByClubArgs = {
  club: Club;
};


export type QueryGetLogByKeywordArgs = {
  keyword?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['UnsignedInt']>;
  page: Scalars['UnsignedInt'];
};

export type QuestionList = {
  __typename?: 'QuestionList';
  length: Scalars['UnsignedInt'];
  message: Scalars['message_String_NotNull_maxLength_400'];
};

export type QuestionListInput = {
  length: Scalars['UnsignedInt'];
  message: Scalars['message_String_NotNull_maxLength_400'];
};

export enum Role {
  Emotion = 'EMOTION',
  Layer7 = 'LAYER7',
  Nefus = 'NEFUS',
  Teacher = 'TEACHER',
  Teamlog = 'TEAMLOG',
  Unifox = 'UNIFOX'
}

export type RateLimitError = Error & {
  __typename?: 'RateLimitError';
  afterTry: Scalars['UnsignedInt'];
  message: Scalars['String'];
  path: Scalars['String'];
  suggestion: Scalars['String'];
};

export type SendMessageInput = {
  message: Scalars['message_String_NotNull_maxLength_80'];
  phoneNumberList: Array<Scalars['phoneNumberList_List_ListNotNull_String_NotNull_pattern_010098']>;
};

export type SendMessageInvalidInputError = Error & {
  __typename?: 'SendMessageInvalidInputError';
  message: Scalars['String'];
  path: Scalars['String'];
  suggestion: Scalars['String'];
};

export type SendMessagePayload = {
  __typename?: 'SendMessagePayload';
  message: Scalars['String'];
  status: Scalars['Boolean'];
};

export type SendMessageResult = RateLimitError | SendMessageInvalidInputError | SendMessagePayload;

export type StudentInfo = {
  name: Scalars['name_String_NotNull_maxLength_5'];
  phoneNumber: Scalars['phoneNumber_String_NotNull_pattern_010098'];
  studentId: Scalars['StudentID'];
};

export type UpsertFormInput = {
  introduce?: InputMaybe<Scalars['introduce_String_maxLength_400']>;
  question?: InputMaybe<Array<QuestionListInput>>;
};

export type User = {
  __typename?: 'User';
  role: Role;
  token: Scalars['JWT'];
};

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'InvalidAccountError', message: string, path: string, suggestion: string } | { __typename?: 'User', role: Role, token: any } };

export type GetAnswerByClubQueryVariables = Exact<{
  club: Club;
  limit?: InputMaybe<Scalars['UnsignedInt']>;
  cursor?: InputMaybe<Scalars['ObjectID']>;
}>;


export type GetAnswerByClubQuery = { __typename?: 'Query', getAnswerByClub: { __typename?: 'AnswerConnection', totalCount: any, edges: Array<{ __typename?: 'AnswerEdge', cursor: any, node: { __typename?: 'Answer', studentId: any, name: any, club: Club, answerList: Array<string | null>, portfolioURL?: any | null, otherURLs: Array<any | null>, answerId: any, date: any, phoneNumber: any } }>, pageInfo: { __typename?: 'CursorPageInfo', hasNextPage: boolean, startCursor?: any | null, endCursor?: any | null } } };

export type UpsertFormMutationVariables = Exact<{
  input: UpsertFormInput;
}>;


export type UpsertFormMutation = { __typename?: 'Mutation', upsertForm: { __typename?: 'Form', question: Array<{ __typename?: 'QuestionList', message: any, length: any }> } };

export type SendMessageMutationVariables = Exact<{
  input: SendMessageInput;
}>;


export type SendMessageMutation = { __typename?: 'Mutation', sendMessage: { __typename?: 'RateLimitError', message: string, path: string, suggestion: string, afterTry: any } | { __typename?: 'SendMessageInvalidInputError', message: string, path: string, suggestion: string } | { __typename?: 'SendMessagePayload', message: string, status: boolean } };

export type GetFormByClubQueryVariables = Exact<{
  club: Club;
}>;


export type GetFormByClubQuery = { __typename?: 'Query', getFormByClub: { __typename: 'Form', club: Club, introduce: any, formId: any, latestUpdatedAt: any, question: Array<{ __typename?: 'QuestionList', message: any, length: any }> } | { __typename: 'InvalidFormError', message: string, suggestion: string, path: string } };

export type CreateAnswerMutationVariables = Exact<{
  input: CreateAnswerInput;
}>;


export type CreateAnswerMutation = { __typename?: 'Mutation', createAnswer: { __typename?: 'Answer', studentId: any, name: any, club: Club, answerList: Array<string | null>, portfolioURL?: any | null, otherURLs: Array<any | null>, answerId: any, date: any, phoneNumber: any } | { __typename?: 'CreateAnswerInvalidInputError', message: string, path: string, suggestion: string } | { __typename?: 'InvalidFormError', message: string, path: string, suggestion: string } | { __typename?: 'RateLimitError', message: string, path: string, suggestion: string, afterTry: any } };

export type HealthLiveQueryVariables = Exact<{ [key: string]: never; }>;


export type HealthLiveQuery = { __typename?: 'Query', healthLive: any };


export const LoginDocument = gql`
    mutation login($input: LoginInput!) {
  login(input: $input) {
    ... on User {
      role
      token
    }
    ... on InvalidAccountError {
      message
      path
      suggestion
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const GetAnswerByClubDocument = gql`
    query getAnswerByClub($club: Club!, $limit: UnsignedInt, $cursor: ObjectID) {
  getAnswerByClub(club: $club, limit: $limit, cursor: $cursor) {
    totalCount
    edges {
      node {
        studentId
        name
        club
        answerList
        portfolioURL
        otherURLs
        answerId
        date
        phoneNumber
      }
      cursor
    }
    pageInfo {
      hasNextPage
      startCursor
      endCursor
    }
  }
}
    `;

/**
 * __useGetAnswerByClubQuery__
 *
 * To run a query within a React component, call `useGetAnswerByClubQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAnswerByClubQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAnswerByClubQuery({
 *   variables: {
 *      club: // value for 'club'
 *      limit: // value for 'limit'
 *      cursor: // value for 'cursor'
 *   },
 * });
 */
export function useGetAnswerByClubQuery(baseOptions: Apollo.QueryHookOptions<GetAnswerByClubQuery, GetAnswerByClubQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAnswerByClubQuery, GetAnswerByClubQueryVariables>(GetAnswerByClubDocument, options);
      }
export function useGetAnswerByClubLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAnswerByClubQuery, GetAnswerByClubQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAnswerByClubQuery, GetAnswerByClubQueryVariables>(GetAnswerByClubDocument, options);
        }
export type GetAnswerByClubQueryHookResult = ReturnType<typeof useGetAnswerByClubQuery>;
export type GetAnswerByClubLazyQueryHookResult = ReturnType<typeof useGetAnswerByClubLazyQuery>;
export type GetAnswerByClubQueryResult = Apollo.QueryResult<GetAnswerByClubQuery, GetAnswerByClubQueryVariables>;
export const UpsertFormDocument = gql`
    mutation upsertForm($input: UpsertFormInput!) {
  upsertForm(input: $input) {
    ... on Form {
      question {
        message
        length
      }
    }
  }
}
    `;
export type UpsertFormMutationFn = Apollo.MutationFunction<UpsertFormMutation, UpsertFormMutationVariables>;

/**
 * __useUpsertFormMutation__
 *
 * To run a mutation, you first call `useUpsertFormMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpsertFormMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [upsertFormMutation, { data, loading, error }] = useUpsertFormMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpsertFormMutation(baseOptions?: Apollo.MutationHookOptions<UpsertFormMutation, UpsertFormMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpsertFormMutation, UpsertFormMutationVariables>(UpsertFormDocument, options);
      }
export type UpsertFormMutationHookResult = ReturnType<typeof useUpsertFormMutation>;
export type UpsertFormMutationResult = Apollo.MutationResult<UpsertFormMutation>;
export type UpsertFormMutationOptions = Apollo.BaseMutationOptions<UpsertFormMutation, UpsertFormMutationVariables>;
export const SendMessageDocument = gql`
    mutation sendMessage($input: SendMessageInput!) {
  sendMessage(input: $input) {
    ... on SendMessageInvalidInputError {
      message
      path
      suggestion
    }
    ... on SendMessagePayload {
      message
      status
    }
    ... on RateLimitError {
      message
      path
      suggestion
      afterTry
    }
  }
}
    `;
export type SendMessageMutationFn = Apollo.MutationFunction<SendMessageMutation, SendMessageMutationVariables>;

/**
 * __useSendMessageMutation__
 *
 * To run a mutation, you first call `useSendMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendMessageMutation, { data, loading, error }] = useSendMessageMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSendMessageMutation(baseOptions?: Apollo.MutationHookOptions<SendMessageMutation, SendMessageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SendMessageMutation, SendMessageMutationVariables>(SendMessageDocument, options);
      }
export type SendMessageMutationHookResult = ReturnType<typeof useSendMessageMutation>;
export type SendMessageMutationResult = Apollo.MutationResult<SendMessageMutation>;
export type SendMessageMutationOptions = Apollo.BaseMutationOptions<SendMessageMutation, SendMessageMutationVariables>;
export const GetFormByClubDocument = gql`
    query getFormByClub($club: Club!) {
  getFormByClub(club: $club) {
    __typename
    ... on Form {
      club
      introduce
      formId
      latestUpdatedAt
      question {
        message
        length
      }
    }
    ... on InvalidFormError {
      message
      suggestion
      path
    }
  }
}
    `;

/**
 * __useGetFormByClubQuery__
 *
 * To run a query within a React component, call `useGetFormByClubQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFormByClubQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFormByClubQuery({
 *   variables: {
 *      club: // value for 'club'
 *   },
 * });
 */
export function useGetFormByClubQuery(baseOptions: Apollo.QueryHookOptions<GetFormByClubQuery, GetFormByClubQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFormByClubQuery, GetFormByClubQueryVariables>(GetFormByClubDocument, options);
      }
export function useGetFormByClubLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFormByClubQuery, GetFormByClubQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFormByClubQuery, GetFormByClubQueryVariables>(GetFormByClubDocument, options);
        }
export type GetFormByClubQueryHookResult = ReturnType<typeof useGetFormByClubQuery>;
export type GetFormByClubLazyQueryHookResult = ReturnType<typeof useGetFormByClubLazyQuery>;
export type GetFormByClubQueryResult = Apollo.QueryResult<GetFormByClubQuery, GetFormByClubQueryVariables>;
export const CreateAnswerDocument = gql`
    mutation createAnswer($input: CreateAnswerInput!) {
  createAnswer(input: $input) {
    ... on Answer {
      studentId
      name
      club
      answerList
      portfolioURL
      otherURLs
      answerId
      date
      phoneNumber
    }
    ... on InvalidFormError {
      message
      path
      suggestion
    }
    ... on CreateAnswerInvalidInputError {
      message
      path
      suggestion
    }
    ... on RateLimitError {
      message
      path
      suggestion
      afterTry
    }
  }
}
    `;
export type CreateAnswerMutationFn = Apollo.MutationFunction<CreateAnswerMutation, CreateAnswerMutationVariables>;

/**
 * __useCreateAnswerMutation__
 *
 * To run a mutation, you first call `useCreateAnswerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAnswerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAnswerMutation, { data, loading, error }] = useCreateAnswerMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateAnswerMutation(baseOptions?: Apollo.MutationHookOptions<CreateAnswerMutation, CreateAnswerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateAnswerMutation, CreateAnswerMutationVariables>(CreateAnswerDocument, options);
      }
export type CreateAnswerMutationHookResult = ReturnType<typeof useCreateAnswerMutation>;
export type CreateAnswerMutationResult = Apollo.MutationResult<CreateAnswerMutation>;
export type CreateAnswerMutationOptions = Apollo.BaseMutationOptions<CreateAnswerMutation, CreateAnswerMutationVariables>;
export const HealthLiveDocument = gql`
    query healthLive {
  healthLive
}
    `;

/**
 * __useHealthLiveQuery__
 *
 * To run a query within a React component, call `useHealthLiveQuery` and pass it any options that fit your needs.
 * When your component renders, `useHealthLiveQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHealthLiveQuery({
 *   variables: {
 *   },
 * });
 */
export function useHealthLiveQuery(baseOptions?: Apollo.QueryHookOptions<HealthLiveQuery, HealthLiveQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HealthLiveQuery, HealthLiveQueryVariables>(HealthLiveDocument, options);
      }
export function useHealthLiveLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HealthLiveQuery, HealthLiveQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HealthLiveQuery, HealthLiveQueryVariables>(HealthLiveDocument, options);
        }
export type HealthLiveQueryHookResult = ReturnType<typeof useHealthLiveQuery>;
export type HealthLiveLazyQueryHookResult = ReturnType<typeof useHealthLiveLazyQuery>;
export type HealthLiveQueryResult = Apollo.QueryResult<HealthLiveQuery, HealthLiveQueryVariables>;