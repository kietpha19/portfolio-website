import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import './styles/styles.scss';
import ThemeContextProvider from './contexts/ThemeContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<ThemeContextProvider>
			<RouterProvider router={router} />
		</ThemeContextProvider>
	</React.StrictMode>
);
