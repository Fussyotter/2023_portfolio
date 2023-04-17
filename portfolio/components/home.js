import React from 'react';

export default function HomePage() {
	return (
		<div>
			<h1>Welcome to my Portfolio</h1>
			<div class='bgimg-1'>
				<div class='w3-display-middle'></div>
				<span class='w3-xxlarge w3-text-black w3-wide '>
					<i class='fa fa-paper-plane'></i>Thanks for looking
					<i class='fa fa-paper-plane'></i>
				</span>
				<div>
					<a href='https://www.linkedin.com/in/isaac-a-anderson/'>
						<i class='fa fa-linkedin w3-hover-opacity w3-xxlarge w3-display-topright'></i>
					</a>
					<a href='https://github.com/Fussyotter/' style={{ marginLeft: 100 }}>
						<i class='fa fa-github w3-hover-opacity w3-xxlarge w3-display-topright w3-padding-32'></i>
					</a>
				</div>
			</div>
		</div>
	);
}
