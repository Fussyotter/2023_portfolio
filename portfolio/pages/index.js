import Projects from '@/components/projects';
import Skills from '@/components/skills';
import Icons from '@/components/icons';
import TextAnimation from '@/components/TextAnimation';

import Topics from '@/components/topics';

function HeaderSection() {
	return (
		<div className='w-full sm:row-start-1 sm:col-span-1 bg-cover bgimg-1 shadow-2xl flex flex-col sm:flex-row items-center justify-center sm:justify-start space-x-0 sm:space-x-5 space-y-2 p-6 '>
			<img
				className='rounded-full   p-2 border-s-4 border-b-2 border-indigo-400/75 hover:border-blue-500'
				src='corgitwo.png'
				alt='Logo'
				width='250px'
			/>
			<div className='p-6 mx-auto rounded-xl shadow-lg text-center sm:text-left'>
				<h1 className='text-3xl text-orange-300 font-bold underline'>
					Isaac A Anderson
				</h1>

				<Icons />
			</div>
		</div>
	);
}

function MainSection() {
	return (
		<div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-2 p-8 px-2 shadow-lg rounded'>
			<div className='w-full flex flex-col justify-start items-start lg:items-start'>
				<TextAnimation text={'Work'} />
				<Projects />
			</div>
			<div className=' flex flex-col justify-start items-start lg:items-start  '>
				<TextAnimation text={'Skills'} />
				<Skills />
			</div>
			<div className=' flex flex-col justify-start items-center lg:items-start'>
				<img src='next.svg' alt='Next.js' className='w-1/5 mx-auto' />
				<Topics />
			</div>
		</div>
	);
}

function FooterSection() {
	return (
		<div className='z-[-50]'>
			<div className='row-span-1 bg-cover bg-bottom bgimg-1 p-6 shadow-2xl flex items-center space-x-4 space-y-2 rounded' />
		</div>
	);
}

export default function Home() {
	return (
		<>
			<HeaderSection />
			<MainSection />
			<FooterSection />
		</>
	);
}
