import React from 'react';
import { ButtonTwo } from '../components/Buttons';

function Zx7SpeakerCard() {
	return (
		<div className='relative flex items-center min-h-[20rem] mt-6  px-6 rounded-[8px]'>
			<img
				className='z-[-1] absolute top-0 left-0 max-h-full min-w-full rounded-[8px]'
				srcSet='
				/home/mobile/image-speaker-zx7.jpg, 375w,
				/home/tablet/image-speaker-zxy.jpg, 768w,
				/home/desktop/image-speaker-zx7.jpg 1440w'
				sizes='(min-width: 365px) 810px, 100vw'
				src='/home/mobile/image-speaker-zx7.jpg'
				alt=''
			/>
			<div>
				<h2 className=' mb-8 text-[1.75rem] leading-[40px] tracking-[2px] font-bold'>
					ZX7 SPEAKER
				</h2>
				<ButtonTwo text='See Product' />
			</div>
		</div>
	);
}

export default Zx7SpeakerCard;
