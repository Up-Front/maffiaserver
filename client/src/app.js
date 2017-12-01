import io from "socket.io-client";

const socket = io.connect("http://localhost:4200");
const loginButton = document.getElementById("login");
const username = document.getElementById("username");

loginButton.addEventListener("click", loginUser);

function loginUser(e) {
    e.preventDefault();
    socket.emit("login", username.value);
}