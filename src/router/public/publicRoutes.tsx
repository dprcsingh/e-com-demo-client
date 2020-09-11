import React from 'react';
import { Route, Redirect } from 'react-router-dom';

type Props = {
  component?: React.ComponentType<any>;
  exact?: boolean;
  path?: string | string[];
};
const PublicRoute = (props: Props) => {
  const { component: Component, ...rest } = props;
  return <Route component={Component} {...rest} />;
};

export default PublicRoute;
