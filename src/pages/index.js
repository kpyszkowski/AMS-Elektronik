import React from 'react';

import Layout from '../components/layout.js';
import Hero from '../components/organisms/Hero';
import Offer from '../components/organisms/Offer';
import About from '../components/organisms/About';
import Articles from '../components/organisms/Articles/';
import Contact from '../components/organisms/Contact';

const IndexPage = () => (
	<Layout>
		<Hero />
		<Offer />
		<About />
		<Articles />
		<Contact />
	</Layout>
);

export default IndexPage;
