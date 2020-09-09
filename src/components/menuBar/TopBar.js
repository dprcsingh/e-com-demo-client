import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Logo from '../logo/Logo';
import MenuItem from './MenuItem';
import SocialMedia from '../socialMedia/SocialMedia';
import TopMenu from './TopMenuDrawer';

const TopBar = () => {
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
  }, [handleOutsideClick]);
  const handleMenuOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <TopMenu isOpen={isOpen} />
      <MenuWrapper ref={ref}>
        <Logo />
        <BurgerMenu onClick={handleMenuOpen}>Menu</BurgerMenu>
      </MenuWrapper>
    </>
  );
};
export default TopBar;
const MenuWrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  padding: 20px;
  font-size: 20px;
  justify-content: space-between;
`;
const BurgerMenu = styled.div`
  cursor: pointer;
  opacity: 0.5;
  :hover {
    opacity: 1;
  }
`;
