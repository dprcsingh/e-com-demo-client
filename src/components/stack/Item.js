import React from 'react';
import styled from 'styled-components';

const Item = (props) => {
	const { fill, style, space } = props;

	const className = `space-${space}`;
	return <ItemWrapper fill={fill} style={style} className={className}>
		{props.children}
	</ItemWrapper>
}
export default Item;

const ItemWrapper = styled.div`
	flex:${props => props.fill ? '1 1 auto' : '0 0 auto'};
	margin:auto 0;
	min-width: 0;
`;