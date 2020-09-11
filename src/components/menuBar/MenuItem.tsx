import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

type key = {
  id: string;
  value: string;
};

type Props = {
  menuOptions: key[];
  style?: object;
};

const MenuItem = (props: Props) => {
  const { menuOptions } = props;
  const options = menuOptions.map((key) => {
    return (
      <li key={key.id}>
        <Link to={key.id}>{key.value}</Link>
      </li>
    );
  });
  return (
    <MenuItemWrapper style={props.style}>
      <ul>{options}</ul>
    </MenuItemWrapper>
  );
};
export default MenuItem;

const MenuItemWrapper = styled.div`
  & ul {
    list-style-type: none;
    text-align: left;
  }
  & ul li {
    padding: 0.8rem 0;
  }
`;
