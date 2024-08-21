import React from 'react';
import Image from 'next/image';
import burger from '@/../../public/images/burger.png';
import Link from 'next/link';

function Header() {
	return (
		<div className=' bg-yellow-500 pt-[96px]'>
			<div className='flex justify-between items-center max-w-6xl mx-auto h-[50vh]'>
				<div className=''>
					<h1 className=' text-6xl pb-10 font-bold'>
						Delicious burgers <br /> close to you!
					</h1>
					<Link className=' font-semibold rounded-lg px-10 bg-white text-black py-2 text-2xl' href={'#'}>
						View menu
					</Link>
				</div>
				<div>
					<Image width={500} height={500} src={burger} alt='delicious burger with fries!' />
				</div>
			</div>
		</div>
	);
}

export default Header;
