import React from 'react';
import {
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Typography,
} from '@mui/material';
import {
	yellow,
	green,
	blue,
	orange,
	purple,
	deepOrange,
} from '@mui/material/colors';
import PythonIcon from '@mui/icons-material/Psychology';
// import ReactIcon from '@mui/icons-material/React';
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

export default function Skills() {
	return (
		<div>
	
			<List>
				{skills.map(({ name, icon }) => (
					<ListItem key={name}>
						<ListItemIcon>{icon}</ListItemIcon>
						<ListItemText primary={name} />
					</ListItem>
				))}
			</List>
		</div>
	);
}
