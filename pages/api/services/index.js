const mysql = require('mysql2/promise');

export default async (req, res) => {
    const connection = await mysql.createConnection(process.env.DATABASE_URL);
    const [rows, fields] = await connection.query('SELECT * FROM services', )

    const services = rows.map(service => {
        return {
            id: service.id,
            name: service.name
        }
    });

    res.json({services: services});
}