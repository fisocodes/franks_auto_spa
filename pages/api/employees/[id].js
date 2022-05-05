const mysql = require('mysql2/promise');

export default async (req, res) => {
    const {id} = req.query;
    const connection = await mysql.createConnection(process.env.DATABASE_URL);
    const [rows, fields] = await connection.query('SELECT * FROM employees WHERE id = ?', [id]);

    res.json(rows[0]);
}