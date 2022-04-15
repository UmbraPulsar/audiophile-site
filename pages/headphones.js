import React from 'react';

const TestImage = () => {
	return (
		<div>
			<img
				src='/home/desktop/image-speaker-zx7.jpg'
				srcSet='
                    /home/desktop/image-speaker-zx7.jpg 900w,
                    /home/tablet/image-speaker-zx7.jpg 768w,
                    /home/mobile/image-speaker-zx7.jpg 475w'
				alt=''
			/>
		</div>
	);
};

function headphones() {
	return (
		<div className='flex justify-center items-center min-h-screen'>
			<TestImage />
		</div>
	);
}

export default headphones;
