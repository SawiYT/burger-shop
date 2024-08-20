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