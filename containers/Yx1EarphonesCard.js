import React from 'react';
import { ButtonTwo } from '../components/Buttons';

function Yx1EarphonesCard() {
	return (
		<div className='md:grid md:grid-cols-2 md:gap-4 '>
			<div className='mt-6 flex-1'>
				<img
					className='rounded-[8px]'
					src='./home/mobile/image-earphones-yx1.jpg'
					alt=''
				/>
			</div>
			<div className='flex items-center mt-6 p-6 min-h-[200px] rounded-[8px] bg-Gray'>
				<div>
					<h2 className=' mb-6 text-[1.75rem] leading-[40px] tracking-[2px] font-bold'>
						YX1 EARPHONES
					</h2>
					<ButtonTwo text='see Product' />
				</div>
			</div>
		</div>
	);
}

export default Yx1EarphonesCard;
