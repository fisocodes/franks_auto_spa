const mysql = require('mysql2/promise');

export default async (req, res) => {
    if(req.method === 'GET')
    {
        const connection = await mysql.createConnection(process.env.DATABASE_URL);
        const [ongoingRows, ongoingFields] = await connection.query('SELECT * FROM ongoing');
        const [employeesRows, employeesField] =await connection.query('SELECT * FROM employees');

        const employees = employeesRows.map(employee => {
            return {
                id: employee.id,
                firstname: employee.firstname,
                middlename: employee.middlename,
                lastname1: employee.lastname1,
                lastname2: employee.lastname2,
                status: employee.status
            }
        });

        const ongoing = ongoingRows.map(wash => {
            return {
                date: wash.date,
                employee: employees.find(employee => employee.id === wash.employee_id),
                service: wash.service,
                unit: {
                    brand: wash.brand,
                    model: wash.model,
                    colour: wash.colour
                }   
            }
        });
    
        res.json({ongoing});
    }
}