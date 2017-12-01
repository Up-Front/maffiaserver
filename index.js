var express = require("express");
var app = express();
var server = require("http").createServer(app);
var io = require("socket.io")(server);
var path = require("path");

app.get("/", function(req, res) {
  res.sendFile(path.resolve("./client/index.html"));
});

io.on("connection", function(socket) {
  console.log("Client connected...");

  io.on("join", function(data) {
    console.log("dd", data);
  });
});

server.listen(4200);
