const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
let users = [];

io.on("connection", socket => {
  console.log("client connected");

  socket.on("login", (username) => {
    const user = { id: socket.id, name: username };
    addUser(user);
    socket.emit('loggedIn', user);
    console.log('USERS', users);
  });
});

function addUser(user) {
    users = [user, ...users];
    console.log(`ADDED: ${user.id} ${user.name}`);
}

server.listen(4200);
