import React from 'react';

import Seo from '../components/Seo.js';

import Layout from '../components/layout.js';
import Hero from '../components/organisms/Hero';
import Offer from '../components/organisms/Offer';
import About from '../components/organisms/About';
import Articles from '../components/organisms/Articles/';
import Contact from '../components/organisms/Contact';

const IndexPage = () => (
	<Layout>
		<Seo title="Strona główna" />
		<Hero />
		<Offer />
		<About />
		<Articles />
		<Contact />
	</Layout>
);

export default IndexPage;
