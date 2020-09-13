import React, { useState, useRef, useEffect } from 'react';
import SideMenuBar from './SideMenuBar';
import styled from 'styled-components';
import Logo from '../logo/Logo';
import BurgerMenu from './burgerMenu';
import SocialMedia from '../socialMedia/SocialMedia';
import { icon } from '../../libs/MenuItem';

type MenuProps = {
  isOpen: boolean;
};
const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const handleOutsideClick = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    window.addEventListener('click', handleOutsideClick);
    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, []);
  const handleSideMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Wrapper isopen={isOpen}>
      <SideMenuBar isOpen={isOpen} />
      <MenuIcon isOpen={isOpen} ref={ref}>
        <Logo style={{ width: '50px' }} />
        <BurgerMenu onClick={handleSideMenu} />
        <SocialMedia icon={icon} vertical space="loose" />
      </MenuIcon>
    </Wrapper>
  );
};
export default SideMenu;

const Wrapper = styled.div<any>`
  z-index: 1;
  position: fixed;
`;

const MenuIcon = styled.div<MenuProps>`
  opacity: ${(props) => (props.isOpen ? '0' : '1')};
  visibility: ${(props) => (props.isOpen ? 'hidden' : '')};
  transition: opacity 1s ease-out;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  position: fixed;
  left: ${(props) => (props.isOpen ? '350px' : '0')};
  width: 70px;
  > div {
    height: 30%;
    padding: 20px;
  }
`;
