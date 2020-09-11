import React, { useState, useRef, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import Logo from '../logo/Logo';
import TopMenu from './TopMenuDrawer';
import BurgerMenu from './burgerMenu';
import Stack from '../stack/Stack';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

const TopBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const handleOutsideClick = useCallback((event: Event) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  }, []);
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
      <Wrapper ref={ref}>
        <Stack justifyContent="space-between">
          <Stack>
            <Stack.Item>
              <BurgerMenu onClick={handleMenuOpen} />
            </Stack.Item>
            <Stack.Item>
              <Logo />
            </Stack.Item>
          </Stack>
          <Stack.Item>
            <FontAwesomeIcon icon={faShoppingBasket} />
          </Stack.Item>
        </Stack>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.div`
  width: 100%;
`;
export default TopBar;
