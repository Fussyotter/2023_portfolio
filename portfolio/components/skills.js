import React, {useContext, useMemo}from 'react';
import {
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Typography,
	Box,
	Grid,
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
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PatternIcon from '@mui/icons-material/Pattern';
import CodeIcon from '@mui/icons-material/Code';
import DatabaseIcon from '@mui/icons-material/Storage';

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
	 { name: 'Material UI', icon: <PatternIcon style={{ color: purple[500] }} /> },
  { name: 'Stripe', icon: <ShoppingCartIcon style={{ color: blue[700] }} /> },
  { name: 'OpenAI', icon: <CodeIcon style={{ color: green[700] }} /> },
  { name: 'Mongoose', icon: <DatabaseIcon style={{ color: deepOrange[900] }} /> },
];


function Skills() {
	const { selectedSkills } = useContext(SelectedSkillsContext);

	const highlightedSkills = useMemo(() => {
		return skills.filter((skill) => selectedSkills.includes(skill.name));
	}, [selectedSkills]);

	const otherSkills = useMemo(() => {
		return skills.filter((skill) => !selectedSkills.includes(skill.name));
	}, [selectedSkills]);

	const transitions = useTransition([...highlightedSkills, ...otherSkills], {
		key: (item) => item.name,
		from: { opacity: 0, transform: 'translate3d(-50%, 0, 0)' },
		enter: { opacity: 1, transform: 'translate3d(0%, 0, 0)' },
		update: { opacity: 1, transform: 'translate3d(0%, 0, 0)' },
		leave: { opacity: 0, transform: 'translate3d(-50%, 0, 0)' },
		config: { mass: 5, tension: 500, friction: 100 },
		trail: 25,
	});

	return (
		<Grid container spacing={2} className="py-8">
			{transitions((props, { name, icon }) => (
				<Grid item xs={6}>
					<animated.div style={props}>
						<ListItem
							style={{
								background: selectedSkills.includes(name)
									? 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
									: 'transparent',
								borderRadius: '5px',
							}}>
							<ListItemIcon>{icon}</ListItemIcon>
							<ListItemText primary={name} />
						</ListItem>
					</animated.div>
				</Grid>
			))}
		</Grid>
	);
}

export default Skills;