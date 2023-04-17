import React, { useState, createContext } from 'react';

export const HeaderContext = createContext();

export const HeaderProvider = ({ children }) => {
	const [isHome, setIsHome] = useState(true);
	const [isAbout, setIsAbout] = useState(false);
	const [isProjects, setIsProjects] = useState(false);
	const [isSkills, setIsSkills] = useState(false);

	const handleHomeClick = () => {
		setIsHome(true);
		setIsAbout(false);
		setIsProjects(false);
		setIsSkills(false);
	};

	const handleAboutClick = () => {
		setIsHome(false);
		setIsAbout(true);
		setIsProjects(false);
		setIsSkills(false);
	};

	const handleProjectsClick = () => {
		setIsHome(false);
		setIsAbout(false);
		setIsProjects(true);
		setIsSkills(false);
	};

	const handleSkillsClick = () => {
		setIsHome(false);
		setIsAbout(false);
		setIsProjects(false);
		setIsSkills(true);
	};

	return (
		<HeaderContext.Provider
			value={{
				isHome,
				isAbout,
				isProjects,
				isSkills,
				handleHomeClick,
				handleAboutClick,
				handleProjectsClick,
				handleSkillsClick,
			}}>
			{children}
		</HeaderContext.Provider>
	);
};
