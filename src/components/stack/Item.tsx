import React from 'react';
import styled from 'styled-components';
type Props = {
  fill?: boolean;
  style?: object;
  space?: string;
  children: React.ReactNode;
};
type MenuProps = {
  fill?: boolean;
  style?: object;
  space?: string;
};
const Item = (props: Props) => {
  const { fill, style, space } = props;

  const className = `space-${space}`;
  return (
    <ItemWrapper fill={fill} style={style} className={className}>
      {props.children}
    </ItemWrapper>
  );
};
export default Item;

const ItemWrapper = styled.div<MenuProps>`
  flex: ${(props) => (props.fill ? '1 1 auto' : '0 0 auto')};
  margin: auto 0;
  min-width: 0;
`;
