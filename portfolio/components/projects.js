import React, { useState } from 'react';

export default function Projects() {
	const projects = [
		{
			name: 'FishMonger DB',
			description:
				'FishMongerDB is a simplified version of the database at fishwatch.gov that provides a more readable and accessible way of viewing their data. It is built using Javascript, Mongoose, Express, and EJS, barebones.css and requires the following dependencies: dotenv, ejs, express, method-override, mongoose.',
			liveDemoUrl: 'https://fish-finding.onrender.com/fish',
			githubUrl: 'https://github.com/Fussyotter/project2',
		},
		{
			name: 'News API',
			description:
				'Django and React App to collect news stories and tailor bookmarks to authenticated user preference.',
			liveDemoUrl: 'https://news-frontend.onrender.com/',
			githubUrl: 'https://github.com/Fussyotter/ga_project4_frontend',
		},
		{
			name: 'SightSeer',
			description:
				'A Blog application that aims to provide users with a platform to share details of their upcoming trips. Users will be able to post trip information, including images and descriptions.',
			liveDemoUrl: 'https://sightseer-frontend.onrender.com/',
			githubUrl: 'https://github.com/Alberto-Ibarra/sightseer_frontend',
		},
		{
			name: 'Sage',
			description:
				"Django and Next.js app to showcase User to User messaging and storage, custom animation and a fun example of ChatGPT's ability to generate injectable HTML.",
			liveDemoUrl: 'https://sage-front-5srp5qym8-fussyotter.vercel.app/',
			githubUrl: 'https://github.com/Fussyotter/sage_front/tree/main',
		},
	];


	return (
		<div className=' grid  grid-rows-2 grid-cols-2 gap-2 font-bold space-y-2 tracking-wide mx:auto text-center text-black text-2xl font-serif clear-left'>
			
			{projects.map((project, index) => (
				<div
					key={index}
					className={`rounded-lg overflow-hidden shadow-lg transition-all `}>
					<div className='bg-white px-6 '>
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
			))}
		</div>
	);
}
