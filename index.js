const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const path = require("path");
let users = [];

app.get("/", (req, res) => {
  res.sendFile(path.resolve("./client/index.html"));
});

io.on("connection", (socket) => {
  console.log("client connected");

  socket.on("login", (username) => {
    console.log("user '" + username + "' logged in");
    users = [{
      id: socket.id,
      name: username
    }, ...users];
    console.log(users);
    console.log(users.length);
    console.log(users.find((item) => item.id === socket.id));
  });

  // socket.on("sendmessage", function(data) {
  //   console.log("received", data);
  //   socket.broadcast.emit("broadcast", data);
  // });
});

server.listen(4200);
