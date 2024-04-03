// path: '/'
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Button } from 'react-bootstrap';
import ProfilePic from '../images/ProfilePic.png';
import { resumeLink } from '../infor/links';

const HomePage = () => {
	return (
		<Container className='home-page'>
			<Row>
				<Col className='col1'>
					<Row className='name'>Kyden Pham</Row>
					<Row className='title'>Software Engineer</Row>
					<Row className='about-line'>A Bit About Me</Row>
					<Row className='brief-intro'>
						I earned my degree in computer science from the University of Texas-Arlington in December 2023.
						My enthusiasm for software design fuels my desire to delve into cutting-edge technologies daily.
						I aspire to apply my expertise and abilities to positively impact the world.
					</Row>
					<Row className='resume'>
						<a href={resumeLink} target="_blank" rel="noopener noreferrer">
							<Button variant="primary">My Resume</Button>
						</a>
					</Row>
				</Col>
				<Col xs={6} md={4} className='col2'>
					<Image src={ProfilePic} roundedCircle />
				</Col>
			</Row>
		</Container>
	);
};

export default HomePage;
