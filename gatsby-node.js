const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;
	const offerPage = path.resolve(`src/pages/offer.js`);
	const result = await graphql(
		`
			query loadOfferItemsQuery {
				allGraphCmsOfferItem {
					nodes {
						slug
					}
				}
			}
		`,
	);

	result.data.allGraphCmsOfferItem.nodes.forEach((node) => {
		createPage({
			path: `oferta/${node.slug}`,
			component: offerPage,
			context: {
				slug: node.slug,
			},
		});
	});

	const articlesPage = path.resolve(`src/pages/articles.js`);

	createPage({
		path: `artykuly`,
		component: articlesPage,
	});
};
