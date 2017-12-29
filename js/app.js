const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const fs = require('fs');

const server = http.createServer((req, res) => {
	console.log('client request URL: ', req.url);
	if(req.url === '/') {
	    fs.readFile('views\\index.html', function (err, data){
			if (err) throw err;
			console.log(data);
	    	res.writeHead(200, {'Content-Type': 'text/html'}); 
	    	res.write(data); 
	    	res.end();
	    });
	}
	else {
		res.writeHead(404);
		res.end('File not found!!!');
	}
});

server.listen(port, hostname, () => {
  console.log('Server running at http://${hostname}:${port}/');
});