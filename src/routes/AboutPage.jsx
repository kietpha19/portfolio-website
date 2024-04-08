// path: '/about'
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DevSkill from '../components/about/DevSkill';
import { webSkills } from '../infor/devSkills';

const AboutPage = () => {
	return (
		<div className='about-page'>
			<div>
				<p>Years of Experience</p>
				<p>1+</p>
			</div>

			<Container className='skills-container'>
				<Row>
					{webSkills.map((skill) => (
						<Col key={skill.name}>
							<DevSkill icon={skill.icon} name={skill.name} level={skill.level} />
						</Col>
					))}
				</Row>
			</Container>

		</div>
	);
};

export default AboutPage;
