import React from 'react';
import PublicRoute from './publicRoutes';

const routes = [
  { path: '/login', component: '' },
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
