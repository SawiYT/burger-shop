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
						<a href='#menu' className='hover:text-gray-200'>
							Menu
						</a>
					</li>
					<li>
						<a href='#about' className='hover:text-gray-200'>
							About Us
						</a>
					</li>
					<li>
						<a href='#contact' className='hover:text-gray-200'>
							Contact
						</a>
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
