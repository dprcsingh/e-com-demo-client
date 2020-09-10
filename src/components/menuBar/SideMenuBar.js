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
      <Shoe className="shoe">
        <img src="8-r.png" />
      </Shoe>
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
const Shoe = styled.div`
  position: absolute;
  top: -15%;
  right: -50%;
  transition: 1s;
`;
const MenuWrapper = styled.div`
  height: 100%;
  left: ${(props) => (props.isOpen ? '0' : '-40%')};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: fixed;
  overflow: hidden;
  transition: 0.5s ease-in-out;
  width: 40%;
  > div {
    margin-left: 80px;
  }
  .shoe {
    top: ${(props) => (props.isOpen ? '-10%' : '')};
    right: ${(props) => (props.isOpen ? '-25%' : '')};
  }
`;

export default SideMenuBar;
