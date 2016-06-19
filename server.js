'use strict';
var express = require('express');
var app = express();

app.use('/css', express.static(process.cwd() + '/css'));
app.use('/fonts', express.static(process.cwd() + 'fonts'));
app.use('/js', express.static(process.cwd() + '/js'));
app.use('/views', express.static(process.cwd() + 'views'));

app.get('/',function (req, res) {
			res.sendFile(process.cwd() + '/views/home.html');
			res.sendFile(process.cwd() + '/views/suggestion.html');
			res.sendFile(process.cwd() + '/index.html');
		});

var port = process.env.PORT;
app.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
});