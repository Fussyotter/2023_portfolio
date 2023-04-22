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
import CircleLine from '@/components/CircleLine';
import Topics from '@/components/topics';

export default function Home() {
	const { isHome, isAbout, isProjects, isSkills } = useContext(HeaderContext);

	return (
		<>
			<div className='grid grid-rows-3 h-screen'>
				<div className='bg-cover bg-top bgimg-1 p-10 shadow-lg flex items-center space-x-4 space-y-2 rounded row-span-1'>
					<img
						className='block mx-auto rounded-full sm:mx-0 sm:shrink-0'
						src='corgitwo.png'
						alt='Logo'
						width='100px'
					/>
					<div className='p-6 max-w-sm mx-auto rounded-xl shadow-lg'>
						<h1 className='text-3xl text-orange-300 font-bold underline'>
							Isaac A Anderson
						</h1>
					</div>
					<Icons />
					<Topics />
				</div>
				<div className='row-span-1'>
					<TextAnimation text={' Welcome'} />
					<div className=''>
						<CircleLine />
						<Header />
						<HomePage />
						{/* <div className='z-[-50]'>
					
					<Dust />
				</div> */}
					</div>
				</div>
				<div className='row-span-1 bg-cover bg-bottom bgimg-1 p-6 shadow-lg flex items-center space-x-4 space-y-2 rounded' />
			</div>
		</>
	);
}
