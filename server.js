var express = require('express');
var PORT = 3000
var app = express()

app.get('/', function (req, res) {
	res.send('<h1 style="text-align: center;">Wake up Mr. West</h1>')
})

app.listen(PORT, function () {
	console.log('listening for aliens on port', PORT);
})
