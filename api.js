var fs = require('fs');
var express = require('express');
var app = express();

app.get('/books', function(req, res) {
	fs.readFile(process.argv[3], function(err, data) {
		if(err) {
			return res.status(500).send();
		} else {
			res.json(JSON.parse(data));
		}
	});
});

app.listen(process.argv[2], function() {
	console.log('Server listening on Port ' + process.argv[2]);
});