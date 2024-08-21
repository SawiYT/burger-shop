import React from 'react';
import MenuBox from './menu-box';
<<<<<<< HEAD
import royal from '@/../../public/images/royal feast.jpg';
import bliss from '@/../../public/images/chill bliss.jpg';
import delights from '@/../../public/images/rispy delights.jpg';
import wrap from '@/../../public/images/wrap.jpg';

export async function fetchDiscounts() {
	const res = await fetch('http://localhost:3000/api/discounts');
	if (!res.ok) {
		throw new Error('Network response was not ok');
	}
	return res.json();
}

export default async function Main() {
	const discounts = await fetchDiscounts();

	const topFourDiscounts = discounts.slice(0, 4);

	return (
		<div className=' bg-white'>
			<div className='max-w-5xl mx-auto px-4 pt-20'>
				<h2 className='text-center text-3xl md:text-4xl font-bold text-neutral-800 mb-12'>Check our discounts!</h2>
				<div className='flex flex-wrap justify-start gap-8'>
					{topFourDiscounts.map(item => (
						<MenuBox
							key={item.id}
							title={item.title}
							describe={item.description}
							img={item.image_url}
							link={`/discount/${item.id}`}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
=======
import royal from '@/../../public/royal feast.jpg';
import bliss from '@/../../public/chill bliss.jpg';
import delights from '@/../../public/rispy delights.jpg';
import wrap from '@/../../public/wrap.jpg';

function Main() {
  return (
    <div className='max-w-5xl mx-auto px-4 pt-20'>
      <h2 className='text-center text-3xl md:text-4xl font-bold text-neutral-800 mb-12'>
        Check our categories!
      </h2>
      <div className='flex flex-wrap justify-start gap-8'>
        <MenuBox title={'Royal Feast'} describe={'A perfect blend of flavors.'} img={royal}/>
        <MenuBox title={'Chill Bliss'} describe={'Frosty, sweet indulgence.'} img={bliss}/>
        <MenuBox title={'Crispy Delights'} describe={'Tender, golden bites.'} img={delights}/>
        <MenuBox title={'Wrap Heaven'} describe={'Flavor-packed, fresh rolls..'} img={wrap}/>
      </div>
    </div>
  );
}

export default Main;
>>>>>>> dadaee69509c9eeb453152b68db855081e5895e6
