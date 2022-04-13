import { ButtonOne } from '../components/Buttons';
const Hero = () => {
	return (
		<div className='flex items-center justify-center relative min-h-[600px]  px-6'>
			<img
				className='z-[-1] absolute max-h-full min-w-full'
				src='./home/mobile/image-hero.jpg'
				alt=''
			/>
			<div className='z-[-1] absolute min-w-full min-h-full bg-black/50'></div>
			<div className='text-center mt-20'>
				<p className='text-[0.875rem] tracking-[10px] text-white/50'>
					NEW PRODUCT
				</p>
				<h1 className='mt-4 uppercase text-[2.25rem] text-white tracking-[1.30px] leading-[40px]'>
					XX99 Mark II HeadphoneS
				</h1>
				<p className='px-8 mt-4 mb-[28px] text-white/75 leading-[25px] font-medium'>
					Experience natural, lifelike audio and exceptional build
					quality made for the passionate music enthusiast.
				</p>
				<ButtonOne text='see product' />
			</div>
		</div>
	);
};
export default Hero;
