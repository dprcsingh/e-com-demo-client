import React from 'react';
import styled from 'styled-components';
import Layout from './Layout';
import TopBar from '../menuBar/TopBar';
import { Switch } from 'react-router-dom';
import publicRoutes from '../../routes/public/routes';

const MobileLayout = (props) => {
  return (
    <Layout>
      <Layout.Section>
        <TopBar />
      </Layout.Section>
      <Layout.Section>
        <Switch>{publicRoutes}</Switch>
      </Layout.Section>
    </Layout>
  );
};
const Wrapper = styled.div``;
export default MobileLayout;
