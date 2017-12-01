const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

io.on("connection", socket => {
    const users = new Users();
  console.log("client connected");

  socket.on("login", (username) => {
    const user = new User({
        id: socket.id,
        name: username,
    });

    users.set(user);
    socket.emit('loggedIn', user);
    console.log('USERS', users);
  });
});


class Users {
    constructor() {
        this.users = [];
    }
    get() {
        return this.users;
    }
    set(user) {
        this.users = [user, ...this.users];
        console.log(`ADDED: ${user.id} ${user.name}`);
    }
}
class User {
    constructor(user) {
        this.id = user.id;
        this.name = user.name;
        this.xPos = user.xPos || this.randomPos;
        this.yPos = user.yPos || this.randomPos;
        this.zPos = user.zPos || 0;
        this.score = user.score || 0;
    }

    get randomPos() {
        return Math.floor(Math.random() * 65);
    }

    move(action) {
        switch(action) {
            case 'left':
                this.xPos = this.xPos ? this.xPos - 1 : 0;
                break;
            case 'right':
                this.xPos = this.xpos < 64 ? this.xPos + 1 : 64;
                break;
            case 'up':
                this.yPos = this.ypos < 64 ? this.yPos + 1 : 64;
                break;
            case 'down':
                this.yPos = this.yPos ? this.yPos - 1 : 0;
                break;
        }
    }
}

server.listen(4200);
