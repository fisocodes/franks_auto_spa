const mysql = require('mysql2/promise');

export default async (req, res) => {
    const id = req.query.id;

    if(req.method === 'GET'){
        const offset = (Number(req.query.page) - 1) * 5;
        const connection = await mysql.createConnection(process.env.DATABASE_URL);
        const [rows, fields] = await connection.query('SELECT * FROM washes WHERE employee_id=? LIMIT 5 OFFSET ? ', [id, offset]);

        const washes = rows.map(wash => {

            return {
                id: wash.id,
                employee_id: wash.employee_id,
                date: new Date(wash.date),
                service: wash.service,
                brand: wash.brand,
                model: wash.model,
                colour: wash.colour,
                time: wash.time
            }
        });

        res.json({washes});
    }
}