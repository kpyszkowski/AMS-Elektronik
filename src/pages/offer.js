import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { RichText } from '@graphcms/rich-text-react-renderer';

import Layout from '../components/layout';
import { Container } from '../assets/styles/GlobalStyles';

import Heading from '../components/atoms/Heading';
import Paragraph from '../components/atoms/Paragraph';
import List from '../components/atoms/List';
import Table from '../components/atoms/Table';

export const query = graphql`
	query getOfferItem($slug: String) {
		graphCmsOfferItem(slug: { eq: $slug }) {
			title
			slug
			content {
				raw
			}
		}
	}
`;

const StyledContainer = styled(Container)`
	display: block;
	padding: 0 30vw 65px 10vw;

	table:nth-of-type(2) {
		float: right;
		margin-left: 20px;
	}

	@media screen and (max-width: 865px) {
		padding: 0 25px;

		table {
			width: 100%;
		}
	}
`;

const StyledHeading = styled(Heading)`
	text-align: center;
`;

const OfferIntro = styled(Container)`
	position: relative;
	background-color: hsla(222, 80%, 56%, 0.08);
	padding-top: calc(175px + 5%);
	padding-bottom: 10%;
	clip-path: polygon(0 0, 100% 0, 100% 70%, 0% 100%);

	@media screen and (max-width: 865px) {
		clip-path: polygon(0 0, 100% 0, 100% 85%, 0% 100%);
		padding-top: 80px;
	}
`;

const StyledParagraph = styled(Paragraph)`
	padding: 12px 0;
`;

const OfferPage = ({ data }) => {
	return (
		<Layout>
			<OfferIntro>
				<Heading>{data.graphCmsOfferItem.title}</Heading>
			</OfferIntro>
			<StyledContainer>
				<RichText
					content={data.graphCmsOfferItem.content.raw}
					renderers={{
						h1: ({ children }) => (
							<StyledHeading>{children}</StyledHeading>
						),
						h2: ({ children }) => (
							<StyledHeading secondary as="h2">
								{children}
							</StyledHeading>
						),
						h3: ({ children }) => (
							<StyledHeading tertiary as="h3">
								{children}
							</StyledHeading>
						),
						p: ({ children }) => (
							<StyledParagraph>{children}</StyledParagraph>
						),
						ul: ({ children }) => <List>{children}</List>,
						table: ({ children }) => <Table>{children}</Table>,
					}}
				/>
			</StyledContainer>
		</Layout>
	);
};

export default OfferPage;
