require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
	siteMetadata: {
		title: `Gatsby Default Starter`,
		description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
		author: `@gatsbyjs`,
		siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-image`,
		`gatsby-plugin-styled-components`,
		`gatsby-plugin-mdx`,
		{
			resolve: 'gatsby-plugin-anchor-links',
			options: {
				duration: 500,
			},
		},
		{
			resolve: 'gatsby-source-graphcms',
			options: {
				endpoint: process.env.GATSBY_GRAPHCMS_API_URL,
				downloadLocalImages: true,
			},
		},
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [`montserrat\:400, 600,700`],
				display: 'swap',
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/assets/images`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			name: `static`,
			options: {
				name: `static`,
				path: `${__dirname}/src/static`,
			},
		},
		{
			resolve: `gatsby-plugin-page-creator`,
			options: {
				path: `${__dirname}/src/pages`,
				ignore: [`articles.js`],
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		// {
		// 	resolve: `gatsby-plugin-manifest`,
		// 	options: {
		// 		name: `gatsby-starter-default`,
		// 		short_name: `starter`,
		// 		start_url: `/`,
		// 		background_color: `#663399`,
		// 		theme_color: `#663399`,
		// 		display: `minimal-ui`,
		// 		icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
		// 	},
		// },
		`gatsby-plugin-gatsby-cloud`,
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
};
