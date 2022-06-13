const mysql = require('mysql2/promise');

export default async (req, res) => {

    const employeeId = req.query.id;
    const connection = await mysql.createConnection(process.env.DATABASE_URL);

    if(req.method === 'GET'){

        const [employeeRows, employeeFields] = await connection.query(
            'SELECT * FROM employees WHERE id = ?',
            [employeeId]
        );

        const employee = employeeRows[0];
        
        res.json({employee: employee});

    }else if(req.method === 'PUT'){

        const employee = req.body;
        const [employeeRows, employeeFields] = await connection.query(
            `UPDATE employees SET firstname=?, middlename=?, lastname1=?, lastname2=?, state=? WHERE id = ?`,
            [employee.firstname, employee.middlename, employee.lastname1, employee.lastname2, employee.state, employeeId]
        );

        res.send('Employee updated successfully.');
    
    }else if(req.method === 'DELETE'){
        
        const [employeeRows, employeeFields] = await connection.query(
            'DELETE FROM employees WHERE id = ?',
            [employeeId]
        );

        const [statsRows, statsFields] = await  connection.query(
            'DELETE FROM employees_stats WHERE id = ?',
            [employeeId]
        );

        res.send('Employee deleted successfully.');

    }else{
        res.send('Request method not implemented.');
    }
}