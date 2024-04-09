import React from 'react';
import PropTypes from 'prop-types';

const ProjectCard = ({ title, description, sourceLink, demoLink }) => {
	return (
		<div className='project-card'>
			<p className='title'>{title}</p>
			<p className='description'>{description}</p>
			<a href={sourceLink} target="_blank" rel="noreferrer">Source</a>
			<a href={demoLink} target="_blank" rel="noreferrer">Demo</a>
		</div>
	);
};

ProjectCard.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	sourceLink: PropTypes.string,
	demoLink: PropTypes.string
};

export default ProjectCard;
