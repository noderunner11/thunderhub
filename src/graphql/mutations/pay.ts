import { gql } from '@apollo/client';

export const PAY = gql`
  mutation Pay(
    $max_fee: Int!
    $max_paths: Int!
    $out: [String]
    $request: String!
  ) {
    pay(max_fee: $max_fee, max_paths: $max_paths, out: $out, request: $request)
  }
`;
