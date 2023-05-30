import React, {useContext, useMemo}from 'react';
import {
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Typography,
	Box,
} from '@mui/material';
import {
	yellow,
	green,
	blue,
	orange,
	purple,
	deepOrange,
} from '@mui/material/colors';
import NodeIcon from '@mui/icons-material/Grass';
import Html5Icon from '@mui/icons-material/Http';
import Css3Icon from '@mui/icons-material/Style';
import GitIcon from '@mui/icons-material/GitHub';
import DjangoIcon from '@mui/icons-material/Adjust';
import {
	FaJs,
	FaReact,
	FaNodeJs,
	FaHtml5,
	FaCss3,
	FaGitAlt,
	FaPython,
} from 'react-icons/fa';
import { SelectedSkillsContext } from '@/context/projectSkills';
import { useTransition, animated } from 'react-spring';


const skills = [
	{ name: 'JavaScript', icon: <FaJs style={{ color: yellow[700] }} /> },
	{ name: 'React', icon: <FaReact style={{ color: blue[700] }} /> },
	{ name: 'Node.js', icon: <NodeIcon style={{ color: green[700] }} /> },
	{ name: 'HTML', icon: <Html5Icon style={{ color: orange[700] }} /> },
	{ name: 'CSS', icon: <Css3Icon style={{ color: blue[500] }} /> },
	{ name: 'Git', icon: <GitIcon style={{ color: deepOrange[700] }} /> },
	{ name: 'Django', icon: <DjangoIcon style={{ color: green[900] }} /> },
	{ name: 'Python', icon: <FaPython style={{ color: blue[500] }} /> },
];

function Skills() {
	const { selectedSkills } = useContext(SelectedSkillsContext);

	const highlightedSkills = useMemo(() => {
		return skills.filter((skill) => selectedSkills.includes(skill.name));
	}, [selectedSkills]);

	const otherSkills = useMemo(() => {
		return skills.filter((skill) => !selectedSkills.includes(skill.name));
	}, [selectedSkills]);

	const highlightedTransitions = useTransition(highlightedSkills, {
		key: (item) => item.name,
		from: { opacity: 0, transform: 'translate3d(-50%, 0, 0)' },
		enter: { opacity: 1, transform: 'translate3d(0%, 0, 0)' },
		update: { opacity: 1, transform: 'translate3d(0%, 0, 0)' },
		leave: { opacity: 0, transform: 'translate3d(-50%, 0, 0)' },
		config: { mass: 5, tension: 500, friction: 100 },
		trail: 25,
	});

	const otherTransitions = useTransition(otherSkills, {
		key: (item) => item.name,
		from: { opacity: 0, transform: 'translate3d(50%, 0, 0)' },
		enter: { opacity: 1, transform: 'translate3d(0%, 0, 0)' },
		update: { opacity: 1, transform: 'translate3d(0%, 0, 0)' },
		leave: { opacity: 0, transform: 'translate3d(50%, 0, 0)' },
		config: { mass: 5, tension: 500, friction: 100 },
		trail: 25,
	});

	return (
		<Box display='flex' justifyContent='space-between'>
			<Box width='50%'>
				<h2></h2>
				{highlightedTransitions((props, { name, icon }) => (
					<animated.div style={props}>
						<ListItem
							style={{
								backgroundColor: selectedSkills.includes(name)
									? '#ff9800'
									: 'transparent',
								borderRadius: '5px',
							}}>
							<ListItemIcon>{icon}</ListItemIcon>
							<ListItemText primary={name} />
						</ListItem>
					</animated.div>
				))}
			</Box>
			<Box width='50%'>
				<h2></h2>
				{otherTransitions((props, { name, icon }) => (
					<animated.div style={props}>
						<ListItem>
							<ListItemIcon>{icon}</ListItemIcon>
							<ListItemText primary={name} />
						</ListItem>
					</animated.div>
				))}
			</Box>
		</Box>
	);
}

export default Skills;