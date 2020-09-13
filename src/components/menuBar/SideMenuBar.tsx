import React from 'react';
import styled from 'styled-components';
import Stack from '../stack/Stack';
import SocialMedia from '../socialMedia/SocialMedia';
import { icon, menuOptions } from '../../libs/MenuItem';
import MenuItem from './MenuItem';
import Logo from '../logo/Logo';

type Props = {
  isOpen: boolean;
};
const SideMenuBar = (props: Props) => {
  return (
    <MenuWrapper isOpen={props.isOpen} className="menu">
      <Shoe className="shoe">
        <img src="13.png" alt="card" />
      </Shoe>
      <Logo style={{ width: '100px' }} />
      <MenuItem menuOptions={menuOptions} />
      <div>
        <Stack space="loose">
          <SocialMedia icon={icon} />
        </Stack>
      </div>
    </MenuWrapper>
  );
};
const Shoe = styled.div`
  position: absolute;
  img {
    width: 350px;
    transform: rotate(-30deg);
  }
  top: -20%;
  right: -60%;
  transition: 1s;
`;
const MenuWrapper = styled.div<any>`
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
