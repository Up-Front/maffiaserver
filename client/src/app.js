import { loginUser } from "./authentication";

const loginButton = document.getElementById("login");
loginButton.addEventListener("click", loginUser);
