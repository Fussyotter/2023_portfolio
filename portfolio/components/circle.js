import React from 'react';

export default function CircleSVG() {
	return (
		<svg width='200' height='200'>
			<circle cx='100' cy='100' r='10' fill='#888' />
			<circle
				cx='100'
				cy='100'
				r='30'
				stroke='#888'
				stroke-width='2'
				fill='none'>
				<animate
					attributeName='r'
					values='30;50;30'
					dur='4s'
					repeatCount='indefinite'
				/>
			</circle>
		</svg>
	);
}
