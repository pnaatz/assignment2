var express = require('express');
var app = express();
var handlebars = require('express-handlebars');
var bodyparser = require('body-parser');

app.engine('handlebars', handlebars({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

app.use(express.json());
app.use(express.static(__dirname + '/views'));

app.get('/', function(req,res){
    res.render('index');
});

app.get('/todo', function(req,res){
    res.sendFile(__dirname + '/views/todo.json');
});

app.get('/read-todo', function(req,res){
    res.render('read-todo');
});

app.listen(3000, function(){
    console.log("3000 running");
});
//test