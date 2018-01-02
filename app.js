const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
const fs = require('fs');

const server = http.createServer((req, res) => {
	
	console.log('client request URL: ', req.url);
	
	if(req.url === '/base') {
		var js ='js/base.js';
	    fs.readFile('./views/base.html', function (err, data){
			if (err) throw err;
			console.log(data);
	    	res.writeHead(200, {'Content-Type': 'text/html'});
	    	res.write(data); 
	    	res.write(`<script src="${js}" type="text/javascript"></script>`);
	    	res.end();
	    });
	}
	else if(req.url === '/component') {
		var js ='js/component.js';
	    fs.readFile('./views/component.html', function (err, data){
			if (err) throw err;
			console.log(data);
	    	res.writeHead(200, {'Content-Type': 'text/html'});
	    	res.write(data); 
	    	res.write(`<script src="${js}" type="text/javascript"></script>`);
	    	res.end();
	    });
	}
	else if(req.url === '/') {
		var js ='js/base.js';
	    fs.readFile('./views/index.html', function (err, data){
			if (err) throw err;
			console.log(data);
	    	res.writeHead(200, {'Content-Type': 'text/html'});
	    	res.write(data); 
	    	res.write(`<script src="${js}" type="text/javascript"></script>`);
	    	res.end();
	    });
	}
	else if(req.url === '/js/base.js') {
        fs.readFile('./js/base.js', function (err, data) {
          if (err) console.log(err);
          res.writeHead(200, {'Content-Type': 'text/javascript'});
          res.write(data);
          res.end();
        });
    }
	else if(req.url === '/js/component.js') {
        fs.readFile('./js/component.js', function (err, data) {
          if (err) console.log(err);
          res.writeHead(200, {'Content-Type': 'text/javascript'});
          res.write(data);
          res.end();
        });
    }
	else{
		res.writeHead(404);
		res.end('File not found!!!');
	}
});

function js(res) {
	res.writeHead(200, {"Content-Type": "text/js"});
	var handler = function(error, content){
	if (error){
		console.log(error);
	}else{
		res.write(content);
	}
	}
	fs.readFile('js/base.js', handler);
	fs.readFile('css/bootstrap-responsive.css', handler);
}

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});