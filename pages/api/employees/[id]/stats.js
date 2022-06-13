const mysql = require('mysql2/promise');

export default async (req, res) => {

    const employeeId = req.query.id;

    if(req.method === 'GET'){
        const connection = await mysql.createConnection(process.env.DATABASE_URL);
        const [statsRows, statsFields] = await connection.query(
            'SELECT * FROM employees_stats WHERE id = ?',
            [employeeId]
        );

        const stats = statsRows[0];

        res.json({stats: stats});
    }else{
        res.send("Request method not implemented");
    }
}