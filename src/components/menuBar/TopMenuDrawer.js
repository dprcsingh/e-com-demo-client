import React from 'react';
import MenuItem from './MenuItem';
import SocialMedia from '../socialMedia/SocialMedia';
import Stack from '../stack/Stack';
import styled from 'styled-components';
const TopMenu = (props) => {
  const { isOpen } = props;
  return (
    <Wrapper isOpen={isOpen} className="menu">
      <MenuItem style={{ alignSelf: 'center' }} />
      <SocialMedia space="loose" justifyContent="center" />
    </Wrapper>
  );
};
export default TopMenu;
const Wrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  top: ${(props) => (props.isOpen ? '50px' : '-100%')};
  width: 100%;
  height: 100%;
  transition: 0.3s ease-in-out;
  font-size: 22px;
  z-index: 2;
`;
