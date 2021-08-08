import React from 'react';
import styled from 'styled-components';

import { Container } from '../../../assets/styles/GlobalStyles';

import Heading from '../../atoms/Heading';
import Button from '../../atoms/Button';

const StyledContainer = styled(Container)`
	justify-content: center;
	align-items: flex-start;
	height: 100vh;

	@media screen and (max-width: 865px) {
		align-items: center;
	}

	&::after {
		content: '';
		width: 100vw;
		position: absolute;
		height: 150vh;
		background: linear-gradient(to bottom, whitesmoke, transparent);
		clip-path: polygon(0 0, 100% 30%, 100% 100%, 0 70%);
		top: 50vh;
		left: 0;
		z-index: -9;
	}
`;

const StyledTypoWrapper = styled.div`
	display: inline-flex;
	flex-direction: column;
	align-items: flex-start;

	@media screen and (max-width: 865px) {
		text-align: center;
		align-items: center;
	}
`;

const StyledHeading = styled(Heading)`
	line-height: 72px;
	margin-bottom: 28px;
`;

const Hero = () => (
	<StyledContainer data-section-name="hero">
		<StyledTypoWrapper>
			<StyledHeading>
				Suszarnie dla Twojego <br />
				przedsiębiorstwa
			</StyledHeading>
			<Button to="#oferta">Sprawdź naszą ofertę</Button>
		</StyledTypoWrapper>
	</StyledContainer>
);
export default Hero;
