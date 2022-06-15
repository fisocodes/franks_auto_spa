const mysql = require('mysql2/promise');

export default async (req, res) => {
    if(req.method === 'POST')
    {
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