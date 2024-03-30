import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '.';

const ThemeContextProvider = ({ children }) => {
	const [theme, setTheme] = useState('light');

	const context = { theme, setTheme };

	useEffect(() => {
		const htmlElement = document.querySelector('html');
		htmlElement.setAttribute('data-bs-theme', theme);
	}, [theme]);

	return (
		<ThemeContext.Provider value={context}>{children}</ThemeContext.Provider>
	);
};

ThemeContextProvider.propTypes = {
	children: PropTypes.node
};

export default ThemeContextProvider;
