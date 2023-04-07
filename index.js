const fs = require("fs");
const http = require("https");

http.createServer(function(req,res){
  res.writeHead(200,{
    "content-type":"text/html;charset=utf8"
  });
  res.end(fs.readFileSync("page.html","utf8"));
}).listen(8888);
