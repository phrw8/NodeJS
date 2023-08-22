var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('isso menino!');
  console.log('inter campeao')

}).listen(8080); 