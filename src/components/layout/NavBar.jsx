import React from 'react';
import { NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const NavBar = () => {
	return (
		<div className='nav-bar'>
			<NavLink to={'/'}>Home</NavLink>
			<NavLink to={'/about'}>About</NavLink>
			<NavLink to={'/project'}>Project</NavLink>
			<NavLink to={'/contact'}>Contact</NavLink>
			<ThemeToggle/>
		</div>
	);
};

export default NavBar;
