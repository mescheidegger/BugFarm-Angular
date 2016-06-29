//set up web server
var express = require('express');
var path = require('path');
var app = express();
var port = process.env.port || 5000;
var rootPath = path.normalize(__dirname);

//init body parser
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


//init sql
var sql = require('mssql');
var config = require('./dbconfig');

sql.connect(config, function (err) {
    console.log(err);
});

//serve up static css/js files from public directory
app.use(express.static('public'));
app.use(express.static(rootPath + '/src'));
//set up routes
var searchRouter = require('./src/webserver/routes/searchRoutes')();
app.use('/search', searchRouter);

app.get('*', function (req, res) {
    res.sendFile(rootPath + '/src/index.html');
});

//start server
app.listen(port, function (err) {
    console.log('running server on port ' + port);
});