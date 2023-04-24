import Head from 'next/head';
import { useState, useContext } from 'react';
import { HeaderContext } from '@/context/context';
import Header from '@/components/header';
import About from '@/components/about';
import Projects from '@/components/projects';
import Skills from '@/components/skills';
import HomePage from '@/components/home';
import Icons from '@/components/icons';
import TextAnimation from '@/components/TextAnimation';
import Background from '@/components/background';
import Dust from '@/components/dust';
import CircleLine from '@/components/CircleLine';
import Topics from '@/components/topics';

function HeaderSection() {

	return (
		<div className='row-start-1 col-span-4 bg-cover  bgimg-1   shadow-lg flex items-center space-x-4 space-y-2  '>
			<img
				className='rounded-full   p-2 border-s-4 border-b-2 border-indigo-400/75 hover:border-blue-500'
				src='corgitwo.png'
				alt='Logo'
				width='250px'
			/>
			<div className='p-6  mx-auto rounded-xl shadow-lg'>
				<h1 className='text-3xl text-orange-300 font-bold underline'>
					Isaac A Anderson
				</h1>
				
				<Icons />
			</div>
		</div>
	);
}

function MainSection() {
	const { isHome, isAbout, isProjects, isSkills } = useContext(HeaderContext);



	return (
		<div className=' col-span-4  p-4 shadow-lg  space-x-4 rounded'>
			<div className=''>
				<TextAnimation text={' Welcome'} />
			</div>
			<CircleLine />
			<div className='float-right  '>
				<Topics />
			</div>
			<Skills />
		
			<div className=''>
				<Projects />
			</div>
			{/* <HomePage /> */}
		</div>
	);
}

function FooterSection() {
	return (
		<div className='z-[-50]'>
			<Dust />
			<div className='row-span-1 bg-cover bg-bottom bgimg-1 p-6 shadow-lg flex items-center space-x-4 space-y-2 rounded' />

		</div>
	);
}

export default function Home() {
	return (
		<>
			<div className='grid grid-rows-1 grid-cols-4'>
				<HeaderSection />
				<MainSection />
			</div>
			<FooterSection />
		</>
	);
}
