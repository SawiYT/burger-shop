import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function SmallMenuBox({ title, describe, img, link }) {
	return (
		<div className='rounded-xl overflow-hidden w-full shadow-2xl max-w-[238px] mx-auto'>
			<div className='relative h-[238px] rounded-t-xl overflow-hidden'>
				<Image
					src={img}
					alt='photo of the offer'
					layout='fill'
					objectFit='contain'
					className='rounded-t-xl'
				/>
			</div>
			<div className='p-4'>
				<div className='text-black mb-4'>
					<h2 className='text-lg font-semibold'>{title}</h2> 
					<p className='text-gray-700 text-sm'>{describe}</p> 
				</div>
				<Link
					href={link}
					className='inline-flex items-center justify-center font-semibold rounded-lg px-4 py-2 bg-yellow-500 text-white text-sm hover:bg-yellow-600'>
					Check details
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
						className='w-4 h-4 ml-2'>
						<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
					</svg>
				</Link>
			</div>
		</div>
	);
}

export default SmallMenuBox;
