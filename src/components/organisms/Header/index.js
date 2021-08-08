import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

import NavMenu from './NavMenu';

const StyledContainer = styled.header`
	height: 175px;
	padding: 0 45px;
	display: flex;
	align-items: center;
	position: absolute;
	width: 100%;
	z-index: 3;
	transition: all 0.2s ease-in-out;

	@media screen and (max-width: 865px) {
		justify-content: space-between;
		height: 80px;
		padding: 0 15px;
	}
`;

const StyledLogoWrapper = styled.div`
	width: 300px;
	height: 100%;
	display: inline-flex;
	align-items: center;
	text-align: center;

	@media screen and (max-width: 865px) {
		width: 140px;
		z-index: 3;
	}

	&::after {
		content: '';
		display: inline-block;
		position: relative;
		top: -5px;
		height: 50px;
		width: 2px;
		background-color: #ccc;
		border-radius: 6px;
		margin: 0 30px;

		@media screen and (max-width: 865px) {
			display: none;
		}
	}
`;

const StyledNavToggle = styled.button`
	background: transparent;
	width: 42px;
	height: 26px;
	position: relative;
	display: none;
	z-index: 3;

	@media screen and (max-width: 865px) {
		display: block;
	}

	span {
		width: 100%;
		height: 2px;
		display: block;
		background-color: black;
		transform-origin: right;
		transition: transform 0.2s ease-out;

		&:nth-of-type(2) {
			transform: scaleX(75%);
			margin: 10px 0;
		}

		&:nth-of-type(3) {
			transform: scaleX(50%);
			bottom: 0;
		}

		${({ isToggled }) =>
			isToggled &&
			css`
				&:nth-of-type(1) {
					transform-origin: top right;
					transform: rotate(-45deg) translate(-4px, -8px);
				}

				&:nth-of-type(2) {
					transform: scaleX(0);
				}

				&:nth-of-type(3) {
					transform-origin: bottom right;
					transform: rotate(45deg) translate(-4px, 8px) scaleX(100%);
				}
			`}
	}
`;

const Header = () => {
	const [isToggled, setToggle] = useState(false);

	const handleToggle = () => setToggle((prevState) => !prevState);

	return (
		<StyledContainer>
			<StyledLogoWrapper>
				<Link to="/">
					<StaticImage
						src="../../../assets/images/logo.svg"
						alt="AMS elektronik"
					/>
				</Link>
			</StyledLogoWrapper>
			<StyledNavToggle onClick={handleToggle} isToggled={isToggled}>
				<span></span>
				<span></span>
				<span></span>
			</StyledNavToggle>
			<NavMenu hideMenu={handleToggle} isToggled={isToggled} />
		</StyledContainer>
	);
};

export default Header;
