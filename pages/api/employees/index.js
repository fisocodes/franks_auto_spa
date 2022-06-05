const mysql = require('mysql2/promise');

export default async (req, res) => {
    if(req.method === 'GET'){
        const connection = await mysql.createConnection(process.env.DATABASE_URL);
        const [rows, fields] = await connection.query('SELECT * FROM employees');
    
        const employees = rows.map(employee => {
            return {
                id: employee.id,
                firstname: employee.firstname,
                middlename: employee.middlename,
                lastname1: employee.lastname1,
                lastname2: employee.lastname2,
                state: employee.state,
            }
        });
        res.json({employees: employees});
    }
}