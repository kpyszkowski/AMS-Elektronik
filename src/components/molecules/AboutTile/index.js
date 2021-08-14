import React from 'react';
import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';

import Paragraph from '../../atoms/Paragraph';

const StyledContainer = styled.div`
	position: relative;

	@media screen and (min-width: 1440px) {
		width: calc(50% - 80px);
		margin-top: -10%;

		&:nth-child(odd) {
			align-self: flex-start;
			text-align: right;
			padding: 0 0 30px 20px;

			p {
				border-radius: 10px 0 10px 10px;
			}

			&::before {
				left: 100%;
				transform: rotate(-90deg);
			}

			&::after {
				left: calc(100% + 59px);
			}
		}

		&:nth-child(even) {
			align-self: flex-end;
			padding: 0 30px 20px 0;

			p {
				border-radius: 0 10px 10px 10px;
			}

			&::before {
				left: -30px;
			}

			&::after {
				left: -101px;
			}
		}
	}

	@media screen and (max-width: 1440px) {
		width: 100%;
		margin-bottom: 80px;

		p {
			border-radius: 0 10px 10px 10px;
		}
	}

	&:first-child {
		margin-top: 0;
	}

	&:last-child {
		margin-bottom: 0;
	}

	&::before {
		position: absolute;
		left: -30px;
		top: 0;
		content: '';
		width: 0;
		height: 0;
		border-bottom: 30px solid transparent;
		border-right: 30px solid white;
		z-index: 1;
	}

	&::after {
		position: absolute;
		top: -19px;
		left: calc(-4em - 19px);
		content: '';
		width: 42px;
		height: 42px;
		background: radial-gradient(
			whitesmoke 8px,
			hsl(222, 80%, 56%) 9px,
			hsl(222, 80%, 56%) 12px,
			whitesmoke 13px,
			whitesmoke 42px
		);
		border-radius: 50%;
		z-index: 1;
	}
`;

const StyledParagraph = styled(Paragraph)`
	padding: 10px 15px;
	background-color: white;
	box-shadow: 0 10px 20px -20px rgba(0, 0, 0, 0.4);
	margin-bottom: 0.5em;

	@media screen and (min-width: 865px),
		(min-width: 1200px),
		(min-width: 1500px) {
		padding: 15px 40px;
	}
`;

const StyledImage = styled(GatsbyImage)`
	border-radius: 10px;
	box-shadow: 0 25px 10px -15px rgba(0, 0, 0, 0.1),
		0 0 30px 5px rgba(0, 0, 0, 0.1);
	width: 70%;
	max-height: 315px;
	object-fit: cover;
	justify-self: center;
`;

const AboutTile = ({ data }) => (
	<StyledContainer>
		<StyledParagraph secondary>{data.content}</StyledParagraph>
		<StyledImage
			image={data.image.localFile.childImageSharp.gatsbyImageData}
			alt={data.content.substring(0, 50)}
		/>
	</StyledContainer>
);

export default AboutTile;
