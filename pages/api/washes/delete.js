const mysql = require('mysql2/promise');

export default async (req, res) => {
    console.log(req.body.wash);
    if(req.method === 'DELETE'){
        const wash = req.body.wash;
        const connection = await mysql.createConnection(process.env.DATABASE_URL);
        const [rows, fields] = await connection.query('UPDATE employees_stats SET total_units = total_units - 1 WHERE id = ?', [wash.employee_id]);
        const [statsRows, statsField] = await connection.query('SELECT * FROM employees_stats WHERE id = ?', [wash.employee_id]);
        const stats = statsRows[0];

        if(statsRows[0]){
            switch(wash.service){
                case 'EXPRESS':
                    const [expressResults, expressFields] = await connection.query('UPDATE employees_stats SET express_units = express_units - 1 WHERE id = ?', [wash.employee_id]);
                    const express_average_time = (stats.express_units * stats.express_average_time - wash.time)/(stats.express_units - 1);
                    const [expressTimeResults, expressTimeFields] = await connection.query('UPDATE employees_stats SET express_average_time = ? WHERE id = ?', [stats.express_units === 1 ? 0 : express_average_time, wash.employee_id]);
                    break;
                case 'MASTER':
                    const [masterResults, masterFields] = await connection.query('UPDATE employees_stats SET master_units = master_units - 1 WHERE id = ?', [wash.employee_id]);
                    const master_average_time = (stats.master_units * stats.master_average_time - wash.time)/(stats.master_units - 1);
                    const [masterTimeResults, masterTimeFields] = await connection.query('UPDATE employees_stats SET master_average_time = ? WHERE id = ?', [stats.master_units === 1 ? 0 : master_average_time, wash.employee_id]);
                    break;
                case 'PREMIUM':
                    const [premiumResults, premiumFields] = await connection.query('UPDATE employees_stats SET premium_units = premium_units - 1 WHERE id = ?', [wash.employee_id]);
                    const premium_average_time = (stats.premium_units * stats.premium_average_time - wash.time)/(stats.premium_units - 1);
                    const [premiumTimeResults, premiumTimeFields] = await connection.query('UPDATE employees_stats SET premium_average_time = ? WHERE id = ?', [stats.premium_units === 1 ? 0 : premium_average_time, wash.employee_id]);
                    break;
                
            }
    
            const [timeResults, timeFields] = await connection.query('UPDATE employees_stats SET total_average_time = (express_average_time + master_average_time + premium_average_time)/3 WHERE id = ?', [wash.employee_id]);
        }
        const [deleteResults, deleteFields] = await connection.query('DELETE FROM washes WHERE id = ?', [wash.id]);
        
        res.send("Wash deleted successfully");
    }
}