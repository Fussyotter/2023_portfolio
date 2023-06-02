// lol
import { useEffect, useRef } from 'react';

export default function MatrixRain() {
	const canvasRef = useRef(null);
	const fontSize = 14;
	const columns = Math.floor(window.innerWidth / fontSize);
	const drops = [];

	for (let i = 0; i < columns; i++) {
		drops[i] = 1;
	}

	useEffect(() => {
		const canvas = canvasRef.current;
		const context = canvas.getContext('2d');

		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		canvas.style.position = 'fixed';
		canvas.style.top = 0;
		canvas.style.left = 0;
		canvas.style.zIndex = -1;

		function drawMatrixRain() {
			context.fillStyle = 'rgba(0, 0, 0, 0.1)';
			context.fillRect(0, 0, canvas.width, canvas.height);

			context.fillStyle = '#00FF00';
			context.font = fontSize + 'px Courier';

			for (let i = 0; i < drops.length; i++) {
				const text = String.fromCharCode(Math.random() * 128);
				const x = i * fontSize;
				const y = drops[i] * fontSize;

				context.fillText(text, x, y);

				if (y > canvas.height && Math.random() > 0.975) {
					drops[i] = 0;
				}

				drops[i]++;
			}
		}

		const intervalId = setInterval(drawMatrixRain, 50);

		return () => {
			clearInterval(intervalId);
		};
	}, []);

	return <canvas ref={canvasRef} />;
}
