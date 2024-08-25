import fs from 'fs';
import path from 'path';
import slugify from 'slugify';
import { pool } from './db';
import xss from 'xss';

interface Menu {
	id?: number; 
	title: string;
	description: string;
	image_url: string | File;
	slug?: string;
}

export async function saveDiscount(menu: Menu): Promise<{ success: boolean; message: string }> {
	const connection = await pool.getConnection();

	try {
		menu.slug = slugify(menu.title, { lower: true });
		menu.description = xss(menu.description);

		if (typeof menu.image_url !== 'string') {
			const file = menu.image_url as File; 
			const extension = path.extname(file.name);
			const fileName = `${menu.slug}${extension}`;
			const filePath = path.join(process.cwd(), 'public', 'images', fileName);

			const buffer = Buffer.from(await file.arrayBuffer());
			await fs.promises.writeFile(filePath, buffer);

			menu.image_url = `/images/${fileName}`;
		}

		const { id, title, description, image_url } = menu;
		await connection.execute(
			`INSERT INTO discounts (id, title, description, image_url) VALUES (?, ?, ?, ?)`,
			[id, title, description, image_url]
		);

		return { success: true, message: 'Discount saved successfully' };
	} catch (error) {
		console.error('Error saving discount:', error);
		throw new Error('Error saving discount');
	} finally {
		connection.release();
	}
}
