import styled from 'styled-components';
import React from 'react';
import Section from './Sections';
import constants from '../../style/constants';

type Props = {
  vertical?: boolean;
  children: React.ReactNode;
};
const Layout = (props: Props) => {
  const { vertical } = props;
  return <Wrapper vertical={vertical}>{props.children}</Wrapper>;
};

Layout.Section = Section;
export default Layout;

const Wrapper = styled.div<any>`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  @media (max-width: ${constants.TAB_WIDTH}px) {
    flex-direction: column;
  }
`;
