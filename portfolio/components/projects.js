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
import { SelectedSkillsContext } from '@/context/projectSkills';

const projects = [
	{
		name: 'Ecommerce Platform Frontend',
		image: '',
		description:
			'This shell is an ecommerce platform built using Next.js, Material UI, Stripe API.  Features comprehensive product search and browse capabilities, detailed product views,shopping cart functionality, and secure checkout process powered by Stripe API. Responsive design with Material UI Admin dashboard for managing products, orders, and customers User authentication and authorization',
		technologies: [ 'Next.JS', 'HTML', 'CSS', 'JavaScript', 'Material UI', 'Stripe', 'React'],
		githubUrl: 'https://github.com/Fussyotter/backend_ecomm_shell',
	},
	{
		name: 'Ecommerce Platform Backend',
		image: '',
		description:
			'A Django backend for a small business ecommerce site. This shell contains customizable product models with a variety of specifics to help categorize and search. User Authentication and Stripe Payment are within the shell as well. The intention for this shell is a base for small ecommerce sites that can be customized to fit the needs of the business. ',
		technologies: ['Django', 'Python','Stripe','MaterialUI'],
		githubUrl: 'https://github.com/Fussyotter/backend_ecomm_shell',
	},
	{
		name: 'News API',
		image: 'news.png',
		description:
			'Constructed a user-tailored Article Tracker and Bookmarking App that aggregates and presents worldwide news stories based on user preferences. Implemented secure login/signup and advanced search functionality',
		technologies: ['Django', 'React', 'Python', 'JavaScript', 'HTML', 'CSS'],
		liveDemoUrl: 'https://news-frontend.onrender.com/',
		githubUrl: 'https://github.com/Fussyotter/ga_project4_frontend',
	},
	{
		name: 'SightSeer',
		image: 'sightseer.jpeg',
		description:
			'A Blog application that provides users with a platform to share trips.  Users will be able to post trip information, including images and descriptions.',
		technologies: ['Django', 'React', 'Python', 'JavaScript', 'HTML', 'CSS'],
		liveDemoUrl: 'https://sightseer-frontend.onrender.com/',
		githubUrl: 'https://github.com/Alberto-Ibarra/sightseer_frontend',
	},
	{
		name: 'Sage',
		image: 'sage.png',
		description:
			'Developed a Full-Stack Messaging App with secure login/signup, inbox, and real-time chat updates. Integrated OpenAI API (text-davinci-003 model) to generate gift lists based on user inputs and present them on the page.',
		technologies: [
			'Django',
			'Next.JS',
			'Python',
			'JavaScript',
			'DRF',
			'React',
			'Djoser',
			'Channels',
			'Postgres',
			'HTML',
			'CSS',
		],
		liveDemoUrl: 'https://sage-front-5srp5qym8-fussyotter.vercel.app/',
		githubUrl: 'https://github.com/Fussyotter/sage_front/tree/main',
	},
	{
		name: 'FishMonger DB',
		image: 'fishmonger.png',
		description:
			'FishMongerDB  displays API calls from fishwatch.gov to provide users with with specific details on fisheries and health benefits of fish.',
		technologies: ['Django', 'React', 'Python', 'JavaScript', 'HTML', 'CSS', 'Mongoose'],
		liveDemoUrl: 'https://fish-finding.onrender.com/fish',
		githubUrl: 'https://github.com/Fussyotter/project2',
	},
];
const CustomCard = styled(Card)(({ theme }) => ({
	background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
	boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
	color: 'white',
	width: '300px',
	height: '420px',
	transition: 'all 0.3s',
	'&:hover': {
		transform: 'scale(1.1)',
		boxShadow: '0 10px 15px 2px rgba(255, 105, 135, .3)',
	},
}));
export default function Projects() {
	const {  setSelectedSkills } = React.useContext(SelectedSkillsContext);
	const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
	const selectedProject = projects[selectedProjectIndex];

	const handleSliderChange = (event, newValue) => {
	setSelectedProjectIndex(newValue);
	const newSelectedProject = projects[newValue];
	setSelectedSkills(newSelectedProject.technologies);
};


	const marks = projects.map((project, index) => ({
	value: index,
	label: <span className='markLabel'>{project.name}</span>,
}));

	return (
		<div>
			<div className='flex gap-10 py-8'>
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
									<Typography variant='body2'>
										Created with: {selectedProject.technologies.join(', ')}
									</Typography>
								</CardContent>

								<CardActions>
									{selectedProject.liveDemoUrl ? (
										<Button
											size='small'
											href={selectedProject.liveDemoUrl}
											target='_blank'
											rel='noopener noreferrer'>
											Live Demo
										</Button>
									) : null}
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