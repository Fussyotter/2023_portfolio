import React from 'react';
import { useState } from 'react';
import ResumeModal from './resumeModal';

export default function Icons() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const handleOpenModal = () => {
		setIsModalOpen(true);
	};
	const handleCloseModal = () => {
		setIsModalOpen(false);
	};

	return (
		<div>
			<a
				href='https://www.linkedin.com/in/isaac-a-anderson/'
				className='inline-block text-gray-600 hover:text-gray-800 transition duration-150 ease-in-out'>
				<i className='fab fa-linkedin text-2xl'></i>
			</a>
			<a
				href='https://github.com/Fussyotter/'
				className='inline-block ml-4 text-gray-600 hover:text-gray-800 transition duration-150 ease-in-out p-4'>
				<i className='fab fa-github text-2xl'></i>
			</a>
			<button
				className='bg-indigo-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4'
				onClick={handleOpenModal}>
				Resume and Contact 
			</button>
			<ResumeModal
				isModalOpen={isModalOpen}
				handleCloseModal={handleCloseModal}
			/>
		</div>
	);
}
