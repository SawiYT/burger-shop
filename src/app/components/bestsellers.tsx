<<<<<<< HEAD
import BestsellerBox from '../components/bestseller-box';

export async function fetchBestsellers() {
	const res = await fetch('http://localhost:3000/api/menu');
	if (!res.ok) {
		throw new Error('Network response was not ok');
	}
	return res.json();
}

export default async function BestSellers() {
	const bestsellers = await fetchBestsellers();

	const topFourBestsellers = bestsellers.slice(0, 4);

	return (
		<div className=' bg-white pb-20'>
			<h2 className='text-center pb-20 pt-20 text-3xl md:text-4xl font-bold bg-white text-neutral-800 mb-12'>
				Bestsellers
			</h2>
			<div className='flex justify-center items-center flex-wrap gap-8'>
				{topFourBestsellers.map(item => (
					<BestsellerBox key={item.id} img={item.image_url} title={item.title} link={`/product/${item.id}`} />
				))}
			</div>
		</div>
	);
}
=======
import React from 'react'
import BestsellerBox from './bestseller-box'
import burger1 from '@/../../public/b1.png'
import burger2 from '@/../../public/b2.png'
import burger3 from '@/../../public/b3.png'
import burger4 from '@/../../public/b4.png'

function Bestsellers() {
  return (
    <div className=' pb-20'>
        <h2 className='text-center pt-20 text-3xl md:text-4xl font-bold text-neutral-800 mb-12'>
          Bestsellers
        </h2>
        <div className='flex justify-center items-center flex-wrap gap-8'>
        <BestsellerBox img={burger1} title={'Whopper'}/>
        <BestsellerBox img={burger2} title={'Whopper'}/>
        <BestsellerBox img={burger3} title={'Whopper'}/>
        <BestsellerBox img={burger4} title={'Whopper'}/>
        </div>
    </div>  
  )
}

export default Bestsellers
>>>>>>> dadaee69509c9eeb453152b68db855081e5895e6
