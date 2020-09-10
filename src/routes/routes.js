import React, { useState, useContext } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import publicRoutes from './public/routes';
import MobileLayout from '../components/layout/MobileLayout';
import { ViewPort } from '../context/viewPortContext';
import TopBar from '../components/menuBar/TopBar';
import DeskTopLayout from '../components/layout/DeskTopLayout';
import SideMenu from '../components/menuBar/SideMenu';
import Layout from '../components/layout/Layout';
import constants from '../style/constants';
const Routes = () => {
  const viewPort = useContext(ViewPort);
  const isMobile = viewPort.width <= constants.MAX_WIDTH ? true : false;
  return (
    <Router>
      {isMobile && <MobileLayout />}
      {!isMobile && <DeskTopLayout />}
    </Router>
  );
};

export default Routes;
