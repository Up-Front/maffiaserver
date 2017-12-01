import io from "socket.io-client";

const socket = io.connect("http://192.168.1.68:4200");
const loginButton = document.getElementById("login");
const username = document.getElementById("username");

loginButton.addEventListener("click", loginUser);

function loginUser() {
    socket.emit("login", username.value);
}