import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

import { Container } from '../../../assets/styles/GlobalStyles';

import Heading from '../../atoms/Heading';
import Paragraph from '../../atoms/Paragraph';

import AboutTile from '../../molecules/AboutTile';

const StyledContainer = styled(Container)`
	position: relative;
	background-image: linear-gradient(187deg, white 25vh, whitesmoke 25vh);
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
	display: flex;
	flex-direction: column;
	position: relative;

	&::before {
		position: absolute;
		content: '';
		width: 4px;
		height: 100%;
		background: linear-gradient(to bottom, crimson 60%, whitesmoke 100%);
		z-index: 1;
	}

	@media screen and (min-width: 1440px) {
		padding-left: 0;

		&::before {
			left: calc(50% - 2px);
		}
	}

	@media screen and (max-width: 1440px) {
		padding-left: 4em;

		&::before {
			left: 0;
		}
	}
`;

const query = graphql`
	{
		allGraphCmsAboutItem {
			nodes {
				id
				content
				image {
					localFile {
						childImageSharp {
							gatsbyImageData(layout: CONSTRAINED)
						}
					}
				}
			}
		}
	}
`;

const About = () => {
	const {
		allGraphCmsAboutItem: { nodes },
	} = useStaticQuery(query);

	return (
		<StyledContainer id="o-nas">
			<StyledIntroWrapper>
				<Heading secondary as="h2">
					O nas
				</Heading>
				<StyledParagraph>
					Jesteśmy firmą z wieloletnim doświadczeniem dostarczając
					naszym klientom produkty najwyższej jakości. Dowiedz się o
					nas więcej.
				</StyledParagraph>
			</StyledIntroWrapper>
			<StyledContentWrapper>
				{nodes.map((node) => (
					<AboutTile key={node.id} data={node} />
				))}
			</StyledContentWrapper>
		</StyledContainer>
	);
};

export default About;
