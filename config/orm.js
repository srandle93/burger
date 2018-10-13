let connection = require('./connection.js');




// Connect to MySQL database
connection.connect((err) => {
  if (err) {
    console.error("error connecting: "`${ err.stack}`);
    return;
  };
  console.log("connected as id "`${connection.threadId}`);
});




// Methods for MySQL commands
const orm = {

  // selectAll()
  selectAll: (callback) => {
    // Run MySQL Query
    connection.query('SELECT * FROM burgers', (err, result) => {
      if (err) throw err;
      callback(result);
    });

  },

  // insertOne()
  insertOne: (burger_name, callback) => {
    // Run MySQL Query
    connection.query('INSERT INTO burgers SET ?', [{burger_name: burger_name}, {devoured: false,}], (err, result) => {
      if (err) throw err;
      callback(result);
    });

  },

  // updateOne()
  updateOne: (burgerID, callback) => {
    // Run MySQL Query
    connection.query('UPDATE burgers SET ? WHERE ?', [{devoured: true}, {id: burgerID}], (err, result) => {
        if (err) throw err;
        callback(result);
      });

  }

};



// Export the ORM object in module.exports.
module.exports = orm;