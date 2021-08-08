import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const StyledContainer = styled.div`
	height: 72px;
	position: relative;
	border-radius: 35px;
	overflow: hidden;
	border: 1px solid #cecece;
	background-color: white;
	margin-bottom: 16px;

	${({ textarea }) =>
		textarea &&
		css`
			height: 300px;

			textarea {
				resize: none;
				padding-top: 32px;
			}
		`}
`;

const StyledLabel = styled.label`
	font: inherit;
	width: calc(100% - 30px);
	height: 100%;
	position: absolute;
	top: 0;
	left: 30px;
	line-height: 72px;
	pointer-events: none;
	transform-origin: top left;
	transition: transform 0.2s ease-in-out;
`;

const StyledIndicator = styled.span`
	display: block;
	width: calc(100% - 60px);
	height: 2px;
	background-color: crimson;
	position: absolute;
	left: 30px;
	bottom: 10px;
	transform: translateY(24px);
	transition: transform 0.2s ease-in-out;
`;

const StyledInput = styled.input`
	font: inherit;
	width: 100%;
	height: 100%;
	position: relative;
	outline: none;
	border: none;
	background-color: transparent;
	padding: 12px 30px 0;

	&:focus
		~ ${StyledIndicator},
		&:not(:placeholder-shown)
		~ ${StyledIndicator} {
		transform: translateY(0);
	}

	&:focus ~ ${StyledLabel}, &:not(:placeholder-shown) ~ ${StyledLabel} {
		transform: scale(0.7) translateY(-16px);
	}
`;

const Input = (props) => (
	<StyledContainer textarea={props.textarea}>
		<StyledInput
			{...props}
			{...props.register(props.name)}
			as={props.textarea ? 'textarea' : null}
			id={props.name}
			placeholder=" "
		/>
		<StyledLabel forHtml={props.name}>{props.label}</StyledLabel>
		<StyledIndicator />
	</StyledContainer>
);

Input.propTypes = {
	type: PropTypes.string,
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
};

Input.defaultProps = {
	type: 'text',
};

export default Input;
