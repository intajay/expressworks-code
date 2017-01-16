var path = require('path');
var express = require('express');
var app = express();

app.use(require('stylus').middleware('public'));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(process.argv[2], function() {
	console.log('Server listening on Port ' + process.argv[2]);
});