import { useEffect, useState } from 'react';

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

	useEffect(() => {
		const intervalId = setInterval(() => {
			setDots((prevDots) =>
				prevDots.map((dot) => {
					const angle = dot.angle + 3;
					const distance = dot.distance - 0.5;
					const x = 300 + distance * Math.cos((angle * Math.PI) / 180);
					const y = 300 + distance * Math.sin((angle * Math.PI) / 180);

					if (distance <= 0) {
						// reset the dot's angle and distance
						// most effective reset I could come up with
						return {
							...dot,
							distance: Math.random() * 100 + 100,
							angle: Math.random() * 360,
						};
					}

					return {
						...dot,
						x,
						y,
						angle,
						distance,
					};
				})
			);
		}, 45);

		return () => clearInterval(intervalId);
	}, []);




	return (
		<div className='relative w-96 h-96 mx-auto'>
			<svg
				viewBox='0 0 600 600'
				className='top-0 left-0 right-0 bottom-0 '>
				{dots.map(({ x, y, i, size }) => (
					<circle
						key={i}
						cx={x}
						cy={y}
						r={size}
						className='fill-current text-blue-500 opacity-50 z-axis[-50]'
						transition={{ repeat: Infinity, duration: 50, ease: 'linear' }}
					/>
				))}
			</svg>
		</div>
	);
};

export default Dust;
