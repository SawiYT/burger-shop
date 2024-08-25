import React from 'react';
import MenuBox from './menu-box';

interface Discount {
  id: string;
  title: string;
  description: string;
  image_url: string;
}

export async function fetchDiscounts(): Promise<Discount[]> {
  const res = await fetch('http://localhost:3000/api/discounts');
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  return res.json();
}

export default async function Main() {
  const discounts: Discount[] = await fetchDiscounts();
  const topFourDiscounts = discounts.slice(0, 4);

  return (
    <div className='bg-white'>
      <div className='max-w-5xl mx-auto px-4 pt-20'>
        <h2 className='text-center text-3xl md:text-4xl font-bold text-neutral-800 mb-12'>Check our discounts!</h2>
        <div className='flex flex-wrap justify-start gap-8'>
          {topFourDiscounts.map((item: Discount) => (
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
