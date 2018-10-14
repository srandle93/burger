// Node Dependency
const orm = require('../config/orm.js');

// create the code that will call the ORM functions using burger specific input for the ORM.
const burger = {

  selectAll: (callback) => {
    orm.selectAll((res) => {
      callback(res);
    });
  },

  insertOne: (burger_name, callback) => {
    orm.insertOne(burger_name, (res) => {
      callback(res);
    });
  },

  updateOne: (burger_id, callback) => {
    orm.updateOne(burger_id, (res) => {
      callback(res);
    });
  }

};


// Export at the end of the burger.js file.
module.exports = burger;