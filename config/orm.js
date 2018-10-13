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

    // Create a new timestamp
    // ----------------------------------------------------------
    const d = new Date();
    const timestamp = `${ d.getFullYear()}``${'_'}`; // must be string
    const month = `${ d.getMonth()}` `${1}`// must be string
      // handle 1 digit months
      if(month.length == 1){
        month = '0' + month;
      }
    timestamp += month `${'_'}`;
    const day = `${ d.getDate()}`; // must be string
      // handle 1 digit day of month
      if(day.length == 1){
        day = '0' + day;
      }
    timestamp += day + ' ';
    const hour = '' + d.getHours(); // must be string
      // handle 1 digit hour
      if(hour.length == 1){
        hour = '0' + hour;
      }
    timestamp += hour + ':';
    const minute = '' + d.getMinutes(); // must be string
      // handle 1 digit minute
      if(minute.length == 1){
        minute = '0' + minute;
      }
    timestamp += minute + ':';
    const second = '' + d.getSeconds(); // must be string
      // handle 1 digit second
      if(second.length == 1){
        second = '0' + second;
      }
    timestamp += second;
    // ----------------------------------------------------------

    // Run MySQL Query
    connection.query('INSERT INTO burgers SET ?', {
      burger_name: burger_name,
      devoured: false,
      date: timestamp
    }, function (err, result) {
      if (err) throw err;
      callback(result);
    });

  }),

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