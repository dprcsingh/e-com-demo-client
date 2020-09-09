import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MenuItem = (props) => {
  const {
    menuOptions = ['About', 'Sneakers', 'Accesories', 'Store', 'Contacts'],
  } = props;
  const options = menuOptions.map((key) => {
    return (
      <li>
        <Link to="">{key}</Link>
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
