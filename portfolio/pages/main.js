import Projects from '../components/projects';
import Skills from '../components/skills';
import Icons from '../components/icons';
import TextAnimation from '../components/TextAnimation';
import Button from '@mui/material/Button';
import Topics from '../components/topics';
import Link from 'next/link';

export default function Main() {
	return (
		<div className='grid grid-cols-1 md:grid-cols-1 custom:grid-cols-1 gap-2 p-10 shadow-lg rounded'>
			<Link href='/'>
				<Button
					variant='contained'
					color='secondary'
					>
					Home
					</Button>
			</Link>
			<div className='w-full flex flex-col justify-start items-start lg:items-start'>
				<TextAnimation text={'Work'} />
				<Projects />
			</div>
			<div className=' flex flex-col justify-start items-start lg:items-start  '>
				<TextAnimation text={'Skills'} />
				<Skills />
			</div>
			
		</div>
	);
}
