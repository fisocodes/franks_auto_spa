const mysql = require('mysql2/promise');

export default async (req, res) => {
    if(req.method === 'GET')
    {
        const connection = await mysql.createConnection(process.env.DATABASE_URL);
        const [rows, fields] = await connection.query('SELECT * FROM ongoing');

        const ongoing = rows.map(wash => {
            return {
                date: wash.date,
                employee_id: wash.employee_id,
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