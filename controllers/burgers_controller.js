// Node Dependencies
let express = require('express');
let router = express.Router();
const burger = require('../models/burger.js');


// Create routes
// ----------------------------------------------------
// Index Redirect
router.get('/', (req, res) => {
  res.redirect('/index');
});


// Index Page (render all burgers to DOM)
router.get('/index', (req, res) => {
  burger.selectAll((data) => {
    const burgerObject = { burgers: data };
    //console.log(hbsObject);
    res.render('index', burgerObject);
  });
});


// Create a New Burger
router.post('/burger/create', (req, res) => {
  burger.create(req.body.burger_name, () => {
    res.redirect('/index');
  });
});


// Devour a Burger
router.post('/burger/eat/:id', (req, res) => {
  burger.updateById(req.params.id, () =>{
    res.redirect('/index');
  });
});
// ----------------------------------------------------


// Export routes
module.exports = router;