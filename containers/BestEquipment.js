import React from 'react';

function BestEquipment() {
	return (
		<>
			<div className='my-[120px]  lg:my-52 px-6 md:px-10 lg:px-[10.3125rem] lg:flex lg:items-center lg:justify-between'>
				<img
					className='rounded-[8px] lg:order-2'
					srcSet='./shared/mobile/image-best-gear.jpg 475w,
							./shared/tablet/image-best-gear.jpg 900w,
							./shared/desktop/image-best-gear.jpg 1400w'
					alt=''
					src='./shared/mobile/image-best-gear-.jpg'
				/>

				<div className='lg:max-w-[27rem] mt-10 md:px-[4.5625rem] lg:px-0 text-center lg:text-left lg:order-1'>
					<h2 className=' text-[1.75rem] md:text-[2.5rem]'>
						Bringing you the
						<span className='text-Orange'> best </span>
						<br className='hidden md:block lg:hidden' />
						audio gear
					</h2>
					<p className='mt-8 text-black/50'>
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
