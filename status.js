/*

  Get server status with socket.io
  Version 0.1

  Copyright 2015 MDXDave
  https://github.com/MDXDave/socket.io-status

*/

// dependencies
var app = require('express')();
var http = require('http');
var httpExpress = http.Server(app);
var io = require('socket.io')(httpExpress);
var conf = require('./config.json');
var host, port;

app.get('/', function(req, res){
  res.writeHead(302, {
    'Location': conf.redirect_uri
  });
  res.end();
});

// avoid "EventEmitter memory leak detected" message
process.setMaxListeners(0);

// if server is unreachable send offline status and avoid server to be killed
process.on('uncaughtException', function (err) {
  io.emit('status', {status:"offline", host: host, port: port});
});

// socket
io.on('connection', function(socket){
  socket.on('getstatus', function(data){
    if(data.port == "") data.port = 80;
    host = data.host;
    port = data.port;
    // checking server status
    http.get({host: data.host, port: data.port}, function(res){
        // if status code is under 400 return on else return statuscode
       	 if( res.statusCode < 400 )
            io.emit('status', {status:"online",host:data.host,port:data.port});
          else
            io.emit('status', {status:"offline",code:res.statusCode,host:data.host,port:data.port});
          });
  });
});

// bind websocket to port written in config
httpExpress.listen(conf.port, function(){
  console.log('listening on *:'+conf.port);
});
