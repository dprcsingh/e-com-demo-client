import { gql } from '@apollo/client';

const GET_PRODUCTS = gql`
  query GetProducts {
    getProducts {
      id
      name
      imgUrl
      size
      description
      price
    }
  }
`;
export default GET_PRODUCTS;
