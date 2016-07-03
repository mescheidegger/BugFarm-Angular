var express = require('express');
var path = require('path');
var app = express();
var port = process.env.port || 5000;
var rootPath = path.normalize(__dirname);
var cookieParser = require('cookie-parser');
var session = require('express-session');

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
app.use(express.static(rootPath + '/public'));
app.use(express.static(rootPath + '/src'));

//initalize passport/session manager
app.use(cookieParser());
app.use(session({secret : 'bugFarm',
                 resave : true,
                 saveUninitialized : true}));
require('./src/config/passport')(app);

//set up routes
var authRouter = require('./src/webserver/routes/authRoutes')();
app.use('api/auth', authRouter);

var searchRouter = require('./src/webserver/routes/searchRoutes')();
app.use('/api/search', searchRouter);

var issueRouter = require('./src/webserver/routes/issueRoutes')();
app.use('/api/issue', issueRouter);

app.get('*', function (req, res) {
    res.sendFile('c:/BugFarm-Angular/src/index.html');
});
//start server
app.listen(port, function (err) {
    console.log('running server on port ' + port);
});