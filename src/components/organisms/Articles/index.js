import React from 'react';
import styled from 'styled-components';

import { Container } from '../../../assets/styles/GlobalStyles';

import Heading from '../../atoms/Heading';
import Paragraph from '../../atoms/Paragraph';

import Button from '../../atoms/Button';

import icon from '../../../assets/images/newspaper-icon.svg';

const StyledParagraph = styled(Paragraph)`
	margin: 18px 0 68px;
`;

const StyledContainer = styled(Container)`
	position: relative;
	background: hsl(349deg 80% 40% / 50%);
	color: white;
	align-items: flex-start;

	&::before {
		content: '';
		position: absolute;
		width: 40%;
		height: 100%;
		background: crimson url(${icon}) 75% 50%/50% no-repeat;
		mix-blend-mode: darken;
		left: -100%;
		margin: -65px -10vw;
	}

	@media screen and (min-width: 865px),
		(min-width: 1200px),
		(min-width: 1500px) {
		padding: 65px 10vw 65px calc(40% - 5vw);

		&::before {
			left: 0;
		}
	}
`;

const Articles = () => (
	<StyledContainer>
		<Heading secondary as="h2">
			Zostaliśmy wyróżnieni w prasie branżowej
		</Heading>
		<StyledParagraph>
			Nasza firma może pochwalić się wyróżnieniami w postaci licznych
			artykułów w prasie branżowej.
		</StyledParagraph>
		<Button to="/artykuly">Dowiedz się więcej</Button>
	</StyledContainer>
);

export default Articles;
