import React from 'react';
import styled from 'styled-components';

import { Container } from '../../../assets/styles/GlobalStyles';
import Paragraph from '../../atoms/Paragraph';

import logo from '../../../assets/images/logo.svg';

const StyledContainer = styled(Container)`
	position: relative;
	background: #dcdcdc;
	align-items: center;
	justify-content: space-between;
	flex-direction: row;
	padding-top: 20px;
	padding-bottom: 20px;

	${Paragraph} {
		&:nth-child(1) {
			order: 1;
		}
		&:nth-child(2) {
			order: 3;
		}
	}

	&:after {
		content: '';
		order: 2;
		width: 148px;
		height: 48px;
		background: url(${logo}) center/100% no-repeat;
	}

	&:before {
		display: none;
	}

	@media screen and (max-width: 865px) {
		align-items: center;
		justify-content: center;
		flex-direction: column;

		&::after {
			display: none;
		}
	}
`;

const Articles = () => (
	<StyledContainer as="footer">
		<Paragraph secondary>
			<strong>AMS elektronik</strong> &copy; {new Date().getFullYear()}
		</Paragraph>
		<Paragraph secondary>projekt i kodowanie: Kamil Pyszkowski</Paragraph>
	</StyledContainer>
);

export default Articles;
