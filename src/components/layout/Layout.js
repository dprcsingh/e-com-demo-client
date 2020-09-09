import React from 'react';
import styled from 'styled-components';
import Section from './Sections';
import { COLOR } from '../lib/constants';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    return (
      <LayoutWrapper theme={this.props.theme}>
        {this.props.children}
      </LayoutWrapper>
    );
  }
}
Layout.Section = Section;
export default Layout;

const LayoutWrapper = styled.div`
  width: 100%;
  background: ${(props) => props.theme.background || COLOR.BACKGROUND};
  color: ${(props) => props.theme.color || COLOR.TEXT_COLOR};
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  position: relative;
  & > div {
    margin: 10px;
  }
`;
