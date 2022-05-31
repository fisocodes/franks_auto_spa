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

    if(req.method === 'POST')
    {
        console.log(req.body);
        const connection = await mysql.createConnection(process.env.DATABASE_URL);

        connection.query(
            'INSERT INTO ongoing (date, employee_id, service, brand, model, colour) VALUES (?, ?, ?, ?, ?, ?)',
            [req.body.date, req.body.employee_id, req.body.service, req.body.unit.brand, req.body.unit.model, req.body.unit.colour],
            (e, results) => {
                if(e){
                    console.log(e);
                }
                else{
                    console.log(results);
                }
            }
        );
        res.json(req.body);
    }

}