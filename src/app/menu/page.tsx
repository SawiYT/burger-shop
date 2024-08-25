import React from 'react';

import { fetchDiscounts } from '../../components/main';
import MenuBox from '../../components/menu-box';
import SmallMenuBox from '../../components/small-menu-box';
import { fetchBestsellers } from '../../components/bestsellers';
import BestsellerBox from '../../components/bestseller-box';
import Footer from '../../components/footer';

async function page() {
	const discounts = await fetchDiscounts();
	const menu = await fetchBestsellers();

	return (
		<div className=' bg-white'>
			<div className='max-w-7xl mx-auto px-4 pt-20'>
				<div>
					<h2 className='text-center pt-20 text-3xl md:text-4xl font-bold text-neutral-800 mb-12'>Discounts</h2>
					<div className='flex flex-wrap justify-start gap-8'>
						{discounts.map(item => (
							<SmallMenuBox
								key={item.id}
								title={item.title}
								describe={item.description}
								img={item.image_url}
								link={`/discount/${item.id}`}
							/>
						))}
					</div>
				</div>
				<div className=' pb-20'>
					<h2 className='text-center pt-20 text-3xl md:text-4xl font-bold text-neutral-800 mb-12'>Menu</h2>
					<div className='flex flex-wrap justify-center gap-8'>
						{menu.map(item => (
							<BestsellerBox key={item.id} title={item.title} img={item.image_url} link={`/product/${item.id}`} />
						))}
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default page;
