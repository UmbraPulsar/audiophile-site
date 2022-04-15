import React from 'react';
import { ButtonTwo } from '../components/Buttons';

function Yx1EarphonesCard() {
	return (
		<div className='md:grid md:grid-cols-2 md:gap-8'>
			<div
				className='
					mt-6
					min-h-[12.5rem]
					md:min-h-[20rem]
					bg-no-repeat
					bg-center 
					bg-cover
					bg-[url("/home/mobile/image-earphones-yx1.jpg")]
					md:bg-[url("/home/tablet/image-earphones-yx1.jpg")]
					lg:bg-[url("/home/desktop/image-earphones-yx1.jpg")]
					rounded-[8px]
			'></div>
			<div className='min-h-[12.5rem] md:min-h-[20rem] mt-6 p-6 md:p-12 lg:p-[6.25rem] flex flex-col justify-center bg-Gray rounded-[8px]'>
				<div>
					<h2
						className='
				mb-8
				text-[1.75rem]
				tracking-[2px]
				'>
						YX1 EARPHONES
					</h2>

					<ButtonTwo text='See Product' />
				</div>
			</div>
		</div>
	);
}

export default Yx1EarphonesCard;
