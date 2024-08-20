import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
}

export default Navbar;
