import Footer from '@/app/components/footer';
import { fetchDiscountsById } from '../../components/products';

export default async function ProductPage({ params }) {
	const { id } = params;
	console.log('Product ID:', id);

	let product;
	let error;

	try {
		product = await fetchDiscountsById(id);
	} catch (err) {
		error = err.message;
		console.error('Error fetching product:', err);
	}

	if (error) {
		return <div>{error}</div>;
	}

	if (!product) {
		return <div>Loading...</div>;
	}

	console.log('Product data:', product);

	return (
		<div className='flex flex-col min-h-screen bg-white'>
			<main className='flex-grow'>
				<div className='max-w-4xl mx-auto p-6 pt-[196px]'>
					<div className='flex flex-col md:flex-row items-center md:items-start bg-white p-6 rounded-lg shadow-2xl'>
						{/* Zdjęcie */}
						<div className='md:w-1/2 mb-4 md:mb-0'>
							<img
								src={product.image_url}
								alt={product.title}
								className='w-full h-auto object-cover rounded-lg shadow-md border-2 border-yellow-500'
							/>
						</div>
						{/* Tytuł i opis */}
						<div className='md:w-1/2 md:pl-6'>
							<h1 className='text-4xl font-extrabold text-gray-900 mb-4'>{product.title}</h1>
							<p className='text-lg text-gray-700 mb-4'>{product.description || 'There is no description produktu.'}</p>
							<button className='bg-yellow-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500'>
								Check availability
							</button>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}
