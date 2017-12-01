var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var path = require('path');
server.listen(8090);

app.get('/', function (req, res) {
    console.log(path.resolve('/client/index.html'));
    res.sendfile(path.resolve('/client/index.html'));
});

io.on('connection', function (socket) {
    console.log('connected', socket);
    socket.emit('news', { hello: 'world' });
    socket.on('my other event', function (data) {
        console.log(data);
    });
});