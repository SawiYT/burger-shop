import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
<<<<<<< HEAD
import logo from '@/../../public/images/logo.png';

function Navbar() {
	return (
		<nav className='bg-white w-full h-24 z-50 fixed top-0 text-black shadow-md'>
			<div className='max-w-7xl mx-auto flex justify-between items-center h-full px-6'>
				<div className='flex space-x-6 font-semibold'>
					<Link href='/'>Home</Link>
					<Link href='/menu'>Menu</Link>
					<Link href='/restaurants'>Restaurants</Link>
				</div>

				<div className='absolute left-1/2 transform -translate-x-1/2 text-2xl font-bold'>
					<Link href='/'>
						<Image width={90} src={logo} alt='logo' />
					</Link>
				</div>

				<div className='flex space-x-4'>
					<Link className='w-20 bg-yellow-500 font-semibold px-4 py-2 text-center rounded-lg' href='/dashboard'>
						Login
					</Link>
				</div>
			</div>
		</nav>
	);
=======
import logo from '@/../../public/logo.png'

function Navbar() {
  return (
    <nav className='flex justify-between items-center bg-white w-full h-24 fixed top-0 text-black shadow-md px-6'>
      <div className='flex space-x-6 font-semibold'>
        <Link href='/'>
          Home
        </Link>
        <Link href='/menu'>
          Menu
        </Link>
        <Link href='/restaurants'>
          Restaurants
        </Link>
      </div>
      
      <div className='absolute left-1/2 transform -translate-x-1/2 text-2xl font-bold'>
        <Link href='/'>
          <Image width={90} src={logo} alt='logo'/>
        </Link>
      </div>
      
      <div className='flex  space-x-4'>
        <Link className=' w-20 bg-yellow-500 font-semibold px-4 py-2 text-center rounded-lg' href='https://facebook.com'>
          Login
        </Link>
      </div>
    </nav>
  );
>>>>>>> dadaee69509c9eeb453152b68db855081e5895e6
}

export default Navbar;
