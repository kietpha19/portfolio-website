// path: '/'
import React from 'react';
import ProfilePic from '../images/ProfilePic.png';
import { resumeLink } from '../infor/links';
import { name, title, briefIntro } from '../infor/personal';

const HomePage = () => {
	return (
		<div className='home-page'>
			<div className='about-me'>
				<p className='name'>{name}</p>
				<p className='title'>{title}</p>
				<p className='about-line'>A Bit About Me</p>
				<p className='brief-intro'>
					{briefIntro}
				</p>
				<p className='resume'>
					<a href={resumeLink} target="_blank" rel="noopener noreferrer">
						<button >My Resume</button>
					</a>
				</p>
			</div>
			<div className='profile-pic'>
				<img src={ProfilePic} />
			</div>
		</div>
	);
};

export default HomePage;
