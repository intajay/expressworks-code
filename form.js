var express = require('express');
var bodyparser = require('body-parser');
var app = express();

app.use(bodyparser.urlencoded({extended: false}))

app.get('/form', function(req, res) {
	res.send('<form method="post"><input name="str" placeholder="Enter text"/></form>');
});

app.post('/form', function(req, res) {
	console.log(req.body.str.split('').reverse().join(''));
	res.status(204).send(); // 204 No Content
});

app.listen(process.argv[2], function() {
	console.log('Server listening on Port ' + process.argv[2]);
});