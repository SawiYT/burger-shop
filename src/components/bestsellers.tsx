import BestsellerBox from './bestseller-box';

interface Bestseller {
	id: string;
	title: string;
	image_url: string;
}

export async function fetchBestsellers(): Promise<Bestseller[]> {
	const res = await fetch('http://localhost:3000/api/menu');
	if (!res.ok) {
		throw new Error('Network response was not ok');
	}
	return res.json();
}

export default async function BestSellers() {
	const bestsellers: Bestseller[] = await fetchBestsellers();

	const topFourBestsellers = bestsellers.slice(0, 4);

	return (
		<div className='bg-white pb-20'>
			<h2 className='text-center  pt-20 text-3xl md:text-4xl font-bold bg-white text-neutral-800 mb-12'>Bestsellers</h2>
			<div className='flex justify-center items-center flex-wrap gap-8'>
				{topFourBestsellers.map((item: Bestseller) => (
					<BestsellerBox key={item.id} img={item.image_url} title={item.title} link={`/product/${item.id}`} />
				))}
			</div>
		</div>
	);
}
