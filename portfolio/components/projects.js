import React, { useState, useEffect } from 'react';
import {
	Card,
	CardContent,
	CardMedia,
	Typography,
	CardActions,
	Button,
	Slider,
} from '@mui/material';

import { styled } from '@mui/material/styles';
import { SelectedSkillsContext } from '@/context/projectSkills';

const projects = [
	{
		name: 'Ecommerce Platform Frontend',
		images: [
			'ecomfront1.png',
			'ecomlogin.png',
			'ecomlogin.png',
			'ecomcheckout1.png',
		],
		description:
			'This shell is an ecommerce platform built using Next.js, Material UI, Stripe API.  Features comprehensive product search and browse capabilities, detailed product views,shopping cart functionality, and secure checkout process powered by Stripe API. Responsive design with Material UI Admin dashboard for managing products, orders, and customers User authentication and authorization',
		technologies: [
			'Next.JS',
			'HTML',
			'CSS',
			'JavaScript',
			'Material UI',
			'Stripe',
			'React',
		],
		githubUrl: 'https://github.com/Fussyotter/backend_ecomm_shell',
	},
	{
		name: 'Ecommerce Platform Backend',
		images: ['ecombackend.png', 'ecombackendproduct.png'],
		description:
			'A Django backend for a small business ecommerce site. This shell contains customizable product models with a variety of specifics to help categorize and search. User Authentication and Stripe Payment are within the shell as well. The intention for this shell is a base for small ecommerce sites that can be customized to fit the needs of the business. ',
		technologies: ['Django', 'Python', 'Stripe', 'MaterialUI'],
		githubUrl: 'https://github.com/Fussyotter/backend_ecomm_shell',
	},
	{
		name: 'News API',
		images: 'news.png',
		description:
			'Constructed a user-tailored Article Tracker and Bookmarking App that aggregates and presents worldwide news stories based on user preferences. Implemented secure login/signup and advanced search functionality',
		technologies: ['Django', 'React', 'Python', 'JavaScript', 'HTML', 'CSS'],
		liveDemoUrl: 'https://news-frontend.onrender.com/',
		githubUrl: 'https://github.com/Fussyotter/ga_project4_frontend',
	},
	{
		name: 'SightSeer',
		images: 'sightseer.jpeg',
		description:
			'A Blog application that provides users with a platform to share trips.  Users will be able to post trip information, including images and descriptions.',
		technologies: ['Django', 'React', 'Python', 'JavaScript', 'HTML', 'CSS'],
		liveDemoUrl: 'https://sightseer-frontend.onrender.com/',
		githubUrl: 'https://github.com/Alberto-Ibarra/sightseer_frontend',
	},
	{
		name: 'Sage',
		images: 'sage2.png',
		description:
			'Developed a Full-Stack Messaging App with secure login/signup, inbox, and real-time chat updates. Integrated OpenAI API (text-davinci-003 model) to generate gift lists based on user inputs.',
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
			'OpenAI',
		],
		liveDemoUrl: 'https://sage-front-b6sfogaf5-fussyotter.vercel.app/',
		githubUrl: 'https://github.com/Fussyotter/sage_front/tree/main',
	},
	{
		name: 'FishMonger DB',
		images: 'fishmonger.png',
		description:
			'FishMongerDB  displays API calls from fishwatch.gov to provide users with with specific details on fisheries and health benefits of fish.',
		technologies: [
			'Django',
			'React',
			'Python',
			'JavaScript',
			'HTML',
			'CSS',
			'Mongoose',
		],
		liveDemoUrl: 'https://fish-finding.onrender.com/fish',
		githubUrl: 'https://github.com/Fussyotter/project2',
	},
];
const CustomCard = styled(Card)(({ theme }) => ({
	background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
	padding: '4px',
	boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
	color: 'white',
	width: '300px',
	display: 'flex',
	flexDirection: 'column',
	height: '420px',
	overflow: 'auto',
	'&::-webkit-scrollbar': {
		width: '2px',
	},
	'&::-webkit-scrollbar-track': {
		background: '#f1f1f1',
	},
	'&::-webkit-scrollbar-thumb': {
		background: '#888',
		borderRadius: '2px',
	},
	'&::-webkit-scrollbar-thumb:hover': {
		background: '#555',
	},
	'& scrollbar-color': '#888 #f1f1f1', // Firefox
	'& scrollbar-width': 'thin',
	transition: 'all 0.3s',
	'&:hover': {
		transform: 'scale(1.1)',
		boxShadow: '0 10px 15px 2px rgba(255, 105, 135, .3)',
	},
}));

export default function Projects() {
	// for use with context to update skills component based on selected project
	const { setSelectedSkills } = React.useContext(SelectedSkillsContext);
	// carousel state
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	// slider states
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
	// carousel on card, doesn't rely on imageArray below
	const handleNextImage = () => {
		const images = Array.isArray(selectedProject.images)
			? selectedProject.images
			: [selectedProject.images];
		setCurrentImageIndex((prevIndex) =>
			prevIndex === images.length - 1 ? 0 : prevIndex + 1
		);
	};

	const imageArray = Array.isArray(selectedProject.images)
		? selectedProject.images
		: [selectedProject.images];
	useEffect(() => {
		setCurrentImageIndex(0);
	}, [selectedProject]);
	return (
		<div>
			<div className='flex flex-col sm:flex-row gap-6 sm:gap-20 py-8'>
				<div className='w-full sm:w-1/3 h-64 sm:h-auto overflow-y-auto sm:overflow-visible mr-0 sm:mr-12'>
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
				<div className='w-full sm:w-2/3 flex mt-6 sm:mt-0 ml-0 sm:ml-12'>
					<div className='max-w-full md:max-w-3/4'>
						{selectedProject && (
							<CustomCard>
								{imageArray.map((image, index) => (
									<CardMedia
										key={index}
										component='img'
										height='120'
										image={image}
										alt={selectedProject.name}
										style={{
											display: index === currentImageIndex ? 'block' : 'none',
											maxHeight: '120px',
										}}
									/>
								))}
								<Button
									onClick={handleNextImage}
									disabled={imageArray.length === 1}>
									Next Image
								</Button>
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
