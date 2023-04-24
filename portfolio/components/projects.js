import React, { useState } from 'react';

export default function Projects() {
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

	return (
		<div className='grid grid-rows-2 grid-cols-2 gap-2 font-bold space-y-2 tracking-wide mx:auto text-center text-black text-2xl font-serif clear-left'>
			{projects.map((project, index) => (
				<div
					key={index}
					className='relative rounded-lg overflow-hidden shadow-lg scale-75 transition-all duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow-2xl'>
					<img src={project.image} alt={project.name} className='block' />

					<div className='absolute inset-0 bg-white bg-opacity-70 opacity-0 hover:opacity-100 transition-opacity'>
						<div className='px-6 py-4'>
							<h2 className='text-xl font-medium mb-2'>{project.name}</h2>
							<p className='text-gray-700 text-base'>{project.description}</p>
						</div>
						<div className='bg-gray-100 p-4 text-right'>
							<a
								className='text-blue-600 hover:text-blue-800'
								href={project.liveDemoUrl}
								target='_blank'
								rel='noopener noreferrer'>
								Live Demo
							</a>{' '}
							|{' '}
							<a
								className='text-blue-600 hover:text-blue-800'
								href={project.githubUrl}
								target='_blank'
								rel='noopener noreferrer'>
								GitHub Repository
							</a>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}
