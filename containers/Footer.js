import React from 'react';
import Link from 'next/link';
import { Logo, SocialIcon } from '../components/Icons';

function Footer() {
	return (
		<footer className='relative p-4 md:p-10 lg:px-[10.3125rem] py-12 flex flex-col md:items-start items-center bg-black text-white/50 before:absolute before:top-0 before:w-[110px] before:h-[4px] before:bg-Orange'>
			<div className='lg:flex lg:items-center lg:justify-between lg:min-w-full'>
				<Logo />
				<nav className='my-12 flex flex-col md:flex-row md:flex-start items-center text-[13px] text-white'>
					<Link href='/'>
						<a className='hover:text-Orange transition-colors'>
							<h6>home</h6>
						</a>
					</Link>
					<Link href='/headphones'>
						<a className=' mt-4 md:mt-0 md:ml-10 hover:text-Orange transition-colors'>
							<h6>headphones</h6>
						</a>
					</Link>
					<Link href='/speakers'>
						<a className=' mt-4 md:mt-0 md:ml-10 hover:text-Orange transition-colors'>
							<h6>speakers</h6>
						</a>
					</Link>
					<Link href='/earphones'>
						<a className=' mt-4 md:mt-0 md:ml-10 hover:text-Orange transition-colors'>
							<h6>earphones</h6>
						</a>
					</Link>
				</nav>
			</div>
			<div className='text-center md:text-left'>
				<p className='lg:max-w-[33.75rem]'>
					Audiophile is an all in one stop to fulfill your audio
					needs. We're a small team of music lovers and sound
					specialists who are devoted to helping you get the most out
					of personal audio. Come and visit our demo facility - we’re
					open 7 days a week.
				</p>
				<div className=' md:mt-20 md:flex md:justify-between md:items-center'>
					<p className='my-12 md:my-0'>
						Copyright 2021. All Rights Reserved
					</p>

					<div className='flex justify-center items-center'>
						<Link href='/'>
							<a>
								<SocialIcon social='facebook' />
							</a>
						</Link>
						<Link href='/'>
							<a className='mx-4'>
								<SocialIcon social='twitter' />
							</a>
						</Link>
						<Link href='/'>
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
