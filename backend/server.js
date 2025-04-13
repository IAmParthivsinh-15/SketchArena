import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import initSocket from "./services/socket.js";
import http from "http";
import { connectMongoDB } from "./config/mongodb.config.js";
import roomRoutes from "./routes/room.routes.js";
import wordRotes from "./routes/words.routes.js";

const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 5000; // Add default port

// Enhanced CORS configuration
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
    exposedHeaders: ["Content-Length"],
  })
);

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Database connection
connectMongoDB();

// Initialize Socket.IO with explicit path
const io = initSocket(server);

// Make io instance available in routes
app.set("io", io);

// Routes
app.use("/api/rooms", roomRoutes);
app.use("/api", wordRotes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Start server
server.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
  console.log(`⚡ Socket.IO path: /socket.io/`);
});
