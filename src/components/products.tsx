import { fetchBestsellers } from './bestsellers';
import { fetchDiscounts } from './main';

export async function fetchDiscountsCount(): Promise<number> {
  try {
    const response = await fetch('/api/discounts');
    const discounts: any[] = await response.json();
    return discounts.length;
  } catch (error) {
    console.error('Błąd podczas pobierania rabatów:', error);
    return 0;
  }
}

export async function fetchMenuItemsCount(): Promise<number> {
  try {
    const response = await fetch('/api/menu');
    const menuItems: any[] = await response.json();
    return menuItems.length;
  } catch (error) {
    console.error('Błąd podczas pobierania pozycji menu:', error);
    return 0;
  }
}

export async function fetchBestSellerById(id: any): Promise<any> {
  try {
    const menu: any[] = await fetchBestsellers(); 

    console.log('Menu:', menu);

    const productFromMenu = menu.find((item: any) => item.id === Number(id)); `any`
    if (productFromMenu) {
      return productFromMenu;
    }

    throw new Error('Product not found');
  } catch (err) {
    console.error('Error fetching product:', err);
    throw err;
  }
}

export async function fetchDiscountsById(id: any): Promise<any> {
  try {
    const discounts: any[] = await fetchDiscounts(); 

    console.log('Discounts:', discounts);

    const productFromDiscounts = discounts.find((item: any) => item.id === Number(id)); 
    if (productFromDiscounts) {
      return productFromDiscounts;
    }

    throw new Error('Product not found');
  } catch (err) {
    console.error('Error fetching product:', err);
    throw err;
  }
}
