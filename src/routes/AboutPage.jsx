// path: '/about'
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DevSkill from '../components/UI/DevSkill';

const AboutPage = () => {
	return (
		<Container>
			<Row>
        Years of Experience
			</Row>
			<Row>
        1+
			</Row>
			<Container>
				<Row>
					<Col>
						<DevSkill icon='devicon-html5-plain colored' text='HTML5'/>
					</Col>
				</Row>
			</Container>
		</Container>
	);
};

export default AboutPage;
