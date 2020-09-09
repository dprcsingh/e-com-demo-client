import React, { useState } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import NavigationMenu from '../modules/navigationMenu/NavigationMenu';
import publicRoutes from './public/routes';
const Routes = () => {
  return (
    <>
      <Router>
        <NavigationMenu />
        <Switch>{publicRoutes}</Switch>
      </Router>
    </>
  );
};

export default Routes;
