import React from 'react';
import MenuItem from './MenuItem';
import SocialMedia from '../socialMedia/SocialMedia';
import styled from 'styled-components';
import { icon, menuOptions } from '../../libs/MenuItem';

type Props = {
  isOpen: boolean;
};
const TopMenu = (props: Props) => {
  const { isOpen } = props;
  return (
    <Wrapper isOpen={isOpen} className="menu">
      <MenuItem menuOptions={menuOptions} style={{ alignSelf: 'center' }} />
      <SocialMedia icon={icon} space="loose" justifyContent="center" />
    </Wrapper>
  );
};
export default TopMenu;
const Wrapper = styled.div<any>`
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
