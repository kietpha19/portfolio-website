import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomePage from './routes/HomePage';
import ErrorPage from './routes/ErrorPage';
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
      }
    ]
  }
]);

export default router;
