import React, { useState } from 'react';
import {
	Card,
	CardContent,
	CardMedia,
	Typography,
	CardActions,
	Button,
	Slider,
} from '@mui/material';

import { styled } from "@mui/material/styles";

const projects = [
	{
		name: 'News API',
		image: 'news.png',
		description:
			'Django backend and React Frontend to collect news stories and tailor bookmarks to authenticated user preference. Fully functioning search feature to find news stories by keyword. Many to Many User models to save articles to User profile.',
		liveDemoUrl: 'https://news-frontend.onrender.com/',
		githubUrl: 'https://github.com/Fussyotter/ga_project4_frontend',
	},
	{
		name: 'SightSeer',
		image: 'sightseer.jpeg',
		description:
			'A Blog application that aims to provide users with a platform to share details of their upcoming trips. Create React App. Users will be able to post trip information, including images and descriptions.',
		liveDemoUrl: 'https://sightseer-frontend.onrender.com/',
		githubUrl: 'https://github.com/Alberto-Ibarra/sightseer_frontend',
	},
	{
		name: 'Sage',
		image: 'sage.png',
		description:
			'Django backend with Next.js frontend. User to User Messaging with authenticated endpoints, custom animations and styling.  OPENAI davinci API integration to generate gift ideas based on user input and then inject HTML directly.',
		liveDemoUrl: 'https://sage-front-5srp5qym8-fussyotter.vercel.app/',
		githubUrl: 'https://github.com/Fussyotter/sage_front/tree/main',
	},
	{
		name: 'FishMonger DB',
		image: 'fishmonger.png',
		description:
			'FishMongerDB  displays API calls from fishwatch.gov. It is built using Javascript, Mongoose, Express, and EJS, barebones.css and has fully functioning search bar and pagination.',
		liveDemoUrl: 'https://fish-finding.onrender.com/fish',
		githubUrl: 'https://github.com/Fussyotter/project2',
	},
];
const CustomCard = styled(Card)(({ theme }) => ({
	background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
	boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
	color: 'white',
	width: '300px',
	height: '400px',
	transition: 'all 0.3s',
	'&:hover': {
		transform: 'scale(1.1)',
		boxShadow: '0 10px 15px 2px rgba(255, 105, 135, .3)',
	},
}));
export default function Projects() {
	const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
	const selectedProject = projects[selectedProjectIndex];

	const handleSliderChange = (event, newValue) => {
		setSelectedProjectIndex(newValue);
	};

	// Map projects to marks for Slider component
const marks = projects.map((project, index) => ({
	value: index,
	label: <span className='markLabel'>{project.name}</span>,
}));

	return (
		<div>
			<div className='flex gap-4 py-8'>
				<div className='w-1/4'>
					<Slider
						orientation='vertical'
						min={0}
						max={projects.length - 1}
						step={1}
						value={selectedProjectIndex}
						onChange={handleSliderChange}
						marks={marks}
						
					/>
				</div>
				<div className='w-full md:w-3/4 flex justify-center'>
					<div className='max-w-full md:max-w-3/4'>
						{selectedProject && (
							<CustomCard>
								<CardMedia
									component='img'
									height='140'
									image={selectedProject.image}
									alt={selectedProject.name}
								/>

								<CardContent>
									<Typography variant='h5' component='h2'>
										{selectedProject.name}
									</Typography>
									<Typography variant='body2'>
										{selectedProject.description}
									</Typography>
								</CardContent>

								<CardActions>
									<Button
										size='small'
										href={selectedProject.liveDemoUrl}
										target='_blank'
										rel='noopener noreferrer'>
										Live Demo
									</Button>
									<Button
										size='small'
										href={selectedProject.githubUrl}
										target='_blank'
										rel='noopener noreferrer'>
										GitHub Repository
									</Button>
								</CardActions>
							</CustomCard>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}