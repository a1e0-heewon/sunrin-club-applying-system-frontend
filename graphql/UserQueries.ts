import gql from "graphql-tag";

export const getFormByClub = gql`
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

export const createAnswer = gql`
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

// {
//   "input": {
//     "studentId": 10311,
//     "name": "서희원",
//     "club": "UNIFOX",
//     "phoneNumber": "01043004199",
//     "answerList": ["ㅁㅇㅁㄴㅇㅁㄴ", "ㄴㄴㄴㄴㄴㄴ"],
//     "otherURLs": []
//   }
// }
