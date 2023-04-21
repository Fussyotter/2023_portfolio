import { useEffect, useState } from 'react';

const CircleLine = () => {
	return (
		<div className='relative z-[-20] clear-left'>
		
			<svg style={{ width: '100vh', height: '50px' }}>
				
				<path
					id='line'
					// d='M100,900 L800,50'
					stroke='black'
					strokeWidth='2'
					fill='none'>
					<animate
						attributeName='d'
						dur='5s'
						repeatCount='1'
						from='M0,50 L100,50'
						to='M0,50 L1000,50'
						fill='freeze'
					/>
				</path>
			</svg>
		</div>
	);
};

export default CircleLine;
