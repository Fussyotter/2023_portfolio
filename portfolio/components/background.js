import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

import { useFollowPointer } from './follow-pointer';

const Background = () => {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);
  const [dots, setDots] = useState(
		[...Array(400)].map((_, i) => ({
			x:
				Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 0),
			y:
				Math.random() *
				(typeof window !== 'undefined' ? window.innerHeight : 0),
		}))
	);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setDots(prevDots => prevDots.map(dot => ({
        x: dot.x + (event.clientX - window.innerWidth / 2) * 0.01,
        y: dot.y + (event.clientY - window.innerHeight / 2) * 0.01
      })));
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
	const dotVariants = {
		start: {
			y: '0%',
		},
		end: {
			x: [
				'20%',
				'22%',
				'25%',
				'28%',
				'30%',
				'32%',
				'35%',
				'38%',
				'40%',
				'42%',
				'45%',
				'48%',
				'50%',
				'52%',
				'55%',
				'58%',
				'60%',
				'62%',
				'65%',
				'68%',
				'70%',
				'72%',
				'75%',
				'78%',
				'80%',
				'82%',
				'85%',
				'88%',
				'90%',
				'92%',
				'95%',
				'98%',
				'100%',
			],
			y: [
				'20%',
				'22%',
				'25%',
				'28%',
				'30%',
				'32%',
				'35%',
				'38%',
				'40%',
				'42%',
				'45%',
				'48%',
				'50%',
				'52%',
				'55%',
				'58%',
				'60%',
				'62%',
				'65%',
				'68%',
				'70%',
				'72%',
				'75%',
				'78%',
				'80%',
				'82%',
				'85%',
				'88%',
				'90%',
				'92%',
				'95%',
				'98%',
				'100%',
			],
			transition: {
				duration: 15,
				repeat: Infinity,
				repeatType: 'reverse',
				ease: 'linear',
			},
		},
	};

	
  return (
		<div className='absolute h-full w-full h-full '>
			{dots.map((dot, i) => (
				<motion.div
					key={i}
					transition={{
						type: 'spring',
						damping: 1,
						stiffness: 100,
						restDelta: 1,
					}}
					className='absolute rounded-full bg-black'
					style={{
						width: '5px',
						height: '5px',
						left: `${dot.x}px`,
						top: `${dot.y}px`,
					}}
					variants={dotVariants}
					initial='start'
					animate={{
						x: `${x}px`,
						y: `${y}px`,
					}}
				/>
			))}
		</div>
	);
};

export default Background;
