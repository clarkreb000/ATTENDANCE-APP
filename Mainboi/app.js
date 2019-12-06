let http = require('http');
let fs = require('fs');
var url = require('url');
var port = process.env.port || 80;

http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;
    fs.readFile(filename, function(err, data) {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 Not Found");
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(port);

console.log('Server running at http://localhost:8080/Mainboi/MAIN.html');