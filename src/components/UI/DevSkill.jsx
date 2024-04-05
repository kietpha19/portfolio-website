import React from 'react';
import PropTypes from 'prop-types';

const DevSkill = ({ icon, text }) => {
	return (
		<div>
			<i className={icon} />
			<p>{text}</p>
		</div>
	);
};

DevSkill.propTypes = {
	icon: PropTypes.string,
	text: PropTypes.string
};

export default DevSkill;
