require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
	siteMetadata: {
		title: `AMS Elektronik`,
		description: `AMS elektronik zajmuje się produkcją i instalacją suszarń tarcicy oraz materiałów sypkich, systemów sterowania i wyposażenia suszarń.`,
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
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `AMS Elektronik`,
				short_name: `ams`,
				lang: `pl`,
				start_url: `/`,
				background_color: `hsl(0,0%,100%)`,
				theme_color: `hsl(222, 80%, 56%)`,
				display: `standalone`,
				icon: `src/assets/images/favicon.svg`,
				crossOrigin: `anonymous`,
			},
		},
		`gatsby-plugin-gatsby-cloud`,
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
};
