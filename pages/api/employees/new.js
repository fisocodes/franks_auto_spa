const mysql = require('mysql2/promise');

export default async (req, res) =>
{
    const connection = await mysql.createConnection(process.env.DATABASE_URL);
    connection.query(
        'INSERT INTO employees (firstname, middlename, lastname1, lastname2, state) VALUES (?, ?, ?, ?, ?)',
        [req.body.firstname, req.body.middlename, req.body.lastname1, req.body.lastname2, req.body.state,],
        (e, results) => {
            if(e){
                console.log(e);
            }
            else{
                console.log(results);
            }
        }
    );
    
    console.log(req.body);
    res.json(req.body);
}