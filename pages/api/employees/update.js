const mysql = require('mysql2/promise');

export default async (req, res) => {
    const connection = await mysql.createConnection(process.env.DATABASE_URL);
    console.log(req.body);
    const result = await connection.query(
        `UPDATE employees SET firstname=?, middlename=?, lastname1=?, lastname2=?, state=? WHERE id = ?`,
        [req.body.firstname, req.body.middlename, req.body.lastname1, req.body.lastname2, req.body.state, req.body.id]
    );

    res.json({message: 'Employee UPDATED...'});
}