import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { ThemeContext } from '../../contexts';

const ThemeToggle = () => {
	const { theme, setTheme } = useContext(ThemeContext);
	return (
		<div>
			<Button
				variant={theme === 'light' ? 'dark' : 'light'}
				onClick={() => setTheme('light')}
			>
				<span className="material-symbols-outlined">light_mode</span>
			</Button>
			<Button variant={theme} onClick={() => setTheme('dark')}>
				<span className="material-symbols-outlined">dark_mode</span>
			</Button>
		</div>

	);
};

export default ThemeToggle;
