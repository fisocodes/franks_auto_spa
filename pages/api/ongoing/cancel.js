const mysql = require('mysql2/promise');

export default async (req, res) => {

    const connection = await mysql.createConnection(process.env.DATABASE_URL);
    console.log(req.body.date);
    const result = await connection.query('DELETE FROM ongoing WHERE date = ?', [req.body.date]);
    console.log(result);

    res.json({message: 'Wash deleted deleted...'});
}