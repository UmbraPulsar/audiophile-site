import { CartButton, MenuToggle } from '../components/Buttons';

const Header = () => {
	return (
		<header className='flex justify-between items-center bg-black py-[2rem] px-[1.5rem] border-b-2 border-Gray/25'>
			<MenuToggle />
			<img src='/shared/desktop/logo.svg' alt='' />
			<CartButton />
		</header>
	);
};

export default Header;
