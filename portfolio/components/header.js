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
		<>
			<nav className='py-2 space-y-2 grid grid-rows-3 justify-items-center justify-left  font-serif max-w-sm mx-auto shadow-lg box-border h-32 w-32 border-4 float-right'>
				<div className='flex items-center text-xl '>
					<button onClick={handleAboutClick}>About</button>
				</div>
				<div className='flex items-center text-xl'>
					<button onClick={handleProjectsClick}>Projects</button>
				</div>
				<div className='flex items-center text-xl'>
					<button onClick={handleSkillsClick}>Skills</button>
				</div>
			</nav>

			{isAbout && <h1>About Page</h1>}
			{isProjects && <h1>Projects Page</h1>}
			{isSkills && <h1>Skills Page</h1>}
		</>
	);
};
