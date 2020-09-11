import React from 'react';
import Layout from './Layout';
import SideMenu from '../menuBar/SideMenu';
import { Switch } from 'react-router-dom';
import Stack from '../stack/Stack';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShoppingBag,
  faCompactDisc,
} from '@fortawesome/free-solid-svg-icons';
import publicRoutes from '../../router/public/routes';

type Props = {
  children?: React.ReactNode;
};
const DeskTopLayout = (props: Props) => {
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
          width: '80px',
        }}
      >
        <Stack vertical style={{ height: '100vh', textAlign: 'center' }}>
          <Stack.Item>
            <FontAwesomeIcon icon={faCompactDisc} />
          </Stack.Item>
          <Stack.Item>
            <FontAwesomeIcon icon={faShoppingBag} />
          </Stack.Item>
          <Stack.Item>checkout</Stack.Item>
        </Stack>
      </Layout.Section>
    </Layout>
  );
};

export default DeskTopLayout;
