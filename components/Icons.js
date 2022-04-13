export const ArrowIcon = () => {
	return (
		<img
			className='ml-4 w-[5px] h-[10px]'
			src='./shared/desktop/icon-arrow-right.svg'
			alt=''
		/>
	);
};

export const MenuToggleIcon = () => {
	return <img src='./shared/tablet/icon-hamburger.svg' alt='' />;
};

export const CartIcon = () => {
	return <img src='./shared/desktop/icon-cart.svg' alt='' />;
};

export const Logo = () => {
	return <img src='/shared/desktop/logo.svg' alt='' />;
};

export const SocialIcon = ({ social }) => {
	return <img src={`/shared/desktop/icon-${social}.svg`} alt='' />;
};
