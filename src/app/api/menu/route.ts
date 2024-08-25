// app/api/bestsellers/route.js

import mysql from 'mysql2/promise';

export async function GET() {
	const connection = await mysql.createConnection({
		host: process.env.HOST,
		user: process.env.USER,
		password: process.env.PASSWORD,
		database: process.env.DATABASE,
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
