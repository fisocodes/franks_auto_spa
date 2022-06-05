const mysql = require('mysql2/promise');

export default async (req, res) => {
    if(req.method === 'GET'){
        const connection = await mysql.createConnection(process.env.DATABASE_URL);
        const [rows, fields] = await connection.query('SELECT * FROM employees WHERE id = ?', [req.query.id]);
        res.json({employee: rows[0]});
    }
}