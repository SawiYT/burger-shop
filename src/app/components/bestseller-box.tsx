import React from 'react';
import Image from 'next/image';

function BestsellerBox({ img, title }) {
  return (
    <div className='flex flex-col items-center'>
      <div className='relative w-[200px] h-[200px]'>
        <Image 
          src={img} 
          alt='food' 
          layout='fill' 
          objectFit='cover' 
          className='rounded-lg'
        />
      </div>
      <h2 className='text-black text-2xl font-semibold mt-4'>
        {title}
      </h2>
    </div>
  );
}

export default BestsellerBox;
