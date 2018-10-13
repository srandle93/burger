// Node Dependencies
let express = require('express');
let bodyParser = require('body-parser');
let exphbs = require('express-handlebars');
let app = express();

//Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + '/public'));
// app.use(express.static('public'));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


let router = require('./controllers/burgers_controller.js');
app.use('/', router);

// Open Server
let port = process.env.PORT || 3000;
app.listen(port);