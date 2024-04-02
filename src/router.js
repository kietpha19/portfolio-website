import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomePage from './routes/HomePage';
import ErrorPage from './routes/ErrorPage';
import AboutPage from './routes/AboutPage';
import ProjectsPage from './routes/ProjectsPage';
import ContactPage from './routes/ContactPage';
import Layout from './routes/Layout';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/',
				element: <HomePage />
			},
			{
				path: '/about',
				element: <AboutPage />
			},
			{
				path: '/projects',
				element: <ProjectsPage />
			},
			{
				path: '/contact',
				element: <ContactPage />
			}
		]
	}
]);

export default router;
