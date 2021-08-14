import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Seo from '../components/Seo';

import Layout from '../components/layout';
import { Container } from '../assets/styles/GlobalStyles';

import Heading from '../components/atoms/Heading';
import Paragraph from '../components/atoms/Paragraph';
import ArticleItem from '../components/molecules/ArticleItem';

import faktorLogo from '../assets/images/faktor-logo.png';
import gpdLogo from '../assets/images/gpd-logo.png';
import kurierDrzewnyLogo from '../assets/images/kurier-drzewny-logo.png';

import faktorPdf from '../static/faktor-4-2016.pdf';
import gpdPdf from '../static/gpd-4-2010.pdf';
import drewnoTechnikaPdf from '../static/drewno-technika-1-2010.pdf';
import kurierDrzewny1Pdf from '../static/kurier-drzewny-2-2013.pdf';
import kurierDrzewny2Pdf from '../static/kurier-drzewny-9-2017.pdf';

export const query = graphql`
	query getThumbnail {
		allGraphCmsAsset(filter: { fileName: { regex: "/thumbnail/" } }) {
			nodes {
				fileName
				localFile {
					childImageSharp {
						gatsbyImageData
					}
				}
			}
		}
	}
`;

const StyledContainer = styled(Container)`
	position: relative;
	display: block;
`;

const StyledIntroWrapper = styled(Container)`
	position: relative;
	background-color: hsla(222, 80%, 56%, 0.08);
	padding-top: calc(175px + 5%);
	padding-bottom: 10%;
	clip-path: polygon(0 0, 100% 0, 100% 70%, 0% 100%);

	@media screen and (max-width: 865px) {
		clip-path: polygon(0 0, 100% 0, 100% 85%, 0% 100%);
		padding-top: calc(80px + 5%);
	}
`;
const StyledContentWrapper = styled.section`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 40px 50px;

	@media screen and (max-width: 865px) {
		grid-template-columns: 1fr;
	}
`;

const ArticlesPage = ({ data }) => {
	const thumbnails = data.allGraphCmsAsset.nodes;

	const filterThumbnails = (fileNameChunk) => {
		return thumbnails.find((thumbnail) =>
			thumbnail.fileName.includes(fileNameChunk),
		);
	};

	const articlesItems = [
		{
			logo: gpdLogo,
			releaseDate: 'kwiecień 2010',
			thumbnailData: filterThumbnails('gpd'),
			pdfFile: gpdPdf,
		},
		{
			logo: 'Drewno Technika',
			releaseDate: 'styczeń 2009',
			thumbnailData: filterThumbnails('drewno-technika'),
			pdfFile: drewnoTechnikaPdf,
		},
		{
			logo: faktorLogo,
			releaseDate: 'kwiecień 2016',
			thumbnailData: filterThumbnails('faktor'),
			pdfFile: faktorPdf,
		},
		{
			logo: kurierDrzewnyLogo,
			releaseDate: 'luty 2013',
			thumbnailData: filterThumbnails('kurier-drzewny-2013'),
			pdfFile: kurierDrzewny1Pdf,
		},
		{
			logo: kurierDrzewnyLogo,
			releaseDate: 'wrzesień 2017',
			thumbnailData: filterThumbnails('kurier-drzewny-2017'),
			pdfFile: kurierDrzewny2Pdf,
		},
	];

	return (
		<Layout>
			<Seo title="Artykuły z prasy branżowej" />
			<StyledIntroWrapper>
				<Heading>Artykuły z prasy branżowej</Heading>
				<Paragraph>
					Nasza firma może pochwalić się wyróżnieniami w postaci
					licznych artykułów w prasie branżowej.
				</Paragraph>
			</StyledIntroWrapper>
			<StyledContainer>
				<StyledContentWrapper>
					{articlesItems.map((item) => (
						<ArticleItem key={item.releaseDate} data={item} />
					))}
				</StyledContentWrapper>
			</StyledContainer>
		</Layout>
	);
};

export default ArticlesPage;
