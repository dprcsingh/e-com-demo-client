import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import constants from '../../style/constants';

type Props = {
  isBanner?: boolean;
  price: string;
  imageUrl: string;
  description: string;
  theme?: object;
  style?: object;
  size: number[];
};
const ProductCard = (props: Props) => {
  const { price, imageUrl, description, size, theme, isBanner } = props;
  const className = isBanner ? 'banner' : '';

  const sizeOptions = size.map((key, index) => <span key={index}>{key}</span>);
  return (
    <Card className={`card ${className} banner`} theme={theme}>
      <Price className="price">
        <h2>{price}</h2>
      </Price>
      <Image className="imgs">
        <img src={imageUrl} alt="card" />
      </Image>
      <Content className="content">
        <Description className="description">
          <h3>{description}</h3>
        </Description>
        <Size className="size">
          <h4>size:</h4>
          {sizeOptions}
        </Size>
        <Link to="">Add to cart</Link>
      </Content>
    </Card>
  );
};

export default ProductCard;
const Card = styled.div`
  width: 50%;
  height: 250px;
  background: ${(props) => props.theme.background};
  position: relative;
  color: ${(props) => props.theme.color};
  :hover .imgs {
    top: 20%;
  }
  :hover .content {
    height: 120px;
  }
  :hover a {
    opacity: 1;
  }
  :hover .price {
    opacity: 1;
  }
  @media (tab-width: ${constants.TAB_WIDTH}px) {
    width: 100%;
  }
`;

const Description = styled.div`
  padding: 10px;
`;
const Price = styled.div`
  position: absolute;
  width: 50px;
  top: 0;
  right: 0;
  height: 50px;
  color: white;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.3);
  font-size: 14px;
  margin: 10px;
  opacity: 0;
  transition: 0.4s;
  h2 {
    text-align: center;
    line-height: 50px;
  }
`;
const Image = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  object-fit: cover;
  transition: 0.5s;
  img {
    object-position: center;
    object-fit: cover;
    width: 100vw;
    height: auto;
    max-width: 100% !important;
  }
`;
const Content = styled.div`
  position: absolute;
  text-align: center;
  top: 120px;
  width: 100%;
  height: 125px;
  h2 {
    position: relative;
    font-weight: 600;
    letter-spacing: 1px;
  }
  transition: 0.5s;

  a {
    margin: 10px 0;
    opacity: 0;
    padding: 10px 20px;
    border-radius: 20px;
    display: inline-block;
    border: 1px solid red;
    transition: 0.6s;
    color: inherit;
  }
`;
const Size = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  span {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    line-height: 22px;
    font-size: 14px;
    margin: 0 5px;
    cursor: pointer;
  }
  span:hover {
    background: inherit;
  }
`;
