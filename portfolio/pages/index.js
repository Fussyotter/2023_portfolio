import Head from 'next/head';
import { useContext } from 'react';
import { HeaderContext } from '@/context/context';
import Header from '@/components/header';
import About from '@/components/about';
import Projects from '@/components/projects';
import Skills from '@/components/skills';
import HomePage from '@/components/home';

export default function Home() {
	const { isHome, isAbout, isProjects, isSkills } = useContext(HeaderContext);

	return (
		<>
			<Head>
				<title>Isaac Anderson Portfolio</title>
				<meta charSet='UTF-8' />
				<meta httpEquiv='X-UA-Compatible' content='IE=edge' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<script
					src='https://code.jquery.com/jquery-3.6.3.min.js'
					integrity='sha256-pvPw+upLPUjgMXY0G+8O0xUf+/Im1MZjXxxgOcBQBXU='
					crossOrigin='anonymous'></script>
				<link
					rel='stylesheet'
					href='https://www.w3schools.com/w3css/4/w3.css'
				/>
				<link
					rel='stylesheet'
					href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
				/>
			</Head>
			<div className='bgimg-1 w3-display-container' id='home'></div>
			<div
				className='w3-display-topmiddle w3-mobile w3-animate-duration-1 w3-animate-opacity'
				style={{ whiteSpace: 'nowrap' }}
				id='name'>
				<span className='w3-center w3-padding-large w3-round w3-dark-grey w3-xlarge w3-wide w3-animate-opacity'>
					Isaac <span className='w3-hide-small'>A</span> Anderson
				</span>
			</div>
			<Header />
			<div>
				{isHome && <HomePage />}
				{isAbout && <About />}
				{isProjects && <Projects />}
				{isSkills && <Skills />}
			</div>
		</>
	);
}
