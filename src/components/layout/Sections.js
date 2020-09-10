import React from 'react';
import styled from 'styled-components';

const Section = (props) => {
  const { theme, style, fill, area } = props;
  const word = `section-`;
  const className = area;
  return (
    <SectionWrapper className={className} theme={theme} style={style}>
      {props.children}
    </SectionWrapper>
  );
};

export default Section;
const SectionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  .oneThird {
    background-color: yellow;
  }
`;
