
import { pool } from './db';

export async function saveMenu(menu) {
	const connection = await pool.getConnection();
	try {
		const { title, description, image_url } = menu;
		console.log(menu);

		// Wstawienie rekordu do bazy danych
		await connection.execute(`INSERT INTO menu (title, description, image_url) VALUES (?, ?, ?)`, [
			title,
			description,
			image_url,
		]);

		// Zwrócenie wyniku
		return { success: true, message: 'Meal saved successfully' };
	} catch (error) {
		console.error('Error saving menu:', error);
		// Obsługa błędów
		throw new Error('Error saving menu');
	} finally {
		connection.release();
	}
}
