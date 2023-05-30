import React from 'react';

export const SelectedSkillsContext = React.createContext();

export const SelectedSkillsProvider = ({ children }) => {
    const [selectedSkills, setSelectedSkills] = React.useState([]);
    return (
        <SelectedSkillsContext.Provider value={{ selectedSkills, setSelectedSkills }}>
            {children}
        </SelectedSkillsContext.Provider>
    );
};
