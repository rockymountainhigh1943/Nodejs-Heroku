var express = require('express');

var app = express.createServer(express.logger());

var html = '<!DOCTYPE HTML>
<html lang="en">
<head>
<title>Week 3 | Node.js with Express</title>
</head>
<body>
	<h1>Hello World!</h1>
</body>
</html>';

app.get('/', function(request, response){
	response.send('Hi baby');
});

var port = process.env.PORT || 5000;

app.listen(port, function(){
	console.log("Listening on " + port);
});