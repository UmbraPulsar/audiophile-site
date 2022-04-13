import React from 'react';
import { ButtonOne2 } from '../components/Buttons';

function Zx9SpeakerCard() {
	return (
		<div className='mt-6 py-[3.437rem] px-6 text-white rounded-[8px] bg-Orange bg-top bg-origin-border bg-contain bg-no-repeat bg-[url("/home/desktop/pattern-circles.svg")]'>
			<div className=''>
				<img
					className='max-w-[172px] m-auto'
					src='./home/desktop/image-speaker-zx9.jpg'
					alt=''
				/>
			</div>
			<div className='text-center mt-10'>
				<h2 className='text-[2.25rem] leading-[40px] font-bold'>
					ZX9
					<br />
					SPEAKERS
				</h2>
				<p className='my-6 text-[0.9375rem] font-medium text-white'>
					Upgrade to premium speakers that are phenomenally built to
					deliver truly remarkable sound.
				</p>
				<ButtonOne2 text='See Product' />
			</div>
		</div>
	);
}

export default Zx9SpeakerCard;
