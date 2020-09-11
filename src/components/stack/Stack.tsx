import React from 'react';
import styled from 'styled-components';
import Item from './Item';
type MenuProps = {
  justifyContent?: string;
  vertical?: boolean;
  style?: object;
  space?: string;
};
type Props = {
  justifyContent?: string;
  vertical?: boolean;
  style?: object;
  space?: string;
  children?: React.ReactNode;
};
const Stack = (props: Props) => {
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

const StackWrapper = styled.div<MenuProps>`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: ${(props) => props.justifyContent || 'flext-Start'};
  flex-direction: ${(props) => (props.vertical ? 'column' : 'row')};
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
