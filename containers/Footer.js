import React from 'react';
import Link from 'next/link';
import { Logo, SocialIcon } from '../components/Icons';
function Footer() {
	return (
		<footer
			className='relative flex flex-col items-center md:items-start min-h-screen md:min-h-[400px] mt-[7.5rem] p-[2.375rem] md:p-12 bg-black text-white before:w-[101px] before:bg-Orange before:h-[4px] before:absolute before:top-0
'>
			<Logo />
			<nav className='flex flex-col md:flex-row justify-between items-center h-[12rem] md:h-auto mt-12 font-bold uppercase'>
				<Link href='/'>
					<a className='md:mr-12 hover:text-Orange transition-colors'>
						home
					</a>
				</Link>
				<Link href='/'>
					<a className='md:mr-12 hover:text-Orange transition-colors'>
						headphones
					</a>
				</Link>
				<Link href='/'>
					<a className='md:mr-12 hover:text-Orange transition-colors'>
						speakers
					</a>
				</Link>
				<Link href='/'>
					<a className='md:mr-12 hover:text-Orange transition-colors'>
						earphones
					</a>
				</Link>
			</nav>
			<div className='md:flex md:flex-col mt-12 md:mt-8 py-4  text-center  md:flex-1  md:text-left text-white/50'>
				<p className='md:flex-1 md:pr-20'>
					Audiophile is an all in one stop to fulfill your audio
					needs. We're a small team of music lovers and sound
					specialists who are devoted to helping you get the most out
					of personal audio. Come and visit our demo facility - we’re
					open 7 days a week.
				</p>
				<div className='md:flex items-center justify-between md:flex-1'>
					<p>Copyright 2021. All Rights Reserved</p>
					<div className='flex mt-6 md:mt-0'>
						<Link href=''>
							<a>
								<SocialIcon social='facebook' />
							</a>
						</Link>
						<Link href=''>
							<a className='mx-4'>
								<SocialIcon social='twitter' />
							</a>
						</Link>
						<Link href=''>
							<a>
								<SocialIcon social='instagram' />
							</a>
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
