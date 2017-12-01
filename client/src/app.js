import io from "socket.io-client";

const socket = io.connect("http://192.168.1.68:4200");
const loginUser = e => {
  const username = document.getElementById("username");
  socket.emit("login", username.value);
};

const loginButton = document.getElementById("login");
loginButton.addEventListener("click", loginUser);
