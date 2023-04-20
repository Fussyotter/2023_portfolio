import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Dust = () => {
	const [dots, setDots] = useState(
		[...Array(500)].map((_, i) => ({
			x: 0,
			y: 0,
			angle: Math.random() * 360,
			distance: Math.random() * 100 + 50,
			size: Math.random() * 3 + 1,
			i,
		}))
	);

	const [isAnimating, setIsAnimating] = useState(true);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setDots((prevDots) =>
				prevDots.map((dot) => {
					const angle = dot.angle + 3;
					const distance = dot.distance - 0.5;
					const x = 300 + distance * Math.cos((angle * Math.PI) / 180);
					const y = 300 + distance * Math.sin((angle * Math.PI) / 180);
					return {
						...dot,
						x,
						y,
						angle,
						distance,
					};
				})
			);
		}, 50);

		return () => clearInterval(intervalId);
	}, []);

	const handleReset = () => {
		setIsAnimating(false);
		setDots((prevDots) =>
			prevDots.map((dot) => ({
				...dot,
				distance: Math.random() * 100 + 50,
				angle: Math.random() * 360,
			}))
		);
		setTimeout(() => {
			setIsAnimating(true);
		}, 10);
	};

	return (
		<svg viewBox='0 0 600 600' width='600' height='600'>
			<motion.rect
				x='0'
				y='0'
				width='600'
				height='600'
				fill='#000'
				opacity='0.5'
				animate={{ rotate: 360 }}
				transition={{ loop: Infinity, duration: 20, ease: 'linear' }}
				onClick={handleReset}
				style={{ cursor: 'pointer' }}
			/>
			{dots.map(({ x, y, i, size }) => (
				<circle key={i} cx={x} cy={y} r={size} fill='#ff6b6b' opacity='0.7' />
			))}
		</svg>
	);
};

export default Dust;
