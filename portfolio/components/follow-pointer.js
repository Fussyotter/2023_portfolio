import { useState, useRef, useEffect } from 'react';

export function useFollowPointer() {
	const ref = useRef(null);
	const [point, setPoint] = useState({ x: 0, y: 0 });

	useEffect(() => {
		if (!ref.current) return;

		const handleMouseMove = ({ clientX, clientY }) => {
			const element = ref.current;

			const x = clientX - element.offsetLeft - element.offsetWidth / 2;
			const y = clientY - element.offsetTop - element.offsetHeight / 2;

			setPoint({ x, y });
		};

		window.addEventListener('mousemove', handleMouseMove);

		return () => window.removeEventListener('mousemove', handleMouseMove);
	}, []);

	return { ref, point };
}
