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
			<div className='grid grid-rows-3 grid-cols-4'>
				<div className='row-1 col-span-4 bg-cover bg-top bgimg-1  grid-cols-8 grid-rows-3 shadow-lg flex items-center space-x-4 space-y-2 rounded row-span-1'>
					<img
						className=' row-start-2 block mx-auto place-self-center rounded-full sm:mx-0 sm:shrink-0'
						src='corgitwo.png'
						alt='Logo'
						width='100px'
					/>
					<div className='p-6 max-w-sm mx-auto row-start-2 col-start-2 col-span-2 rounded-xl shadow-lg'>
						<h1 className='text-3xl text-orange-300 font-bold underline'>
							Isaac A Anderson
						</h1>
					</div>
					<div className='row-start-3 col-start-3'>
						<Icons />
					</div>
					<div className=''>
						<Topics />
					</div>
				</div>
				<div className=' grid-cols-5 grid-rows-4'>
					<div className='row-start-1'>
						<TextAnimation text={' Welcome'} />
					</div>
					<CircleLine />
					<Header />
					<HomePage />
				</div>
			</div>

			{/* <div className='z-[-50]'>
					
					<Dust />
				</div> */}
			{/* <div className='row-span-1 bg-cover bg-bottom bgimg-1 p-6 shadow-lg flex items-center space-x-4 space-y-2 rounded' /> */}
		</>
	);
}
