# Node.js

## Node.js 创建第一个应用
```js
var http = require("http");// 引入http模块
http.createServer(function (request,response){
    response.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
    res.end("这是第一个node应用");
}).listen(3000);
```
```js
var http = require("http");
var server = http.createServer(function(req,res){
    console.log("服务器接收到了请求" + req.url);
    res.end();
});
server.listen(3000);
```
## NodeJs FS 模块
* fs.stat  检测是文件还是目录
* fs.mkdir 创建目录
* fs.writeFile 创建写入文件
* fs.appendFile 追加文件
