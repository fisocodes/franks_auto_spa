const mysql = require('mysql2/promise');
const Pusher =  require('pusher');

export default async (req, res) => {

    const connection = await mysql.createConnection(process.env.DATABASE_URL);
    console.log(req.body.date);
    const result = await connection.query('DELETE FROM ongoing WHERE date = ?', [req.body.date]);
    console.log(result);

    const pusher = new Pusher({
        appId: `${process.env.PUSHER_ID}`,
        key: `${process.env.PUSHER_KEY}`,
        secret: `${process.env.PUSHER_SECRET}`,
        cluster: `${process.env.PUSHER_CLUSTER}`,
        encrypted: true
    });

    pusher.trigger('franks-auto-spa', 'cancel-wash', req.body);
    res.json({message: 'Wash deleted deleted...'});
}