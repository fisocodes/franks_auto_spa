const mysql = require('mysql2/promise');

export default async (req, res) => {
    if(req.method === 'GET'){
        const connection = await mysql.createConnection(process.env.DATABASE_URL);
        const [rows, fields] = await connection.query('SELECT * FROM washes LIMIT 5 OFFSET (? - 1) * 5', [req.body.page]);

        const washes = rows.map(wash => {
            const date = wash.date.split(/[- :]/);

            return {
                id: wash.id,
                employee_id: wash.employee_id,
                date: new Date(Date.UTC(date[0], date[1]-1, date[2], date[3], date[4], date[5])),
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