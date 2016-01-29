var express = require('express');
var fortune = require('./lib/fortune.js');


var app = express();

var handlebars = require('express3-handlebars').create({defaultLayout:'main'});

app.engine('handlebars',handlebars.engine);

app.set('view engine','handlebars');

app.set('port',process.env.PORT || 3000);

app.use(express.static(__dirname+'/public'));


app.get('/',function(req,res){
	res.render('home');
});

app.get('/about',function(req,res){
	res.render('about',{fortune:fortune.getFortune()});
});

//custom 404 page
app.use(function  (req,res) {
	res.status(404);
	res.render('404');
});

//custom 500 page
app.use(function(err,req,res,next){
	console.log(err.stack);
	res.type('text/plain');
	res.status(500);
	res.render('500');
});

app.listen(3000,function(){
	console.log('Express Server running on http://localhost://' +app.get('port')+
		'; press Ctrl+C to terminate');
});

