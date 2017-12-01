import socket from "./../messages/socket";
import User from "./player";

let Player;

export function loginUser(e) {
  e.preventDefault();
  const username = document.getElementById("username");
  socket.emit("login", username.value);

  socket.on("loggedIn", loggedIn);
}

function loggedIn(data) {
  let loginForm = document.querySelector("#loginform");
  let loggedinDiv = document.querySelector("#loggedin");
  loggedinDiv.innerHTML = "";
  if (data) {
    loginForm.classList.add("hide");
    loggedinDiv.classList.remove("hide");
    Player = new User(data);
    console.log(Player);
    loggedinDiv.innerHTML = `Welcome, ${Player.name}`;
  } else {
    loginForm.classList.remove("hide");
    loggedinDiv.classList.add("hide");
    Player = null;
  }
}
