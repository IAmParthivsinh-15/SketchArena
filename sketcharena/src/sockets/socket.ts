import { io } from "socket.io-client";

const socket = io("http://localhost:5000", {
  path: "/socket.io/", // Must match backend
  transports: ["websocket"], // Force WebSocket only
  withCredentials: true,
  autoConnect: false,
  reconnection: true,
  reconnectionAttempts: 5,
  reconnectionDelay: 1000,
});

// Error handling
socket.on("connect_error", (err) => {
  console.error("Connection error:", err);
});

socket.on("connect_timeout", (timeout) => {
  console.error("Connection timeout:", timeout);
});

export default socket;
