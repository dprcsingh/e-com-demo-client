import React, { useContext } from 'react';
import styled from 'styled-components';
import { ViewPort } from '../../context/viewPortContext';
import TopBar from '../../components/menuBar/TopBar';
import SideMenuBar from '../../components/menuBar/SideMenu';
import SideMenu from '../../components/menuBar/SideMenu';

const NavigationMenu = () => {
  const viewPort = useContext(ViewPort);
  const isMobile = viewPort.width <= 769 ? true : false;
  return (
    <Wrapper>
      {isMobile && <TopBar />}
      {!isMobile && <SideMenu />}
    </Wrapper>
  );
};
export default NavigationMenu;

const Wrapper = styled.div``;
