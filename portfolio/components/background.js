import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { debounce } from 'lodash';
import CircleSVG from './circle';
import BigCircle from './bigcircle';
const Background = () => {
	const [isScattered, setIsScattered] = useState(true);

	const [dots, setDots] = useState(
		[...Array(500)].map((_, i) => ({
			x:
				Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 0),
			y:
				Math.random() *
				(typeof window !== 'undefined' ? window.innerHeight : 0),
			angle: Math.random() * 2 * Math.PI,
			distance: Math.random() * 50 + 100,
			i, // add index to each dot object
		}))
	);

	const updateDots = () => {
		setDots((prevDots) =>
			prevDots.map((dot) => {
				const angle = dot.angle + 0.005;
				const distance = dot.distance;
				const x = window.innerWidth / 2 + distance * Math.cos(angle);
				const y = window.innerHeight / 2 + distance * Math.sin(angle);
				return {
					...dot,
					x,
					y,
					angle,
					distance,
				};
			})
		);
	};

	const debouncedUpdateDots = debounce(updateDots, 10);

	useEffect(() => {
		const intervalId = setInterval(debouncedUpdateDots, 10);
		return () => clearInterval(intervalId);
	}, []);

	const scatteredVariants = {
		start: {
			opacity: 0,
			x: ({ x }) => x + (Math.random() * 50 - 25),
			y: ({ y }) => y + (Math.random() * 50 - 25),
		},
		end: {
			opacity: 1,
			x: ({ x }) => x,
			y: ({ y }) => y,
			transition: {
				duration: 2,
				ease: 'easeOut',
			},
		},
	};

	const circularVariants = {
		start: {
			opacity: 1,
			x: ({ x, angle, distance }) =>
				window.innerWidth / 2 + distance * Math.cos(angle),
			y: ({ y, angle, distance }) =>
				window.innerHeight / 2 + distance * Math.sin(angle),
		},
		end: {
			opacity: 1,
			x: ({ x, angle, distance }) =>
				window.innerWidth / 2 + distance * Math.cos(angle),
			y: ({ y, angle, distance }) =>
				window.innerHeight / 2 + distance * Math.sin(angle),
			transition: {
				type: 'spring',
				damping: 10,
				stiffness: 100,
				duration: 0.02,
				mass: 0.75,
				repeat: Infinity,
				repeatDelay: 1,
			},
		},
	};
	const dotVariants = isScattered ? scatteredVariants : circularVariants;

	return (
		<div className='absolute h-full w-full'>
			<CircleSVG/>
			{dots.map(({ x, y, i, angle, distance }) => (
				<motion.div
				key={i}
				className='absolute rounded-full bg-black z-axis'
				style={{
					width: '10px',
					height: '10px',
					left: `${x}px`,
					top: `${y}px`,
				}}
				variants={dotVariants}
				initial='start'
				animate='end'
				/>
				))}
<BigCircle/>
		</div>
	);
};

export default Background;

// const circleVariants = {
// 	start: {
// 		scale: 1,
// 	},
// 	expand: {
// 		scale: 1.2,
// 		transition: {
// 			duration: 2,
// 			ease: 'easeInOut',
// 		},
// 	},
// 	contract: {
// 		scale: 0.8,
// 		transition: {
// 			duration: 3,
// 			ease: 'easeInOut',
// 		},
// 	},
// };
{
	/* <motion.div
                            className='absolute rounded-full bg-black'
                            style={{ width: 'px', height: '5px' }}
                            variants={circleVariants}
                            initial='start'
                            animate='expand'
                            whileHover='contract'
                            whileTap='contract'
                        /> */
}
