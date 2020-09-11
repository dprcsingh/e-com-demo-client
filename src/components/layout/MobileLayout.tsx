import React from 'react';
import Layout from './Layout';
import TopBar from '../menuBar/TopBar';
import { Switch } from 'react-router-dom';
import publicRoutes from '../../router/public/routes';

type Props = {
  children?: React.ReactNode;
};
const MobileLayout = (props: Props) => {
  return (
    <Layout>
      <Layout.Section>
        <TopBar />
      </Layout.Section>
      <Layout.Section>
        <Switch>{publicRoutes}</Switch>
      </Layout.Section>
      {props.children}
    </Layout>
  );
};
export default MobileLayout;
