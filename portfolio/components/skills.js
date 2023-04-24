import React from 'react';
import {
	FaJs,
	FaReact,
	FaNodeJs,
	FaHtml5,
	FaCss3,
	FaGitAlt,
} from 'react-icons/fa';
import { DiPython, DiDjango } from 'react-icons/di';

const skills = [
	{ name: 'JavaScript', icon: <FaJs /> },
	{ name: 'React', icon: <FaReact /> },
	{ name: 'Node.js', icon: <FaNodeJs /> },
	{ name: 'HTML', icon: <FaHtml5 /> },
	{ name: 'CSS', icon: <FaCss3 /> },
	{ name: 'Git', icon: <FaGitAlt /> },
	{ name: 'Django', icon: <DiDjango /> },
	{ name: 'Python', icon: <DiPython /> },
];

export default function Skills() {
	

	return (
		<div className='grid grid-rows-1 float-left p-4'>
			<h1 className='font-bold'>Skills</h1>
			<ul className='flex space-x-4'>
				{skills.map(({ name, icon }) => (
					<li key={name} style={{ color: 'black' }}>
						{icon} {name}
					</li>
				))}
			</ul>
		</div>
	);
}
