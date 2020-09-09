import React from 'react';
import styled from 'styled-components';

const BurgerMenu = (props) => {
  return (
    <Wrapper onClick={props.onClick}>
      <div />
      <div />
      <div />
    </Wrapper>
  );
};
export default BurgerMenu;

const Wrapper = styled.div`
  div {
    width: 1.5rem;
    height: 0.25rem;
    background: black;
    margin: 5px;
    cursor: pointer;
  }
`;
