const http = require('http');
http.createServer((req, res) => {
	res.writeHead(200, {
		'Content-Type': 'text/plain'
	});
	res.end('Hello World');

}).listen(3200, () => {
	console.log('listening to port 3200')
});
console.log('here are windows');