import React from 'react';
import styled from 'styled-components';

const StyledList = styled.ul`
	margin-left: 48px;
	list-style: none;

	li {
		position: relative;
		margin-bottom: 12px;
		padding-left: 28px;
		line-height: 2.5rem;

		&:last-child {
			margin-bottom: 0;
		}

		&::before {
			content: '';
			background: radial-gradient(
				hsl(222, 80%, 56%) 30%,
				transparent 35%,
				transparent 50%,
				hsl(222, 80%, 56%) 55%
			);
			width: 18px;
			height: 18px;
			display: inline-block;
			position: absolute;
			top: 14px;
			left: -14px;
			border-radius: 50%;
		}
	}
`;

//in case of ordered list define component as <List as="ol">...</List>

const List = ({ children }) => <StyledList>{children}</StyledList>;

export default List;
