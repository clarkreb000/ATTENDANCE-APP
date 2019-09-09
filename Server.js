let http = require('http');
let fs = require('fs');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('./MAIN.html', null, function(error, data){
        if(error){
            res.writeHead(404);
            res.write('Whoops! FIle not Found!');
        }
        else{
            res.write(data);
        }
        res.end();
    })
}).listen(8081);

// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('Hello World!');
// }).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');