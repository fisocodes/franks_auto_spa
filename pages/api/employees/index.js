//EMPLOYEES ENDPOINT

const mysql = require('mysql2/promise');

export default async (req, res) => {

    const connection = await mysql.createConnection(process.env.DATABASE_URL);

    if(req.method === 'GET'){

        const [employeesRows, employeesFields] = await connection.query(
            'SELECT * FROM employees'
        );

        const [statsRows, statsFields] = await connection.query(
            'SELECT * FROM employees_stats'
        );
    
        const employees = employeesRows.map(employee => {
            
            const stats = statsRows.find(stats => stats.id === employee.id);

            return {
                id: employee.id,
                firstname: employee.firstname,
                middlename: employee.middlename,
                lastname1: employee.lastname1,
                lastname2: employee.lastname2,
                state: employee.state,
                total_units: stats.total_units,
                total_average_time: stats.total_average_time
            }
        });

        res.json({employees: employees});

    }else if(req.method === 'POST'){

        const employee = req.body;

        const [employeeRows, employeeFields] = await connection.query(
            'INSERT INTO employees (firstname, middlename, lastname1, lastname2, state) VALUES (?, ?, ?, ?, ?)',
            [employee.firstname, employee.middlename, employee.lastname1, employee.lastname2, employee.state,]
        );

        const [statsRows, statsFields] = await connection.query(
            'INSERT INTO employees_stats (id) VALUES (?)',
            [employeeRows.insertId]
        );

        console.log('Employee created successfully.');
        res.send('Employee created successfully.');

    }else{
        res.send("Request method not implemented.");
    }
}