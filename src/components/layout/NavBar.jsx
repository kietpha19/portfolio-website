import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const NavBar = () => {
	return (
		<Navbar expand="lg" className="bg-body-tertiary">
			<Container>
				<Navbar.Brand as={NavLink} to="/">Portfolio</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" /> {/* Toggle button */}
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className='me-auto'>
						<Nav.Link as={NavLink} to="/">Home</Nav.Link>
						<Nav.Link as={NavLink} to="/about">About</Nav.Link>
						<Nav.Link as={NavLink} to="/projects">Projects</Nav.Link>
						<Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
					</Nav>
				</Navbar.Collapse>
				<ThemeToggle/>
			</Container>
		</Navbar>
	);
};

export default NavBar;
