import { gql } from "@apollo/client";

export const ORDERS_QUERY = gql`
  query {
    ordersCount
    allOrders {
      id
      user {
        name
        street
        city
        postalCode
      }
      data {
        id
        name
        price
        amount
      }
    }
  }
`;
