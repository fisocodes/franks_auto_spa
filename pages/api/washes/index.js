const mysql = require('mysql2/promise');

export default async (req, res) => {
    if(req.method === 'GET'){
        const connection = await mysql.createConnection(process.env.DATABASE_URL);
        const [rows, fields] = await connection.query('SELECT count(id) AS total_washes FROM washes');
        res.send({total_washes: rows[0].total_washes});
    }
}