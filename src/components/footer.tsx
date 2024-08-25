import Link from 'next/link';
import React from 'react';

function Footer() {
	return (
		<footer className='bg-yellow-500 text-white py-6 '>
			<div className='container mx-auto px-4 flex flex-col md:flex-row justify-between items-center'>
				<div className='text-center md:text-left mb-4 md:mb-0'>
					<h1 className='text-2xl font-bold'>Burger Joint</h1>
					<p className='text-sm'>The best burgers in town!</p>
				</div>
				<ul className='flex flex-col md:flex-row items-center gap-4'>
					<li>
						<Link href={'/'}>Home</Link>
					</li>
					<li>
						<Link href={'/menu'}>Menu</Link>
					</li>
					<li>
						<Link href={'/dashboard'}>Dashboard</Link>
					</li>
				</ul>
			</div>
			<div className='container mx-auto px-4 text-center mt-4'>
				<p className='text-sm'>&copy; {new Date().getFullYear()} Burger Joint. All rights reserved.</p>
			</div>
		</footer>
	);
}

export default Footer;
