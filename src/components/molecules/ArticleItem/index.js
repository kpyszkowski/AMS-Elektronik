import React from 'react';
import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';

import Paragraph from '../../atoms/Paragraph';
import Button from '../../atoms/Button';
import Heading from '../../atoms/Heading';

const StyledContainer = styled.div`
	display: flex;
	background: whitesmoke;
	border-left: 20px solid crimson;
	border-radius: 20px;
	position: relative;
	overflow: hidden;
	box-shadow: 0 25px 10px -15px rgba(0, 0, 0, 0.1),
		0 0 30px 5px rgba(0, 0, 0, 0.1);

	@media screen and (max-width: 865px) {
		border-left: none;
	}
`;

const StyledTypoWrapper = styled.div`
	width: 100%;
	z-index: 2;
	padding: 25px 60px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-between;

	@media screen and (max-width: 865px) {
		padding: 15px 10px;
		align-items: stretch;
	}
`;

const StyledLogo = styled.img`
	display: block;
	width: 300px;

	&::before {
		content: url(${({ logo }) => logo});
	}

	@media screen and (max-width: 865px) {
		width: 100%;
	}
`;

const StyledParagraph = styled(Paragraph)`
	padding: 20px 0;
`;

const StyledThumbnailWrapper = styled.div`
	position: absolute;
	width: 90%;
	height: 100%;
	right: 0;
	overflow: hidden;
	filter: contrast(0.8);
	z-index: 1;
	bottom: 0;
	perspective: 300px;
	mask-image: linear-gradient(to right, transparent 19%, black 100%);

	div {
		transform: rotateX(19deg) rotateY(341deg);
		transform-style: preserve-3d;
	}
`;

const ArticleItem = ({ data }) => (
	<StyledContainer>
		<StyledTypoWrapper>
			{data.logo.includes('/') ? (
				<StyledLogo src={data.logo} alt="Drewno Technika" />
			) : (
				<Heading secondary as="h2">
					{data.logo}
				</Heading>
			)}
			<StyledParagraph>
				Data wydania: <strong>{data.releaseDate}</strong>
			</StyledParagraph>
			<Button
				to={data.pdfFile}
				target="_blank"
				rel="noreferrer noopener"
				download
			>
				Przeczytaj artykuł
			</Button>
		</StyledTypoWrapper>
		<StyledThumbnailWrapper>
			<GatsbyImage
				image={
					data.thumbnailData.localFile.childImageSharp.gatsbyImageData
				}
				alt={`Miniatura artykułu ${data.name}`}
			/>
		</StyledThumbnailWrapper>
	</StyledContainer>
);

export default ArticleItem;
