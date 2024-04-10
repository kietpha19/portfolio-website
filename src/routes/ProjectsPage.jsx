// path: '/projects'
import React from 'react';
import ProjectCard from '../components/projects/ProjectCard';
import { projects } from '../infor/projects';

const ProjectsPage = () => {
	return (
		<div className='projects-page'>
			<p className='header'>These are some projects that I have done</p>
			<div className='projects-container'>
				{projects.map((project) => (
					<ProjectCard
						key={project.title}
						title={project.title}
						description={project.description}
						sourceLink={project.sourceLink}
						demoLink={project.demoeLink}
					/>
				))}
			</div>
		</div>
	);
};

export default ProjectsPage;
