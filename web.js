var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response){
	response.send('<!DOCTYPE HTML><html lang="en"><head><title>Week 3 | Node.js with Express</title></head><body><h1>Hello World!</h1></body></html>');
});

app.get('/user/:username', function(request, response){
	response.send(request.param['username']);
});

var port = process.env.PORT || 5000;

app.listen(port, function(){
	console.log("Listening on " + port);
});