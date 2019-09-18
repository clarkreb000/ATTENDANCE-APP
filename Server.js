let http = require('http');
let fs = require('fs');
let path = require('path');

http.createServer(function (req, res) {
    let fileStream;
    if(req.url === "/"){
        fs.readFile("./MAIN.html", "UTF-8", function(err, html){
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(html);
        });
    }
    else if(req.url.match("\.css$")){
        let cssPath = path.join(__dirname, req.url);
        fileStream = fs.createReadStream(cssPath, "UTF-8");
        res.writeHead(200, {"Content-Type": "text/css"});
        fileStream.pipe(res);
    }
    else if(req.url.match("\.png$")){
        let imagePath = path.join(__dirname, req.url);
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

console.log('Server running at http://127.0.0.1:8081/');