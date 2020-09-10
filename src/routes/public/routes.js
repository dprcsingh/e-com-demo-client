import React from 'react';
import PublicRoute from './publicRoutes';
import Products from '../../modules/products/Products';

const routes = [
  { path: '/', component: Products },
  { path: '/register', component: '' },
  { path: '/forget-password', component: '' },
  { path: '/home', component: '' },
  { path: '/contacts', component: '' },
];

const publicRoutes = routes.map((route) => (
  <PublicRoute
    exact
    path={route.path}
    component={route.component}
    key={route.path}
  />
));

export default publicRoutes;
