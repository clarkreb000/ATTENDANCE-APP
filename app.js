let http = require('http');
let fs = require('fs');
let path = require('path');
let url = require('url');

http.createServer(function (req, res) {
    let fileStream;
    let file = req.url;
    if(file === "/MAIN.html"){
        fs.readFile("MAIN.html", "UTF-8", function(err, html){
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write(html);
            res.end();
        });
    }
    else if(file === "/Teacher.html"){
        fs.readFile("/Teacher/Teacher.html", "UTF-8", function(err, html){
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write(html);
            res.end();
        });
    }
    else if(file === "/Student.html"){
        fs.readFile("/Student/Student.html", "UTF-8", function(err, html){
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write(html);
            res.end();
        });
    }
    else if(file === "/Parent.html"){
        fs.readFile("Parent/Parent.html", "UTF-8", function(err, html){
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write(html);
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
}).listen(8080);

console.log('Server running at http://localhost:8080/MAIN.html');