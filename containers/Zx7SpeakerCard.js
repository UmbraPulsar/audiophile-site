import React from 'react';
import { ButtonTwo } from '../components/Buttons';

function Zx7SpeakerCard() {
	return (
		<div
			className='min-h-[20rem] lg:min-h-[25rem] p-6 md:p-[3.875rem] lg:p-[5.9375rem] flex items-center rounded-[8px]
		bg-no-repeat
		bg-center 
		bg-cover
		bg-[url("/home/mobile/image-speaker-zx7.jpg")]
		md:bg-[url("/home/tablet/image-speaker-zx7.jpg")]
		lg:bg-[url("/home/desktop/image-speaker-zx7.jpg")]
		'>
			<div className=''>
				<h2 className=' mb-8 text-[1.75rem] tracking-[2px]'>
					ZX7 SPEAKER
				</h2>
				<ButtonTwo text='See Product' />
			</div>
		</div>
	);
}

export default Zx7SpeakerCard;
