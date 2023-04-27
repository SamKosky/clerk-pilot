import { gql } from "@apollo/client";

export const getCountries = gql`
  query getCountries {
    Country {
      code
      name
      emoji
    }
  }
`;
