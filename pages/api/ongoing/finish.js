const mysql = require('mysql2/promise');

export default async (req, res) => {

    console.log(req.body);
    console.log('IN FINISH WASH');

    if(req.method === 'POST'){

        const connection = await mysql.createConnection(process.env.DATABASE_URL);
        const [ongoingResults, ongoingFields] = await connection.query('SELECT * FROM ongoing WHERE date = ?', [req.body.date]);
        const wash = ongoingResults[0];
        console.log(wash);
        const [washesResults, washesFields] = await connection.query('INSERT INTO washes (user_id, employee_id, date, service, brand, model, colour, time) VALUES(?, ?, ?, ?, ? ,? ,?, ?)', [req.body.user_id, wash.employee_id, new Date(wash.date).toISOString().slice(0, 19).replace('T', ' '), wash.service, wash.brand, wash.model, wash.colour, req.body.time]);
        const [unitsResults, unitsFields] = await connection.query('UPDATE employees_stats SET total_units = total_units + 1 WHERE id = ?', [wash.employee_id]);
        
        switch(wash.service){
            case 'EXPRESS':
                const [expressResults, expressFields] = await connection.query('UPDATE employees_stats SET express_units = express_units + 1 WHERE id = ?', [wash.employee_id]);
                const [expressTimeResults, expressTimeFields] = await connection.query('UPDATE employees_stats SET express_average_time = express_average_time + ((? - express_average_time)/ express_units) WHERE id = ?', [req.body.time, wash.employee_id]);
                break;
            case 'MASTER':
                const [masterResults, masterFields] = await connection.query('UPDATE employees_stats SET master_units = master_units + 1 WHERE id = ?', [wash.employee_id]);
                const [masterTimeResults, masterTimeFields] = await connection.query('UPDATE employees_stats SET master_average_time = master_average_time + ((? - master_average_time)/ master_units) WHERE id = ?', [req.body.time, wash.employee_id]);
                break;
            case 'PREMIUM':
                const [premiumResults, premiumFields] = await connection.query('UPDATE employees_stats SET premium_units = premium_units + 1 WHERE id = ?', [wash.employee_id]);
                const [premiumTimeResults, premiumTimeFields] = await connection.query('UPDATE employees_stats SET premium_average_time = premium_average_time + ((? - premium_average_time)/ premium_units) WHERE id = ?', [req.body.time, wash.employee_id]);
                break;
            
        }

        const [timeResults, timeFields] = await connection.query('UPDATE employees_stats SET total_average_time = (express_average_time + master_average_time + premium_average_time)/3 WHERE id = ?', [req.body.time, wash.employee_id]);

        const [deleteResults, deleteFields] = await connection.query('DELETE FROM ongoing WHERE date = ?', [wash.date]);
        res.send('Wash finished successfully');
    }
}