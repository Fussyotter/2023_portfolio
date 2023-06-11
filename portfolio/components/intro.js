import React from 'react';

export default function Intro() {
	return (
		<div className='ml-6 '>
			<img
				className='rounded-full   p-2 mb-2 border-s-4 border-b-2 border-indigo-400/75 hover:border-blue-500'
				src='corgitwo.png'
				alt='Logo'
				width='200px'
				
			/>
			
			<p>[Hi. I'm Isaac Anderson]</p>
			<p className='text-md'>I'm a full stack developer.</p>
			<p className='text-sm'>This is my portfolio</p>
		</div>
	);
}