import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
interface BestsellerBoxProps {
	img: string;
	title: string;
	link: string;
  }
  
  const BestsellerBox: React.FC<BestsellerBoxProps> = ({ img, title, link }) => {
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
}

export default BestsellerBox;
