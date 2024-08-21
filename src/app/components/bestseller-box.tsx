import React from 'react';
import Image from 'next/image';
<<<<<<< HEAD
import Link from 'next/link';

function BestsellerBox({ img, title, link }) {
	return (
		<div className='flex flex-col items-center'>
			<Link href={link}>
				<div className='relative w-[200px] h-[200px]'>
					<Image src={img} alt='food' layout='fill' objectFit='cover' className='rounded-lg' />
				</div>
				<h2 className='text-black text-2xl font-semibold mt-4'>{title}</h2>
			</Link>
		</div>
	);
=======

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
>>>>>>> dadaee69509c9eeb453152b68db855081e5895e6
}

export default BestsellerBox;
