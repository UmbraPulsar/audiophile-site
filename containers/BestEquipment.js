import React from 'react';

function BestEquipment() {
	return (
		<>
			<div className='mt-[7.5rem] px-6 text-center'>
				<img
					className='rounded-[8px]'
					srcSet='./shared/mobile/image-best-gear.jpg 375w,
							./shared/tablet/image-best-gear.jpg 810w,
							./shared/desktop/image-best-gear.jpg 1000w'
					alt=''
				/>
				<div className='md:px-24'>
					<h2 className='mt-[40px] mb-8 uppercase text-[1.75rem] md:text-[2.5rem] leading-[40px] tracking-[2px] font-bold'>
						Bringing you the{' '}
						<span className='text-Orange'>best </span>
						audio gear
					</h2>
					<p className='px-4 text-black/50 leading-[25px]'>
						Located at the heart of New York City, Audiophile is the
						premier store for high end headphones, earphones,
						speakers, and audio accessories. We have a large
						showroom and luxury demonstration rooms available for
						you to browse and experience a wide range of our
						products. Stop by our store to meet some of the
						fantastic people who make Audiophile the best place to
						buy your portable audio equipment.
					</p>
				</div>
			</div>
		</>
	);
}

export default BestEquipment;
