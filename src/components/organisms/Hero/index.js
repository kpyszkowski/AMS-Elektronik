import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import arrowIcon from '../../../assets/images/arrow-icon.svg';

import { Container } from '../../../assets/styles/GlobalStyles';

import Heading from '../../atoms/Heading';
import Button from '../../atoms/Button';

const query = graphql`
	query MyQuery {
		allGraphCmsAsset(filter: { fileName: { regex: "/offer/" } }) {
			edges {
				node {
					localFile {
						childImageSharp {
							gatsbyImageData(
								layout: CONSTRAINED
								height: 360
								tracedSVGOptions: { alphaMax: 1.5 }
							)
						}
					}
				}
			}
		}
	}
`;

const StyledContainer = styled(Container)`
	justify-content: space-between;
	align-items: center;
	flex-direction: row;
	height: 100vh;

	@media screen and (max-width: 865px) {
		align-items: center;
		justify-content: center;
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
	width: auto;

	@media screen and (max-width: 865px) {
		text-align: center;
		align-items: center;
	}
`;

const StyledSliderWrapper = styled.div`
	display: none;
	width: 40%;

	@media screen and (min-width: 1200px) {
		display: block;
	}
`;

const StyledSliderImage = styled(GatsbyImage)`
	border-radius: 10px;
	overflow: hidden;
	width: 100%;
	height: 360px;
`;

const StyledSliderArrow = styled.button`
	width: 32px;

	&:nth-of-type(1) {
		left: -42px;
	}

	&:nth-of-type(2) {
		right: -42px;
	}

	&::before {
		color: hsl(222, 80%, 56%);
		font-size: 32px;
		opacity: 1;
	}
`;

const StyledHeading = styled(Heading)`
	line-height: 72px;
	margin-bottom: 28px;
`;

const sliderSettings = {
	dots: true,
	autoplay: true,
	autoplaySpeed: 4000,
	easing: 'ease-in-out',
	nextArrow: <StyledSliderArrow />,
	prevArrow: <StyledSliderArrow />,
};

const Hero = () => {
	const {
		allGraphCmsAsset: { edges: sliderImages },
	} = useStaticQuery(query);

	return (
		<StyledContainer data-section-name="hero">
			<StyledTypoWrapper>
				<StyledHeading>
					Suszarnie dla Twojego <br />
					przedsiębiorstwa
				</StyledHeading>
				<Button to="#oferta">Sprawdź naszą ofertę</Button>
			</StyledTypoWrapper>
			<StyledSliderWrapper>
				<Slider {...sliderSettings}>
					{sliderImages.map((image) => (
						<StyledSliderImage
							key={
								image.node.localFile.childImageSharp
									.gatsbyImageData.images.fallback.src
							}
							image={
								image.node.localFile.childImageSharp
									.gatsbyImageData
							}
							alt="Grafika oferty"
						/>
					))}
				</Slider>
			</StyledSliderWrapper>
		</StyledContainer>
	);
};
export default Hero;
