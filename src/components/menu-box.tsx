import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface MenuBoxProps {
  title: string;
  describe: string;
  img: string;
  link: string;
}

const MenuBox: React.FC<MenuBoxProps> = ({ title, describe, img, link }) => {
  return (
    <div className='rounded-xl overflow-hidden shadow-2xl max-w-[476px] mx-auto'>
      <div className='relative w-full max-w-[476px] h-[438px] rounded-t-xl overflow-hidden'>
        <Image
          objectFit='cover'
          layout='fill'
          src={img}
          alt='photo of the offer'
          className='rounded-t-xl'
        />
      </div>
      <div className='p-4 flex justify-between'>
        <div className='text-black mb-4'>
          <h2 className='text-xl font-semibold'>{title}</h2>
          <p className='text-gray-700'>{describe}</p>
        </div>
        <Link
          href={link}
          className='inline-flex items-center ml-10 font-semibold rounded-lg px-6 py-2 bg-yellow-500 text-white text-lg hover:bg-yellow-600'
        >
          Check details
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            className='w-5 h-5 ml-2'
          >
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default MenuBox;
