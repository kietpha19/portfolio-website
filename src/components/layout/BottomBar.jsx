import React from 'react';
import gmailIcon from '../../images/gmail.svg';
import { githubLink, facebookLink, linkedinLink, emailLink } from '../../infor/links';

const BottomBar = () => {
	return (
		<div className='bottom-bar'>
			<div className='email'>
				<img src={gmailIcon} alt="Email Icon" width="40" height="40" className='icon'style={{ marginBottom: '1rem' }}/>
				<a href={emailLink} target="_blank" rel="noreferrer">Email</a>
			</div>
			<div className='LinkedIn'>
				<i className="devicon-linkedin-plain colored icon"></i>
				<a href={linkedinLink} target="_blank" rel="noreferrer">LinkedIn</a>
			</div >
			<div className='GitHub'>
				<i className="devicon-github-original colored icon"></i>
				<a href={githubLink} target="_blank" rel="noreferrer">GitHub</a>
			</div>
			<div className='Facebook'>
				<i className="devicon-facebook-plain colored icon"></i>
				<a href={facebookLink} target="_blank" rel="noreferrer">Facebook</a>
			</div>
		</div>
	);
};

export default BottomBar;
