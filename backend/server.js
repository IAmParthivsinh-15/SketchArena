import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import { connectMongoDB } from "./config/mongodb.config.js";
import roomRoutes from "./routes/room.routes.js";

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

connectMongoDB();

app.get("/", (req, res) => {
  res.send("🎨 SketchArena backend is up and running!");
});

app.use("/api/rooms", roomRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
