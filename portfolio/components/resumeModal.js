import Modal from 'react-modal';

function ResumeModal({ isModalOpen, handleCloseModal }) {
	return (
		<Modal isOpen={isModalOpen} onRequestClose={handleCloseModal}>
			<button onClick={handleCloseModal}>Close</button>
			<iframe src={'isaac_anderson_resume.pdf'} width='100%' height='500px' />
		</Modal>
	);
}

export default ResumeModal;
