// path: '/about'
import React from 'react';
import DevSkill from '../components/about/DevSkill';
import { webSkills, envToolsSkills, otherSkills } from '../infor/devSkills';

const AboutPage = () => {
	return (
		<div className='about-page'>
			<div className='experience'>
				<p className='text'>Years of Experience</p>
				<p className='year'>1+</p>
				<p>
					I am presently employed as a Full-Stack Developer,
					thoroughly enjoying the dynamic nature of the role while actively expanding my knowledge of full-stack technologies.
					Additionally, my passion extends to AI technologies,
					where I have been dedicating personal time to acquire new skills and delve into relevant technologies.
				</p>
			</div>

			<p className='text-skill'>My Full-Stack Skills</p>
			<div className='skills-container'>
				{webSkills.map((skill) => (
					<DevSkill key={skill.name} icon={skill.icon} name={skill.name} level={skill.level} />
				))}
			</div>

			<p className='text-skill'>My Environment/Tools Skills</p>
			<div className='skills-container'>
				{envToolsSkills.map((skill) => (
					<DevSkill key={skill.name} icon={skill.icon} name={skill.name} level={skill.level} />
				))}
			</div>

			<p className='text-skill'>My Other Skills</p>
			<div className='skills-container'>
				{otherSkills.map((skill) => (
					<DevSkill key={skill.name} icon={skill.icon} name={skill.name} level={skill.level} />
				))}
			</div>

		</div>
	);
};

export default AboutPage;
