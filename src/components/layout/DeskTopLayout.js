import React from 'react';

import Layout from './Layout';
import SideMenu from '../menuBar/SideMenu';
import publicRoutes from '../../routes/public/routes';
import { Switch } from 'react-router-dom';
import Stack from '../stack/Stack';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShoppingBag,
  faCompactDisc,
} from '@fortawesome/free-solid-svg-icons';

const DeskTopLayout = (props) => {
  return (
    <Layout>
      <Layout.Section style={{ width: '80px' }}>
        <SideMenu />
      </Layout.Section>
      <Layout.Section>
        <Switch>{publicRoutes}</Switch>
      </Layout.Section>
      <Layout.Section
        style={{
          height: '100%',
          position: 'fixed',
          right: '0',
        }}
      >
        <Stack
          vertical
          justifyContent="space-between"
          style={{ height: '100%', textAlign: 'center' }}
        >
          <Stack.Item>
            <FontAwesomeIcon icon={faCompactDisc} />
          </Stack.Item>
          <Stack.Item>
            <FontAwesomeIcon icon={faShoppingBag} />
          </Stack.Item>
          <Stack.Item>Checkout</Stack.Item>
        </Stack>
      </Layout.Section>
    </Layout>
  );
};

export default DeskTopLayout;
