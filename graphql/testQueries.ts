import gql from "graphql-tag";

export const test = gql`
  mutation healthCheck($input: HealthCheckInput) {
    healthCheck(input: $input)
  }
`;
