import React, { useRef } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Intro from './intro';
import styles from '@/styles/Home.module.css';
import Icons from './icons';
import Button from '@mui/material/Button';
import About from './about';
import Link from 'next/link';
import { Margin } from '@mui/icons-material';


const Page = ({ offset, gradient, onClick, children }) => (
	<>
		<ParallaxLayer offset={offset} speed={0.2} onClick={onClick}>
			<div className={styles.slopeBegin} />
		</ParallaxLayer>

		<ParallaxLayer offset={offset} speed={0.6} onClick={onClick}>
			<div className={`${styles.slopeEnd} ${styles[gradient]}`} />
		</ParallaxLayer>

		<ParallaxLayer
			className={`${styles.text} ${styles.number}`}
			offset={offset}
			speed={0.3}>
			<span>{children}</span>
		</ParallaxLayer>
	</>
);

export default function App() {
	const parallax = useRef(null);

	const scroll = (to) => {
		if (parallax.current) {
			parallax.current.scrollTo(to);
		}
	};

	return (
		<div style={{ background: '#dfdfdf' }}>
			<Parallax
				className={styles.container}
				ref={parallax}
				pages={2}
				horizontal>
				<Page offset={0} gradient='pink' onClick={() => scroll(1)}>
					<Intro />
				</Page>
				<Page offset={1} gradient='teal' onClick={() => scroll(0)}>
					<About />
				</Page>
			</Parallax>
			<div style={{ position: 'fixed', bottom: '5%', left: '2%' }}>
				<Link href='/main'>
					<Button variant='contained' color='secondary'>
						Projects & Skills
					</Button>
				</Link>
				<Icons />
			</div>
		</div>
	);
}