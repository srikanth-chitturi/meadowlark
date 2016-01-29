var express = require('express');

var app = express();

app.use('port',process.env.PORT || 3000);

//custom 404 page
app.use(function  (req,res) {
	res.type('text/plain');
	res.status(404);
	res.send('404 - Not found');
});

//custom 500 page
app.use(function(err,req,res,next){
	console.log(err.stack);
	res.type('text/plain');
	res.status(500);
	res.send('500 - Server Error');
});

app.listen(app.get('port'),function(){
	console.log('Express Server running on http://localhost://'+app.get('port')+'; press 
		ctrl+c to terminate');
});