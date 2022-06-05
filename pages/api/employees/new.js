const mysql = require('mysql2/promise');

export default async (req, res) => {
    if(req.method === 'POST'){
        const connection = await mysql.createConnection(process.env.DATABASE_URL);
        const [employeeResults, employeeFields] = await connection.query(
            'INSERT INTO employees (firstname, middlename, lastname1, lastname2, state) VALUES (?, ?, ?, ?, ?)',
            [req.body.firstname, req.body.middlename, req.body.lastname1, req.body.lastname2, req.body.state,]
        );
        const [statsResults, statsFields] = await connection.query('INSERT INTO employees_stats (id) VALUES (?)', [employeeResults.insertId]); 
        res.json(req.body);
    }
}