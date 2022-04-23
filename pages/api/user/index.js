const sqlite3 = require('sqlite3').verbose();

export default function(req, res){

    console.log(req);

    let db = new sqlite3.Database('./../../../db/chinook.db', sqlite3.OPEN_READONLY, (err) => {
        if (err) {
          console.error(err.message);
        }
        console.log('Connected to the chinook database.');
      });

      db.get('SELECT * FROM users WHERE username = ? AND password = ?', [req.body.credentials.username, req.body.credentials.password], (e, r) => {
        if(e)
            res.status(404).send();
        else{
            res.json({id: r.id, name: r.name, surname: r.surname})
        }
      })

      db.close();
}