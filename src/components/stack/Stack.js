import React from 'react';
import styled from 'styled-components';
import Item from './Item';
const Stack = (props) => {
  const { justifyContent, vertical, style, space } = props;
  return (
    <StackWrapper
      justifyContent={justifyContent}
      vertical={vertical}
      style={style}
      space={space}
    >
      {props.children}
    </StackWrapper>
  );
};
Stack.Item = Item;
export default Stack;

const StackWrapper = styled.div`
  display: flex;
  justify-content: ${(props) => props.justifyContent || 'flext-Start'};
  flex-direction: ${(props) => (props.vertical ? 'column' : 'row')};
  flex-wrap: ${(props) => (props.noWrap ? 'noWrap' : 'wrap')};
  align-content: space-around;
  margin: auto 0;
  & > div {
    padding: ${(props) =>
      props.space === 'loose'
        ? '10px'
        : props.space === 'tight'
        ? '3px'
        : '5px'};
    padding-right: 10px;
  }
`;
