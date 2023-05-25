import React from 'react';
import { motion } from 'framer-motion';
import CircleLine from './CircleLine';

const textVariants = {
	initial: {
		opacity: 1,
	},
	animate: {
		opacity: 1,
		transition: {
			delay: 0.5,
			staggerChildren: 0.08,
		},
	},
};

const wordVariants = {
	initial: {
		opacity: 0,
		x: 50,
	},
	animate: {
		opacity: .5,
		y: 0,
		transition: {
			duration: 2,
		},
	},
};

const TextAnimation = ({ text = '', className = '' }) => {
	return (
		<div className='flex justify-left items-center '>
			<motion.h1
				className={`inline-block text-dark font-bold  text-4xl space-y-3 p-2 ${className}`}
				variants={textVariants}
				initial='initial'
				animate='animate'>
				{text.split('').map((word, index) => (
					<motion.span
					key={word + '-' + index}
					className='inline-block'
					variants={wordVariants}>
						{word}&nbsp;
					</motion.span>
				))}
			</motion.h1>
			
		</div>
		
	);
};

export default TextAnimation;
