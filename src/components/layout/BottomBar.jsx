import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';
import { githubLink, facebookLink, linkedinLink, emailLink } from '../../infor/links';

const BottomBar = () => {
	return (
		<Container fluid className='bg-body-tertiary'>
			<Row className='bottom-bar'>
				<Col className='email'>
					<FontAwesomeIcon icon={faEnvelope} className='icon'/>
					<a href={emailLink} target="_blank" rel="noreferrer">Email</a>
				</Col>
				<Col className='LinkedIn'>
					<FontAwesomeIcon icon={faLinkedin} className='icon'/>
					<a href={linkedinLink} target="_blank" rel="noreferrer">LinkedIn</a>
				</Col >
				<Col className='GitHub'>
					<FontAwesomeIcon icon={faGithub} className='icon'/>
					<a href={githubLink} target="_blank" rel="noreferrer">GitHub</a>
				</Col>
				<Col className='Facebook'>
					<FontAwesomeIcon icon={faFacebook} className='icon'/>
					<a href={facebookLink} target="_blank" rel="noreferrer">Facebook</a>
				</Col>
			</Row>
		</Container>
	);
};

export default BottomBar;
