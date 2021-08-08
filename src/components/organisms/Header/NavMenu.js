import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import Button from '../../atoms/Button';

const StyledContainer = styled.nav`
	width: 100%;

	@media screen and (max-width: 865px) {
		width: 100vw;
		height: 100vh;
		background-color: white;
		position: absolute;
		top: 0;
		left: 0;
		transform: translateX(100%);
		transition: transform 0.2s ease-out;

		${({ isToggled }) =>
			isToggled &&
			css`
				transform: translateX(0);
			`}
	}
`;

const StyledMenuWrapper = styled.ul`
	width: 100%;
	height: 100%;
	display: inline-flex;
	align-items: center;
	list-style: none;

	@media screen and (max-width: 865px) {
		flex-direction: column;
		justify-content: center;
	}
`;

const StyledMenuItem = styled.li`
	margin-right: 20px;
	height: 65px;
	line-height: 65px;

	&:last-child {
		margin-right: 0;
		margin-left: auto;
	}

	@media screen and (max-width: 865px) {
		margin: 0 0 10px;

		&:last-child {
			margin: 0;
		}
	}
`;

const StyledLink = styled(Link)`
	cursor: pointer;
	display: block;
	transition: ease 0.2s;

	&::after {
		content: '';
		display: block;
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background: hsl(222, 80%, 56%);
		position: relative;
		bottom: 35px;
		left: calc((100% / 2) - 3px);
		opacity: 0;
		transition: inherit;
	}

	&:hover,
	&--active {
		transform: translateY(-10px);
		text-shadow: 0 0 1px black;

		&:after {
			transform: translateY(20px);
			opacity: 1;
		}
	}
`;

const navItems = [
	{
		name: 'Strona główna',
		route: '/#',
		itemName: 'hero',
	},
	{
		name: 'Oferta',
		route: '/#oferta',
		itemName: 'offer',
	},
	{
		name: 'O nas',
		route: '/#o-nas',
		itemName: 'about',
	},
	{
		name: 'Artykuły',
		route: '/artykuly',
		itemName: 'articles',
	},
	{
		name: 'Kontakt',
		route: '/#kontakt',
		itemName: 'contact',
	},
];

const NavMenu = ({ hideMenu, isToggled }) => (
	<StyledContainer isToggled={isToggled}>
		<StyledMenuWrapper>
			{navItems.map((item) =>
				item.name !== 'Kontakt' ? (
					<StyledMenuItem
						key={item.name}
						onClick={hideMenu}
						data-item-name={item.itemName}
					>
						<StyledLink to={item.route}>{item.name}</StyledLink>
					</StyledMenuItem>
				) : (
					<StyledMenuItem key={item.name} onClick={hideMenu}>
						<Button secondary as={Link} to={item.route}>
							{item.name}
						</Button>
					</StyledMenuItem>
				),
			)}
		</StyledMenuWrapper>
	</StyledContainer>
);

NavMenu.propTypes = {
	hideMenu: PropTypes.func.isRequired,
	isToggled: PropTypes.bool.isRequired,
};

export default NavMenu;
