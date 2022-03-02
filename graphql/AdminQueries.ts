import gql from "graphql-tag";

export const Login = gql`
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

export const GetAnswerByClub = gql`
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

export const upsertForm = gql`
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

export const sendMessage = gql`
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
