import React from 'react';
import { ButtonOne2 } from '../components/Buttons';

function Zx9SpeakerCard() {
	return (
		<div
			className='
		flex
		flex-col
		lg:flex-row
		items-center
		lg:items-start
		lg:justify-between
		p-6
		py-[3.4375rem]
		md:py-[4rem]
		lg:p-[5.9375rem]
		bg-Orange		
		bg-no-repeat
		bg-center
		bg-cover
		bg-[url("/home/desktop/pattern-circles.svg")]
		rounded-[8px]
		overflow-hidden
		'>
			<div
				className='
			max-w-[10.75rem] 
			max-h-[12.9375rem] 
			md:max-w-[12.3125rem] 
			md:max-h-[14.8125rem]
			lg:max-w-[20.625rem]
			lg:max-w-[22.8125rem]'>
				<img
					src='/home/mobile/image-speaker-zx9.png'
					srcSet='
				/home/mobile/image-speaker-zx9.png 475w,
				/home/tablet/image-speaker-zx9.png 900w,
				/home/desktop/image-speaker-zx9.png 1400w
				'
					alt=''
				/>
			</div>
			<div className='mt-8 md:mt-[4rem] lg:mt-6 md:max-w-[21.8125rem] text-center lg:text-left text-white'>
				<h2 className='text-[2.5rem] md:text-[3.5rem] leading-[2.5rem] md:leading-[3.625rem]'>
					ZX9 <br />
					SPEAKER
				</h2>
				<p className='my-6 text-white/75'>
					Upgrade to premium speakers that are phenomenally built to
					deliver truly remarkable sound.
				</p>
				<ButtonOne2 text='see product' />
			</div>
		</div>
	);
}

export default Zx9SpeakerCard;
