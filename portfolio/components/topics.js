import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

// Custom styles for the Card component
const CustomCard = styled(Card)(({ theme }) => ({
	background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
	boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
	color: 'white',
	padding: theme.spacing(2),
	textAlign: 'center',
	transition: 'all 0.3s',
	'&:hover': {
		transform: 'scale(1.1)',
		boxShadow: '0 10px 15px 2px rgba(255, 105, 135, .3)',
	},
}));

export default function Topics() {
	return (
		<div className='grid grid-cols-1 gap-2 mx-auto text-center font-bold space-y-2 tracking-wide text-2xl sm:grid-cols-2 sm:space-y-0'>
			<div className='flex items-center justify-center sm:row-span-3'>
				<CustomCard>
					<CardContent>
						<Typography variant='h5' component='h2'>
							I'm interested in...
						</Typography>
					</CardContent>
				</CustomCard>
			</div>

			<CustomCard>
				<CardContent>
					<Typography variant='h5' component='h2'>
						Frontend Development
					</Typography>
				</CardContent>
			</CustomCard>

			<CustomCard>
				<CardContent>
					<Typography variant='h5' component='h2'>
						Backend Development
					</Typography>
				</CardContent>
			</CustomCard>

			<CustomCard>
				<CardContent>
					<Typography variant='h5' component='h2'>
						Intuitive Design
					</Typography>
				</CardContent>
			</CustomCard>
		</div>
	);
}
