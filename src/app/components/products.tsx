import { fetchBestsellers } from './bestsellers';
import { fetchDiscounts } from './main';


export async function fetchDiscountsCount() {
	try {
		const response = await fetch('/api/discounts'); 
		const discounts = await response.json();
		return discounts.length; 
	} catch (error) {
		console.error('Błąd podczas pobierania rabatów:', error);
		return 0;
	}
};

export async function fetchMenuItemsCount() {
	try {
		const response = await fetch('/api/menu');
		const menuItems = await response.json();
		return menuItems.length; 
	} catch (error) {
		console.error('Błąd podczas pobierania pozycji menu:', error);
		return 0;
	}
};

export async function fetchBestSellerById(id) {
	try {
		const menu = await fetchBestsellers();

		console.log('Menu:',);

		const productFromMenu = menu.find(item => item.id === Number(id));
		if (productFromMenu) {
			return productFromMenu;
		}

		throw new Error('Product not found');
	} catch (err) {
		console.error('Error fetching product:', err);
		throw err; // Re-throw to handle in calling function
	}
}

export async function fetchDiscountsById(id) {
	try {
		const discounts = await fetchDiscounts();

		console.log('Discounts:', discounts);

		const productFromDiscounts = discounts.find(item => item.id === Number(id));
		if (productFromDiscounts) {
			return productFromDiscounts;
		}

		throw new Error('Product not found');
	} catch (err) {
		console.error('Error fetching product:', err);
		throw err; // Re-throw to handle in calling function
	}
}
