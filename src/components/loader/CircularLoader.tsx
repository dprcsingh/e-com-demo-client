import React from 'react';
import styled from 'styled-components';
const Circle = () => {
  return (
    <Wrapper>
      <div className="loader-div"></div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 200px;
  height: 200px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  & .loader-div {
    width: calc(100% - 16px);
    height: calc(100% - 16px);
    border-radius: 50%;
    border: 8px solid #162534;
    border-top: 8px solid #09f;
    animation: rotate 2s linear infinite;
    @keyframes rotate {
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;
export default Circle;
