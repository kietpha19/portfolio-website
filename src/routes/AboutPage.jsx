// path: '/about'
import React from 'react';
import DevSkill from '../components/about/DevSkill';
import { webSkills } from '../infor/devSkills';

const AboutPage = () => {
	return (
		<div className='about-page'>
			<div className='experience'>
				<p className='text'>Years of Experience</p>
				<p className='year'>1+</p>
			</div>

			<div className='skills-container'>
				{webSkills.map((skill) => (
					<DevSkill key={skill.name} icon={skill.icon} name={skill.name} level={skill.level} />
				))}
			</div>

		</div>
	);
};

export default AboutPage;
