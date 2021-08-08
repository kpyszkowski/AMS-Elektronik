import React from 'react';
import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';

import Paragraph from '../../atoms/Paragraph';
import Heading from '../../atoms/Heading';
import Button from '../../atoms/Button';

const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	box-shadow: 0 32px 10px -20px rgb(0 0 0 / 10%),
		0 0 16px 2px rgb(0 0 0 / 10%);
	border-radius: 10px;
	position: relative;
	overflow: hidden;
	background-color: white;
	transition: transform 0.2s ease-in-out;

	@media screen and (min-width: 865px),
		(min-width: 1200px),
		(min-width: 1500px) {
		flex-direction: row;
		min-height: 300px;
	}

	&:hover {
		transform: scale(1.05);
	}
`;

const StyledImage = styled(GatsbyImage)`
	width: 100%;
	height: 300px;

	@media screen and (min-width: 865px), (min-width: 1200px) {
		width: 45%;
		height: 100%;
	}
`;

const StyledWrapper = styled.div`
	padding: 15px 10px;
	width: 100%;
	display: inline-flex;
	flex-direction: column;
	justify-content: space-evenly;

	@media screen and (min-width: 865px), (min-width: 1200px) {
		width: 55%;
		padding: 25px 40px;
	}
`;

const StyledHeading = styled(Heading)`
	height: 50px;
	line-height: 180%;
`;

const StyledParagraph = styled(Paragraph)`
	margin: 2em 0;
	text-align: justify;
`;

const StyledButton = styled(Button)`
	width: 100%;
	border-radius: 20px;
	padding: 20px 0;
	align-self: end;
`;

const OfferCard = ({ data }) => {
	const contentExcerpt =
		data.content.text
			.replace(/\\n/gm, ' ')
			.replace(/^(.{160}[^\s]*).*/, '$1') + '...';

	return (
		<StyledContainer>
			<StyledImage
				image={
					data.featuredImage.localFile.childImageSharp.gatsbyImageData
				}
				alt={data.shortTitle}
			/>
			<StyledWrapper>
				<StyledHeading tertiary as="h3">
					{data.shortTitle}
				</StyledHeading>
				<StyledParagraph secondary>{contentExcerpt}</StyledParagraph>
				<StyledButton to={`oferta/${data.slug}`}>
					Dowiedz się więcej
				</StyledButton>
			</StyledWrapper>
		</StyledContainer>
	);
};

export default OfferCard;
