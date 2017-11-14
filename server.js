var express = require('express');
var path = require ('path');
var exhandlebars = require('express-handlebars');


var app= express();
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exhandlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.set('port', (process.env.PORT || 3000));

var everybody = [
	{
		fname : 'obi',
		lname : 'walker'
	},
	{
		fname : 'sarah jessica parker',
		lname: 'sex and the city'
	},
	{
		fname: 'kidding',
		lname: 'no i am not'
	}
];

app.get('/', function (req, res){
	res.render('home', {
		content : 'Let us test our new content',
		published: true,
		everybody: everybody
	});
});

app.listen(app.get('port'), function(){
	console.log('Server started on port ' +app.get('port'))
});