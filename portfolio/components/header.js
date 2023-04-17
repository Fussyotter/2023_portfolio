import React, { useContext } from 'react';
import { HeaderContext } from '@/context/context';
export default function Header  () {
	const {
		isHome,
		isAbout,
		isProjects,
		isSkills,
		handleHomeClick,
		handleAboutClick,
		handleProjectsClick,
		handleSkillsClick,
	} = useContext(HeaderContext);

	return (
		<header>
			<nav>
				<ul>
					<li>
						<button onClick={handleHomeClick}>Home</button>
					</li>
					<li>
						<button onClick={handleAboutClick}>About</button>
					</li>
					<li>
						<button onClick={handleProjectsClick}>Projects</button>
					</li>
					<li>
						<button onClick={handleSkillsClick}>Skills</button>
					</li>
				</ul>
			</nav>
			<img src='corgitwo.png' alt='Logo' width='100px' />
			{isHome && <h1>Home Page</h1>}
			{isAbout && <h1>About Page</h1>}
			{isProjects && <h1>Projects Page</h1>}
			{isSkills && <h1>Skills Page</h1>}
		</header>
	);
};
