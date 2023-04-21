import React, { useContext } from 'react';
import { HeaderContext } from '@/context/context';
export default function Header  () {
	const {
		isAbout,
		isProjects,
		isSkills,
		
		handleProjectsClick,
		handleSkillsClick,
	} = useContext(HeaderContext);

	return (
		<>
			<nav className=' divide-y divide-solid relative py-2 space-y-2 grid grid-rows-2 justify-items-center justify-left  font-serif max-w-sm mx-auto shadow-lg box-border h-32 w-32 border-4 float-left z-10'>
			
				<div className='flex items-center text-xl'>
					<button onClick={handleProjectsClick}>Projects</button>
				</div>
				<div className='flex items-center text-xl'>
					<button onClick={handleSkillsClick}>Skills</button>
				</div>
			</nav>

			{isProjects}
			{isSkills}
		</>
	);
};
