var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response){
	var html = 
	'<!DOCTYPE HTML>
	<html lang="en">
	<head>
		<title>Week 3 | Node.js with Express</title>
	</head>
	<body>
  		<h1>Hello World!</h1>
  	</body>
	</html>';
	response.send(html);
});

var port = process.env.PORT || 5000;

app.listen(port, function(){
	console.log("Listening on " + port);
});