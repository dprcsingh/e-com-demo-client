import React, { useState, useRef, useEffect } from 'react';
import SideMenuBar from './SideMenuBar';
import styled from 'styled-components';
import Logo from '../logo/Logo';
import Stack from '../stack/Stack';
import SocialMedia from '../socialMedia/SocialMedia';
import BurgerMenu from './burgerMenu';

const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const handleOutsideClick = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
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
      <SideMenuBar isOpen={isOpen} handleClick={setIsOpen} />
      <MenuIcon isOpen={isOpen} ref={ref}>
        <Logo />
        <BurgerMenu onClick={handleSideMenu} />
        <SocialMedia vertical={true} space="loose" />
      </MenuIcon>
    </Wrapper>
  );
};
export default SideMenu;

const Wrapper = styled.div`
  width: ${(props) => (props.isOpen ? '420px' : '70px')};
  height: 100%;
`;

const MenuIcon = styled.div`
  opacity: ${(props) => (props.isOpen ? '0' : '1')};
  visibility: ${(props) => (props.isOpen ? 'hidden' : '')};
  transition: opacity 1s ease-out;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  position: absolute;
  left: ${(props) => (props.isOpen ? '350px' : '0')};
  width: 70px;
  > div {
    height: 30%;
    padding: 20px;
  }
`;
