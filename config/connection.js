// Set up MySQL connection.
const mysql = require('mysql');
let connection;

// For Heroku Deployment vs. Local MySQL Database
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
  connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'burgers_db'
  });
}

// Export connection for our ORM to use.
module.exports = connection;

