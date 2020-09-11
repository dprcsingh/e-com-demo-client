import React from 'react';
import styled from 'styled-components';
import constants from '../../style/constants';

type Props = {
  theme?: object;
  style?: object;
  fill?: boolean;
  className?: string;
  children: React.ReactNode;
};
const Section = (props: Props) => {
  const { theme, style, className } = props;

  return (
    <SectionWrapper className={className} theme={theme} style={style}>
      {props.children}
    </SectionWrapper>
  );
};

export default Section;
const SectionWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  .oneThird {
    width: 50%;
  }
  @media (max-width: ${constants.TAB_WIDTH}px) {
    width: 100%;
    .oneThird {
      width: 100%;
    }
  }
`;
