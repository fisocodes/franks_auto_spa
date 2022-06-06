const mysql = require('mysql2/promise');

export default async (req, res) => {
    if(req.method === 'GET'){
        const connection = await mysql.createConnection(process.env.DATABASE_URL);
        const [rows, fields] = await connection.query('SELECT count(id) FROM washes');

        console.log(rows[0]);

        res.send("Number of washes consulted");
    }
}