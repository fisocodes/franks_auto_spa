const mysql = require('mysql2/promise');

export default async (req, res) => {
    if(req.method === 'DELETE'){
        const connection = await mysql.createConnection(process.env.DATABASE_URL);
        const [employeeResult, employeeFields] = await connection.query('DELETE FROM employees WHERE id = ?', [req.body.id]);
        const [statsResult, statsFields] = await  connection.query('DELETE FROM employees_stats WHERE id = ?', [req.body.id]);
        res.send('Employee deleted successfully');
    }
}