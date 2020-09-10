import React from 'react';
import styled, { useTheme } from 'styled-components';

const Container = (props) => {
  const { theme } = useTheme();
  return <ContainerWrapper theme={theme}>{props.children}</ContainerWrapper>;
};

export default Container;

const ContainerWrapper = styled.div`
  background: ${(props) => props.theme.background || '#ffffff'};
  color: ${(props) => props.theme.textColor || '#121212'};
  width: 100vw;
  height: 100%;
  margin: 0;
  padding: 0;

  .menu {
    font-size: 20px;
    background-color: ${(props) => props.theme.menu.background || '#fffff'};
  }
  .menu a {
    cursor: pointer;
    color: ${(props) => props.theme.aColor || '#121212'};
    opacity: 0.7;
  }
  .menu a:hover {
    opacity: 1;
  }
  .socialMedia {
    cursor: pointer;
  }
  .facebook:hover {
    color: darkblue;
  }
  .twitter:hover {
    color: skyblue;
  }
  .instagram:hover {
    color: orange;
  }
  .google:hover {
    color: red;
  }
`;
