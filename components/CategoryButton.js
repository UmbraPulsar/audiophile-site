import { ButtonThree } from '../components/Buttons';
const CategoryButton = ({ product }) => {
	return (
		<div className='flex flex-col items-center min-h-[165px] p-6 mt-[60px] text-center bg-Gray rounded-[8px] '>
			<img
				className='max-w-[150px] mt-[-65px]'
				src={`./shared/desktop/image-category-thumbnail-${product}.png`}
				alt=''
			/>
			<h4 className=' mb-4 text-[0.875rem] uppercase font-bold tracking-[1px]'>
				{product}
			</h4>
			<ButtonThree text='SHOP' />
		</div>
	);
};

export default CategoryButton;
