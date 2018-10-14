// Set up MySQL connection.
const mysql = require('mysql');
let connection;
const PORT = 3000;
// For Heroku Deployment vs. Local MySQL Database
if (process.env.PORT) {
  connection = mysql.createConnection(process.env.PORT);
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

app.listen(PORT, function() {
  console.log("Burger app is listening on PORT: " + PORT);
});
