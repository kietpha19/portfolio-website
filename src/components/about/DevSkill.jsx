import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Badge from 'react-bootstrap/Badge';

const DevSkill = ({ icon, name, level }) => {
	const [levelColor, setLevelColor] = useState('success');

	useEffect(() => {
		if (level === 'Beginner') {
			setLevelColor('success');
		} else if (level === 'Intermediate') {
			setLevelColor('primary');
		} else if (level === 'Proficient') {
			setLevelColor('warning');
		}
	}, []);

	return (
		<div className='dev-skill'>
			<i className={`${icon} icon`} />
			<p className='name'>{name}</p>
			<Badge bg={levelColor} className='level'>{level}</Badge>
		</div>
	);
};

DevSkill.propTypes = {
	icon: PropTypes.string,
	name: PropTypes.string,
	level: PropTypes.string
};

export default DevSkill;
