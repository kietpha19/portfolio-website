import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../components/layout/NavBar';

const Layout = () => {
	return (
		<>
			<NavBar/>
			<main id='main'>
				<Outlet />
			</main>
			{/* Footer */}
		</>
	);
};

export default Layout;
