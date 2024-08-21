// app/api/bestsellers/route.js

import mysql from 'mysql2/promise';

export async function GET() {
	const connection = await mysql.createConnection({
		host: '127.0.0.1',
		user: 'root',
		password: '',
		database: 'burger-shop',
	});

	const [rows] = await connection.execute('SELECT * FROM menu');
	connection.end();

	return new Response(JSON.stringify(rows), {
		status: 200,
		headers: {
			'Content-Type': 'application/json',
		},
	});
}
