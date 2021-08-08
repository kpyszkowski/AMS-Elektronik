import React from 'react';
import PropTypes from 'prop-types';
import { GlobalStyles } from '../assets/styles/GlobalStyles';
import Header from './organisms/Header';
import Footer from './organisms/Footer';

const Layout = ({ children }) => {
	return (
		<>
			<Header />
			<GlobalStyles />
			{children}
			<Footer />
		</>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
