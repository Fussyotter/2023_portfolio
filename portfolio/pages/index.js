import Head from 'next/head';
import { useContext } from 'react';
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


export default function Home() {
	const { isHome, isAbout, isProjects, isSkills } = useContext(HeaderContext);

	return (
		<div className='h-screen bg-gray-100'>
			<div className='bg-cover bg-top bgimg-1 p-6 shadow-lg flex items-center space-x-4 space-y-2 rounded'>
				<img
					class='block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0'
					img
					src='corgitwo.png'
					alt='Logo'
					width='100px'
				/>
				<h1 className='text-3xl font-bold underline '>Isaac A Anderson</h1>
				<Icons />
			</div>
			<Header />

			<TextAnimation text={' Hi, I am stupid'} />

			{/* <Background /> */}
			<Dust/>

			<HomePage />
			<div className='bg-cover bg-bottom bgimg-1 p-6 shadow-lg flex items-center space-x-4 space-y-2 rounded' />
		</div>
	);
}
