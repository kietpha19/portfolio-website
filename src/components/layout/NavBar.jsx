import React from 'react';
import { NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const NavBar = () => {
	return (
		<div className='nav-bar'>
			<NavLink to={'/'}>Home</NavLink>
			<NavLink to={'/about'}>About</NavLink>
			<NavLink to={'/projects'}>Project</NavLink>
			<NavLink to={'/contact'}>Contact</NavLink>
			<ThemeToggle className='theme-toggle'/>
		</div>
	);
};

export default NavBar;
