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

export async function saveMenu(menu: Menu): Promise<{ success: boolean; message: string }> {
	const connection = await pool.getConnection();

	try {
		menu.slug = slugify(menu.title, { lower: true });

		menu.description = xss(menu.description);

		if (typeof menu.image_url !== 'string') {
			const extension = path.extname(menu.image_url.name);
			const fileName = `${menu.slug}${extension}`;
			const filePath = path.join(process.cwd(), 'public', 'images', fileName);

			const buffer = Buffer.from(await menu.image_url.arrayBuffer());
			await fs.promises.writeFile(filePath, buffer);

			menu.image_url = `/images/${fileName}`;
		}
		const { title, description, image_url } = menu;
		await connection.execute(`INSERT INTO menu (title, description, image_url) VALUES (?, ?, ?)`, [
			title,
			description,
			image_url,
		]);

		return { success: true, message: 'Meal saved successfully' };
	} catch (error) {
		console.error('Error saving menu:', error);
		throw new Error('Error saving menu');
	} finally {
		connection.release();
	}
}
