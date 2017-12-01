import io from "socket.io-client";
import constants from "./../constants";

const socket = io.connect(`http://${constants.url}`);
export default socket;
