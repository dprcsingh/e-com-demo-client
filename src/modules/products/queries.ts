import { gql } from '@apollo/client';

const GET_PRODUCTS = gql`
  {
    getProducts {
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
        isBanner
        theme {
          background
          color
        }
      }
    }
  }
`;
export default GET_PRODUCTS;
