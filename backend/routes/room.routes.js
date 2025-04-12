import { Router } from "express";
import { createRoom } from "../controllers/room.controller.js";

const router = Router();

// Create a new room
router.post("/create", createRoom);

export default router;
