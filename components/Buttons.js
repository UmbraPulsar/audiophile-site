import { ArrowIcon, CartIcon, MenuToggleIcon } from './Icons';

export const ButtonOne = ({ text }) => {
	return (
		<button className=' py-4 px-[2rem] uppercase text-[13px] font-medium text-white bg-Orange hover:bg-LightOrange transition-colors'>
			{text}
		</button>
	);
};

export const ButtonOne2 = ({ text }) => {
	return (
		<button className=' py-4 px-[2rem] uppercase text-[13px] font-medium text-white bg-black hover:bg-LightOrange transition-colors'>
			{text}
		</button>
	);
};
export const ButtonTwo = ({ text }) => {
	return (
		<button className='px-6 py-2 text-center uppercase bg-none border border-black hover:bg-black hover:text-white transition-colors'>
			{text}
		</button>
	);
};

export const ButtonThree = ({ text }) => {
	return (
		<button className='flex items-center bg-none border-none text-[13px] text-black/50 font-bold hover:text-Orange'>
			{text}
			<ArrowIcon />
		</button>
	);
};

export const MenuToggle = () => {
	return (
		<button className='flex bg-none border-none w-[16px] h-[16px]'>
			<MenuToggleIcon />
		</button>
	);
};

export const CartButton = () => {
	return (
		<button className='flex bg-none border-none p-1.5'>
			<CartIcon />
		</button>
	);
};
