import React, { useContext } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import DeskTopLayout from '../components/layout/DeskTopLayout';
import MobileLayout from '../components/layout/MobileLayout';
import { ViewPort } from '../context/viewPortContext';
import constants from '../style/constants';

const Routes = () => {
  const { width = {} } = useContext(ViewPort);
  const isMobile = width <= constants.TAB_WIDTH ? true : false;

  return (
    <Router>
      {isMobile && <MobileLayout />}
      {!isMobile && <DeskTopLayout />}
    </Router>
  );
};
export default Routes;
