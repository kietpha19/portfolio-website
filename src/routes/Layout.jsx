import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../components/layout/NavBar';
import BottomBar from '../components/layout/BottomBar';

const Layout = () => {
	return (
		<>
			<NavBar/>
			<main id='main'>
				<Outlet />
			</main>
			{/* Footer */}
			<BottomBar/>
		</>
	);
};

export default Layout;
