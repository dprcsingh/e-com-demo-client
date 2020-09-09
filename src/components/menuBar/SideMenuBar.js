import React, { useState, useContext, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Stack from '../stack/Stack';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoePrints } from '@fortawesome/free-solid-svg-icons';
import SocialMedia from '../socialMedia/SocialMedia';
import MenuItem from './MenuItem';

const SideMenuBar = (props) => {
  return (
    <MenuWrapper isOpen={props.isOpen} className="menu">
      <div>
        <FontAwesomeIcon icon={faShoePrints} />
      </div>
      <MenuItem />
      <div>
        <Stack space="loose">
          <SocialMedia />
        </Stack>
      </div>
    </MenuWrapper>
  );
};

const MenuWrapper = styled.div`
  height: 100%;
  left: ${(props) => (props.isOpen ? '0' : '-350px')};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: fixed;
  transition: 0.5s ease-in-out;
  width: 350px;
  > div {
    margin-left: 80px;
  }
`;

export default SideMenuBar;
