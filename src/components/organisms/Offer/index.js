import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

import { Container } from '../../../assets/styles/GlobalStyles';

import Heading from '../../atoms/Heading';
import Paragraph from '../../atoms/Paragraph';

import OfferCard from '../../molecules/OfferCard';

const query = graphql`
	{
		allGraphCmsOfferItem {
			nodes {
				shortTitle
				slug
				content {
					text
				}
				featuredImage {
					localFile {
						childImageSharp {
							gatsbyImageData(height: 300, layout: CONSTRAINED)
						}
					}
				}
			}
		}
	}
`;

const StyledIntroWrapper = styled.div`
	text-align: center;
	width: 100%;
	margin: 0 auto;

	@media screen and (min-width: 1200px) {
		width: 480px;
	}
`;

const StyledParagraph = styled(Paragraph)`
	margin: 18px 0 68px;
`;

const StyledContentWrapper = styled.div`
	display: grid;
	grid-gap: 65px 80px;

	@media screen and (min-width: 1600px) {
		grid-template-columns: repeat(2, 1fr);
	}
`;

const Offer = () => {
	const data = useStaticQuery(query);
	return (
		<Container id="oferta" data-section-name="offer">
			<StyledIntroWrapper>
				<Heading secondary as="h2">
					Oferta
				</Heading>
				<StyledParagraph>
					Oferujemy suszarnie taśmowe, komorowe, systemy sterowania
					oraz wyposażenie suszarni. Zapoznaj się z naszą ofertą.
				</StyledParagraph>
			</StyledIntroWrapper>
			<StyledContentWrapper>
				{data.allGraphCmsOfferItem.nodes.map((node) => (
					<OfferCard key={node.shortTitle} data={node} />
				))}
			</StyledContentWrapper>
		</Container>
	);
};
export default Offer;
