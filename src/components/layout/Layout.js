// import React from 'react';
import styled from 'styled-components';
// import Section from './Sections';

// class Layout extends React.Component {
//   constructor(props) {
//     super(props);
//     this.props = props;
//   }
//   render() {
//     return (
//       <LayoutWrapper theme={this.props.theme}>
//         {this.props.children}
//       </LayoutWrapper>
//     );
//   }
// }
// Layout.Section = Section;
// export default Layout;

// const LayoutWrapper = styled.div`
//   width: 100%;
//   margin: 0;
//   padding: 0;
//   display: flex;
//   flex-direction: row;
//   flex-wrap: wrap;
//   align-items: center;
//   align-content: center;
// `;

import React from 'react';
import Section from './Sections';
import constants from '../../style/constants';
const Layout = (props) => {
  const { vertical } = props;
  return <Wrapper vertical={vertical}>{props.children}</Wrapper>;
};

Layout.Section = Section;
export default Layout;

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  @media (max-width: ${constants.MAX_WIDTH}px) {
    flex-direction: column;
  }
`;
