var express = require('express');
var PORT = process.env.PORT || 3000;
var app = express();

//app.get('/', function(req, res){ //req and res are default parms in express
//    res.send('Hello Express!');
//});

var middleware = require('./middleware.js');


app.use(middleware.logger);
//order defined is important
// app.use calls application level middleware - for every request


app.get('/about', middleware.requireAuthentication , function(req, res){ //req and res are default parms in express
    res.send('About us!');
});

//console.log(__dirname);
app.use(express.static( __dirname + '\\public'));

app.listen(PORT, function(){
    console.log('Express server started on poer '+ PORT +'!');
});
