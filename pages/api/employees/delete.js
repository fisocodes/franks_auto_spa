const mysql = require('mysql2/promise');

export default async (req, res) => {
    const connection = await mysql.createConnection(process.env.DATABASE_URL);
    console.log(req.body.id);
    const result = connection.query('DELETE FROM employees WHERE id = ?', [req.body.id]);
    console.log(result);

    res.json({message: 'Employee deleted...'});
}