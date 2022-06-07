const mysql = require('mysql2/promise');

export default async (req, res) => {
    if(req.method === 'GET'){
        const connection = await mysql.createConnection(process.env.DATABASE_URL);
        const [rows, fields] = await connection.query('SELECT * FROM employees_stats WHERE id = ?', [req.query.id]);
        console.log(rows[0]);
        res.json({stats:rows[0]});
    }
}