import { useQuery } from '@apollo/client';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import ProductCard from '../../components/card/ProductCard';
import Layout from '../../components/layout/Layout';
import constants from '../../style/constants';
import GET_PRODUCTS from './queries';

const Products = () => {
  // const { error, loading, data } = useQuery(GET_PRODUCTS);
  // if (error) return <h1>Error</h1>;
  // if (loading) return <h1>Loading</h1>;

  // const productData = data.data;
  const obj = {
    price: 200,
    imgUrl: '12.png',
    description: 'NIKE SHOES',
    size: ['6', '7', '8', '9'],
    theme: {
      background: 'rgba(247,205,123,0.7)',
    },
  };
  const obj1 = {
    price: 200,
    imgUrl: '10.png',
    description: 'NIKE SHOES',
    size: ['6', '7', '8', '9'],
    theme: {
      background: '#BBF6E3',
    },
  };
  const obj2 = {
    price: 333,
    imgUrl: '9.png',
    description: 'Adidas SHOES',
    size: ['6', '7', '8'],
    theme: {
      background: '#BBF6E3',
    },
  };
  return (
    <Layout>
      <Layout.Section className="oneThird">
        <Banner>
          <ProductCard {...obj1} />
        </Banner>
      </Layout.Section>
      <Layout.Section>
        <CardContainer>
          <ProductCard {...obj} />
          <ProductCard {...obj} />
          <ProductCard {...obj} />
        </CardContainer>
      </Layout.Section>
    </Layout>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  @media (max-width: ${constants.TAB_WIDTH}px) {
    flex-direction: column;
  }
`;
const Banner = styled.div`
  width: 100%;
  .banner {
    width: 100%;
    height: 100vh;
  }
  .banner .content {
    top: 50px;
  }
  .banner .imgs {
    top: 60%;
    width: 100vw;
    max-width: 100% !important;
    transform: translate(-50%, -50%);
  }

  @media (max-width: ${constants.TAB_WIDTH}px) {
    width: 100%;
    .banner {
      height: 350px;
    }
    .banner .imgs {
      top: 40%;
      left: 50%;
      width: 50vw;
      transform: translate(-50%, -50%);
    }
    .banner img {
      transform: rotate(25deg);
    }
    .banner .content {
      top: 200px;
    }
  }
`;

const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: ${constants.TAB_WIDTH}px) {
    width: 100%;
    .card {
      width: 50%;
    }
  }
  @media (max-width: ${constants.MOB_WIDTH}px) {
    .card {
      width: 100%;
    }
  }
`;

export default Products;
