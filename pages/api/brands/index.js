const mysql = require('mysql2/promise');

export default async (req, res) => {
    const connection = await mysql.createConnection(process.env.DATABASE_URL);
    const [rows, fields] = await connection.query('SELECT * FROM brands', )

    const brands = rows.map(brand => {
        return {
            id: brand.id,
            name: brand.name
        }
    });

    res.json({brands: brands});
}