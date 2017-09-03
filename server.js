var express = require('express');
//brings express in from the node module folder
var path = require('path');
//path is a system module; helps with file
//system paths
var bodyParser = require('body-parser');  

var index = require('./routes/index');
var tasks = require('./routes/tasks');

var port = 3000;
var app = express();

//view engine

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//Set Static Folder
app.use(express.static(path.join(__dirname, 'client')));

//Body Parser MiddleWare
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);
app.use('/api', tasks);

app.listen(port, function(){
    console.log('Server started on port '+port);
});