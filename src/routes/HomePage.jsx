// path: '/'
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ProfilePic from '../images/ProfilePic.png';

const HomePage = () => {
	return (
		<Container>
			<Row>
				<Col>
					<Row>Hello, My name is Kyden Pham.</Row>
					<Row>I am an associated software engineer.</Row>
					<Row>
						I earned my degree in computer science from the University of Texas-Arlington in December 2023.
						My enthusiasm for software design fuels my desire to delve into cutting-edge technologies daily.
						I aspire to apply my expertise and abilities to positively impact the world.
					</Row>
				</Col>
				<Col xs={6} md={4}>
					<Image src={ProfilePic} roundedCircle />
				</Col>
			</Row>

		</Container>
	);
};

export default HomePage;
