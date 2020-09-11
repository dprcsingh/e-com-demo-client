import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';

type Props = {
  total?: number;
  currentPage?: number;
  onclickLeft?: () => void;
  onclickRight?: () => void;
};
const PaginationCard = (props: Props) => {
  const { currentPage = 1, total = 3, onclickLeft, onclickRight } = props;
  return (
    <Card>
      <ArrowLeft onClick={onclickLeft}>
        <FontAwesomeIcon icon={faArrowLeft} style={{ fontSize: '40px' }} />
      </ArrowLeft>
      <Showing>
        <span className="currentPage">
          <h1>{currentPage}</h1>
        </span>
        <span className="outOf">
          <h1>/</h1>
        </span>
        <span className="totalPage">
          <h1>{total}</h1>
        </span>
      </Showing>
      <ArrowRight onClick={onclickRight}>
        <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: '40px' }} />
      </ArrowRight>
    </Card>
  );
};
const Card = styled.div`
  display: flex;
  justify-content: space-around;
  align-content: center;
  align-items: center;

  width: 50%;
  height: 200px;

  position: relative;
`;
const ArrowRight = styled.div`
  right: 0;
  top: 30%;
  cursor: pointer;
  padding: 40px;
`;
const ArrowLeft = styled.div`
  top: 30%;

  cursor: pointer;
  padding: 40px;
`;
const Showing = styled.div`
  position: realtive;
  .currentPage {
    position: absolute;
    top: 25%;
    left: 35%;
  }
  .outOf {
    position: absolute;
    top: 35%;
    left: 45%;
    opacity: 0.6;
  }
  .totalPage {
    position: absolute;
    top: 45%;
    left: 55%;
  }
`;
export default PaginationCard;
