import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ProductCard from '../../components/card/ProductCard';
import ErrorPage from '../../components/error/Error';
import Layout from '../../components/layout/Layout';
import Circle from '../../components/loader/CircularLoader';
import PaginationCard from '../../components/pagination/Pagination';
import constants from '../../style/constants';
import products from './dummyData';
import GET_PRODUCTS from './queries';

type res = {
  message: String;
  totalCount: number;
};
const Products = () => {
  const { error, loading, data } = useQuery(GET_PRODUCTS);
  const [isLoding, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  if (error)
    return (
      <h1>
        <ErrorPage />
      </h1>
    );

  if (loading) return <Circle />;

  const productData = data.getProducts.data;
  const banner = productData.find((key: any) => key.isBanner);
  const card = productData.map((key: any) => {
    return <ProductCard {...key} s/>;
  });

  return (
    <Layout>
      {isError && <ErrorPage />}
      <Layout.Section className="oneThird">
        <Banner>
          <ProductCard {...banner} />
        </Banner>
      </Layout.Section>
      <Layout.Section>
        <CardContainer>
          {card}
          <PaginationCard />
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
