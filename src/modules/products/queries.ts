import { gql } from '@apollo/client';

const GET_PRODUCTS = gql`
  query getProducts {
    message
    status
    totalCount
    data {
      name
      imageUrl
      size
      description
      price
      brand
      theme {
        background
        color
      }
    }
  }
`;
export default GET_PRODUCTS;
