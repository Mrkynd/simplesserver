var express = require('express');
var routes = require('./routes');

var PORT = 3000
var app = express()

app.get('/', routes.index)

app.use('/assets', express.static('assets'))
app.use('/home', express.static('public'))

// app.set('views', './views')
app.set('view engine', 'pug')
app.get('/pug', routes.message)

app.listen(PORT, function () {
	console.log('listening for aliens on port', PORT);
})

// const http = require('http')
// const hostname = '127.0.0.1'
// const port = 3000
//
// const server = http.createServer((req, res) => {
// 	res.statusCode = 200
// 	res.setHeader('Content-Type', 'text/plain')
// 	res.end('Welcome to my place')
// })
//
// server.listen(port, hostname, () => {
// 	console.log(`Server running at http://${hostname}:${port}/`);
// })
