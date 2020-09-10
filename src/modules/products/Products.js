import React from 'react';
import styled from 'styled-components';
import ProductCard from '../../components/card/ProductCard';
import constants from '../../style/constants';

const Products = () => {
  const obj = {
    price: '200',
    imgSrc: '12.png',
    description: 'NIKE SHOES',
    size: ['6', '7', '8', '9'],
    theme: {
      background: 'rgba(247,205,123,0.7)',
    },
  };
  const obj1 = {
    price: '200',
    imgSrc: '10.png',
    description: 'NIKE SHOES',
    size: ['6', '7', '8', '9'],
    theme: {
      background: '#BBF6E3',
    },
  };
  const obj2 = {
    price: '333',
    imgSrc: '9.png',
    description: 'Adidas SHOES',
    size: ['6', '7', '8'],
    theme: {
      background: '#BBF6E3',
    },
  };
  return (
    <Wrapper>
      <Banner>
        <ProductCard {...obj1} />
      </Banner>
      <CardContainer>
        <ProductCard {...obj} />
        <ProductCard {...obj} />
        <ProductCard {...obj} />
      </CardContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  @media (max-width: ${constants.MAX_WIDTH}px) {
    flex-direction: column;
  }
`;
const Banner = styled.div`
  width: 35vw;
  height: 100%;
  display: flex;
  .banner {
    width: 100%;
    height: 100%;
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

  @media (max-width: ${constants.MAX_WIDTH}px) {
    width: 100vw;
    .banner {
      height: 400px;
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
  width: 50vw;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: ${constants.MAX_WIDTH}px) {
    width: 100vw;
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
