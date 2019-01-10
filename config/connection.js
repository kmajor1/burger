const mysql = require('mysql')
var connection 
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(JAWSDB_URL)
}
else {
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    port: 3306,
    database: 'burgers_db'
  })
}


module.exports = connection
