import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

const StyledButton = styled.button`
	border-radius: 50px/50px;
	font-weight: 700;
	font-size: 1em;
	position: relative;
	overflow: hidden;
	background-color: hsl(222, 80%, 56%);
	color: white;
	padding: 0 30px;
	min-height: 65px;
	text-align: center;
	line-height: 65px;
	display: inline-block;

	${({ secondary }) =>
		secondary &&
		css`
			background-color: transparent;
			border: 3px solid hsl(222, 80%, 56%);
			color: hsl(222, 80%, 56%);
			min-width: 0 20px;
			min-height: 55px;
			text-align: center;
			line-height: 55px;
		`};
`;

const Button = ({ props, secondary, children, to }) => (
	<StyledButton
		{...props}
		secondary={secondary}
		to={to}
		as={to && AnchorLink}
	>
		{children}
	</StyledButton>
);

Button.propTypes = {
	secondary: PropTypes.bool,
	children: PropTypes.node.isRequired,
};

Button.defaultProps = {
	secondary: false,
};

export default Button;
