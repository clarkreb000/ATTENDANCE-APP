let http = require('http');
let fs = require('fs');
let path = require('path');
let url = require('url');


http.createServer(function (req, res) {
    let fileStream;
    let file = req.url;
    let q = url.parse(req.url, true);
    let filename = "." + q.pathname;
    if(file.match("/")){
        fs.readFile(filename, "UTF-8", function(err, html){
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end();
        });
    }
    else if(file.match("\.css$")){
        let cssPath = path.join(__dirname, file);
        fileStream = fs.createReadStream(cssPath, "UTF-8");
        res.writeHead(200, {"Content-Type": "text/css"});
        fileStream.pipe(res);
    }
    else if(file.match("\.png$")){
        let imagePath = path.join(__dirname, file);
        fileStream = fs.createReadStream(imagePath);
        res.writeHead(200, {"Content-Type": "image/png"});
        fileStream.pipe(res);
    }
    else{
        res.writeHead(404, {"Content-Type": "text/html"});
        res.end("No Page Found");
    }
}).listen(8081);

// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('Hello World!');
// }).listen(8081);

console.log('Server running at http://localhost:8081/');