import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import gmailIcon from '../../images/gmail.svg';
import { githubLink, facebookLink, linkedinLink, emailLink } from '../../infor/links';

const BottomBar = () => {
	return (
		<Container fluid className='bg-body-tertiary'>
			<Row className='bottom-bar'>
				<Col className='email'>
					<img src={gmailIcon} alt="Email Icon" width="32" height="32" className='icon'style={{ marginBottom: '1rem' }}/>
					<a href={emailLink} target="_blank" rel="noreferrer">Email</a>
				</Col>
				<Col className='LinkedIn'>
					<i className="devicon-linkedin-plain colored icon"></i>
					<a href={linkedinLink} target="_blank" rel="noreferrer">LinkedIn</a>
				</Col >
				<Col className='GitHub'>
					<i className="devicon-github-original colored icon"></i>
					<a href={githubLink} target="_blank" rel="noreferrer">GitHub</a>
				</Col>
				<Col className='Facebook'>
					<i className="devicon-facebook-plain colored icon"></i>
					<a href={facebookLink} target="_blank" rel="noreferrer">Facebook</a>
				</Col>
			</Row>
		</Container>
	);
};

export default BottomBar;
