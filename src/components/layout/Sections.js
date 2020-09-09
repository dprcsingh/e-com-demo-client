import React from "react";
import styled from "styled-components";
import { COLOR, MEDIA } from '../lib/constants';

const Section = (props) => {
	const { twoThird = false, oneThird = false, oneHalf = false, theme, style } = props;
	const word = `section-`;
	let className = undefined;
	if (twoThird) {
		className = `${word}twoThird`;
	}
	if (oneThird) {
		className = `${word}oneThird`;
	}
	if (oneHalf) {
		className = `${word}oneHalf`;
	}
	return (
		<SectionWrapper className={className} theme={theme} style={style}>{props.children}</SectionWrapper>
	);
};

export default Section;
const SectionWrapper = styled.div`
  background:${props => props.theme.background};
	color:${props => props.theme.color};
	display:flex;
	justify-content:space-between;
	flex-wrap:wrap;
	flex-basis:90%;
	@media (max-width:${MEDIA.MAX})
		{
			flex-direction:column;
		}
  &.section-twoThird {
    flex-basis: 60%;
		@media (max-width:${MEDIA.MAX})
		{
			flex-basis:90%;
		}
  }
  &.section-oneThird {
    flex-basis: 30%;
		@media (max-width:${MEDIA.MAX})
		{
			flex-basis:90%;
		}
  }
  &.section-oneHalf {
		flex-basis:45%;
		@media (max-width: ${MEDIA.MAX})
		{
		flex-basis:90%;	
  }
	}
`;
