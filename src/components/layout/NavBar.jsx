import React from 'react';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const NavBar = () => {
	return (
		<Container fluid className='nav-bar'>
			<Row>
				<Col>
					<NavLink to={'/'}>Home</NavLink>
				</Col>
				<Col>
					<NavLink to={'/about'}>About</NavLink>
				</Col>
				<Col>
					<NavLink to={'/project'}>Project</NavLink>
				</Col>
				<Col>
					<NavLink to={'/contact'}>Contact</NavLink>
				</Col>
				<Col>
					<ThemeToggle/>
				</Col>
			</Row>

		</Container>
	);
};

export default NavBar;
