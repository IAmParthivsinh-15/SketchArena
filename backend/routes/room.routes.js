import { Router } from "express";
import {
  createRoom,
  joinPrivateRoom,
  joinPublicRoom,
} from "../controllers/room.controller.js";

const router = Router();

// Create a new room
router.post("/create", createRoom);
router.post("/join-public", joinPublicRoom);
router.post("/join-private", joinPrivateRoom);

export default router;
